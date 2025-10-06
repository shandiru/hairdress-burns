import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  MapPin,
  Phone,
  Sparkles,
} from "lucide-react";

const ContactSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <section className="py-20 bg-stone-800 text-white px-0 md:px-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column */}
          <div data-aos="fade-right">
            <h2 className="text-4xl font-light mb-8">Get In Touch</h2>

            {/* Contact Details */}
            <div className="space-y-6 mb-8">
              {/* Address */}
              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-teal-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Address</h3>
                  <p className="text-stone-300 leading-relaxed">
                    6 The Square
                    <br />
                    Keyworth, Nottingham
                    <br />
                    NG12 5JT
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4">
                <Phone className="h-6 w-6 text-teal-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <p className="text-stone-300">0115 937 4180</p>
                </div>
              </div>

              {/* Experience */}
              <div className="flex items-start space-x-4">
                <Sparkles className="h-6 w-6 text-teal-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Experience</h3>
                  <p className="text-stone-300 leading-relaxed">
                    Relax to classical music while receiving expert hair care in
                    our tranquil environment.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Booking Box */}
            <div
              className="bg-teal-600 text-white p-6 rounded-xl shadow-lg"
              data-aos="zoom-in"
            >
              <h3 className="text-xl font-semibold mb-2">Quick Booking</h3>
              <p className="mb-4">
                Call us directly for immediate assistance
              </p>
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium h-11 rounded-md px-8 w-full bg-white text-teal-600 hover:bg-stone-100 transition-colors shadow-md">
                <Phone className="h-5 w-5 mr-2" />
                Call Now: 0115 937 4180
              </button>
            </div>
          </div>

          {/* Right Column — Contact Form */}
          <div
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8"
            data-aos="fade-left"
          >
            <h3 className="text-2xl font-light mb-6">Send Us a Message</h3>
            <form className="space-y-6">
              {/* Name Fields */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium mb-2"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="Your first name"
                    required
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent"
                  />
                </div>

                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium mb-2"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Your last name"
                    required
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="your.email@example.com"
                  required
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent"
                />
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium mb-2"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Your phone number"
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent"
                />
              </div>

              {/* Service Interest */}
              <div>
                <label
                  htmlFor="service"
                  className="block text-sm font-medium mb-2"
                >
                  Service Interest
                </label>
                <select
                  id="service"
                  name="service"
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent"
                >
                  <option value="" className="text-stone-800">
                    Select a service
                  </option>
                  <option value="cut-finish" className="text-stone-800">
                    Cut & Finish
                  </option>
                  <option value="wash-cut" className="text-stone-800">
                    Wash & Cut
                  </option>
                  <option value="blowdry-finish" className="text-stone-800">
                    Blowdry & Finish
                  </option>
                  <option value="root-tint" className="text-stone-800">
                    Root Tint
                  </option>
                  <option value="half-mech" className="text-stone-800">
                    Half Mech
                  </option>
                  <option value="full-mech" className="text-stone-800">
                    Full Mech
                  </option>
                  <option value="demi-semi" className="text-stone-800">
                    Demi/Semi
                  </option>
                  <option value="consultation" className="text-stone-800">
                    Free Consultation
                  </option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Tell us about your hair goals or any questions you have..."
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium h-11 rounded-md px-8 w-full bg-teal-600 hover:bg-teal-700 text-white transition-colors shadow-md"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
