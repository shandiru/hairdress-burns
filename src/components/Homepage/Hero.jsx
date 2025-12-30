

import React, { useEffect } from "react";


const HeroSection = () => {
 

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">

      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          poster="/hero-poster.jpg" // show placeholder before video loads
          preload="metadata" // load metadata only, not full video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          {/* Mobile-optimized video */}
          <source
            src="/hero-mobile.mp4"
            type="video/mp4"
            media="(max-width: 768px)"
          />
          {/* Desktop video */}
          <source src="/hero.mp4" type="video/mp4" />
          Your browser does not support video playback.
        </video>

        {/* BLACK OPACITY OVERLAY */}
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto text-center text-white">

        {/* Title */}
        <h1
          className="text-4xl md:text-6xl font-light mb-6 tracking-wide drop-shadow-lg"
          data-aos="fade-up"
        >
          Timeless Elegance
        </h1>

        {/* Subtitle */}
        <p
          className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed drop-shadow-md"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Experience the artistry of hair design in our tranquil salon, where
          classical music meets contemporary style.
        </p>

        {/* CTA Button */}
        <div data-aos="zoom-in" data-aos-delay="400">
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 h-11 px-8 text-lg font-medium rounded-md bg-teal-600 hover:bg-teal-700 transition-colors shadow-xl"
          >
            Book Your Consultation
          </a>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
