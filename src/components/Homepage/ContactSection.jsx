"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import emailjs from "@emailjs/browser"; // <-- EmailJS added
import { MapPin, Phone, Sparkles, Mail } from "lucide-react";

const ContactSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
      mirror: true,
    });
  }, []);

  // EMAILJS SUBMIT FUNCTION
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID", // <-- replace
        "YOUR_TEMPLATE_ID", // <-- replace
        e.target,
        "YOUR_PUBLIC_KEY" // <-- replace
      )
      .then(
        () => {
          alert("Message Sent Successfully!");
          e.target.reset();
        },
        (error) => {
          alert("Failed to send. Try again.");
          console.error(error);
        }
      );
  };

  return (
    <section className="py-20 bg-stone-800 text-white px-0 md:px-16" id="contact">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16">

          {/* LEFT COLUMN */}
          <div data-aos="fade-right">
            <h2 className="text-4xl font-light mb-8">Get In Touch</h2>

            <div className="space-y-6 mb-8">

              {/* Address - Click Maps */}
              <a
                href="https://www.google.com/maps?sca_esv=940aa337a8577638&rlz=1C5CHFA_enCA1132CA1132&sxsrf=AE3TifPdmE1kufqFORhnY_0rFG4NQrrnKA:1764699965931&kgmid=/g/1v27v0bd&shndl=30&shem=damc,lcuae,uaasie,shrtsdl&kgs=1cf3f3ec5b8a63c6&um=1&ie=UTF-8&fb=1&gl=lk&sa=X&geocode=KXmbl2SrxHlIMRXREbkM2F6b&daddr=6+The+Square,+Keyworth,+Nottingham+NG12+5JT,+United+Kingdom"
                target="_blank"
                className="flex items-start space-x-4 hover:text-teal-300"
              >
                <MapPin className="h-6 w-6 text-teal-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Address</h3>
                  <p className="text-stone-300 leading-relaxed">
                 6 The Square, Keyworth, Nottingham NG12 5JT, United Kingdom
                  </p>
                </div>
              </a>

              {/* Phone - Click to Call */}
              <a
                href="tel:01159374180"
                className="flex items-start space-x-4 hover:text-teal-300"
              >
                <Phone className="h-6 w-6 text-teal-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <p className="text-stone-300">0115 937 4180</p>
                </div>
              </a>

              {/* Email - Click to open mail */}
              <a
                href="mailto:info@burnshairdesign.com"
                className="flex items-start space-x-4 hover:text-teal-300"
              >
                <Mail className="h-6 w-6 text-teal-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-stone-300">info@burnshairdesign.com</p>
                </div>
              </a>

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
              <p className="mb-4">Call us directly for immediate assistance</p>

              <a
                href="tel:01159374180"
                className="inline-flex items-center justify-center gap-2 text-sm font-medium h-11 rounded-md px-8 w-full bg-white text-teal-600 hover:bg-stone-100 transition shadow-md"
              >
                <Phone className="h-5 w-5 mr-2" />
                Call Now: 0115 937 4180
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN — EMAILJS FORM */}
          <div
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8"
            data-aos="fade-left"
          >
            <h3 className="text-2xl font-light mb-6">Send Us a Message</h3>

            <form className="space-y-6" onSubmit={sendEmail}>
              
              {/* Name Fields */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    required
                    placeholder="Your first name"
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    required
                    placeholder="Your last name"
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your phone number"
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white"
                />
              </div>

              {/* Service Interest */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Service Interest
                </label>
                <select
                  name="service"
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white"
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
                <label className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  rows="4"
                  placeholder="Tell us about your hair goals..."
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white resize-none"
                ></textarea>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 rounded-lg shadow-md"
              >
                Send Message
              </button>
          <p class="text-xs text-center text-white" >By submitting this form, you agree to us processing your details to respond to your enquiry. Your information is handled securely and in line with our Privacy Policy.</p>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
