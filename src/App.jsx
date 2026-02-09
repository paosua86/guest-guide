import React, { useMemo, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import CategoryPage from "./pages/CategoryPage.jsx";
import { guideItems } from "./data/guideItems.js";

export default function App() {
  const [lang, setLang] = useState("es");

  const byCategory = useMemo(() => {
    const map = {
      access: [],
      home: [],
      laundry: [],
      amenities: [],
      rules: [],
    };

    // Ajusta estos mapeos según cómo tengas tus categorías en guideItems.js
    // Yo asumo: access, kitchen, bath, comfort, laundry, amenities, rules (si no tienes rules, la creamos luego)
    for (const x of guideItems) {
      if (x.category === "access") map.access.push(x);
      else if (x.category === "laundry") map.laundry.push(x);
      else if (x.category === "amenities") map.amenities.push(x);
      else if (x.category === "rules") map.rules.push(x);
      else map.home.push(x); // kitchen/bath/comfort -> "Casa & Equipos"
    }

    return map;
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home lang={lang} setLang={setLang} />} />

      <Route
        path="/arrival"
        element={
          <CategoryPage
            lang={lang}
            titleEs="Llegada & Acceso"
            titleEn="Arrival & Access"
            subtitleEs="Ingreso, garita, parqueo, torre 29, tags y chapa."
            subtitleEn="Entry, guardhouse, parking, tower 29, tags and smart lock."
            items={byCategory.access}
          />
        }
      />

      <Route
        path="/home-systems"
        element={
          <CategoryPage
            lang={lang}
            titleEs="Casa & Equipos"
            titleEn="Home & Appliances"
            subtitleEs="Cocina, agua filtrada, WiFi/TV y ducha/agua caliente."
            subtitleEn="Kitchen, filtered water, WiFi/TV, shower/hot water."
            items={byCategory.home}
          />
        }
      />

      <Route
        path="/laundry"
        element={
          <CategoryPage
            lang={lang}
            titleEs="Lavandería"
            titleEn="Laundry"
            subtitleEs="Uso correcto de lavadora y secadora."
            subtitleEn="How to use washer and dryer properly."
            items={byCategory.laundry}
          />
        }
      />

      <Route
        path="/amenities"
        element={
          <CategoryPage
            lang={lang}
            titleEs="Amenidades"
            titleEn="Amenities"
            subtitleEs="Piscina y reservas (sin invitados externos)."
            subtitleEn="Pool and booking (no outside guests)."
            items={byCategory.amenities}
          />
        }
      />

      <Route
        path="/rules"
        element={
          <CategoryPage
            lang={lang}
            titleEs="Normas & Check-out"
            titleEn="Rules & Check-out"
            subtitleEs="Reglas clave y salida rápida sin problemas."
            subtitleEn="Key rules and a smooth, quick check-out."
            items={byCategory.rules}
          />
        }
      />
    </Routes>
  );
}
