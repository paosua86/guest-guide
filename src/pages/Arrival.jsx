import React from "react";
import { Link } from "react-router-dom";

function ytId(url) {
  try {
    // youtu.be/<id>
    if (url.includes("youtu.be/")) {
      const id = url.split("youtu.be/")[1].split(/[?&#]/)[0];
      return id;
    }
    // youtube.com/watch?v=<id>
    if (url.includes("watch?v=")) {
      const id = url.split("watch?v=")[1].split(/[?&#]/)[0];
      return id;
    }
    // youtube.com/shorts/<id>
    if (url.includes("/shorts/")) {
      const id = url.split("/shorts/")[1].split(/[?&#]/)[0];
      return id;
    }
  } catch (e) {}
  return "";
}

function VideoCard({ title, note, url }) {
  const id = ytId(url);
  const src = id ? `https://www.youtube.com/embed/${id}` : "";

  return (
    <div className="gg-videoCard">
      <div className="gg-video">
        {src ? (
          <iframe
            src={src}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        ) : (
          <div style={{ padding: 14, color: "rgba(255,255,255,.75)" }}>
            Video link inválido
          </div>
        )}
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

export default function Arrival({ lang }) {
  const t = (es, en) => (lang === "es" ? es : en);

  const videos = [
    {
      title: t("Registro inicial (primera vez)", "Initial registration (first time)"),
      note: t("Haz esto antes de intentar ingresar con carro o usar tag.", "Do this before trying vehicle entry or using the tag."),
      url: "https://youtu.be/vxN20NGMjZw",
    },
    {
      title: t("Ingreso con carro (después del registro)", "Vehicle entry (after registration)"),
      note: t("Para entrar con vehículo una vez que tu registro ya está listo.", "For vehicle access once your registration is completed."),
      url: "https://www.youtube.com/shorts/gV-C4ea-7bI",
    },
    {
      title: t("Ingreso con tag (ya registrado)", "Tag access (already registered)"),
      note: t("Si ya tienes el tag activo, este es el flujo normal.", "If your tag is active, this is the normal flow."),
      url: "https://youtube.com/shorts/gV-C4ea-7bI",
    },
    {
      title: t("Abrir la puerta del depa (chapa)", "Unlock the apartment door (smart lock)"),
      note: t("Cómo abrir correctamente y evitar bloqueos.", "How to unlock properly and avoid lockouts."),
      url: "https://youtube.com/shorts/aycFgHBuhpc",
    },
    {
      title: t("Poner seguro al salir", "Lock it when you leave"),
      note: t("Importante: así aseguras la puerta al salir.", "Important: this is how you secure the door when leaving."),
      url: "https://youtube.com/shorts/b4YjfuSVsHA",
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
            <div className="gg-badge">{t("LLEGADA & ACCESO", "ARRIVAL & ACCESS")}</div>
          </div>

          <h1 className="gg-h1">{t("Llegada & Acceso", "Arrival & Access")}</h1>
          <p className="gg-p">
            {t(
              "Sigue este orden y listo. Si es tu primera vez, empieza por Registro inicial.",
              "Follow this order. If it’s your first time, start with Initial registration."
            )}
          </p>

          <div className="gg-stack">
            {videos.map((v, idx) => (
              <VideoCard key={`${v.url}-${idx}`} title={v.title} note={v.note} url={v.url} />
            ))}
          </div>

          <div className="gg-section">
            <div className="gg-sectionTitle">{t("Plan B (si algo falla)", "Plan B (if something fails)")}</div>
            <ul className="gg-list">
              <li>{t("Si el tag no funciona: intenta de nuevo lento y pegado al lector 1–2 segundos.", "If the tag fails: try again slowly and hold it close to the reader for 1–2 seconds.")}</li>
              <li>{t("Si la chapa no responde: revisa que estés usando el método correcto del video y vuelve a intentar.", "If the lock doesn’t respond: confirm you’re using the method shown in the video and retry.")}</li>
              <li>{t("Si sigues bloqueado(a): escríbeme por WhatsApp desde el botón del Home.", "If you’re still locked out: message me on WhatsApp from the Home button.")}</li>
            </ul>
          </div>

          <div className="gg-section">
            <div className="gg-sectionTitle">{t("Checklist rápido", "Quick checklist")}</div>
            <ul className="gg-list">
              <li>{t("Confirma que el número de huéspedes sea el correcto en tu reserva.", "Confirm the guest count is correct on your reservation.")}</li>
              <li>{t("Guarda esta guía en favoritos para abrirla rápido durante el ingreso.", "Bookmark this guide so you can open it quickly during check-in.")}</li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
}
