// src/pages/Explore.jsx
import React from "react";
import { Link } from "react-router-dom";

function PlaceCard({ title, subtitle, note, url, lang, whatsapp, waText }) {
  const t = (es, en) => (lang === "es" ? es : en);
  const hasUrl = url && url !== "XXX";
  const hasWa = whatsapp && waText;

  return (
    <div className="gg-section" style={{ marginTop: 12 }}>
      <div className="gg-sectionTitle" style={{ marginBottom: 6 }}>
        {title}
      </div>

      {subtitle ? (
        <div className="gg-p" style={{ margin: "0 0 10px", opacity: 0.9 }}>
          {subtitle}
        </div>
      ) : null}

      {note ? (
        <div className="gg-p" style={{ margin: "0 0 10px" }}>
          {note}
        </div>
      ) : null}

      <div style={{ display: "grid", gap: 10 }}>
        <a
          className={`gg-btn ${hasUrl ? "" : "gg-btnSecondary"}`}
          style={{ margin: 0, pointerEvents: hasUrl ? "auto" : "none", opacity: hasUrl ? 1 : 0.6 }}
          href={hasUrl ? url : undefined}
          target="_blank"
          rel="noreferrer"
        >
          {hasUrl ? t("Abrir en Google Maps", "Open in Google Maps") : t("Link GPS pendiente", "GPS link pending")}
        </a>

        {hasWa ? (
          <a
            className="gg-btn gg-btnSecondary"
            style={{ margin: 0 }}
            href={`https://wa.me/${whatsapp}?text=${encodeURIComponent(waText)}`}
            target="_blank"
            rel="noreferrer"
          >
            {t("Pedir por WhatsApp", "Order on WhatsApp")}
          </a>
        ) : null}
      </div>
    </div>
  );
}

export default function Explore({ lang }) {
  const t = (es, en) => (lang === "es" ? es : en);

  const fastPractical = [
    {
      title: "Golden Dragon (delivery)",
      subtitle: t("Comida china: ideal para cenar rápido y abundante.", "Chinese food: great for a quick, filling dinner."),
      note: t("Pedidos por WhatsApp: +593 98 262 0944", "WhatsApp orders: +593 98 262 0944"),
      url: "https://maps.app.goo.gl/RM1P5sMZpVQTzuJn7",
      whatsapp: "593982620944",
      waText: "Hola, quiero hacer un pedido para entrega a Aquarela Cumbayá (Torre 29).",
    },
    {
      title: "McDonald’s (≈ 5 min caminando)",
      subtitle: t("Súper práctico para algo rápido (a pocos minutos).", "Very convenient for something quick (just a few minutes away)."),
      note: "",
      url: "https://maps.app.goo.gl/eSm7kqeBUjYbUzY57",
    },
    {
      title: "Pollo Stav (≈ 4 min caminando)",
      subtitle: t("Rápido, rico y fácil para almuerzo o cena.", "Fast, tasty, easy lunch or dinner."),
      note: "",
      url: "https://maps.app.goo.gl/HYsZxiibymku3gVD8",
    },
    {
      title: "Fybeca (≈ 4 min caminando)",
      subtitle: t("Farmacia y básicos: súper útil para cualquier imprevisto.", "Pharmacy and essentials: perfect for any last-minute needs."),
      note: "",
      url: "https://maps.app.goo.gl/uPeG3wzVot83LEWT6",
    },
    {
      title: t("Médico (≈ 4 min caminando)", "Doctor (≈ 4 min walk)"),
      subtitle: t("Si necesitas atención rápida cerca.", "If you need quick care close to the apartment."),
      note: "",
      url: "https://maps.app.goo.gl/y9KXRxnGRZd7n5iF8",
    },
    {
      title: "Pollo Campero (≈ 7 min caminando)",
      subtitle: t("Clásico seguro: porciones grandes y rápido.", "Reliable classic: generous portions and fast."),
      note: "",
      url: "https://maps.app.goo.gl/8NiC3Drm9PCEj6cW6",
    },
    {
      title: "Papa Johns (≈ 10 min caminando)",
      subtitle: t("Pizza práctica para plan tranquilo.", "Easy pizza option for a chill night in."),
      note: "",
      url: "https://maps.app.goo.gl/nB7bavwvmQxNESpP7",
    },
  ];

  const breakfastNearby = [
    {
      title: "Opa Bakery + Café Cumbayá (≈ 5 min caminando)",
      subtitle: t("Desayuno más formal: panadería + café.", "More formal breakfast: bakery + coffee."),
      note: "",
      url: "https://maps.app.goo.gl/JAgbcGbSdFU44WeC8",
    },
    {
      title: "Supermaxi (≈ 5 min caminando)",
      subtitle: t("Supermercado perfecto para desayuno, snacks y básicos.", "Supermarket great for breakfast, snacks, and essentials."),
      note: "",
      url: "https://maps.app.goo.gl/1sBqvoiboNs3spoZ9",
    },
    {
      title: "Baguettería Gourmet (≈ 7 min caminando)",
      subtitle: t("Por el puente peatonal. Sándwiches/panadería para algo contundente.", "Across the pedestrian bridge. Sandwiches/bakery for something filling."),
      note: "",
      url: "https://maps.app.goo.gl/gpZ1nYbJS2YpPFHE6",
    },
  ];

  const restaurantsWalk = [
    {
      title: "Pucará (≈ 14 min caminando)",
      subtitle: t("Opción tradicional para comer bien y con ambiente local.", "A traditional option for a solid local meal."),
      note: "",
      url: "https://maps.app.goo.gl/iroPVvWp2BAV5bG87",
    },
    {
      title: "Parrilla de Homero (≈ 14 min caminando)",
      subtitle: t("Carnes/parrilla. Buen plan para almuerzo o cena.", "Grill/steaks. Great for lunch or dinner."),
      note: "",
      url: "https://maps.app.goo.gl/qB26qMSd5tWQsPEM6",
    },
    {
      title: "Mizu Sushi Bar Cumbayá (≈ 14 min caminando)",
      subtitle: t("Sushi y rolls: opción moderna y rica.", "Sushi/rolls: modern and tasty."),
      note: "",
      url: "https://maps.app.goo.gl/E5R5hVNeRNLBcwoc9",
    },
    {
      title: "Tacos del Gordo (≈ 14 min caminando)",
      subtitle: t("Tacos y comida mexicana para variar.", "Tacos/Mexican food for a change."),
      note: "",
      url: "https://maps.app.goo.gl/SsVaMj3YPpuqqFUK8",
    },
    {
      title: "Pennyroyal Burger (≈ 14 min caminando)",
      subtitle: t("Buen spot para comer y pasar un buen rato.", "A great spot to eat and hang out."),
      note: "",
      url: "https://maps.app.goo.gl/h8DGjGpdJHmrUrpo8",
    },
    {
      title: "Krispy Kreme (≈ 13 min caminando)",
      subtitle: t("Donas + café. Ideal para antojo rápido.", "Donuts + coffee. Perfect for a quick treat."),
      note: "",
      url: "https://maps.app.goo.gl/b1z31474qrH232776",
    },
    {
      title: "Burger King (≈ 13 min caminando)",
      subtitle: t("Rápido y práctico si buscas algo simple.", "Fast and easy if you want something simple."),
      note: "",
      url: "https://maps.app.goo.gl/nbgN1rWS6RmL6c2p7",
    },
  ];

  const plazasWalkable = [
    {
      title: "Villa Cumbayá (≈ 6 min caminando)",
      subtitle: t("Mall pequeño con Supermaxi y opciones de comida.", "Small mall with Supermaxi and food options."),
      note: "",
      url: "https://maps.app.goo.gl/ChKzvKpmubU2sxVv7",
    },
    {
      title: "Paseo San Francisco (≈ 9 min caminando)",
      subtitle: t("Uno de los malls más conocidos: tiendas, comida y cine.", "One of the best-known malls: shops, food, and cinema."),
      note: "",
      url: "https://maps.app.goo.gl/nqrnuy54ETXEq16e6",
    },
    {
      title: "Centro Comercial Plaza Cumbayá (≈ 9 min caminando)",
      subtitle: t("Plaza práctica para comer y resolver cosas.", "A practical plaza for food and quick errands."),
      note: "",
      url: "https://maps.app.goo.gl/fqQhABa13qoVQwiK6",
    },
    {
      title: "Plaza Central Cumbayá (≈ 21 min caminando / ≈ 5 min en carro)",
      subtitle: t("Rodeada de restaurantes y spots para relajarse.", "Surrounded by restaurants and relaxing spots."),
      note: "",
      url: "https://maps.app.goo.gl/uuvNz4HA1ZhPU82V6",
    },
  ];

  const byCar = [
    {
      title: "Scala Shopping (≈ 8 min en carro)",
      subtitle: t("Más grande: más tiendas, comida y cine.", "Bigger mall: more shops, food, and cinema."),
      note: "",
      url: "https://maps.app.goo.gl/8UHTqCuTGcM5s39f8",
    },
    {
      title: "Plaza del Rancho (≈ 8 min en carro)",
      subtitle: t("Zona bonita para comer y salir en la tarde/noche.", "A nice area for dining and evenings out."),
      note: "",
      url: "https://maps.app.goo.gl/q5bcdKikfUMxL6Cy5",
    },
  ];

  const quitoHistoric = [
    {
      title: t("Centro Histórico de Quito (≈ 30 min en carro)", "Quito Historic Center (≈ 30 min by car)"),
      subtitle: t(
        "Uno de los centros históricos más bonitos de Latinoamérica. Ideal para ir en la mañana (especialmente sábado o domingo).",
        "One of the most beautiful historic centers in Latin America. Best in the morning (especially Sat/Sun)."
      ),
      note: t(
        "Verás iglesias, plazas, museos y muchísima arquitectura colonial. Si quieres tips de seguridad o un taxi de confianza, escríbenos.",
        "You’ll see churches, plazas, museums, and stunning colonial architecture. For safety tips or a trusted taxi, message us."
      ),
      url: "https://maps.app.goo.gl/r6yQG9w865TH3X7LA",
    },
  ];

  const quitoNewer = [
    {
      title: t("Quito moderno / más urbano (≈ 23 min en carro)", "Modern / urban Quito (≈ 23 min by car)"),
      subtitle: t("Zona con más desarrollo urbano, movimiento y opciones.", "An area with more urban development, energy, and options."),
      note: "",
      url: "https://maps.app.goo.gl/BVYtKktb6MqfYrKr5",
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
            <div className="gg-badge">{t("CONOCE CUMBAYÁ", "EXPLORE CUMBAYÁ")}</div>
          </div>

          <h1 className="gg-h1">{t("Conoce Cumbayá & Quito", "Explore Cumbayá & Quito")}</h1>
          <p className="gg-p">
            {t(
              "Opciones recomendadas cerca de Aquarela: comida rápida, buen café, malls y planes para conocer Quito.",
              "Recommended options near Aquarela: quick eats, great coffee, malls, and day trips to Quito."
            )}
          </p>

          <div className="gg-section gg-mt">
            <div className="gg-sectionTitle">{t("FAST & PRÁCTICO (cerca)", "FAST & PRACTICAL (nearby)")}</div>
            <div className="gg-stack">
              {fastPractical.map((p) => (
                <PlaceCard key={p.title} {...p} lang={lang} />
              ))}
            </div>
          </div>

          <div className="gg-section gg-mt">
            <div className="gg-sectionTitle">{t("PARA DESAYUNAR (cerca)", "BREAKFAST (nearby)")}</div>
            <div className="gg-stack">
              {breakfastNearby.map((p) => (
                <PlaceCard key={p.title} {...p} lang={lang} />
              ))}
            </div>
          </div>

          <div className="gg-section gg-mt">
            <div className="gg-sectionTitle">{t("RESTAURANTE CAMINANDO (≈ 13–14 min)", "WALKABLE RESTAURANTS (≈ 13–14 min)")}</div>
            <div className="gg-stack">
              {restaurantsWalk.map((p) => (
                <PlaceCard key={p.title} {...p} lang={lang} />
              ))}
            </div>
          </div>

          <div className="gg-section gg-mt">
            <div className="gg-sectionTitle">{t("PLAZAS Y MALLS CERCA", "NEARBY PLAZAS & MALLS")}</div>
            <div className="gg-stack">
              {plazasWalkable.map((p) => (
                <PlaceCard key={p.title} {...p} lang={lang} />
              ))}
            </div>
          </div>

          <div className="gg-section gg-mt">
            <div className="gg-sectionTitle">{t("Más opciones (en carro)", "More options (by car)")}</div>
            <div className="gg-stack">
              {byCar.map((p) => (
                <PlaceCard key={p.title} {...p} lang={lang} />
              ))}
            </div>
          </div>

          <div className="gg-section gg-mt">
            <div className="gg-sectionTitle">{t("QUITO (PLAN DE DÍA)", "QUITO (DAY TRIP)")}</div>
            <div className="gg-stack">
              {quitoHistoric.map((p) => (
                <PlaceCard key={p.title} {...p} lang={lang} />
              ))}
              {quitoNewer.map((p) => (
                <PlaceCard key={p.title} {...p} lang={lang} />
              ))}
            </div>
          </div>

          <div className="gg-foot" style={{ marginTop: 14 }}>
            {t("Si necesitas recomendaciones extra o tienes dudas, aquí estamos.", "If you need more recommendations or have questions, we’re here.")}
          </div>
        </div>
      </div>
    </div>
  );
}
