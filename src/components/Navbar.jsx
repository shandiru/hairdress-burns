"use client";

import React, { useState } from "react";
import { Phone, MapPin, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/#" },
    { name: "About", href: "/#about" },
    { name: "Our Work", href: "/#our-work" },
    { name: "Services", href: "/#services" },
    { name: "Products", href: "/#products" },
    { name: "Contact", href: "/#contact" },
  ];

  const address = "6 The Square, Keyworth";

  const mapsLink =
    "https://www.google.com/maps?sca_esv=940aa337a8577638&rlz=1C5CHFA_enCA1132CA1132&sxsrf=AE3TifPdmE1kufqFORhnY_0rFG4NQrrnKA:1764699965931&kgmid=/g/1v27v0bd&shndl=30&shem=damc,lcuae,uaasie,shrtsdl&kgs=1cf3f3ec5b8a63c6&um=1&ie=UTF-8&fb=1&gl=lk&sa=X&geocode=KXmbl2SrxHlIMRXREbkM2F6b&daddr=6+The+Square,+Keyworth,+Nottingham+NG12+5JT,+United+Kingdom";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">

        {/* LOGO */}
        <div className="flex items-center space-x-3">
          <img
            src="/burns-logo-removebg-preview.png"
            alt="Burns Hair Design Logo"
            className="h-16 w-auto object-contain"
          />
        </div>

        {/* DESKTOP NAV */}
        <nav className="hidden xl:flex items-center space-x-8">
          {navLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              className="text-stone-700 dark:text-stone-200 hover:text-teal-600 font-medium transition"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* DESKTOP CONTACT */}
        <div className="hidden xl:flex items-center space-x-6 text-sm text-stone-600 dark:text-stone-300">
          <a
            href="tel:+441159374180"
            className="flex items-center space-x-1 hover:text-teal-600"
          >
            <Phone className="h-4 w-4" />
            <span>+44 115 937 4180</span>
          </a>

          <a
            href={mapsLink}
            target="_blank"
            className="flex items-center space-x-1 hover:text-teal-600"
          >
            <MapPin className="h-4 w-4" />
            <span>{address}</span>
          </a>
        </div>

        {/* MOBILE HAMBURGER */}
        <button
          className="xl:hidden p-2 text-stone-700 dark:text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>

      {/* MOBILE MENU */}
      
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden bg-white/95 dark:bg-black/95 backdrop-blur-xl border-t border-stone-200"
          >
            <div className="px-6 py-4 space-y-4">

              {navLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block text-lg font-medium text-stone-800 dark:text-stone-200 hover:text-teal-600 transition"
                >
                  {link.name}
                </a>
              ))}

              <a
                href="tel:+441159374180"
                className="flex items-center space-x-2 text-stone-700 dark:text-stone-300 pt-3 hover:text-teal-600"
              >
                <Phone className="h-5 w-5" />
                <span className="text-lg font-medium">+44 115 937 4180</span>
              </a>

              <a
                href={mapsLink}
                target="_blank"
                className="flex items-center space-x-2 text-stone-700 dark:text-stone-300 hover:text-teal-600"
              >
                <MapPin className="h-5 w-5" />
                <span className="text-lg font-medium">{address}</span>
              </a>

              <a
                href="/#contact"
                className="mt-4 block w-full text-center bg-teal-600 text-white py-3 rounded-lg font-semibold shadow hover:bg-teal-700 transition"
                onClick={() => setOpen(false)}
              >
                Book Appointment
              </a>
            </div>
          </motion.div>
        )}
      
    </header>
  );
};

export default Header;