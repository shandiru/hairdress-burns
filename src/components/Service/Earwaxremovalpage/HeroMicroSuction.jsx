// src/components/HeroMicroSuction.jsx
import React from "react";
import { FiCalendar, FiPhone } from "react-icons/fi";
import { HashLink } from "react-router-hash-link";

export default function HeroMicroSuction() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <span className="inline-flex items-center justify-center rounded-md border border-emerald-200 bg-emerald-50 text-emerald-700 px-3 py-1 text-xs font-medium mb-6">
            Safe &amp; Professional
          </span>

          {/* Title */}
          <h1 className="text-5xl md:text-6xl font-extrabold text-[#0D1525] mb-6 leading-tight">
            Ear Wax Removal by{" "}
            <span className="text-[#10B981]">Micro Suction</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-[#334155] mb-8 max-w-2xl mx-auto">
            The safest and most effective way to remove ear wax. Quick, clean,
            and completely safe when carried out by trained professionals.
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* Primary CTA */}
            <HashLink
              smooth
              to="/#contact"
            >
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-md h-12 px-7 text-lg font-medium text-white bg-[#10B981] hover:bg-emerald-700 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
              >
                <FiCalendar className="w-5 h-5" />
                Book Your Appointment
              </button>

            </HashLink>

            {/* Secondary CTA */}
            <a href="tel: +448081371961">
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-md h-12 px-7 text-lg font-medium border border-gray-300 text-[#0D1525] bg-white hover:bg-emerald-50 hover:border-emerald-300 hover:text-[#10B981] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300"
              >
                <FiPhone className="w-5 h-5" />
                Call Us Today
              </button>

            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
