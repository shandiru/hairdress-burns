// src/components/AppointmentExpectations.jsx
import React from "react";
import { FiUsers, FiInfo, FiClock, FiCheckCircle, FiCalendar } from "react-icons/fi";
import { HashLink } from "react-router-hash-link";

const steps = [
  {
    title: "Consultation",
    desc: "A friendly consultation to check your ears and discuss your symptoms",
    Icon: FiUsers,
  },
  {
    title: "Explanation",
    desc: "A clear explanation of the procedure and what to expect",
    Icon: FiInfo,
  },
  {
    title: "Treatment",
    desc: "The micro suction treatment taking just 10–30 minutes",
    Icon: FiClock,
  },
  {
    title: "Aftercare",
    desc: "Advice on aftercare and keeping your ears healthy",
    Icon: FiCheckCircle,
  },
];

export default function AppointmentExpectations() {
  // Fast scroll function for cross-page navigation (same as in Navbar)
  const fastScroll = (el) => {
    if (el) {
      // Use requestAnimationFrame for immediate execution after DOM update
      requestAnimationFrame(() => {
        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
        const yOffset = -100; // Offset for sticky navbar
        window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
      });
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0D1525] mb-4">
            What to Expect at Your Appointment
          </h2>
          <p className="text-lg text-[#334155]">
            A comfortable and professional experience from start to finish
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map(({ title, desc, Icon }) => (
            <article
              key={title}
              className="bg-white text-[#0D1525] rounded-xl border border-gray-200 shadow-sm text-center py-6 hover:shadow-md transition-shadow"
            >
              <div className="px-6">
                <Icon className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                <h3 className="font-semibold text-lg">{title}</h3>
              </div>
              <div className="px-6 mt-2">
                <p className="text-sm text-[#334155]">{desc}</p>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-lg text-[#334155] mb-6">
            Most people feel relief immediately after the procedure.
          </p>
          <HashLink 
            to="/#contact"
            scroll={fastScroll}
            className="inline-flex items-center gap-2 h-12 px-8 text-lg rounded-md font-medium text-white bg-emerald-600 hover:bg-emerald-700 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 transition-colors"
          >
            <FiCalendar className="w-5 h-5" />
            Schedule Your Appointment Today
          </HashLink>
        </div>
      </div>
    </section>
  );
}