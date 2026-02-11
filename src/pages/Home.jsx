import React from "react";
import bgQuito from "../assets/quito.png";

import { Link } from "react-router-dom";

export default function Home({ lang, setLang }) {
  const t = (es, en) => (lang === "es" ? es : en);

  const buttons = [
    {
      to: "/arrival",
      es: "Llegada & Acceso",
      en: "Arrival & Access",
      subEs: "Entrada, tags, parqueo, chapa",
      subEn: "Entry, tags, parking, lock",
    },
      {
      to: "/amenities",
      es: "Amenidades",
      en: "Amenities",
      subEs: "Piscina, reservas, horarios",
      subEn: "Pool, booking, hours",
    },
    {
      to: "/home-systems",
      es: "Casa & Equipos",
      en: "Home & Appliances",
      subEs: "Cocina, agua, WiFi, TV, ducha",
      subEn: "Kitchen, water, WiFi, TV, shower",
    },
   {
      to: "/explore",
      es: "Conoce Cumbayá & Quito",
      en: "Explore Cumbayá & Quito",
      subEs: "Dónde comer, malls, planes",
      subEn: "Food, malls, things to do",
    },

    {
      to: "/rules",
      es: "Normas & Check-out",
      en: "Rules & Check-out",
      subEs: "Convivencia, basura, salida",
      subEn: "House rules, trash, check-out",
    },
    {
      to: "/inventory",
      es: "Inventario visual",
      en: "Visual inventory",
      subEs: "Qué hay en el depa",
      subEn: "What’s included",
    },

  ];

  const whatsappHref = `https://wa.me/593998536569?text=${encodeURIComponent(
    "Hola, me encuentro en el departamento 2048 en Aquarela, y necesito tu ayuda con : "
  )}`;

  return (
    <div className="gg-wrap">
      <div className="gg-card">
        <div
  className="gg-inner gg-innerBg"
  style={{ "--cardBg": `url(${bgQuito})` }}
>

          <div className="gg-top">
            <div>
              <div className="gg-badge">AQUARELA · CUMBAYÁ · TORRE 29</div>
            </div>

            <button
              className="gg-lang"
              onClick={() => setLang(lang === "es" ? "en" : "es")}
              type="button"
              aria-label="Toggle language"
            >
              {lang === "es" ? "EN" : "ES"}
            </button>
          </div>

          <div className="gg-title">{t("Guía del Huésped", "Guest Guide")}</div>
          <p className="gg-sub">
            {t(
              "Cinco botones. Todo lo esencial. Cero fricción.",
              "Five buttons. Everything essential. Zero friction."
            )}
          </p>

          {buttons.map((b) => (
            <Link key={b.to} to={b.to} className="gg-btn">
              {t(b.es, b.en)}
              <small>{t(b.subEs, b.subEn)}</small>
            </Link>
          ))}

          <div className="gg-foot" style={{ display: "grid", gap: 10 }}>
            <div>
              {t(
                "Soporte por Airbnb (6:00–22:00).",
                "Support via Airbnb (6:00–22:00)."
              )}
            </div>

            <a className="gg-btn" style={{ margin: 0 }} href={whatsappHref} target="_blank" rel="noreferrer">
              {t("Contáctame por WhatsApp", "Contact me on WhatsApp")}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
