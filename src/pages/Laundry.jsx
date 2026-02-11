import React from "react";
import { Link } from "react-router-dom";

export default function Laundry({ lang }) {
  const t = (es, en) => (lang === "es" ? es : en);

  return (
    <div className="gg-wrap">
      <div className="gg-card">
        <div className="gg-inner">
          <div className="gg-pageTop">
            <Link className="gg-back" to="/">{t("← Volver", "← Back")}</Link>
            <div className="gg-badge">{t("LAVANDERÍA", "LAUNDRY")}</div>
          </div>
          <h1 className="gg-h1">{t("Lavandería", "Laundry")}</h1>
          <p className="gg-p">{t("Aquí van videos y tips de lavadora/secadora.", "Here go washer/dryer videos and tips.")}</p>
        </div>
      </div>
    </div>
  );
}
