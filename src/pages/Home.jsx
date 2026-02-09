import React from "react";
import { Link } from "react-router-dom";

export default function Home({ lang, setLang }) {
  const t = (es, en) => (lang === "es" ? es : en);

  const buttons = [
    { to: "/arrival", es: "Llegada & Acceso", en: "Arrival & Access", subEs: "Entrada, tags, parqueo, chapa", subEn: "Entry, tags, parking, lock" },
    { to: "/home-systems", es: "Casa & Equipos", en: "Home & Appliances", subEs: "Cocina, agua, WiFi, TV, ducha", subEn: "Kitchen, water, WiFi, TV, shower" },
    { to: "/laundry", es: "Lavandería", en: "Laundry", subEs: "Lavadora, secadora, tips", subEn: "Washer, dryer, tips" },
    { to: "/amenities", es: "Amenidades", en: "Amenities", subEs: "Piscina, reservas, horarios", subEn: "Pool, booking, hours" },
    { to: "/rules", es: "Normas & Check-out", en: "Rules & Check-out", subEs: "Convivencia, basura, salida", subEn: "House rules, trash, check-out" },
  ];

  return (
    <main className="mx-auto w-full max-w-[430px] px-4 py-6">
      {/* SINGLE CARD */}
      <section className="overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04]">
        {/* header strip (wood/copper vibe without being cheesy) */}
        <div className="relative p-5">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#1a1512] via-[#0b0b0c] to-[#0b0b0c] opacity-90" />

          <div className="relative flex items-start justify-between gap-3">
            <div className="min-w-0">
              <div className="text-[11px] tracking-[0.26em] uppercase text-white/60">
                AQUARELA · CUMBAYÁ · TORRE 29
              </div>

              <h1 className="mt-2 text-[26px] font-semibold leading-tight tracking-tight">
                {t("Guía del Huésped", "Guest Guide")}
                <span className="text-white/60"> — </span>
                {t("Estudio Premium", "Premium Studio")}
              </h1>

              <p className="mt-2 text-sm text-white/65">
                {t(
                  "Cinco botones. Todo lo esencial. Cero fricción.",
                  "Five buttons. Everything essential. Zero friction."
                )}
              </p>
            </div>

            <button
              className="shrink-0 rounded-xl border border-white/15 bg-black/30 px-3 py-2 text-xs font-semibold text-white/90 hover:bg-black/40"
              onClick={() => setLang(lang === "es" ? "en" : "es")}
            >
              {lang === "es" ? "EN" : "ES"}
            </button>
          </div>
        </div>

        {/* Buttons */}
        <div className="p-5 pt-4 space-y-3">
          {buttons.map((b) => (
            <Link
              key={b.to}
              to={b.to}
              className="block rounded-2xl border border-white/10 bg-black/25 px-4 py-4 hover:bg-black/35 active:scale-[0.99] transition"
            >
              <div className="flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <div className="text-[16px] font-semibold text-white/95">
                    {t(b.es, b.en)}
                  </div>
                  <div className="mt-1 text-[13px] text-white/60">
                    {t(b.subEs, b.subEn)}
                  </div>
                </div>
                <div className="shrink-0 text-white/60">›</div>
              </div>
            </Link>
          ))}

          <div className="pt-2 text-xs text-white/50">
            {t("Soporte por Airbnb (6:00–22:00).", "Support via Airbnb (6:00–22:00).")}
          </div>
        </div>
      </section>
    </main>
  );
}
