// src/lib/analytics.js
// Capa fina sobre gtag (GA4). El tag se carga en index.html; aquí solo
// enviamos eventos. Si gtag no existe (bloqueador de anuncios, sin red,
// dev local) las llamadas no hacen nada en vez de romper la página.

import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

// Nombre canónico de cada ruta, siempre en español, para que los reportes no
// se partan en dos según el idioma que eligió el huésped.
export const ROUTE_NAMES = {
  "/": "Home",
  "/arrival": "Llegada & Acceso",
  "/amenities": "Amenidades",
  "/home-systems": "Casa & Equipos",
  "/explore": "Conoce Cumbayá & Quito",
  "/rules": "Normas & Check-out",
  "/inventory": "Inventario visual",
  "/cumbaya": "Cumbayá (antigua)",
};

export function track(name, params = {}) {
  if (typeof window.gtag !== "function") return;
  window.gtag("event", name, params);
}

// Queda pegado a todos los eventos siguientes: sirve para comparar huéspedes
// en español vs inglés.
export function setGuestLang(lang) {
  if (typeof window.gtag !== "function") return;
  window.gtag("set", "user_properties", { guest_lang: lang });
}

// page_view manual. GA4 no detecta de forma confiable los cambios de ruta de
// una SPA, y así cada pantalla llega con un título legible en los reportes.
export function usePageViews() {
  const { pathname } = useLocation();
  const prevHref = useRef(document.referrer || undefined);

  useEffect(() => {
    // Cada sección se sirve como carpeta (/arrival/index.html), así que la
    // ruta puede llegar con barra final. Sin normalizar, el reporte diría
    // "Ruta desconocida".
    const limpia = pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;
    const name = ROUTE_NAMES[limpia] || "Ruta desconocida";
    document.title = `${name} · Guest Guide`;

    track("page_view", {
      page_title: name,
      page_location: window.location.href,
      page_referrer: prevHref.current,
    });

    prevHref.current = window.location.href;
  }, [pathname]);
}
