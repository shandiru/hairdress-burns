"use client";
import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const allProducts = [
  {
    id: 1,
    name: "Silken Veil",
    category: "Milk Shake",
    price: "$93",
    image:
      "https://framerusercontent.com/images/wztkqQgAxyqrRQ45505gRuXrv0.png?width=3600&height=2700",
    hoverBg: "/burns-logo.png",
  },
  {
    id: 2,
    name: "Petal Flush",
    category: "Milk Shake",
    price: "$70",
    image:
      "https://framerusercontent.com/images/bR7UHfxhFzWgFPesWcpo3mS8Y4.png?width=3600&height=2700",
    hoverBg: "/burns-logo.png",
  },
  {
    id: 3,
    name: "Bare Glow",
    category: "Paul Mitchell",
    price: "$81",
    image:
      "https://framerusercontent.com/images/JBlqS8O8WIIqp8A4YtB7Sofjk.png?width=3600&height=2700",
    hoverBg: "/burns-logo.png",
  },
  {
    id: 4,
    name: "Gloss Veil",
    category: "Paul Mitchell",
    price: "$70",
    image:
      "https://framerusercontent.com/images/7z7ubWjnmKBQy3ZxYKxI9h8ye4.png?width=3600&height=2700",
    hoverBg: "/burns-logo.png",
  },
  {
    id: 5,
    name: "Pearl Tint",
    category: "Milk Shake",
    price: "$88",
    image:
      "https://framerusercontent.com/images/7z7ubWjnmKBQy3ZxYKxI9h8ye4.png?width=3600&height=2700",
    hoverBg: "/burns-logo.png",
  },
];

export default function Essentials() {
  const [hovered, setHovered] = React.useState(null);
  const [selectedCategory, setSelectedCategory] = React.useState("Milk Shake");

  const categories = ["Milk Shake", "Paul Mitchell"];
  const products = allProducts.filter(
    (p) => p.category === selectedCategory
  );

  return (
    <section className="py-24 bg-white text-[#0A0A0A] font-[Instrument Sans] relative">
      <div className="container mx-auto px-10">
        {/* Section Title */}
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-[42px] font-semibold leading-none tracking-tight">
            Your essentials
          </h2>

          {/* Category Tabs */}
          <div className="flex gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2 rounded-full border transition-all duration-300 ${
                  selectedCategory === cat
                    ? "bg-black text-white border-black"
                    : "bg-white border-gray-300 hover:bg-gray-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="absolute right-12 top-16 z-20 flex gap-4">
          <button
            className="swiper-button-prev bg-[#f2f2f2] hover:bg-black hover:text-white p-3 rounded-full shadow-md transition"
            aria-label="Previous"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            className="swiper-button-next bg-[#f2f2f2] hover:bg-black hover:text-white p-3 rounded-full shadow-md transition"
            aria-label="Next"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Product Carousel */}
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          slidesPerView={4}
          spaceBetween={40}
          speed={650}
          loop={true}
          grabCursor={true}
          className="!overflow-visible"
          breakpoints={{
            320: { slidesPerView: 1.1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
        >
          {products.map((p, i) => (
            <SwiperSlide key={p.id}>
              <motion.div
                className="group relative flex flex-col items-center justify-between rounded-[20px] bg-[#F9F9F8] overflow-hidden shadow-[0_6px_30px_rgba(0,0,0,0.05)] transition-all duration-300 w-full h-[520px]"
                onMouseEnter={() => setHovered(p.id)}
                onMouseLeave={() => setHovered(null)}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                {/* ❤️ Wishlist Button */}
                <button className="absolute top-5 right-5 z-30 p-2 bg-white/70 rounded-full hover:bg-white transition">
                  <Heart className="w-5 h-5 text-gray-400 group-hover:text-black" />
                </button>

                {/* Hover Background Logo */}
                <AnimatePresence>
                  {hovered === p.id && (
                    <motion.img
                      key="hover-bg"
                      src={p.hoverBg}
                      alt="Background"
                      className="absolute inset-0 w-full h-full object-contain z-0 opacity-[0.18]"
                      initial={{ opacity: 0, scale: 1.05 }}
                      animate={{ opacity: 1, scale: 0.9 }}
                      exit={{ opacity: 0, scale: 1 }}
                      transition={{ duration: 0.6 }}
                    />
                  )}
                </AnimatePresence>

                {/* Product Image */}
                <div className="relative flex justify-center items-center h-[400px] w-full py-10 z-10">
                  <motion.img
                    src={p.image}
                    alt={p.name}
                    className="w-[240px] h-auto object-contain drop-shadow-[0_4px_8px_rgba(0,0,0,0.15)]"
                    animate={{
                      scale: hovered === p.id ? 1.05 : 1,
                      y: hovered === p.id ? -8 : 0,
                    }}
                    transition={{ type: "spring", stiffness: 160, damping: 12 }}
                  />
                </div>

                {/* Product Info */}
                <motion.div
                  className="flex items-baseline justify-between w-full px-6 py-6 border-t border-[#EAEAEA] bg-[#F9F9F8] z-10"
                  animate={{ opacity: hovered === p.id ? 0.95 : 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div>
                    <h3 className="text-[17px] font-semibold leading-tight tracking-tight">
                      {p.name}
                    </h3>
                    <p className="text-gray-500 text-[14px] mt-1">
                      {p.category}
                    </p>
                  </div>
                  <p className="text-[16px] font-semibold text-[#0A0A0A]">
                    {p.price}
                  </p>
                </motion.div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
