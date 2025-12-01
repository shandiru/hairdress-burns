"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

const images = [
  {
    src: "/gallery-brunette-highlights.png",
    alt: "Brunette Highlights and Curls - Professional Hair Styling",
  },
  {
    src: "/gallery-magenta-color.png",
    alt: "Vibrant Magenta Hair Color - Expert Hair Coloring",
  },
  {
    src: "/gallery-blonde-balayage.png",
    alt: "Blonde Balayage and Waves - Professional Hair Design",
  },
 
 
   {
    src: "/im1.jpeg",
    alt: "",
  },
   {
    src: "/im2.jpeg",
    alt: "",
  },
  {
    src: "/im3.jpeg",
    alt: "",
  },
  {
    src: "/im4.jpeg",
    alt: "",
  },
  {
    src: "/im5.jpeg",
    alt: "",
  },
   {
    src: "/im6.jpeg",
    alt: "",
  },
   {
    src: "/im7.jpeg",
    alt: "",
  },
   {
    src: "/im8.jpeg",
    alt: "",
  },
   {
    src: "/im9.jpeg",
    alt: "",
  },
   {
    src: "/im10.jpeg",
    alt: "",
  },
    {
    src: "/im11.jpeg",
    alt: "",
  },
   {
    src: "/im12.jpeg",
    alt: "",
  },
   {
    src: "/im13.jpeg",
    alt: "",
  },
   {
    src: "/im14.jpeg",
    alt: "",
  },
   {
    src: "/im15.jpeg",
    alt: "",
  },
  {
    src: "/im16.jpeg",
    alt: "",
  },
  {
    src: "/im17.jpeg",
    alt: "",
  },
  {
    src: "/im18.jpeg",
    alt: "",
  },
  {
    src: "/im19.jpeg",
    alt: "",
  },
  {
    src: "/im20.jpeg",
    alt: "",
  },
    {
    src: "/im21.jpeg",
    alt: "",
  },
    {
    src: "/im22.jpeg",
    alt: "",
  },
    {
    src: "/im23.jpeg",
    alt: "",
  },
    {
    src: "/im24.jpeg",
    alt: "",
  },
    {
    src: "/im25.jpeg",
    alt: "",
  },
   {
    src: "/im26.jpeg",
    alt: "",
  },
   {
    src: "/im27.jpeg",
    alt: "",
  },
   {
    src: "/im28.jpeg",
    alt: "",
  },
   {
    src: "/im29.jpeg",
    alt: "",
  },
   {
    src: "/im30.jpeg",
    alt: "",
  },
  {
    src: "/im31.jpeg",
    alt: "",
  },
  {
    src: "/im32.jpeg",
    alt: "",
  },
  {
    src: "/im33.jpeg",
    alt: "",
  },
  {
    src: "/im34.jpeg",
    alt: "",
  },
  {
    src: "/im35.jpeg",
    alt: "",
  },
  {
    src: "/im36.jpeg",
    alt: "",
  },
  {
    src: "/im37.jpeg",
    alt: "",
  },
  {
    src: "/im38.jpeg",
    alt: "",
  },
  {
    src: "/im39.jpeg",
    alt: "",
  },
  {
    src: "/im40.jpeg",
    alt: "",
  },
   {
    src: "/im41.jpeg",
    alt: "",
  },
   {
    src: "/im42.jpeg",
    alt: "",
  },
   {
    src: "/im43.jpeg",
    alt: "",
  },
   {
    src: "/im44.jpeg",
    alt: "",
  },
  
];

const GallerySection = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleItems = showAll ? images : images.slice(0, 4); // show 2 rows (2x2) initially

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 120,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section className="bg-white dark:bg-black py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* === Headings === */}
        <div data-aos="fade-up">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-3">
            Our Work
          </h1>
          <h6 className="text-gray-600 dark:text-gray-300 mb-10 text-lg max-w-2xl mx-auto">
            Discover the artistry and craftsmanship that goes into every cut,
            color, and style at Burns Hair Design.
          </h6>
        </div>

        {/* === Image Grid === */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <AnimatePresence>
            {visibleItems.map((image, index) => (
              <motion.div
                key={index}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="relative group overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                data-aos="zoom-in-up"
                data-aos-delay={index * 100}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* === See More / Show Less Button === */}
        {images.length > 4 && (
          <div
            className="mt-10 flex justify-center"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className="
                px-6 py-2 rounded-md text-sm font-semibold
                bg-green-600 text-white 
                hover:bg-green-700 hover:shadow-[0_6px_20px_rgba(47,125,51,0.45)]
                focus:ring-2 focus:ring-green-500 focus:outline-none
                transition-all duration-300
              "
            >
              {showAll ? "Show Less" : "See More"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;
