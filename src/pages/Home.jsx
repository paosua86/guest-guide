import React from "react";
import { Link } from "react-router-dom";

import { track } from "../lib/analytics";
import { NAV, whatsappHref, WA_SOPORTE } from "../lib/nav";
import Shell from "../components/Shell";

export default function Home({ lang, setLang }) {
  const t = (es, en) => (lang === "es" ? es : en);

  // Atajos a lo que más se pregunta por WhatsApp aunque ya esté en la guía:
  // entrar al edificio y reservar amenidades.
  const atajos = [
    {
      to: "/arrival",
      name: "Cómo entrar",
      es: "Cómo entrar",
      en: "How to get in",
      subEs: "Guardia, tag y chapa · videos",
      subEn: "Guard, tag & lock · videos",
    },
    {
      to: "/amenities",
      name: "Reservar amenidades",
      es: "Reservar amenidades",
      en: "Book amenities",
      subEs: "Piscina, horarios y cómo reservar",
      subEn: "Pool, hours & how to book",
    },
  ];

  return (
    <Shell lang={lang} setLang={setLang} home>
      {/* Solo en móvil: en escritorio esto vive en el riel. */}
      <div className="gg-top">
        <div className="gg-badge">AQUARELA · CUMBAYÁ · TORRE 29</div>

        <button
          className="gg-lang"
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
      </div>

      <h1 className="gg-title">{t("Guía del Huésped", "Guest Guide")}</h1>
      <p className="gg-sub">
        {t(
          "Todo lo esencial de tu estadía, en un solo lugar.",
          "Everything you need for your stay, in one place."
        )}
      </p>

      <h2 className="gg-h2">{t("Empieza aquí", "Start here")}</h2>

      <div className="gg-quick">
        {atajos.map((a) => (
          <Link
            key={a.to}
            to={a.to}
            className="gg-quickBtn"
            onClick={() => track("select_quick_action", { action: a.name, section_path: a.to })}
          >
            <span className="gg-quickText">
              <span className="gg-quickTitle">{t(a.es, a.en)}</span>
              <span className="gg-quickSub">{t(a.subEs, a.subEn)}</span>
            </span>
            <span className="gg-quickGo" aria-hidden="true">
              →
            </span>
          </Link>
        ))}
      </div>

      {/* Lista completa y soporte: en escritorio los reemplaza el riel. */}
      <div className="gg-homeList">
        <h2 className="gg-h2">{t("Todo lo demás", "Everything else")}</h2>

        {NAV.map((b) => (
          <Link
            key={b.to}
            to={b.to}
            className="gg-btn"
            // b.es (y no t(...)) para que el reporte no se parta por idioma.
            onClick={() => track("select_section", { section: b.es, section_path: b.to })}
          >
            {t(b.es, b.en)}
            <small>{t(b.subEs, b.subEn)}</small>
          </Link>
        ))}

        <div className="gg-foot" style={{ display: "grid", gap: 10 }}>
          <div>{t("Soporte por Airbnb (6:00–22:00).", "Support via Airbnb (6:00–22:00).")}</div>

          <a
            className="gg-btn"
            style={{ margin: 0 }}
            href={whatsappHref(WA_SOPORTE)}
            target="_blank"
            rel="noreferrer"
            onClick={() => track("contact_whatsapp", { source: "Home", purpose: "soporte" })}
          >
            {t("Contáctame por WhatsApp", "Contact me on WhatsApp")}
          </a>
        </div>
      </div>
    </Shell>
  );
}
