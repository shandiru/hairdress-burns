import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300 pt-12 pb-8 border-t border-stone-700">
      <div className="max-w-7xl mx-auto px-6">

        {/* TOP GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-12">

          {/* BRAND + LOGO */}
          <div className="flex flex-col items-center sm:items-start space-y-4 text-center sm:text-left">
            <img
              src="/burns-logo.jpeg"
              alt="Burns Hair Design Logo"
              className="w-28 h-28 sm:w-32 sm:h-32 object-contain rounded-lg"
            />
            <p className="text-stone-400 leading-relaxed text-sm sm:text-base">
              Established in 1956 — Burns Hair Design continues a tradition of
              three generations delivering exceptional hair care and styling.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-stone-400 text-sm">
              <li><a href="/" className="hover:text-white transition">Home</a></li>
              <li><a href="#about" className="hover:text-white transition">About</a></li>
              <li><a href="#our-work" className="hover:text-white transition">Our Work</a></li>
              <li><a href="#services" className="hover:text-white transition">Services</a></li>
              <li><a href="#products" className="hover:text-white transition">Products</a></li>
              <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
              <li><a href="privacy-policy" className="hover:text-white transition">Privacy Policy</a></li>
              <li><a href="terms-conditions" className="hover:text-white transition">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* CONTACT INFO */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <h3 className="text-white text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3 text-stone-400 text-sm">
              <a href="tel:+441159374180" className="flex items-center justify-center sm:justify-start space-x-3 hover:text-white transition">
                <Phone className="h-5 w-5 text-teal-400" />
                <span>+44 115 937 4180</span>
              </a>
              <a
                href="https://www.google.com/maps/dir//6+The+Square,+Keyworth,+Nottingham+NG12+5JT,+United+Kingdom/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center sm:justify-start space-x-3 hover:text-white transition"
              >
                <MapPin className="h-5 w-5 text-teal-400" />
                <span>6 The Square, Keyworth, Nottingham NG12 5JT, UK</span>
              </a>
              <a href="mailto:harrietburns1989@gmail.com" className="flex items-center justify-center sm:justify-start space-x-3 hover:text-white transition">
                <Mail className="h-5 w-5 text-teal-400" />
                <span>harrietburns1989@gmail.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="border-t border-stone-700 mt-10 pt-6"></div>

        {/* BOTTOM SECTION */}
        <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center text-sm space-y-3 sm:space-y-0 text-stone-400 text-center">
          <p>© {new Date().getFullYear()} Burns Hair Design — All Rights Reserved.</p>
          <p>
            Powered by{" "}
            <a
              href="https://www.ansely.co.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-400 hover:text-teal-300 font-medium"
            >
              Ansely
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
