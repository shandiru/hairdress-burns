import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Scissors, Palette } from "lucide-react";

const ServicesPricingSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
      mirror: true,
    });
  }, []);

  const hairServices = [
    { name: "Cut & Finish", price: "£54+" },
    { name: "Wash & Cut", price: "£44+" },
    { name: "Blowdry & Finish", price: "£35+" },
  ];

  const colorServices = [
    { name: "Root Tint", price: "£87+" },
    { name: "Half Mech", price: "£85+" },
    { name: "Full Mech", price: "£100+" },
    { name: "Demi/Semi", price: "£79+" },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-stone-50 to-slate-100">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl font-light text-stone-800 mb-4">
            Services & Pricing
          </h2>
          <p className="text-stone-600 max-w-2xl mx-auto">
            All prices can vary depending on time taken and stylist chosen.
            Please call to book a free consultation for an exact quote.
          </p>
        </div>

        {/* Grid */}
        <div
          className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {/* Hair Services Card */}
          <div
            className="rounded-lg bg-white/80 backdrop-blur-sm shadow-xl"
            data-aos="zoom-in"
          >
            <div className="p-8">
              <div className="flex items-center mb-6">
                <Scissors className="h-8 w-8 text-teal-600 mr-3" />
                <h3 className="text-2xl font-light text-stone-800">
                  Hair Services
                </h3>
              </div>

              <div className="space-y-6">
                {hairServices.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center border-b border-stone-200 pb-4"
                  >
                    <span className="text-lg text-stone-700">{item.name}</span>
                    <span className="text-xl font-semibold text-stone-800">
                      {item.price}
                    </span>
                  </div>
                ))}

                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mt-6">
                  <p className="text-sm text-amber-800 font-medium">
                    <strong>Please note:</strong> We do not offer dry cuts, as
                    that's the worst possible way to cut hair. We believe in
                    precision and quality above all.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Color Services Card */}
          <div
            className="rounded-lg bg-white/80 backdrop-blur-sm shadow-xl"
            data-aos="zoom-in"
            data-aos-delay="150"
          >
            <div className="p-8">
              <div className="flex items-center mb-6">
                <Palette className="h-8 w-8 text-orange-500 mr-3" />
                <h3 className="text-2xl font-light text-stone-800">
                  Color Services
                </h3>
              </div>

              <div className="space-y-6">
                {colorServices.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center border-b border-stone-200 pb-4"
                  >
                    <span className="text-lg text-stone-700">{item.name}</span>
                    <span className="text-xl font-semibold text-stone-800">
                      {item.price}
                    </span>
                  </div>
                ))}

                <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mt-6">
                  <p className="text-sm text-orange-800">
                    <strong>Color expertise:</strong> All color prices include
                    cut & finish. Color services require premium products and
                    expertise, reflecting our commitment to quality.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesPricingSection;
