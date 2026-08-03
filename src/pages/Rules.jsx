// src/pages/Rules.jsx
import React from "react";
import { track } from "../lib/analytics";
import Shell from "../components/Shell";
import Accordion from "../components/Accordion";

const PAGE = "Normas & Check-out";

export default function Rules({ lang, setLang }) {
  const t = (es, en) => (lang === "es" ? es : en);

  const waText = encodeURIComponent(
    "Hola, me encuentro en el departamento 2048 en Aquarela, y necesito tu ayuda con : "
  );

  return (
    <Shell lang={lang} setLang={setLang} badgeEs="NORMAS & CHECK-OUT" badgeEn="RULES & CHECK-OUT">

          <h1 className="gg-h1">{t("Normas & Check-out", "Rules & Check-out")}</h1>
          <p className="gg-p">
            {t(
              "Toca el tema que necesites. Lo esencial para una estadía cómoda y sin sorpresas.",
              "Tap the topic you need. Everything for a smooth, no-surprises stay."
            )}
          </p>

          {/* ========= RULES ========= */}
          <Accordion page={PAGE} name="Wi-Fi" title={t("Wi-Fi (alta velocidad)", "Wi-Fi (high speed)")}>
            <p className="gg-p">
              {t(
                "El nombre de red y la contraseña están visibles dentro de la app de Airbnb; si no la encuentras, con gusto te la enviaremos.",
                "The network name and password are visible in the Airbnb app; if you can’t find it, we’ll gladly send it."
              )}
              <br />
              {t(
                "Internet de alta velocidad: 750 Mbps (compartición 2:1).",
                "High-speed internet: 750 Mbps (2:1 sharing)."
              )}
            </p>
          </Accordion>

          <Accordion page={PAGE} name="TV y Streaming" title={t("TV y Streaming", "TV & Streaming")}>
            <p className="gg-p">
              {t(
                "La TV (Smart TV) incluye acceso a Paramount+ y Zapping TV.",
                "The Smart TV includes access to Paramount+ and Zapping TV."
              )}
              <br />
              {t(
                "Solo enciende la TV, entra al menú principal y abre la app que desees.",
                "Turn on the TV, go to the main menu, and open the app you want."
              )}
            </p>
          </Accordion>

          <Accordion
            page={PAGE}
            name="Check-in y acceso"
            title={t("Check-in y acceso (importante)", "Check-in & access (important)")}
          >
            <p className="gg-p">
              {t(
                "El día de tu llegada, recibirás por el chat de Airbnb:",
                "On your arrival day, you’ll receive via Airbnb chat:"
              )}
            </p>
            <ul className="gg-list" style={{ marginTop: 8 }}>
              <li>{t("Instrucciones de ingreso", "Entry instructions")}</li>
              <li>{t("Claves de la puerta inteligente", "Smart lock codes")}</li>
              <li>{t("Indicaciones para parqueadero #511 (si lo usarás)", "Directions for parking spot #511 (if you’ll use it)")}</li>
            </ul>
            <p className="gg-p" style={{ marginTop: 10 }}>
              {t(
                "Check-in desde 3:00 pm (si llegas después de 10:00 pm, debe coordinarse con anticipación).",
                "Check-in from 3:00 pm (if you arrive after 10:00 pm, it must be coordinated in advance)."
              )}
              <br />
              <br />
              {t("Se entrega 1 tag, que sirve para el acceso y las amenidades.", "You will receive 1 access tag, valid for both entry and amenities.")}
              <br />
              <br />
              {t(
                "Pérdida / no devolución: USD 20. Reporta cualquier pérdida de inmediato (no se repone rápido).",
                "Lost / not returned: USD 20. Report any loss immediately (replacements are not quick)."
              )}
            </p>
          </Accordion>

          <Accordion page={PAGE} name="Cocina" title={t("Cocina (inducción)", "Kitchen (induction)")}>
            <p className="gg-p">
              {t(
                "Cocina de inducción, equipada para preparaciones completas.",
                "Induction cooktop, fully equipped for complete meals."
              )}
              <br />
              <br />
              {t(
                "Usa únicamente ollas/utensilios aptos para inducción, no uses tenedores ni cuchillos para las ollas porque se rayan, usa los utensilios de madera que son mejores para la salud y no dañan las ollas.",
                "Use only induction-compatible pots/utensils. Do not use forks or knives on the pots (they scratch). Use the wooden utensils—better for health and they won’t damage the cookware."
              )}
              <br />
              <br />
              {t(
                "Por favor, enciende el extractor al cocinar para controlar olores y grasa.",
                "Please turn on the exhaust hood while cooking to control odors and grease."
              )}
              <br />
              {t(
                "Al terminar: deja la zona limpia y sin grasa.",
                "When finished: leave the area clean and free of grease."
              )}
            </p>
          </Accordion>

          <Accordion page={PAGE} name="Agua filtrada" title={t("Agua filtrada (para beber)", "Filtered water (drinking)")}>
            <p className="gg-p">
              {t(
                "El agua filtrada sale del filtro instalado en el área del lavaplatos (junto a la llave).",
                "Filtered water comes from the filter installed by the kitchen sink (next to the faucet)."
              )}
              <br />
              {t(
                "Puedes beberla con tranquilidad durante toda tu estadía.",
                "It’s safe to drink throughout your stay."
              )}
            </p>
          </Accordion>

          <Accordion page={PAGE} name="Agua caliente" title={t("Agua caliente (24/7)", "Hot water (24/7)")}>
            <p className="gg-p">
              {t(
                "Hay agua caliente en ducha y grifos.",
                "Hot water is available in the shower and faucets."
              )}
              <br />
              {t(
                "Como el sistema es central del edificio, puede tardar unos minutos en salir. Gracias por tu paciencia.",
                "Because the system is centralized for the building, it may take a few minutes to heat up. Thanks for your patience."
              )}
            </p>
          </Accordion>

          <Accordion
            page={PAGE}
            name="Lavadora y secadora"
            title={t("Lavadora y secadora (dentro del departamento)", "Washer & dryer (inside the unit)")}
          >
            <p className="gg-p">{t("Uso libre para huéspedes.", "Free to use for guests.")}</p>
            <ul className="gg-list" style={{ marginTop: 8 }}>
              <li>{t("No sobrecargar los equipos.", "Do not overload the machines.")}</li>
              <li>{t("Después de usar la secadora, por favor retira la pelusa del filtro.", "After using the dryer, please remove lint from the filter.")}</li>
            </ul>
          </Accordion>

          <Accordion page={PAGE} name="Basura y reciclaje" title={t("Basura y reciclaje", "Trash & recycling")}>
            <p className="gg-p">
              {t(
                "Separa la basura en orgánico y reciclaje (dos basureros bajo el lavaplatos, con letreros).",
                "Separate trash into organic and recycling (two bins under the kitchen sink, labeled)."
              )}
              <br />
              {t(
                "No es obligatorio sacar la basura durante tu estadía.",
                "It’s not mandatory to take out the trash during your stay."
              )}
              <br />
              <br />
              {t(
                "Si deseas hacerlo: contenedores en S2, Torre 11 (orgánico y reciclaje).",
                "If you’d like to: bins are located at S2, Tower 11 (organic & recycling)."
              )}
            </p>
          </Accordion>

          <Accordion page={PAGE} name="Ruido y convivencia" title={t("Ruido y convivencia", "Noise & courtesy")}>
            <p className="gg-p">
              {t("Horario de silencio: 10:00 pm a 7:00 am.", "Quiet hours: 10:00 pm to 7:00 am.")}
              <br />
              {t(
                "Mantén un volumen moderado en todo momento (especialmente música/TV).",
                "Keep volume moderate at all times (especially music/TV)."
              )}
            </p>
          </Accordion>

          <Accordion page={PAGE} name="Amenidades" title={t("Amenidades (piscina y más)", "Amenities (pool & more)")}>
            <p className="gg-p">
              {t(
                "Piscina: 10:00 am a 8:00 pm, cerrada los lunes. (Gorra requerida por normativa).",
                "Pool: 10:00 am to 8:00 pm, closed Mondays. (Swim cap required by regulation)."
              )}
              <br />
              {t("Lleva tu toalla desde el departamento.", "Bring your towel from the apartment.")}
              <br />
              <br />
              {t(
                "Piscina, coworking, bolos y demás amenidades requieren reserva con mínimo 1 hora de anticipación (por Airbnb o al número indicado).",
                "Pool, coworking, bowling, and other amenities require booking at least 1 hour in advance (via Airbnb or the indicated number)."
              )}
              <br />
              {t(
                "No se permiten invitados externos en amenidades.",
                "No external guests are allowed in amenities."
              )}
            </p>
          </Accordion>

          <Accordion page={PAGE} name="Parqueadero" title={t("Parqueadero", "Parking")}>
            <p className="gg-p">
              {t("Usa únicamente el parqueadero asignado N.º 511.", "Use only the assigned parking spot No. 511.")}
              <br />
              {t("No está permitido lavar el auto en el parqueadero.", "Washing the car in the parking area is not allowed.")}
            </p>
          </Accordion>

          <Accordion
            page={PAGE}
            name="Seguridad y humo"
            title={t("Seguridad, humo y cuidado del espacio", "Safety, smoking & care of the space")}
          >
            <p className="gg-p">
              {t(
                "Suite libre de humo (incluye cigarrillo, vape y marihuana). Fumar solo en áreas permitidas fuera del departamento.",
                "Smoke-free suite (including cigarettes, vape, and marijuana). Smoke only in designated areas outside the apartment."
              )}
              <br />
              {t("No manipular sensores.", "Do not tamper with sensors.")}
              <br />
              {t(
                "Cuidado con la puerta de vidrio de la ducha (cerrar despacio) y superficies de madera.",
                "Be careful with the shower glass door (close gently) and wood surfaces."
              )}
            </p>
          </Accordion>

          <Accordion page={PAGE} name="Necesitas ayuda" title={t("¿Necesitas ayuda?", "Need help?")}>
            <p className="gg-p">
              {t("Respondemos mensajes de 6:00 am a 10:00 pm.", "We reply to messages from 6:00 am to 10:00 pm.")}
              <br />
              <br />
              {t(
                "Si surge un problema, haremos lo posible por asistirte lo antes posible.",
                "If an issue comes up, we’ll do our best to help as soon as possible."
              )}
              <br />
              <br />
              {t(
                "Soporte: Ante cualquier novedad durante tu estadía, puedes escribirnos por el chat de la plataforma o vía WhatsApp.",
                "Support: For anything during your stay, message us via the platform chat or WhatsApp."
              )}
            </p>

            <div style={{ marginTop: 12 }}>
              <a
                className="gg-btn gg-btnSecondary"
                style={{ margin: 0 }}
                href={`https://wa.me/593998536569?text=${waText}`}
                target="_blank"
                rel="noreferrer"
                onClick={() => track("contact_whatsapp", { source: PAGE, purpose: "soporte" })}
              >
                {t("Escríbeme por WhatsApp", "Message me on WhatsApp")}
              </a>
            </div>
          </Accordion>

          {/* ========= CHECKOUT ========= */}
          {/* Fuera del acordeón a propósito: es la única parte accionable, y se
              consulta con prisa el último día. */}
          <div className="gg-section" style={{ marginTop: 22 }}>
            <div className="gg-sectionTitle">{t("Check-out", "Check-out")}</div>
            <p className="gg-p">{t("Antes de salir, por favor:", "Before you leave, please:")}</p>

            <ol className="gg-list" style={{ paddingLeft: 18, marginTop: 8 }}>
              <li>{t("Apaga todas las luces (incluye baño, cocina y lámparas) y apaga el extractor.", "Turn off all lights (bathroom, kitchen, lamps) and turn off the exhaust hood.")}</li>
              <li>{t("Cierra todas las llaves (cocina + baño) y deja la ducha ordenada.", "Close all faucets (kitchen + bathroom) and leave the shower area tidy.")}</li>
              <li>{t("Devuelve el tag en el lugar indicado dentro del departamento.", "Return the access tag to the designated spot inside the apartment.")}</li>
              <li>{t("Asegura/cierra la puerta inteligente al salir.", "Lock the smart door when you leave.")}</li>
              <li>{t('Envíanos un mensaje por Airbnb: “Checked out”.', 'Send us a message on Airbnb: “Checked out”.')}</li>
            </ol>
          </div>
    </Shell>
  );
}
