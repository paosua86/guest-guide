import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./style.css";

import Home from "./pages/Home.jsx";
import Arrival from "./pages/Arrival.jsx";
import Inventory from "./pages/Inventory.jsx";
import Cumbaya from "./pages/Cumbaya.jsx";

// Si ya existen, descomenta e importa (y agrega rutas abajo):
import HomeSystems from "./pages/HomeSystems.jsx";
import Laundry from "./pages/Laundry.jsx";
import Amenities from "./pages/Amenities.jsx";
import Rules from "./pages/Rules.jsx";

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
      <Routes>
        <Route path="/" element={<Home lang={lang} setLang={setLang} />} />

        <Route path="/arrival" element={<Arrival lang={lang} />} />
        <Route path="/inventory" element={<Inventory lang={lang} />} />
        <Route path="/cumbaya" element={<Cumbaya lang={lang} />} />


        <Route path="/home-systems" element={<HomeSystems lang={lang} />} />
        <Route path="/amenities" element={<Amenities lang={lang} />} />
        <Route path="/rules" element={<Rules lang={lang} />} />


        {/* ✅ fallback: si ponen una ruta rara, vuelve al Home */}
        <Route path="*" element={<Home lang={lang} setLang={setLang} />} />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<AppRouter />);
