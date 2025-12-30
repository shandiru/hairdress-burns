// src/components/TestimonialsSection.jsx
import React from "react";
import { Phone } from "lucide-react";

// Import testimonial data
import { testimonials } from "../../data/testimonials";

const StarRating = () => (
  <div className="flex text-amber-400 mb-4">
    {[...Array(5)].map((_, i) => (
      <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-teal-50 to-stone-100">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl font-light text-stone-800 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-stone-600 max-w-2xl mx-auto">
            Don't just take our word for it — hear from our valued clients
            about their experience at Burns Hair Design
          </p>
        </div>

        {/* Testimonials Grid */}
        <div
          className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="rounded-lg bg-white/80 backdrop-blur-sm shadow-xl h-full"
              data-aos="zoom-in"
              data-aos-delay={index * 150}
            >
              <div className="p-8 flex flex-col h-full">
                <StarRating />
                <blockquote className="text-stone-700 italic mb-6 flex-grow leading-relaxed">
                  “{t.quote}”
                </blockquote>
                <footer className="text-sm text-stone-500 font-medium">
                  — {t.name}
                </footer>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div
          className="text-center mt-16"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <p className="text-stone-600 mb-6">
            Ready to experience the Burns Hair Design difference?
          </p>
          <a
            href="tel:+441159374180"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2 h-11 rounded-md bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 shadow-lg"
          >
            <Phone className="h-5 w-5 mr-2" />
            Book Your Appointment Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
