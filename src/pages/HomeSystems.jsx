import React from "react";
import { Link } from "react-router-dom";

function VideoCard({ title, note, videoId }) {
  return (
    <div className="gg-videoCard">
      <div className="gg-video">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>

      <div className="gg-videoMeta">
        <div>
          <div className="gg-videoTitle">{title}</div>
          {note ? <div className="gg-videoNote">{note}</div> : null}
        </div>
      </div>
    </div>
  );
}

export default function HomeSystems({ lang }) {
  const t = (es, en) => (lang === "es" ? es : en);

  const videos = [
    {
      title: t("Agua caliente (calentador)", "Hot water (water heater)"),
      note: t("Qué hacer si no sale caliente.", "What to do if hot water stops."),
      videoId: "9tOfp1PfBJ8",
    },
    {
      title: t("Sofá cama (uso)", "Sofa bed (how to use)"),
      note: t("Abrir/cerrar sin forzar el mecanismo.", "Open/close without forcing it."),
      videoId: "-_Q0cmhDzOA",
    },
    {
      title: t("Cafetera (uso)", "Coffee maker (how to use)"),
      note: t("Paso a paso y tips.", "Step-by-step and tips."),
      videoId: "AK5W0SW8eIM",
    },
    {
      title: t("Lavadora y secadora (uso)", "Washer & dryer (how to use)"),
      note: t("Programas + tips para secado.", "Programs + drying tips."),
      videoId: "d2ynmmVEYcQ",
    },
    {
      title: t("Cocina y extractor (uso)", "Cooktop + exhaust hood (how to use)"),
      note: t("Prende el extractor siempre que cocines.", "Always turn on the hood when cooking."),
      videoId: "RFns3bXC75M",
    },
    {
      title: t("Agua bebible / filtrada", "Drinkable / filtered water"),
      note: t("Dónde tomar agua segura en el depa.", "Where to get safe drinking water."),
      videoId: "idyt0ha5TrQ",
    },
    {
      title: t("Licuadora (uso)", "Blender (how to use)"),
      note: t("Uso correcto", "Proper use"),
      videoId: "NaCgS053lmo",
    },
    {
      title: t("Horno (uso)", "Oven (how to use)"),
      note: t("Encendido y seguridad.", "Start-up and safety."),
      videoId: "Ja13PkT9ODI",
    },
  ];

  const waLink = `https://wa.me/593998536569?text=${encodeURIComponent(
    "Hola, me encuentro en el departamento 2048 en Aquarela, y necesito tu ayuda con : "
  )}`;

  return (
    <div className="gg-wrap">
      <div className="gg-card">
        <div className="gg-inner">
          <div className="gg-pageTop">
            <Link className="gg-back" to="/">
              {t("← Volver", "← Back")}
            </Link>
            <div className="gg-badge">{t("CASA & EQUIPOS", "HOME & APPLIANCES")}</div>
          </div>

          <h1 className="gg-h1">{t("Casa & Equipos", "Home & Appliances")}</h1>
          <p className="gg-p">
            {t(
              "Todo lo esencial del estudio en videos cortos.",
              "Everything you need in short videos."
            )}
          </p>

          {/* WIFI */}
          <div className="gg-section">
            <div className="gg-sectionTitle">{t("WiFi", "WiFi")}</div>
            <div className="gg-p" style={{ margin: 0 }}>
              <strong>{t("Red:", "Network:")}</strong> Dep-2048 <br />
              <strong>{t("Contraseña:", "Password:")}</strong> dep2048AQarela
            </div>
          </div>

          {/* VIDEOS */}
          <div className="gg-stack" style={{ marginTop: 14 }}>
            {videos.map((v) => (
              <VideoCard key={v.videoId} title={v.title} note={v.note} videoId={v.videoId} />
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

            <a className="gg-btn" href={waLink} target="_blank" rel="noreferrer" style={{ marginTop: 12 }}>
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

            <a className="gg-btn gg-btnSecondary" href={waLink} target="_blank" rel="noreferrer" style={{ margin: 0 }}>
              {t("Solicitar limpieza", "Request cleaning")}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
