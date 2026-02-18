import React from "react";
import { Link } from "react-router-dom";

export default function Cumbaya({ lang }) {
  const t = (es, en) => (lang === "es" ? es : en);

  return (
    <div className="gg-wrap">
      <div className="gg-card">
        <div className="gg-inner">
          <div className="gg-pageTop">
            <Link className="gg-back" to="/">
              {t("← Volver", "← Back")}
            </Link>
            <div className="gg-badge">{t("CONOCE CUMBAYÁ", "DISCOVER CUMBAYÁ")}</div>
          </div>

          <h1 className="gg-h1">{t("Conoce Cumbayá", "Discover Cumbayá")}</h1>
          <p className="gg-p">
            {t(
              "Aquí encontrarás recomendaciones de comida, malls y planes cercanos. (Contenido en construcción)",
              "Here you’ll find food, malls and nearby spots. (Work in progress)"
            )}
          </p>
        </div>
      </div>
    </div>
  );
}
