// src/components/WaxBuildUpReasons.jsx
import React from "react";
import {
  LuEar,
  LuUsers,
  LuShield,
  LuClock,
  LuCircleCheckBig,
  LuStethoscope,
} from "react-icons/lu";

const reasons = [
  {
    title: "Muffled Hearing",
    desc: "Blocked ears or reduced hearing clarity",
    Icon: LuEar,
  },
  {
    title: "Tinnitus",
    desc: "Ringing or buzzing sounds in the ears",
    Icon: LuUsers,
  },
  {
    title: "Earache",
    desc: "Pain or discomfort in the ear",
    Icon: LuShield,
  },
  {
    title: "Dizziness",
    desc: "Balance issues or feeling unsteady",
    Icon: LuClock,
  },
  {
    title: "Itchiness",
    desc: "Uncomfortable itching sensation",
    Icon: LuCircleCheckBig,
  },
  {
    title: "Device Issues",
    desc: "Trouble using hearing aids or earphones",
    Icon: LuStethoscope,
  },
];

export default function WaxBuildUpReasons() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="mx-auto max-w-6xl px-4">
        {/* Heading */}
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-[#0D1525] mb-6">
            Why Do We Get Ear Wax Build-Up?
          </h2>
          <p className="text-lg text-[#334155] mb-12">
            Ear wax is natural — it protects your ears from dust, dirt, and bacteria.
            But sometimes it builds up and causes uncomfortable symptoms.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map(({ title, desc, Icon }) => (
            <article
              key={title}
              className="bg-white text-[#0D1525] rounded-xl border border-gray-200 py-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="px-6 text-center">
                {/* Icon with emerald accent */}
                <Icon className="h-12 w-12 text-[#10B981] mx-auto mb-4" />
                <h3 className="font-semibold text-lg text-[#0D1525]">{title}</h3>
              </div>
              <div className="px-6 mt-2 text-center">
                <p className="text-sm text-[#334155]">{desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
