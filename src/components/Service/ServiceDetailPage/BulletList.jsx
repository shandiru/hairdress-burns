// src/components/services/BulletList.jsx
import React from "react";
import { FiCheckCircle } from "react-icons/fi";

export default function BulletList({ items = [], columns = 1 }) {
  const colClass =
    columns === 2 ? "grid grid-cols-1 md:grid-cols-2 gap-x-10" : "";

  return (
    <ul className={["space-y-3", colClass].join(" ")}>
      {items.map((text, i) => (
        <li
          key={i}
          className="flex items-start gap-3 text-[#334155]" // Neutral balance for body text
        >
          <span className="mt-1 text-emerald-600"> {/* Emerald green for icons */}
            <FiCheckCircle className="h-5 w-5" />
          </span>
          <span>{text}</span>
        </li>
      ))}
    </ul>
  );
}
