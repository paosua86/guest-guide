import React from "react";
import { track } from "../lib/analytics";
import VideoCard from "../components/VideoCard";
import Shell from "../components/Shell";

export default function HomeSystems({ lang, setLang }) {
  const t = (es, en) => (lang === "es" ? es : en);

  // `name` es el nombre fijo en español que se manda a analytics, para que el
  // reporte no se parta en dos según el idioma que eligió el huésped.
  const videos = [
    {
      name: "Agua caliente (calentador)",
      title: t("Agua caliente (calentador)", "Hot water (water heater)"),
      note: t("Qué hacer si no sale caliente.", "What to do if hot water stops."),
      videoId: "9tOfp1PfBJ8",
    },
    {
      name: "Sofá cama",
      title: t("Sofá cama (uso)", "Sofa bed (how to use)"),
      note: t("Abrir/cerrar sin forzar el mecanismo.", "Open/close without forcing it."),
      videoId: "-_Q0cmhDzOA",
    },
    {
      name: "Cafetera",
      title: t("Cafetera (uso)", "Coffee maker (how to use)"),
      note: t("Paso a paso y tips.", "Step-by-step and tips."),
      videoId: "AK5W0SW8eIM",
    },
    {
      name: "Lavadora y secadora",
      title: t("Lavadora y secadora (uso)", "Washer & dryer (how to use)"),
      note: t("Programas + tips para secado.", "Programs + drying tips."),
      videoId: "d2ynmmVEYcQ",
    },
    {
      name: "Cocina y extractor",
      title: t("Cocina y extractor (uso)", "Cooktop + exhaust hood (how to use)"),
      note: t("Prende el extractor siempre que cocines.", "Always turn on the hood when cooking."),
      videoId: "RFns3bXC75M",
    },
    {
      name: "Agua bebible / filtrada",
      title: t("Agua bebible / filtrada", "Drinkable / filtered water"),
      note: t("Dónde tomar agua segura en el depa.", "Where to get safe drinking water."),
      videoId: "idyt0ha5TrQ",
    },
    {
      name: "Licuadora",
      title: t("Licuadora (uso)", "Blender (how to use)"),
      note: t("Uso correcto", "Proper use"),
      videoId: "NaCgS053lmo",
    },
    {
      name: "Horno",
      title: t("Horno (uso)", "Oven (how to use)"),
      note: t("Encendido y seguridad.", "Start-up and safety."),
      videoId: "Ja13PkT9ODI",
    },
  ];

  const waLink = `https://wa.me/593998536569?text=${encodeURIComponent(
    "Hola, me encuentro en el departamento 2048 en Aquarela, y necesito tu ayuda con : "
  )}`;

  return (
    <Shell lang={lang} setLang={setLang} badgeEs="CASA & EQUIPOS" badgeEn="HOME & APPLIANCES">

          <h1 className="gg-h1">{t("Casa & Equipos", "Home & Appliances")}</h1>
          <p className="gg-p">
            {t(
              "Todo lo esencial del estudio en videos cortos.",
              "Everything you need in short videos."
            )}
          </p>

          {/* WIFI */}
          {/* La contraseña NO va aquí: esta guía es una web pública y todo lo
              que se muestra en pantalla viaja en un archivo que cualquiera
              puede abrir sin ser huésped. Se entrega por el chat de Airbnb. */}
          <div className="gg-section">
            <div className="gg-sectionTitle">{t("WiFi", "WiFi")}</div>
            <div className="gg-p" style={{ margin: 0 }}>
              <strong>{t("Red:", "Network:")}</strong> Dep-2048 <br />
              {t(
                "La contraseña te llega por el chat de Airbnb. Si no la encuentras, escríbeme y te la paso al instante.",
                "The password is sent to you via Airbnb chat. If you can’t find it, message me and I’ll send it right away."
              )}
            </div>

            <a
              className="gg-btn gg-btnSecondary"
              href={`https://wa.me/593998536569?text=${encodeURIComponent(
                "Hola, estoy en el departamento 2048 en Aquarela. ¿Me pasas la contraseña del WiFi?"
              )}`}
              target="_blank"
              rel="noreferrer"
              style={{ marginTop: 12, marginBottom: 0 }}
              onClick={() => track("contact_whatsapp", { source: "Casa & Equipos", purpose: "clave_wifi" })}
            >
              {t("Pedir la contraseña", "Ask for the password")}
            </a>
          </div>

          {/* VIDEOS */}
          <div className="gg-stack" style={{ marginTop: 14 }}>
            {videos.map((v) => (
              <VideoCard key={v.videoId} title={v.title} note={v.note} videoId={v.videoId} name={v.name} lang={lang} />
            ))}
          </div>

          {/* CUIDADOS IMPORTANTES */}
          <div className="gg-section">
            <div className="gg-sectionTitle">{t("Importante", "Important")}</div>
            <ul className="gg-list">
              <li>
                {t(
                  "No manipules los sprinklers/sensores. Si se activan, causa daños y cargos altos.",
                  "Do not touch sprinklers/sensors. If triggered, it can cause major damage and fees."
                )}
              </li>
              <li>
                {t(
                  "Si cocinas, usa siempre el extractor para evitar olores y humo.",
                  "When cooking, always use the exhaust hood to avoid odors and smoke."
                )}
              </li>
              <li>
                {t(
                  "Si algo no funciona, escríbenos por Airbnb o WhatsApp y te ayudamos rápido.",
                  "If something doesn’t work, message us on Airbnb or WhatsApp for quick help."
                )}
              </li>
            </ul>

            <a
              className="gg-btn"
              href={waLink}
              target="_blank"
              rel="noreferrer"
              style={{ marginTop: 12 }}
              onClick={() => track("contact_whatsapp", { source: "Casa & Equipos", purpose: "soporte" })}
            >
              {t("Contáctame por WhatsApp", "Contact me on WhatsApp")}
            </a>
          </div>

          {/* LIMPIEZA EXTRA */}
          <div className="gg-section">
            <div className="gg-sectionTitle">{t("Limpieza adicional (opcional)", "Extra cleaning (optional)")}</div>
            <p className="gg-p" style={{ marginBottom: 10 }}>
              {t(
               t(
  "Si deseas limpieza adicional durante la estadía (a la frecuencia que prefieras), solicítala por WhatsApp. Tiene costo extra.",
  "If you’d like additional cleaning during your stay (as often as you want), request it via WhatsApp. An extra fee applies."
)
 )}
            </p>

            <a
              className="gg-btn gg-btnSecondary"
              href={waLink}
              target="_blank"
              rel="noreferrer"
              style={{ margin: 0 }}
              onClick={() => track("contact_whatsapp", { source: "Casa & Equipos", purpose: "limpieza_extra" })}
            >
              {t("Solicitar limpieza", "Request cleaning")}
            </a>
          </div>
    </Shell>
  );
}
