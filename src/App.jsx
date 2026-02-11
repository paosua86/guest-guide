import React, { useEffect, useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Arrival from "./pages/Arrival";
import Inventory from "./pages/Inventory";

// ✅ NUEVA PÁGINA
import Cumbaya from "./pages/Cumbaya";

// Si ya los tienes creados, descomenta e importa.
// import HomeSystems from "./pages/HomeSystems";
// import Laundry from "./pages/Laundry";
// import Amenities from "./pages/Amenities";
// import Rules from "./pages/Rules";

export default function App() {
  const [lang, setLang] = useState("es");

  useEffect(() => {
    const saved = localStorage.getItem("gg_lang");
    if (saved === "es" || saved === "en") setLang(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("gg_lang", lang);
  }, [lang]);

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home lang={lang} setLang={setLang} />} />

        <Route path="/arrival" element={<Arrival lang={lang} />} />
        <Route path="/inventory" element={<Inventory lang={lang} />} />
        <Route path="/cumbaya" element={<Cumbaya lang={lang} />} />

        {/*
        <Route path="/home-systems" element={<HomeSystems lang={lang} />} />
        <Route path="/laundry" element={<Laundry lang={lang} />} />
        <Route path="/amenities" element={<Amenities lang={lang} />} />
        <Route path="/rules" element={<Rules lang={lang} />} />
        */}

        {/* fallback */}
        <Route path="*" element={<Home lang={lang} setLang={setLang} />} />
      </Routes>
    </HashRouter>
  );
}
