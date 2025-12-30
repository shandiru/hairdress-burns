
import * as React from "react";
import { Heart } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { allProducts } from "../../data/products";


export default function Essentials() {
  const [hovered, setHovered] = React.useState(null);
  const [selectedCategory, setSelectedCategory] = React.useState("Milk Shake");

  const categories = ["Milk Shake", "Paul Mitchell"];
  const products = allProducts.filter((p) => p.category === selectedCategory);

  return (
    <section
      className="py-16 md:py-24 bg-white text-[#0A0A0A] font-[Instrument Sans] relative overflow-hidden"
      id="products"
    >
      <div className="container mx-auto px-4 md:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-5 mb-8 md:mb-14">
          <h2 className="text-[30px] sm:text-[36px] md:text-[42px] font-semibold leading-tight tracking-tight">
            Your essentials
          </h2>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm sm:text-base border transition-all duration-300 ${
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

        {/* Swiper */}
        <Swiper
          slidesPerView={1}
          spaceBetween={16}
          speed={0}
          loop={false}
          grabCursor={true}
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 28 },
            1024: { slidesPerView: 3, spaceBetween: 32 },
            1280: { slidesPerView: 4, spaceBetween: 40 },
          }}
          className="!overflow-visible"
        >
          {products.map((p) => (
            <SwiperSlide key={p.id}>
              <div
                className="group relative flex flex-col items-center justify-between rounded-[20px] bg-[#F9F9F8] overflow-hidden shadow-[0_6px_30px_rgba(0,0,0,0.05)] w-full h-[460px] sm:h-[480px] md:h-[500px]"
                onMouseEnter={() => setHovered(p.id)}
                onMouseLeave={() => setHovered(null)}
              >
                {/* Wishlist Button */}
                <button className="absolute top-4 right-4 z-30 p-2 bg-white/70 rounded-full hover:bg-white transition">
                  <Heart className="w-5 h-5 text-gray-400 group-hover:text-black" />
                </button>

                {/* Hover Background (static) */}
                {hovered === p.id && (
                  <img
                    src={p.hoverBg}
                    alt="hover background"
                    className="absolute inset-0 w-full h-full object-contain z-0 opacity-[1]"
                  />
                )}

                {/* Product Image */}
                <div className="relative flex justify-center items-center h-[300px] sm:h-[340px] md:h-[380px] w-full py-6 sm:py-8 z-10">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-[160px] sm:w-[200px] md:w-[240px] h-auto object-contain"
                  />
                </div>

                {/* Product Info */}
                <div className="flex flex-col w-full px-5 sm:px-6 py-5 border-t border-[#EAEAEA] bg-[#F9F9F8] z-10 text-center sm:text-left">
                  <h3 className="text-[15px] sm:text-[17px] font-semibold leading-tight tracking-tight mb-1">
                    {p.name}
                  </h3>
                  <p className="text-gray-500 text-[13px] sm:text-[14px] mb-2">
                    {p.category}
                  </p>
                  <p className="text-[13px] sm:text-[15px] text-gray-700 leading-snug">
                    {p.description}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
