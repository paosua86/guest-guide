import React from "react";
import { Link } from "react-router-dom";

export default function Amenities({ lang }) {
  const t = (es, en) => (lang === "es" ? es : en);

  return (
    <div className="gg-wrap">
      <div className="gg-card">
        <div className="gg-inner">
          <div className="gg-pageTop">
            <Link className="gg-back" to="/">{t("← Volver", "← Back")}</Link>
            <div className="gg-badge">{t("AMENIDADES", "AMENITIES")}</div>
          </div>
          <h1 className="gg-h1">{t("Amenidades", "Amenities")}</h1>
          <p className="gg-p">{t("Aquí va piscina, reservas y horarios.", "Here go pool, booking and hours.")}</p>
        </div>
      </div>
    </div>
  );
}
