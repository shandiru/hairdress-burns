import React from "react";
import { Phone, MapPin, Scissors } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-stone-200">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo + Brand Name */}
        <div className="flex items-center space-x-2">
          <Scissors className="h-6 w-6 text-teal-600" />
          <span className="text-xl font-bold text-stone-800">
            Burns Hair Design
          </span>
        </div>

        {/* Contact Info (Visible on md and up) */}
        <div className="hidden md:flex items-center space-x-6 text-sm text-stone-600">
          {/* Phone */}
          <div className="flex items-center space-x-1">
            <Phone className="h-4 w-4" />
            <span>0115 937 4180</span>
          </div>

          {/* Location */}
          <div className="flex items-center space-x-1">
            <MapPin className="h-4 w-4" />
            <span>Keyworth, Nottingham</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
