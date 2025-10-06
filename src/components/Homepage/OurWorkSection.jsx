import React, { useState, useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

const OurWorkSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = 4;
  const slideRef = useRef(null);

  useEffect(() => {
    // Initialize AOS scroll animation
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
      mirror: true,
    });
  }, []);

  useEffect(() => {
    // Auto-slide every 4 seconds
    const interval = setInterval(() => {
      handleNext();
    }, 4000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
    );
  };

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
      src: "/harriet-portrait.png",
      alt: "Harriet Burns - Master Hair Designer",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-stone-100 to-slate-100">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl font-light text-stone-800 mb-4">
            Our Work
          </h2>
          <p className="text-stone-600 max-w-2xl mx-auto">
            Discover the artistry and craftsmanship that goes into every cut,
            color, and style at Burns Hair Design
          </p>
        </div>

        {/* Slider Section */}
        <div
          className="max-w-6xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="relative overflow-hidden rounded-2xl shadow-2xl">
            {/* Image Slider */}
            <div
              ref={slideRef}
              className="flex transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {images.map((image, idx) => (
                <div key={idx} className="w-full flex-shrink-0">
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                    className="w-full h-96 object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Prev Button */}
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-stone-800 p-3 rounded-full shadow-lg transition-all"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next Button */}
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-stone-800 p-3 rounded-full shadow-lg transition-all"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center mt-8 space-x-2">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentIndex === idx
                    ? "bg-teal-600"
                    : "bg-stone-300 hover:bg-teal-400"
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurWorkSection;
