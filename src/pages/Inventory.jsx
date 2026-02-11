import React from "react";
import { Link } from "react-router-dom";

const CLOUD_NAME = "dk9fhte0q";

/**
 * Pega aquí TODOS tus public_id (sin .jpg)
 * Ejemplos (basado en tus screenshots):
 * - "1000466038_sb6m7k"
 * - "IMG_20260208_092650037_HDR_AE_rfivqv"
 */
const IDS = [
  "1000466038_sb6m7k",
  // agrega el resto aquí, uno por línea:
  // "1000466101_xxxxx",
  // "IMG_20260208_092650037_HDR_AE_rfivqv",
];

function cldUrl(publicId) {
  // Misma “familia” del link que confirmaste, sin hardcodear la versión.
  // f_auto/q_auto -> rápido y liviano; w_1400 -> suficiente para móvil + zoom.
  return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/f_auto,q_auto,w_1400/${publicId}.jpg`;
}

export default function Inventory({ lang }) {
  const t = (es, en) => (lang === "es" ? es : en);

  return (
    <div className="gg-wrap">
      <div className="gg-card">
        <div className="gg-inner">
          <div className="gg-pageTop">
            <Link className="gg-back" to="/">
              {t("← Volver", "← Back")}
            </Link>
            <div className="gg-badge">{t("INVENTARIO VISUAL", "VISUAL INVENTORY")}</div>
          </div>

          <h1 className="gg-h1">{t("Inventario visual", "Visual inventory")}</h1>
          <p className="gg-p">
            {t(
              "Todo lo que incluye el estudio, en una sola vista.",
              "Everything included, at a glance."
            )}
          </p>

          <div className="gg-grid">
            {IDS.map((id) => (
              <figure className="gg-fig" key={id}>
  <div className="gg-media">
    <img
      className="gg-img"
      src={cldUrl(id)}
      alt={id}
      loading="lazy"
    />
  </div>
  <figcaption className="gg-cap">{id.replaceAll("_", " ")}</figcaption>
</figure>

            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
