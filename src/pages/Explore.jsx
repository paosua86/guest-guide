import React from "react";
import { Link } from "react-router-dom";

export default function Explore({ lang }) {
  const t = (es, en) => (lang === "es" ? es : en);

  return (
    <div className="gg-wrap">
      <div className="gg-card">
        <div className="gg-inner">
          <div className="gg-pageTop">
            <Link className="gg-back" to="/">{t("← Volver", "← Back")}</Link>
            <div className="gg-badge">{t("CONOCE CUMBAYÁ", "EXPLORE CUMBAYÁ")}</div>
          </div>
          <h1 className="gg-h1">{t("Conoce Cumbayá", "Explore Cumbayá")}</h1>

          <div className="gg-section">
            <div className="gg-sectionTitle">{t("Comer bien", "Food")}</div>
            <ul className="gg-list">
              <li>{t("Restaurantes cerca + favoritos del edificio/malls", "Nearby restaurants + favorites around the building/malls")}</li>
              <li>{t("Café rápido para trabajar", "Quick coffee spots to work")}</li>
            </ul>
          </div>

          <div className="gg-section">
            <div className="gg-sectionTitle">{t("Compras", "Shopping")}</div>
            <ul className="gg-list">
              <li>{t("Supermercado / farmacia más cercana", "Closest supermarket / pharmacy")}</li>
              <li>{t("Malls (escala y tiempos)", "Malls (distance and ETA)")}</li>
            </ul>
          </div>

          <div className="gg-section">
            <div className="gg-sectionTitle">{t("Moverse", "Getting around")}</div>
            <ul className="gg-list">
              <li>{t("Uber / seguridad / horarios", "Uber / safety / best hours")}</li>
              <li>{t("Ruta rápida a USFQ", "Fast route to USFQ")}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
