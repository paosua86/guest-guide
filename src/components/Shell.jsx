// src/components/Shell.jsx
// Estructura común de la guía, con dos formas según el contexto de uso:
//
//   Móvil (el uso real: QR en el depa, link de Airbnb en el celular)
//     Una pantalla a la vez, con "volver" arriba. Igual que antes.
//
//   Escritorio (>=1024px)
//     Riel de navegación siempre visible a la izquierda + contenido a la
//     derecha. En desktop nadie debería tener que volver al Home para
//     cambiar de sección, y la foto de Quito por fin se ve completa en vez
//     de quedar sepultada bajo un overlay.
//
// El riel no se renderiza dos veces: es el mismo nodo, oculto por CSS en
// móvil, donde la navegación vive en el Home.

import React from "react";
import { Link, NavLink } from "react-router-dom";
import { track } from "../lib/analytics";
import { NAV, whatsappHref, WA_SOPORTE } from "../lib/nav";
import bgQuito from "../assets/quito.jpg";

function BotonIdioma({ lang, setLang, className = "gg-lang" }) {
  if (!setLang) return null;

  return (
    <button
      className={className}
      type="button"
      aria-label="Toggle language"
      onClick={() => {
        const next = lang === "es" ? "en" : "es";
        track("switch_language", { from: lang, to: next });
        setLang(next);
      }}
    >
      {lang === "es" ? "EN" : "ES"}
    </button>
  );
}

export default function Shell({ lang, setLang, badgeEs, badgeEn, children, home = false }) {
  const t = (es, en) => (lang === "es" ? es : en);

  return (
    <div className="gg-shell">
      <aside className="gg-rail" style={{ "--railBg": `url(${bgQuito})` }}>
        <div className="gg-railInner">
          <Link to="/" className="gg-railBrand">
            <span className="gg-railKicker">AQUARELA · CUMBAYÁ · TORRE 29</span>
            <span className="gg-railName">{t("Guía del Huésped", "Guest Guide")}</span>
          </Link>

          <nav className="gg-railNav" aria-label={t("Secciones", "Sections")}>
            {NAV.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) => `gg-railLink ${isActive ? "is-active" : ""}`}
                onClick={() => track("select_section", { section: item.es, section_path: item.to })}
              >
                <span className="gg-railLinkName">{t(item.es, item.en)}</span>
                <span className="gg-railLinkSub">{t(item.subEs, item.subEn)}</span>
              </NavLink>
            ))}
          </nav>

          <div className="gg-railFoot">
            <a
              className="gg-railWa"
              href={whatsappHref(WA_SOPORTE)}
              target="_blank"
              rel="noreferrer"
              onClick={() => track("contact_whatsapp", { source: "Riel", purpose: "soporte" })}
            >
              {t("Escríbeme por WhatsApp", "Message me on WhatsApp")}
            </a>

            <div className="gg-railMeta">
              <span>{t("Respondemos 6:00–22:00", "We reply 6:00–22:00")}</span>
              <BotonIdioma lang={lang} setLang={setLang} className="gg-lang gg-lang--rail" />
            </div>
          </div>
        </div>
      </aside>

      <main className="gg-main">
        <div className={`gg-panel ${home ? "gg-panel--home" : ""}`} style={home ? { "--cardBg": `url(${bgQuito})` } : undefined}>
          {/* Solo en móvil: el riel está oculto, así que hace falta contexto y salida. */}
          {!home ? (
            <div className="gg-mobileBar">
              <Link className="gg-back" to="/">
                {t("← Volver", "← Back")}
              </Link>
              <div className="gg-mobileBarRight">
                <div className="gg-badge">{t(badgeEs, badgeEn)}</div>
                <BotonIdioma lang={lang} setLang={setLang} />
              </div>
            </div>
          ) : null}

          {children}
        </div>
      </main>
    </div>
  );
}
