// src/components/VideoCard.jsx
// Tarjeta de video compartida por Llegada, Casa & Equipos y Amenidades.
//
// Clave: el <iframe> de YouTube NO se monta hasta que el huésped toca play.
// Antes, "Casa & Equipos" descargaba 8 reproductores completos de golpe, y esa
// es justo la página que abre alguien recién llegado, con roaming o datos.
// Ahora solo se descarga una miniatura por video (unos pocos KB).

import React, { useState } from "react";
import { useVideoTracking } from "../lib/youtube";

function VideoFrame({ videoId, title, name }) {
  const iframeRef = useVideoTracking(videoId, name);

  return (
    <iframe
      ref={iframeRef}
      // playsinline evita que iOS salte a pantalla completa.
      src={`https://www.youtube.com/embed/${videoId}?enablejsapi=1&autoplay=1&playsinline=1&rel=0`}
      title={title}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    />
  );
}

export default function VideoCard({ title, note, videoId, name, lang }) {
  const [activo, setActivo] = useState(false);
  const t = (es, en) => (lang === "es" ? es : en);

  if (!videoId) {
    return (
      <div className="gg-videoCard">
        <div className="gg-video">
          <div style={{ padding: 14, color: "rgba(255,255,255,.75)" }}>
            {t("Video no disponible", "Video unavailable")}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="gg-videoCard">
      <div className="gg-video">
        {activo ? (
          <VideoFrame videoId={videoId} title={title} name={name} />
        ) : (
          <button
            type="button"
            className="gg-videoThumb"
            onClick={() => setActivo(true)}
            aria-label={t(`Reproducir: ${title}`, `Play: ${title}`)}
          >
            <img
              src={`https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`}
              alt=""
              loading="lazy"
              onError={(e) => {
                // Los Shorts y algunos videos no tienen maxresdefault.
                const img = e.currentTarget;
                if (img.dataset.fallback !== "1") {
                  img.dataset.fallback = "1";
                  img.src = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
                }
              }}
            />
            <span className="gg-playIcon" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="26" height="26">
                <path d="M8 5.5v13l11-6.5z" fill="currentColor" />
              </svg>
            </span>
          </button>
        )}
      </div>

      <div className="gg-videoMeta">
        <div>
          <div className="gg-videoTitle">{title}</div>
          {note ? <div className="gg-videoNote">{note}</div> : null}
        </div>
      </div>
    </div>
  );
}
