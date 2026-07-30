// src/lib/youtube.js
// Reporta a GA4 cuándo un huésped realmente reproduce los videos de la guía.
//
// Lo hacemos a mano (y no con el "Video engagement" de Enhanced Measurement)
// porque esta guía es una SPA: los iframes aparecen después de la carga
// inicial, al navegar entre rutas, y el tracking automático de GA4 no los
// detecta de forma confiable en ese escenario.
//
// Los nombres de evento (video_start / video_progress / video_complete) y los
// parámetros son los estándar de GA4, así que caen en sus reportes nativos.

import { useEffect, useRef } from "react";
import { track } from "./analytics";

const MILESTONES = [25, 50, 75];

let apiPromise = null;

// Carga la IFrame Player API una sola vez, aunque haya 8 videos en pantalla.
function loadYouTubeApi() {
  if (apiPromise) return apiPromise;

  apiPromise = new Promise((resolve) => {
    if (window.YT && window.YT.Player) {
      resolve(window.YT);
      return;
    }

    const prev = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => {
      if (typeof prev === "function") prev();
      resolve(window.YT);
    };

    const script = document.createElement("script");
    script.src = "https://www.youtube.com/iframe_api";
    script.async = true;
    document.head.appendChild(script);
  });

  return apiPromise;
}

/**
 * Devuelve un ref para pegar al <iframe> del video.
 * El iframe DEBE tener `enablejsapi=1` en su src o la API no puede engancharse.
 *
 * @param {string} videoId  ID de YouTube (identifica el video en los reportes)
 * @param {string} name     Nombre legible del video, en español
 */
export function useVideoTracking(videoId, name) {
  const iframeRef = useRef(null);

  // El nombre cambia cuando el huésped cambia de idioma; lo leemos desde un ref
  // para no re-montar el player (eso reiniciaría el video).
  const nameRef = useRef(name);
  nameRef.current = name;

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe || !videoId) return;

    let player = null;
    let timer = null;
    let started = false;
    let cancelled = false;
    const reached = new Set();

    const base = () => ({
      video_title: nameRef.current,
      video_provider: "youtube",
      video_url: `https://youtu.be/${videoId}`,
    });

    const checkProgress = () => {
      if (!player || typeof player.getDuration !== "function") return;

      const duration = player.getDuration();
      const current = player.getCurrentTime();
      if (!duration) return;

      const percent = (current / duration) * 100;
      for (const milestone of MILESTONES) {
        if (percent >= milestone && !reached.has(milestone)) {
          reached.add(milestone);
          track("video_progress", { ...base(), video_percent: milestone });
        }
      }
    };

    loadYouTubeApi().then((YT) => {
      if (cancelled || !YT || !YT.Player) return;

      const marcarInicio = () => {
        if (started) return;
        started = true;
        track("video_start", base());
        window.clearInterval(timer);
        timer = window.setInterval(checkProgress, 1000);
      };

      player = new YT.Player(iframe, {
        events: {
          // Con "tocar para reproducir" el video ya puede venir corriendo cuando
          // la API termina de engancharse; sin esto perderíamos ese video_start.
          onReady: (event) => {
            if (event.target.getPlayerState() === YT.PlayerState.PLAYING) marcarInicio();
          },

          onStateChange: (event) => {
            if (event.data === YT.PlayerState.PLAYING) {
              marcarInicio();
              window.clearInterval(timer);
              timer = window.setInterval(checkProgress, 1000);
              return;
            }

            window.clearInterval(timer);

            if (event.data === YT.PlayerState.ENDED) {
              track("video_complete", { ...base(), video_percent: 100 });
            }
          },
        },
      });
    });

    // Ojo: no llamamos player.destroy(). Eso saca el iframe del DOM por su
    // cuenta y React —que es el dueño de ese nodo— falla al desmontarlo.
    return () => {
      cancelled = true;
      window.clearInterval(timer);
      player = null;
    };
  }, [videoId]);

  return iframeRef;
}
