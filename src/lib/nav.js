// src/lib/nav.js
// Fuente única de las secciones. La usan el riel de escritorio y el Home,
// así que no pueden desincronizarse.

export const NAV = [
  {
    to: "/arrival",
    es: "Llegada & Acceso",
    en: "Arrival & Access",
    subEs: "Entrada, tag, parqueo, chapa",
    subEn: "Entry, tag, parking, lock",
  },
  {
    to: "/amenities",
    es: "Amenidades",
    en: "Amenities",
    subEs: "Piscina, reservas, horarios",
    subEn: "Pool, booking, hours",
  },
  {
    to: "/home-systems",
    es: "Casa & Equipos",
    en: "Home & Appliances",
    subEs: "Cocina, agua, WiFi, TV, ducha",
    subEn: "Kitchen, water, WiFi, TV, shower",
  },
  {
    to: "/explore",
    es: "Conoce Cumbayá & Quito",
    en: "Explore Cumbayá & Quito",
    subEs: "Dónde comer, malls, planes",
    subEn: "Food, malls, things to do",
  },
  {
    to: "/rules",
    es: "Normas & Check-out",
    en: "Rules & Check-out",
    subEs: "Convivencia, basura, salida",
    subEn: "House rules, trash, check-out",
  },
  {
    to: "/inventory",
    es: "Inventario visual",
    en: "Visual inventory",
    subEs: "Qué hay en el depa",
    subEn: "What’s included",
  },
];

export const WHATSAPP_NUMERO = "593998536569";

export function whatsappHref(texto) {
  return `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(texto)}`;
}

export const WA_SOPORTE =
  "Hola, me encuentro en el departamento 2048 en Aquarela, y necesito tu ayuda con : ";
