// src/components/services/ServiceContent.jsx
import React from "react";
import BulletList from "./BulletList";

export default function ServiceContent({
  image,
  title,
  intro = [],
  benefitsTitle,
  benefits = [],
}) {
  return (
    <section>
      {/* Hero image */}
      <div className="overflow-hidden rounded-2xl shadow-md mb-6">
        <img
          src={image}
          alt={title}
          className="w-full max-h-64 sm:max-h-80 md:max-h-96 object-cover mx-auto"
        />
      </div>

      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-[#0D1525] mb-4">
        {title}
      </h1>

      {/* Intro paragraphs */}
      <div className="space-y-4 text-[#333333] leading-relaxed mb-6">
        {intro.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      {/* Benefits */}
      <h3 className="text-xl font-semibold text-[#0D1525] mb-3">
        {benefitsTitle}
      </h3>
      <BulletList items={benefits} columns={2} />
    </section>
  );
}
