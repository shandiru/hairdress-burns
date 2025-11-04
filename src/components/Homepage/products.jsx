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
    name: "Milk shake make my day",
    category: "Milk Shake",
    description: "Hydrating conditioner for soft, radiant hair",
    image:
      "milk-shake-make-my-day-conditioner-300-ml-removebg-preview.png",
    hoverBg: "/burns-logo.png",
  },
  {
    id: 2,
    name: "milk shake silver shine conditioner",
    category: "Milk Shake",
    description: "Neutralises yellow tones for bright, shiny blondes.",
    image:
      "silver_shine_conditioner_100ml_2048x-removebg-preview.png",
    hoverBg: "/burns-logo.png",
  },
  {
    id: 3,
    name: "milk shake k respect keratin system",
    category: "Milk Shake",
    description: "Smoothing treatment that respects hair and the environment..",
    image:
      "k_respect_smoothing_maintainer_mist_150ml-removebg-preview.png",
    hoverBg: "/burns-logo.png",
  },
  {
    id: 4,
    name: "Paul Mitchell Color Protect Shampoo",
    category: "Paul Mitchell",
    description: "Gentle cleanser that preserves color and boosts shine.",
    image:
      "Paul Mitchell Color Protect Shampoo.png",
    hoverBg: "/burns-logo.png",
  },
  {
    id: 5,
    name: "milk shake moisture plus shampoo",
    category: "Milk Shake",
    description: "Moisture-boosting cleanse that leaves hair soft, manageable & vibrant..",
    image:
      "milk_shake-Moisture-Plus-Shampoo-300ml_1-removebg-preview.png",
    hoverBg: "/burns-logo.png",
  },
   {
    id: 6,
    name: "milk shake colour care",
    category: "Milk Shake",
    description: "Protects your hair colour, hydrates and enhances shine.",
    image:
      "FLOWERPOWERSHAMPOO300ML-UPDATED2024_2048x-removebg-preview.png",
    hoverBg: "/burns-logo.png",
  },
   {
    id: 7,
    name: "milk shake integrity",
    category: "Milk Shake",
    description: "Deep-nourish and restore damaged hair with muru muru butter.",
    image:
      "INTEGRITY_SHAMPOO_300ML_-_UPDATED_2024_2048x-removebg-preview.png",
    hoverBg: "/burns-logo.png",
  },
  {
    id: 8,
    name: "Milk Shake Whipped Cream Leave-In Foam",
    category: "Milk Shake",
    description: "Nourishing leave-in foam that softens, hydrates, and protects hair with milk proteins and Integrity.",
    image:
      "Milk_Shake_Whipped_Cream_Leave-In_Foam-removebg-preview.png",
    hoverBg: "/burns-logo.png",
  },
  {
    id: 9,
    name: "Milk Shake Leave In Conditioner",
    category: "Milk Shake",
    description: "Hydrating leave-in conditioner with milk proteins and fruit extracts for smooth, manageable hair.",
    image:
      "Milk Shake Leave In Conditioner.png",
    hoverBg: "/burns-logo.png",
  },
  {
    id: 10,
    name: "Paul Mitchell Color Protect Conditioner",
    category: "Paul Mitchell",
    description: "Hydrates and shields color-treated hair from fading.",
    image:
      "Paul_Mitchell_Color_Protect_Conditioner-removebg-preview.png",
    hoverBg: "/burns-logo.png",
  },
  {
    id: 11,
    name: "Paul Mitchell Extra-Body Shampoo",
    category: "Paul Mitchell",
    description: "Adds volume and body for fine or limp hair..",
    image:
      "Paul_Mitchell_Extra-Body_Shampoo-removebg-preview.png",
    hoverBg: "/burns-logo.png",
  },
   {
    id: 12,
    name: "Paul Mitchell Extra-Body Conditioner",
    category: "Paul Mitchell",
    description: "Detangles while thickening strands for fuller results.",
    image:
      "paul-mitchell-extra-body-thicken-up-styling-liquid-200ml-p28680-72782_image-removebg-preview.png",
    hoverBg: "/burns-logo.png",
  },
  {
    id: 13,
    name: "Paul Mitchell Super Strong Shampoo",
    category: "Paul Mitchell",
    description: "Strengthens weak hair, reducing breakage and split ends..",
    image:
      "Paul_Mitchell_Super_Strong_Shampoo-removebg-preview.png",
    hoverBg: "/burns-logo.png",
  },
  {
    id: 14,
    name: "Paul Mitchell Super Strong Conditioner",
    category: "Paul Mitchell",
    description: "Repairs and rebuilds damaged hair for resilience and shine..",
    image:
      "Paul_Mitchell_Super_Strong_Conditioner-removebg-preview.png",
    hoverBg: "/burns-logo.png",
  },
   {
    id: 15,
    name: "Paul Mitchell Smooth Shampoo",
    category: "Paul Mitchell",
    description: "Controls frizz and smooths coarse, unruly hair..",
    image:
      "Paul_Mitchell_Smooth_Shampoo-removebg-preview.png",
    hoverBg: "/burns-logo.png",
  },
   {
    id: 16,
    name: "Paul Mitchell The Detangler",
    category: "Paul Mitchell",
    description: "Instantly detangles and softens medium to coarse hair..",
    image:
      "Paul_Mitchell_The_Detangler-removebg-preview.png",
    hoverBg: "/burns-logo.png",
  },
   {
    id: 17,
    name: "Paul Mitchell Instant Moisture Shampoo",
    category: "Paul Mitchell",
    description: "Restores hydration and elasticity to dry, thirsty hair.",
    image:
      "Paul_Mitchell_Instant_Moisture_Shampoo-removebg-preview.png",
    hoverBg: "/burns-logo.png",
  },
   {
    id: 18,
    name: "Paul Mitchell Soft Style Spray or Foam",
    category: "Paul Mitchell",
    description: "Lightweight styling hold that adds softness and natural shine..",
    image:
      "Paul_Mitchell_Soft_Style_Spray_or_Foam-removebg-preview.png",
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
                  className="flex flex-col w-full px-6 py-6 border-t border-[#EAEAEA] bg-[#F9F9F8] z-10"
                  animate={{ opacity: hovered === p.id ? 0.95 : 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-[17px] font-semibold leading-tight tracking-tight mb-1">
                    {p.name}
                  </h3>
                  <p className="text-gray-500 text-[14px] mb-2">
                    {p.category}
                  </p>
                  <p className="text-[15px] text-gray-700 leading-snug">
                    {p.description}
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
