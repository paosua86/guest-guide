import React from "react";
import { Link } from "react-router-dom";

export default function HomeSystems({ lang }) {
  const t = (es, en) => (lang === "es" ? es : en);

  return (
    <div className="gg-wrap">
      <div className="gg-card">
        <div className="gg-inner">
          <div className="gg-pageTop">
            <Link className="gg-back" to="/">{t("← Volver", "← Back")}</Link>
            <div className="gg-badge">{t("CASA & EQUIPOS", "HOME & APPLIANCES")}</div>
          </div>
          <h1 className="gg-h1">{t("Casa & Equipos", "Home & Appliances")}</h1>
          <p className="gg-p">{t("Aquí va el uso de cocina, WiFi, TV, ducha, agua caliente.", "Here goes kitchen, WiFi, TV, shower, hot water usage.")}</p>
        </div>
      </div>
    </div>
  );
}
