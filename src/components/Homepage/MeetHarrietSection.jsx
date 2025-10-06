import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const MeetHarrietSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false, // animate on every scroll
      mirror: true, // re-animate on scroll up
    });
  }, []);

  return (
    <section className="py-20 bg-white px-0 md:px-16">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl font-light text-stone-800 mb-4">
            Meet Harriet Burns
          </h2>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto">
            Third generation hairdresser carrying forward a legacy of excellence
            since 1956
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-16">
          {/* Left: Image & Experience Badge */}
          <div className="relative" data-aos="zoom-in">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                alt="Harriet Burns - Master Hair Designer"
                loading="lazy"
                width="500"
                height="600"
                decoding="async"
                className="w-full h-auto"
                src="/harriet-portrait.png"
              />
            </div>
            <div
              className="absolute -bottom-6 -right-6 bg-teal-600 text-white p-4 rounded-xl shadow-lg"
              data-aos="fade-left"
              data-aos-delay="300"
            >
              <div className="text-center">
                <div className="text-2xl font-bold">17+</div>
                <div className="text-sm">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Right: Info Boxes */}
          <div className="space-y-6">
            <div
              className="rounded-lg bg-gradient-to-r from-teal-50 to-stone-50 shadow-lg"
              data-aos="fade-up"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold text-stone-800 mb-3">
                  Our Heritage
                </h3>
                <p className="text-stone-600">
                  Founded in 1956 by Ilsa Burns, our salon represents three
                  generations of hairdressing excellence spanning nearly seven
                  decades.
                </p>
              </div>
            </div>

            <div
              className="rounded-lg bg-gradient-to-r from-orange-50 to-amber-50 shadow-lg"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold text-stone-800 mb-3">
                  The Experience
                </h3>
                <p className="text-stone-600">
                  Drift away to the finest classical music while enjoying a
                  unique and relaxing experience in our tranquil salon
                  environment.
                </p>
              </div>
            </div>

            <div
              className="rounded-lg bg-gradient-to-r from-stone-50 to-slate-50 shadow-lg"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold text-stone-800 mb-3">
                  Continuous Learning
                </h3>
                <p className="text-stone-600">
                  Harriet constantly updates her skills through workshops,
                  bringing you the latest techniques and exciting new products.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Harriet's Journey */}
        <div className="max-w-4xl mx-auto" data-aos="fade-up">
          <h3 className="text-2xl font-light text-stone-800 mb-8 text-center">
            Harriet's Journey
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center" data-aos="zoom-in" data-aos-delay="100">
              <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">1</span>
              </div>
              <h4 className="font-semibold text-stone-800 mb-2">
                Saturday Girl
              </h4>
              <p className="text-stone-600 text-sm">
                Started her journey as a Saturday girl, learning the fundamentals
                of hair care.
              </p>
            </div>

            <div className="text-center" data-aos="zoom-in" data-aos-delay="200">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">2</span>
              </div>
              <h4 className="font-semibold text-stone-800 mb-2">
                Full-Time at 15
              </h4>
              <p className="text-stone-600 text-sm">
                Left school at fifteen to pursue her passion for hairdressing
                full-time.
              </p>
            </div>

            <div className="text-center" data-aos="zoom-in" data-aos-delay="300">
              <div className="w-16 h-16 bg-stone-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">3</span>
              </div>
              <h4 className="font-semibold text-stone-800 mb-2">
                Master Stylist
              </h4>
              <p className="text-stone-600 text-sm">
                17+ years of experience, constantly learning and perfecting her
                craft.
              </p>
            </div>
          </div>
        </div>

        {/* Quote */}
        <div
          className="max-w-3xl mx-auto mt-16 text-center"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <blockquote className="text-2xl font-light text-stone-700 italic mb-6">
            "Hairdressing is all I know, I'd be lost without it. My passion is to
            keep my guests happy at all times and to constantly learn and improve
            my skills."
          </blockquote>
          <footer className="text-stone-500">— Harriet Burns</footer>
        </div>
      </div>
    </section>
  );
};

export default MeetHarrietSection;
