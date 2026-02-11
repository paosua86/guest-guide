import React from "react";
import { Link } from "react-router-dom";

export default function Rules({ lang }) {
  const t = (es, en) => (lang === "es" ? es : en);

  return (
    <div className="gg-wrap">
      <div className="gg-card">
        <div className="gg-inner">
          <div className="gg-pageTop">
            <Link className="gg-back" to="/">{t("← Volver", "← Back")}</Link>
            <div className="gg-badge">{t("NORMAS & CHECK-OUT", "RULES & CHECK-OUT")}</div>
          </div>
          <h1 className="gg-h1">{t("Normas & Check-out", "Rules & Check-out")}</h1>
          <p className="gg-p">{t("Aquí van convivencia, basura, silencio, y salida.", "Here go house rules, trash, quiet hours and checkout.")}</p>
        </div>
      </div>
    </div>
  );
}
