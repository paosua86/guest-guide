import React from "react";
import { Link } from "react-router-dom";

export default function Cumbaya({ lang = "es" }) {
  const t = (es, en) => (lang === "es" ? es : en);

  const blocks = [
    {
      titleEs: "Para comer cerca",
      titleEn: "Food nearby",
      itemsEs: [
        "Opciones rápidas: McDonald’s y Pollo Campero en el sector.",
        "Restaurantes a pasos (incluye Stav y otros del corredor comercial).",
        "Cafés y panadería para desayunos y trabajo liviano.",
      ],
      itemsEn: [
        "Quick eats: McDonald’s and Pollo Campero in the area.",
        "Restaurants just steps away (including Stav and nearby spots).",
        "Cafés & bakery options for breakfast or light work sessions.",
      ],
    },
    {
      titleEs: "Compras y básicos",
      titleEn: "Shopping & essentials",
      itemsEs: [
        "Fybeca cerca para farmacia y básicos.",
        "Villa Cumbayá: mall pequeño con Supermaxi y servicios útiles.",
        "Cajeros, minimarkets y compras rápidas en el sector.",
      ],
      itemsEn: [
        "Nearby Fybeca for pharmacy & essentials.",
        "Villa Cumbayá: a small mall with Supermaxi and useful services.",
        "ATMs, convenience stores, and quick errands around the area.",
      ],
    },
    {
      titleEs: "Malls y paseo",
      titleEn: "Malls & strolling",
      itemsEs: [
        "Paseo San Francisco: mall conocido en Cumbayá (tiendas, comida, cine/servicios según temporada).",
        "Zonas caminables para comer y comprar sin complicarte.",
      ],
      itemsEn: [
        "Paseo San Francisco: a well-known Cumbayá mall (shops, food, services depending on season).",
        "Walkable area for meals and errands—easy and convenient.",
      ],
    },
    {
      titleEs: "Tips rápidos de movilidad",
      titleEn: "Getting around (quick tips)",
      itemsEs: [
        "Uber / taxis funcionan bien en el valle; ideal para moverte sin manejar.",
        "Si vienes en carro, la Interoceánica te conecta rápido con Quito y el valle.",
      ],
      itemsEn: [
        "Uber / taxis work well in the valley—easy if you prefer not to drive.",
        "If you’re driving, the Interoceánica connects you quickly across Quito and the valley.",
      ],
    },
  ];

  return (
    <div className="gg-wrap">
      <div className="gg-card">
        <div className="gg-inner">
          <div className="gg-pageTop">
            <Link className="gg-back" to="/">
              {t("← Volver", "← Back")}
            </Link>
            <div className="gg-badge">{t("EL SECTOR", "THE AREA")}</div>
          </div>

          <div className="gg-title">{t("Conoce Cumbayá", "Explore Cumbayá")}</div>
          <div className="gg-sub">
            {t(
              "Recomendaciones rápidas cerca de Aquarela para comer, comprar y moverte fácil.",
              "Quick recommendations near Aquarela for food, essentials, and getting around."
            )}
          </div>

          <div className="gg-stack">
            {blocks.map((b) => (
              <div className="gg-section" key={b.titleEs}>
                <div className="gg-sectionTitle">{t(b.titleEs, b.titleEn)}</div>
                <ul className="gg-list">
                  {(lang === "es" ? b.itemsEs : b.itemsEn).map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="gg-foot">
            {t(
              "¿Quieres que agregue distancias exactas? Dime el punto de referencia (Torre 29 / entrada 3 / Interoceánica) y lo ajustamos.",
              "Want exact walking times? Tell me the reference point (Tower 29 / gate 3 / Interoceánica) and we’ll refine it."
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
