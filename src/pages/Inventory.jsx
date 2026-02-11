// src/pages/Inventory.jsx
import React from "react";
import { Link } from "react-router-dom";

const CLOUD_NAME = "dk9fhte0q";

/**
 * Build Cloudinary URL safely from a publicId.
 * - If user already passes a full URL, we keep it.
 * - Otherwise we build: https://res.cloudinary.com/<cloud>/image/upload/<publicId>.jpg
 * - NOTE: if some assets are .png or .webp, change extension per item or omit extension.
 */
function cloudinaryUrl(publicId) {
  if (!publicId) return "";
  if (publicId.startsWith("http://") || publicId.startsWith("https://")) return publicId;
  return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/${publicId}.jpg`;
}

export default function Inventory({ lang }) {
  const t = (es, en) => (lang === "es" ? es : en);

  // ✅ De-duplicated IDs from your message (kept 1 copy each)
  const items = [
    "IMG_20260208_110726122_HDR_AE_ga9rbl",
    "IMG_20260208_190238266_HDR_AE_f2xlgt",
    "1000466101_eo9vqz",
    "IMG_20260208_111528863_HDR_sgbgdd",
    "IMG_20260208_111826150_HDR_AE_rv39wk",
    "IMG_20260208_113542479_HDR_imn8eo",
    "IMG_20260208_144258795_HDR_AE_m4c3dn",
    "IMG_20260208_074001436_HDR_c4uetk",
    "IMG_20260208_112230899_HDR_AE_ah9cyj",
    "IMG_20260208_110705722_HDR_AE_yjt4v3",
    "IMG_20260208_113043767_HDR_AE_wn3u1o",
    "IMG_20260208_123757318_HDR_zftarg",
    "IMG_20260208_111022594_AE_ry5q4n",

    "1000466038_sb6m7k",
    "1000466104_tavms0",
    "IMG_20260208_184758068_HDR_pjapws",
    "IMG_20260208_150341579_HDR_AE_hhahgk",
    "IMG_20260208_185758460_HDR_AE_f6rkub",
    "IMG_20260208_114856198_HDR_AE_r7zi9q",
    "IMG_20260208_185915732_HDR_xsjfxx",
    "IMG_20260208_185928744_HDR_brzlzx",
    "IMG_20260127_092650037_HDR_AE_rfivqv",
    "IMG_20260208_112910791_HDR_AE_drwrmf",
    "IMG_20260208_114913405_HDR_AE_jqke4a",
    "IMG_20260208_114232576_HDR_jnxmxr",
    "1000474956_f0hnlb",
    "1000474852_bcdq3b",
    "IMG_20260127_092650037_HDR_AE_odjdeg",
    "IMG_20260127_095540076_HDR_hxu02v",
    "IMG_20260203_151411358_HDR_AE_hha5rc",
    "IMG_20260208_110726122_HDR_AE_eyresc",
    "IMG_20260208_111022594_AE_edm3bx",
    "IMG_20260208_112230899_HDR_AE_hbqvbc",
    "IMG_20260208_111826150_HDR_AE_xcnmx0",
    "IMG_20260208_185758460_HDR_AE_emmsud",
    "IMG_20260208_113542479_HDR_olbh3g",
    "IMG_20260208_150341579_HDR_AE_rsfakf",
    "IMG_20260208_114851394_HDR_AE_itdiep",
    "IMG_20260208_184753395_HDR_rev6yi",
    "IMG_20260208_185148005_HDR_qobiy4",
    "IMG_20260208_185928744_HDR_pohdsm",
  ];

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
              "Everything included in the studio, at a glance."
            )}
          </p>

          <div className="gg-grid">
            {items.map((id) => {
              const url = cloudinaryUrl(id);
              return (
                <figure key={id} className="gg-fig">
                  {/* This wrapper + CSS should keep images inside the card */}
                  <div className="gg-media">
                    <img
                      src={url}
                      alt={id}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        // If .jpg fails, try without extension (Cloudinary will serve original format)
                        const img = e.currentTarget;
                        if (img.dataset.fallback !== "1") {
                          img.dataset.fallback = "1";
                          img.src = `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/${id}`;
                        }
                      }}
                    />
                  </div>


                </figure>
              );
            })}
          </div>

          <div className="gg-foot" style={{ marginTop: 16 }}>
            {t(
              "Si falta algo o encuentras algo dañado, avísanos por Airbnb o WhatsApp.",
              "If anything is missing or damaged, let us know via Airbnb or WhatsApp."
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
