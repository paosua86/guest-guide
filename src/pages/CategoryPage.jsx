import React, { useMemo } from "react";
import { Link } from "react-router-dom";

function track(eventName, params = {}) {
  try {
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("event", eventName, params);
    }
  } catch {}
}

export default function CategoryPage({ lang, titleEs, titleEn, subtitleEs, subtitleEn, items }) {
  const t = (es, en) => (lang === "es" ? es : en);

  const sorted = useMemo(() => {
    return [...items].sort((a, b) => (a.order ?? 999) - (b.order ?? 999));
  }, [items]);

  return (
    <main className="mx-auto w-full max-w-[430px] px-4 py-6">
      <section className="overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04]">
        <div className="p-5 border-b border-white/10">
          <div className="flex items-start justify-between gap-3">
            <div>
              <div className="text-[11px] tracking-[0.26em] uppercase text-white/60">
                AQUARELA · CUMBAYÁ · TORRE 29
              </div>
              <h2 className="mt-2 text-[22px] font-semibold leading-tight">
                {t(titleEs, titleEn)}
              </h2>
              <p className="mt-1 text-sm text-white/60">
                {t(subtitleEs, subtitleEn)}
              </p>
            </div>

            <Link
              to="/"
              className="shrink-0 rounded-xl border border-white/15 bg-black/25 px-3 py-2 text-xs font-semibold text-white/90 hover:bg-black/35"
            >
              {t("Volver", "Back")}
            </Link>
          </div>
        </div>

        <div className="p-5 space-y-3">
          {sorted.map((x) => (
            <a
              key={x.id}
              href={x.link}
              target="_blank"
              rel="noreferrer"
              onClick={() => track("open_guide_item", { id: x.id, link: x.link, category: x.category })}
              className="block rounded-2xl border border-white/10 bg-black/25 px-4 py-4 hover:bg-black/35 active:scale-[0.99] transition"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <div className="text-[15px] font-semibold text-white/95">
                    {x.title?.[lang] || ""}
                  </div>
                  <div className="mt-1 text-[13px] text-white/60">
                    {x.desc?.[lang] || ""}
                  </div>
                </div>
                <div className="shrink-0 text-white/60">↗</div>
              </div>
            </a>
          ))}

          {sorted.length === 0 && (
            <div className="rounded-2xl border border-white/10 bg-black/20 p-4 text-sm text-white/60">
              {t("Aún no hay links en esta sección.", "No links yet in this section.")}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
