import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const MeetHarrietSection = () => {
  const [activeInfo, setActiveInfo] = useState(null);
  const [activeJourney, setActiveJourney] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
      mirror: true,
    });
  }, []);

  const handleInfoClick = (index) => {
    if (window.innerWidth < 768)
      setActiveInfo(activeInfo === index ? null : index);
  };

  const handleJourneyClick = (index) => {
    if (window.innerWidth < 768)
      setActiveJourney(activeJourney === index ? null : index);
  };

  return (
    <section className="py-20 bg-white px-0 md:px-16">
      <div className="container mx-auto px-4">
        {/* Heading */}
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
          {/* Image */}
          <div className="relative" data-aos="zoom-in">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl transition-all duration-500 hover:scale-105 hover:shadow-[0_0_25px_#14b8a6]">
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

          {/* Info Boxes */}
          <div className="space-y-6">
            {[
              {
                title: "Our Heritage",
                text: "Founded in 1956 by Ilsa Burns, our salon represents three generations of hairdressing excellence spanning nearly seven decades.",
                color: "#14b8a6", // teal
                gradient: "from-teal-50 to-stone-50",
              },
              {
                title: "The Experience",
                text: "Drift away to the finest classical music while enjoying a unique and relaxing experience in our tranquil salon environment.",
                color: "#f97316", // orange
                gradient: "from-orange-50 to-amber-50",
              },
              {
                title: "Continuous Learning",
                text: "Harriet constantly updates her skills through workshops, bringing you the latest techniques and exciting new products.",
                color: "#57534e", // stone
                gradient: "from-stone-50 to-slate-50",
              },
            ].map((item, index) => (
              <div
                key={index}
                onClick={() => handleInfoClick(index)}
                className={`rounded-xl bg-gradient-to-r ${item.gradient} shadow-md p-6 cursor-pointer border border-stone-100 transition-all duration-300 ease-out hover:scale-105 ${
                  activeInfo === index
                    ? `shadow-[0_0_25px_${item.color}] ring-2`
                    : ""
                }`}
                style={{
                  boxShadow:
                    activeInfo === index
                      ? `0 0 25px ${item.color}`
                      : undefined,
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.boxShadow = `0 0 25px ${item.color}`)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.boxShadow =
                    activeInfo === index ? `0 0 25px ${item.color}` : "")
                }
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <h3 className="text-xl font-semibold text-stone-800 mb-3">
                  {item.title}
                </h3>
                <p className="text-stone-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Harriet's Journey */}
        <div className="max-w-4xl mx-auto" data-aos="fade-up">
          <h3 className="text-2xl font-light text-stone-800 mb-8 text-center">
            Harriet's Journey
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: 1,
                color: "#14b8a6",
                bg: "bg-teal-600",
                title: "Saturday Girl",
                text: "Started her journey as a Saturday girl, learning the fundamentals of hair care.",
              },
              {
                step: 2,
                color: "#f97316",
                bg: "bg-orange-500",
                title: "Full-Time at 15",
                text: "Left school at fifteen to pursue her passion for hairdressing full-time.",
              },
              {
                step: 3,
                color: "#57534e",
                bg: "bg-stone-600",
                title: "Master Stylist",
                text: "17+ years of experience, constantly learning and perfecting her craft.",
              },
            ].map((item, index) => (
              <div
                key={index}
                onClick={() => handleJourneyClick(index)}
                className={`text-center cursor-pointer rounded-xl bg-white p-6 shadow-md transition-all duration-300 ease-out hover:scale-105 border border-stone-200 ${
                  activeJourney === index ? "ring-2" : ""
                }`}
                style={{
                  boxShadow:
                    activeJourney === index
                      ? `0 0 25px ${item.color}`
                      : undefined,
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.boxShadow = `0 0 25px ${item.color}`)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.boxShadow =
                    activeJourney === index ? `0 0 25px ${item.color}` : "")
                }
                data-aos="zoom-in"
                data-aos-delay={index * 150}
              >
                <div
                  className={`${item.bg} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transition-transform duration-300 ${
                    activeJourney === index ? "scale-110 shadow-lg" : ""
                  }`}
                >
                  <span className="text-white font-bold text-lg">
                    {item.step}
                  </span>
                </div>
                <h4 className="font-semibold text-stone-800 mb-2">
                  {item.title}
                </h4>
                <p className="text-stone-600 text-sm">{item.text}</p>
              </div>
            ))}
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
