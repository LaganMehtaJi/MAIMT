import React from "react";
import { Link } from "react-router-dom";
import { FaPhone, FaMailBulk } from "react-icons/fa";

const navItems = [
  { name: "HOME", href: "#" },
  { name: "ABOUT MAIMT", href: "#" },
  { name: "PAPER", href: "#" },
  { name: "SYLLABUS", href: "#" },
  { name: "RULE & REGULATION", href: "#" },
  { name: "JOURNALS", href: "#" },
  { name: "TIME TABLE", href: "#" },
  { name: "ECONTENT", href: "#" },
  { name: "CONTACT US", href: "#" },
];

const Navbar = () => {
  return (
    <header className="bg-gradient-to-r from-[#f5f7fa] to-[#edf1f7] shadow-sm sticky top-0 z-50 w-full py-1">
      <div className="w-full">
        <div className="flex items-center justify-between py-3 px-4">
          <Link to="/" className="flex items-center">
            <img
              src="./maimt_logo.png"
              alt="Maimt logo"
              className="h-14 w-auto object-contain"
            />
          </Link>
          <nav className="flex items-center space-x-6">
            {navItems.map(({ name, href }) => (
              <Link
                key={name}
                to={href}
                className="relative pb-1 font-medium text-gray-700 group whitespace-nowrap text-sm"
              >
                {name}
                <span className="absolute left-0 -bottom-0.5 h-0.5 w-0 bg-indigo-600 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>
          <div className="hidden lg:flex items-center space-x-4 text-sm text-gray-700">
            <div className="flex items-center space-x-1">
              <FaPhone className="w-4 h-4 text-indigo-700" />
              <span className="font-medium">9355455140</span>
            </div>
            <div className="flex items-center space-x-1">
              <FaMailBulk className="w-4 h-4 text-indigo-700" />
              <span className="font-medium">director@maimt.com</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
