"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const images = [
  { src: "/gallery-brunette-highlights.png", alt: "" },
  { src: "/gallery-magenta-color.png", alt: "" },
  { src: "/gallery-blonde-balayage.png", alt: "" },
  { src: "/im1.jpeg", alt: "" },
  { src: "/im2.jpeg", alt: "" },
  { src: "/im3.jpeg", alt: "" },
  { src: "/im4.jpeg", alt: "" },
  { src: "/im5.jpeg", alt: "" },
  { src: "/im6.jpeg", alt: "" },
  { src: "/im7.jpeg", alt: "" },
  { src: "/im8.jpeg", alt: "" },
  { src: "/im9.jpeg", alt: "" },
  { src: "/im10.jpeg", alt: "" },
  { src: "/im11.jpeg", alt: "" },
  { src: "/im12.jpeg", alt: "" },
  { src: "/im13.jpeg", alt: "" },
  { src: "/im14.jpeg", alt: "" },
  { src: "/im15.jpeg", alt: "" },
  { src: "/im16.jpeg", alt: "" },
  { src: "/im17.jpeg", alt: "" },
  { src: "/im18.jpeg", alt: "" },
  { src: "/im19.jpeg", alt: "" },
  { src: "/im20.jpeg", alt: "" },
  { src: "/im21.jpeg", alt: "" },
  { src: "/im22.jpeg", alt: "" },
  { src: "/im23.jpeg", alt: "" },
  { src: "/im24.jpeg", alt: "" },
  { src: "/im25.jpeg", alt: "" },
  { src: "/im26.jpeg", alt: "" },
  { src: "/im27.jpeg", alt: "" },
  { src: "/im28.jpeg", alt: "" },
  { src: "/im29.jpeg", alt: "" },
  { src: "/im30.jpeg", alt: "" },
  { src: "/im31.jpeg", alt: "" },
  { src: "/im32.jpeg", alt: "" },
  { src: "/im33.jpeg", alt: "" },
  { src: "/im34.jpeg", alt: "" },
  { src: "/im35.jpeg", alt: "" },
  { src: "/im36.jpeg", alt: "" },
  { src: "/im37.jpeg", alt: "" },
  { src: "/im38.jpeg", alt: "" },
  { src: "/im39.jpeg", alt: "" },
  { src: "/im40.jpeg", alt: "" },
  { src: "/im41.jpeg", alt: "" },
  { src: "/im42.jpeg", alt: "" },
  { src: "/im43.jpeg", alt: "" },
  { src: "/im44.jpeg", alt: "" },
];

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <section className="bg-white dark:bg-black py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-3">
            Our Work
          </h1>
          <h6 className="text-gray-600 dark:text-gray-300 mb-10 text-lg max-w-2xl mx-auto">
            Discover the artistry and craftsmanship behind every style.
          </h6>

          {/* === Swiper Slider === */}
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            slidesPerView={3}
            spaceBetween={20}
            navigation
            pagination={{
              clickable: true,
            }}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-16" // adds space below for dots
          >
            {images.map((img, idx) => (
              <SwiperSlide key={idx}>
                <div
                  onClick={() => setSelectedImage(img.src)}
                  className="overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

        </div>
      </section>

      {/* === POPUP MODAL === */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              src={selectedImage}
              className="max-w-[90%] max-h-[90%] rounded-xl shadow-2xl"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
