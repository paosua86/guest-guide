// scripts/prerender.mjs
// Se ejecuta después de `vite build`.
//
// Vite genera un solo dist/index.html. GitHub Pages busca UN ARCHIVO por cada
// URL, así que /guest-guide/arrival no existía y respondía 404 (por eso hacía
// falta el redirector de public/404.html).
//
// Aquí escribimos dist/arrival/index.html, dist/rules/index.html, etc. Cada
// uno es el mismo index con su propio <title> y <meta description>, de modo
// que:
//   - la URL devuelve 200 en vez de 404
//   - WhatsApp y Airbnb pueden generar la vista previa del link
//   - no hay redirección intermedia: React arranca ya en la sección correcta
//
// No pre-renderizamos el contenido HTML porque la guía lleva noindex: nadie
// la va a indexar, así que solo hacen falta la URL válida y los metadatos.

import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const raiz = join(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(raiz, "dist");

const RUTAS = [
  {
    ruta: "arrival",
    titulo: "Llegada & Acceso · Guía del Huésped",
    desc: "Cómo entrar al edificio, los tags, el parqueadero y la chapa inteligente, en videos cortos.",
  },
  {
    ruta: "amenities",
    titulo: "Amenidades · Guía del Huésped",
    desc: "Piscina, horarios, reglas y cómo reservar las amenidades de Aquarela.",
  },
  {
    ruta: "home-systems",
    titulo: "Casa & Equipos · Guía del Huésped",
    desc: "Cocina, agua caliente, lavadora, cafetera y WiFi del departamento, explicados en video.",
  },
  {
    ruta: "explore",
    titulo: "Conoce Cumbayá & Quito · Guía del Huésped",
    desc: "Dónde comer, malls y planes cerca de Aquarela, con enlaces directos a Google Maps.",
  },
  {
    ruta: "rules",
    titulo: "Normas & Check-out · Guía del Huésped",
    desc: "Normas de convivencia, basura, parqueadero y los pasos del check-out.",
  },
  {
    ruta: "inventory",
    titulo: "Inventario visual · Guía del Huésped",
    desc: "Todo lo que incluye el estudio, en fotos.",
  },
];

const escapar = (s) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

const base = await readFile(join(dist, "index.html"), "utf8");

for (const { ruta, titulo, desc } of RUTAS) {
  let html = base
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${escapar(titulo)}</title>`)
    .replace(
      /<meta name="description" content="[^"]*"\s*\/?>/,
      `<meta name="description" content="${escapar(desc)}" />`
    );

  // og: para que la vista previa del link se vea bien al compartirlo.
  html = html.replace(
    "</head>",
    `  <meta property="og:title" content="${escapar(titulo)}" />\n` +
      `    <meta property="og:description" content="${escapar(desc)}" />\n` +
      `    <meta property="og:type" content="website" />\n` +
      `  </head>`
  );

  const destino = join(dist, ruta);
  await mkdir(destino, { recursive: true });
  await writeFile(join(destino, "index.html"), html, "utf8");
}

console.log(`prerender: ${RUTAS.length} rutas escritas como HTML propio`);
