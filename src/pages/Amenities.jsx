import React from "react";
import { Link } from "react-router-dom";

function PhotoTile({ url, label }) {
  return (
    <figure className="gg-fig">
      <div className="gg-media">
        <img className="gg-img" src={url} alt={label} loading="lazy" />
      </div>
      <figcaption className="gg-cap">{label}</figcaption>
    </figure>
  );
}

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

export default function Amenities({ lang }) {
  const t = (es, en) => (lang === "es" ? es : en);

  // ✅ Cloudinary base (estable, no requiere v####, no requiere .jpg)
  const CLD = "https://res.cloudinary.com/dk9fhte0q/image/upload/f_auto,q_auto/";

  // ✅ IDs del screenshot (los que se ven legibles)
  const photos = [
    { id: "1568574538_rqflge", es: "Turco", en: "Turco" },
    { id: "barber_and_peluqueria_pz4gcy", es: "Barbería / Peluquería", en: "Barber / Hair" },
    { id: "bolos_l6t7ht", es: "Bolos", en: "Bowling" },
    { id: "golf_xcgk5d", es: "Golf", en: "Golf" },
    { id: "gym_xadba0", es: "Gimnasio", en: "Gym" },
    { id: "hidro_fpccsf", es: "Hidro / Spa", en: "Hydro / Spa" }, // [Unverified] ID leído de captura; si no carga, corrige 1 letra.
    { id: "kids_room_rm6hrr", es: "Kids room", en: "Kids room" },
    { id: "music_room_luapjl", es: "Sala de música", en: "Music room" },
    { id: "pista_de_patinaje_hlgofc", es: "Pista de patinaje", en: "Skating rink" },
    { id: "pscina_l00npc", es: "Piscina", en: "Pool" },
    { id: "sala_de_reuniones_y_sala_de_juegos_be4zud", es: "Reuniones & juegos", en: "Meeting & games" },
    { id: "sauna_zst1gh", es: "Sauna", en: "Sauna" },
    { id: "yoga_room_mjiyrc", es: "Yoga room", en: "Yoga room" },
  ].map((p) => ({
    ...p,
    url: `${CLD}${p.id}`,
    labelEs: p.es,
    labelEn: p.en,
  }));

  const waLink = `https://wa.me/593998536569?text=${encodeURIComponent(
    "Hola, quiero reservar una amenidad. Amenidad: ____ | Personas: ____ | Fecha: ____ | Hora exacta (en punto): ____"
  )}`;

  // Video: cómo llegar (tu link)
  // https://youtu.be/nxPv3Su9Ba4  => videoId = nxPv3Su9Ba4
  const howToReachVideoId = "nxPv3Su9Ba4";

  return (
    <div className="gg-wrap">
      <div className="gg-card">
        <div className="gg-inner">
          <div className="gg-pageTop">
            <Link className="gg-back" to="/">
              {t("← Volver", "← Back")}
            </Link>
            <div className="gg-badge">{t("AMENIDADES", "AMENITIES")}</div>
          </div>

          <h1 className="gg-h1">{t("Amenidades", "Amenities")}</h1>
          <p className="gg-p">
            {t(
              "Estas amenidades requieren reserva. Aquí tienes cómo llegar, qué hay, reglas y cómo reservar.",
              "Amenities require a reservation. Here’s how to reach them, what’s included, rules, and how to book."
            )}
          </p>

          <div className="gg-stack">
            <VideoCard
              title={t("Cómo llegar a las amenidades", "How to reach the amenities")}
              note={t("Video rápido con la ruta y acceso.", "Quick route + access video.")}
              videoId={howToReachVideoId}
            />

            {/* MAPA (debajo del video) */}
            <div className="gg-section">
              <div className="gg-sectionTitle">{t("Mapa de amenidades", "Amenities map")}</div>
              <p className="gg-p" style={{ marginBottom: 12 }}>
                {t(
                  "Usa este mapa para ubicar dónde está cada amenidad dentro del edificio.",
                  "Use this map to locate where each amenity is inside the building."
                )}
              </p>

              <figure className="gg-fig">
                <div className="gg-media gg-mediaMap">
                  <img
                    className="gg-img"
                    src={"https://res.cloudinary.com/dk9fhte0q/image/upload/f_auto,q_auto/mapa_de_amenities_m3ptrm"}
                    alt={t("Mapa de amenidades", "Amenities map")}
                    loading="lazy"
                  />
                </div>
              </figure>
            </div>
          </div>




          <div className="gg-spacer-lg" />

          <div className="gg-section">
            <div className="gg-sectionTitle">{t("Cómo reservar", "How to book")}</div>

            <p className="gg-p" style={{ marginBottom: 10 }}>
              {t(
                "Para reservar, escríbeme por WhatsApp con: (1) amenidad, (2) número de personas, (3) fecha, (4) hora exacta (en punto).",
                "To book, message me on WhatsApp with: (1) amenity, (2) number of people, (3) date, (4) exact time (on the hour)."
              )}
            </p>

            <ul className="gg-list">
              <li>
                {t(
                  "La reserva es por bloques de 1 hora (en punto). Ej: 6:00 pm, 7:00 pm, etc.",
                  "Bookings are in 1-hour slots (on the hour). Ex: 6:00 pm, 7:00 pm, etc."
                )}
              </li>
              <li>
                {t(
                  "El último momento para pedir un slot es antes de que empiece. Ej: para 6:00 pm, máximo 5:59 pm. Si no, ese slot se pierde y toca el siguiente.",
                  "The latest you can request a slot is before it starts. Ex: for 6:00 pm, request by 5:59 pm. After that, that slot is gone and you’ll need the next one."
                )}
              </li>
              <li>
                {t(
                  "Puede haber o no cupos según disponibilidad del edificio.",
                  "Availability depends on the building’s schedule and capacity."
                )}
              </li>
            </ul>

            <div className="gg-spacer" />

            <a className="gg-btn" style={{ margin: 0 }} href={waLink} target="_blank" rel="noreferrer">
              {t("Reservar por WhatsApp", "Book via WhatsApp")}
            </a>
          </div>

          <div className="gg-spacer-lg" />

          <div className="gg-section">
            <div className="gg-sectionTitle">{t("Reglas (resumen)", "Rules (summary)")}</div>

            <ul className="gg-list">
              <li>
                {t(
                  "El uso es bajo total responsabilidad del copropietario/arrendatario; la administración no se hace responsable por caídas/accidentes.",
                  "Use is at your own risk; building management is not responsible for falls/accidents."
                )}
              </li>
              <li>{t("Ingreso únicamente bajo reserva.", "Entry only with a reservation.")}</li>
              <li>
                {t(
                  "Tiempo máximo de espera: 30 minutos. Pasado ese tiempo, la reserva se cancela.",
                  "Max waiting time: 30 minutes. After that, the booking is canceled."
                )}
              </li>
              <li>
                {t(
                  "Prohibido consumir bebidas alcohólicas en áreas comunes (incluye piscina y gimnasio).",
                  "No alcohol in common areas (including pool and gym)."
                )}
              </li>
              <li>{t("Reserva máxima: 1 hora.", "Max booking: 1 hour.")}</li>
              <li>
                {t(
                  "Uso únicamente para propietarios y arrendatarios.",
                  "For owners and tenants only."
                )}
              </li>
              <li>
                {t(
                  "Menores de 12 años solo con un adulto.",
                  "Children under 12 must be with an adult."
                )}
              </li>
              <li>
                {t(
                  "Piscina: traje de baño y gorro obligatorios. Ducharse antes de ingresar. No hay salvavidas. No saltos ni clavados.",
                  "Pool: swimsuit + swim cap required. Shower before entering. No lifeguard. No jumping/diving."
                )}
              </li>
              <li>
                {t(
                  "Prohibido usar parlantes/equipos de sonido a volumen que moleste a otros.",
                  "No loud speakers/sound equipment that disturbs others."
                )}
              </li>
            </ul>
          </div>

          <div className="gg-spacer-lg" />

          <div className="gg-invSection">
            <div className="gg-sectionTitle">{t("Fotos de amenidades", "Amenities photos")}</div>
            <div className="gg-grid">
              {photos.map((p) => (
                <PhotoTile key={p.id} url={p.url} label={t(p.labelEs, p.labelEn)} />
              ))}
            </div>
          </div>

          <div className="gg-spacer-lg" />


        </div>
      </div>
    </div>
  );
}
