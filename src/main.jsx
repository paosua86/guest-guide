import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./style.css";

import Home from "./pages/Home.jsx";
import Arrival from "./pages/Arrival.jsx";
import Inventory from "./pages/Inventory.jsx";
import HomeSystems from "./pages/HomeSystems.jsx";
import Amenities from "./pages/Amenities.jsx";
import Rules from "./pages/Rules.jsx";
import Explore from "./pages/Explore.jsx";

import { usePageViews, setGuestLang } from "./lib/analytics.js";

// Va dentro del router porque usePageViews necesita leer la ruta actual.
// El efecto del idioma se declara primero para que la propiedad ya esté puesta
// cuando salga el primer page_view.
function Analytics({ lang }) {
  useEffect(() => {
    setGuestLang(lang);
  }, [lang]);

  usePageViews();

  return null;
}

function AppRouter() {
  const [lang, setLang] = useState("es");

  // ✅ persiste idioma
  useEffect(() => {
    const saved = localStorage.getItem("gg_lang");
    if (saved === "es" || saved === "en") setLang(saved);
  }, []);
  useEffect(() => {
    localStorage.setItem("gg_lang", lang);
  }, [lang]);

  return (
    <BrowserRouter basename="/guest-guide">
      <Analytics lang={lang} />
      <Routes>
        <Route path="/" element={<Home lang={lang} setLang={setLang} />} />

        <Route path="/arrival" element={<Arrival lang={lang} setLang={setLang} />} />
        <Route path="/inventory" element={<Inventory lang={lang} setLang={setLang} />} />
        <Route path="/home-systems" element={<HomeSystems lang={lang} setLang={setLang} />} />
        <Route path="/amenities" element={<Amenities lang={lang} setLang={setLang} />} />
        <Route path="/rules" element={<Rules lang={lang} setLang={setLang} />} />
        <Route path="/explore" element={<Explore lang={lang} setLang={setLang} />} />

        {/* Página vieja "en construcción", ya reemplazada por /explore. */}
        <Route path="/cumbaya" element={<Navigate to="/explore" replace />} />

        {/* Ruta rara -> al Home, y con la URL corregida (antes se quedaba
            mostrando la dirección inválida en la barra). */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<AppRouter />);
