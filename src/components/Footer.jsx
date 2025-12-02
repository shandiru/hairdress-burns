import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300 pt-16 pb-10  border-t border-stone-700">
      <div className="max-w-7xl mx-auto px-6">

        {/* TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* BRAND + LOGO */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <img
              src="/burns-logo.jpeg"
              alt="Burns Hair Design Logo"
              className="w-32 h-32 object-contain rounded-lg"
            />

            <p className="text-stone-400 text-center md:text-left leading-relaxed">
              Established in 1956 — Burns Hair Design continues a tradition of
              three generations delivering exceptional hair care and styling.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-stone-400">
              <li><a href="/" className="hover:text-white transition">Home</a></li>
              <li><a href="#about" className="hover:text-white transition">About</a></li>
              <li><a href="#our-work" className="hover:text-white transition">Our Work</a></li>
              <li><a href="#services" className="hover:text-white transition">Services</a></li>
              <li><a href="#products" className="hover:text-white transition">Products</a></li>
              <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
              <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* CONTACT INFO */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-white text-lg font-semibold mb-4">Contact Us</h3>

            <div className="space-y-3 text-stone-400 text-sm">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-teal-400" />
                <span>0115 937 4180</span>
              </div>

              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-teal-400" />
                <span>   6 The Square, Keyworth, Nottingham NG12 5JT, United Kingdom</span>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-teal-400" />
                <span>info@burnshairdesign.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="border-t border-stone-700 mt-12 pt-6"></div>

        {/* BOTTOM SECTION */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm space-y-4 md:space-y-0 text-stone-400">

          <p>
            © {new Date().getFullYear()} Burns Hair Design — All Rights Reserved.
          </p>

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
