"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const HeroSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, 
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <section className="relative py-32 px-4 overflow-hidden min-h-screen flex items-center">
      
      {/* Background Video */}
      <div className="absolute inset-0 z-0 w-full h-full overflow-hidden">
        <video
          src="/Hair Salon BROLL video shot on SONY A7siii.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        ></video>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto text-center relative z-10">

        {/* Title */}
        <h1
          className="text-4xl md:text-6xl font-light text-white mb-6 tracking-wide drop-shadow-lg"
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

        {/* Button → Scroll to Contact */}
        <div data-aos="zoom-in" data-aos-delay="400">
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium h-11 rounded-md bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 text-lg shadow-xl transition-colors duration-300"
          >
            Book Your Consultation
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
