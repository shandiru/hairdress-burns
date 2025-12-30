

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";

import "swiper/css";
import "swiper/css/navigation";

const images = [
  { src: "/im1.jpeg", alt: "Hair style 1" },
  { src: "/im2.jpeg", alt: "Hair style 2" },
  { src: "/im3.jpeg", alt: "Hair style 3" },
  { src: "/im4.jpeg", alt: "Hair style 4" },
  { src: "/im5.jpeg", alt: "Hair style 5" },
  { src: "/im6.jpeg", alt: "Hair style 6" },
  { src: "/im7.jpeg", alt: "Hair style 7" },
  { src: "/im8.jpeg", alt: "Hair style 8" },
  { src: "/im9.jpeg", alt: "Hair style 9" },
  { src: "/im10.jpeg", alt: "Hair style 10" },
  { src: "/im11.jpeg", alt: "Hair style 11" },
  { src: "/im12.jpeg", alt: "Hair style 12" },
  { src: "/im13.jpeg", alt: "Hair style 13" },
  { src: "/im14.jpeg", alt: "Hair style 14" },
  { src: "/im15.jpeg", alt: "Hair style 15" },
  { src: "/im16.jpeg", alt: "Hair style 16" },
  { src: "/im17.jpeg", alt: "Hair style 17" },
  { src: "/im18.jpeg", alt: "Hair style 18" },
  { src: "/im19.jpeg", alt: "Hair style 19" },
  { src: "/im20.jpeg", alt: "Hair style 20" },
  { src: "/im21.jpeg", alt: "Hair style 21" },
  { src: "/im22.jpeg", alt: "Hair style 22" },
  { src: "/im23.jpeg", alt: "Hair style 23" },
  { src: "/im24.jpeg", alt: "Hair style 24" },
  { src: "/im25.jpeg", alt: "Hair style 25" },
  { src: "/im26.jpeg", alt: "Hair style 26" },
  { src: "/im27.jpeg", alt: "Hair style 27" },
  { src: "/im28.jpeg", alt: "Hair style 28" },
  { src: "/im29.jpeg", alt: "Hair style 29" },
  { src: "/im30.jpeg", alt: "Hair style 30" },
  { src: "/im31.jpeg", alt: "Hair style 31" },
  { src: "/im32.jpeg", alt: "Hair style 32" },
  { src: "/im33.jpeg", alt: "Hair style 33" },
  { src: "/im34.jpeg", alt: "Hair style 34" },
  { src: "/im35.jpeg", alt: "Hair style 35" },
  { src: "/im36.jpeg", alt: "Hair style 36" },
  { src: "/im37.jpeg", alt: "Hair style 37" },
  { src: "/im38.jpeg", alt: "Hair style 38" },
  { src: "/im39.jpeg", alt: "Hair style 39" },
  { src: "/im40.jpeg", alt: "Hair style 40" },
  { src: "/im41.jpeg", alt: "Hair style 41" },
  { src: "/im42.jpeg", alt: "Hair style 42" },
  { src: "/im43.jpeg", alt: "Hair style 43" },
  { src: "/im44.jpeg", alt: "Hair style 44" },
];

export default function OurWorkSection() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <section className="bg-white dark:bg-black py-16" id="our-work">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-3">
            Our Work
          </h1>

          <h6 className="text-gray-600 dark:text-gray-300 mb-10 text-lg max-w-2xl mx-auto">
            Discover the artistry and craftsmanship behind every style.
          </h6>

          {/* === Swiper Slider === */}
          <Swiper
            modules={[Navigation, Autoplay]}
            slidesPerView={3}
            spaceBetween={20}
            navigation
            loop
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {images.map((img, idx) => (
              <SwiperSlide key={idx}>
                <div
                  onClick={() => setSelectedImage(img.src)}
                  className="overflow-hidden rounded-xl shadow-md cursor-pointer group"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    decoding="async"
                    fetchpriority="low"
                    className="
                      w-full
                      h-full
                      object-cover
                      transition-transform
                      duration-300
                      group-hover:scale-[1.03]
                    "
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

        </div>
      </section>

      {/* === Popup Modal === */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedImage(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.img
              src={selectedImage}
              className="max-w-[95%] max-h-[95%] rounded-xl shadow-2xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
