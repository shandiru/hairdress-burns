// src/components/services/ServiceSidebar.jsx
import React from "react";
import { FiChevronRight } from "react-icons/fi";

export default function ServiceSidebar({ items, activeId, onSelect }) {
  return (
    <aside className="rounded-2xl bg-white border border-[#E5E7EB] p-5 shadow-sm">
      <h3 className="text-[#0D1525] font-semibold mb-4">
        Recognising the Symptoms
      </h3>

      <div className="space-y-3">
        {items.map((it) => {
          const active = it.id === activeId;
          return (
            <button
              key={it.id}
              onClick={() => onSelect?.(it.id)}
              className={[
                "w-full rounded-lg border flex items-center gap-2 px-4 py-3 text-left transition font-medium",
                active
                  ? "bg-emerald-600 text-white border-emerald-600 shadow"
                  : "bg-white text-[#333333] border-[#E5E7EB] hover:border-emerald-600 hover:text-emerald-700",
              ].join(" ")}
            >
              <span
                className={[
                  "grid place-items-center h-6 w-6 rounded-full mr-1 transition",
                  active
                    ? "bg-white/20 text-white"
                    : "bg-emerald-50 text-emerald-600",
                ].join(" ")}
              >
                <FiChevronRight className={active ? "text-white" : ""} />
              </span>
              <span>{it.label}</span>
            </button>
          );
        })}
      </div>
    </aside>
  );
}
