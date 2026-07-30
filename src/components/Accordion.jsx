// src/components/Accordion.jsx
// Bloque plegable basado en <details>/<summary> nativos: accesible con teclado
// y lector de pantalla sin escribir nada de JavaScript de estado.
//
// Además reporta qué temas abre la gente, que es justo lo que no se podía
// saber cuando todo era un muro de texto: ahora se ve qué normas se leen.

import React from "react";
import { track } from "../lib/analytics";

export default function Accordion({ title, name, page, children, defaultOpen = false }) {
  return (
    <details
      className="gg-acc"
      open={defaultOpen}
      onToggle={(e) => {
        if (e.currentTarget.open) track("open_topic", { topic: name, page });
      }}
    >
      <summary className="gg-accSummary">
        <span>{title}</span>
        <span className="gg-accChevron" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="18" height="18">
            <path
              d="M6 9l6 6 6-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </summary>

      <div className="gg-accBody">{children}</div>
    </details>
  );
}
