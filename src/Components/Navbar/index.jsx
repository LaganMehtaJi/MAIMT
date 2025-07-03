import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaPhone, FaEnvelope, FaBars, FaTimes } from "react-icons/fa";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Paper", href: "/paper" },
  { name: "Syllabus", href: "/syllabus" },
  { name: "Rule & Regulation", href: "/rule" },
  { name: "Journals", href: "/journals" },
  { name: "E-Content", href: "/econtent" },
  { name: "Contact Us", href: "/contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="bg-white border-b border-gray-100 shadow-sm sticky top-0 z-50 w-full">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center">
            <img
              src="./maimt_logo.png"
              alt="MAIMT logo"
              className="h-10 w-auto object-contain"
            />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map(({ name, href }) => (
              <Link
                key={name}
                to={href}
                className="group relative text-sm font-semibold text-gray-600 transition-all duration-300 py-1 hover:text-indigo-700 transform hover:-translate-y-0.5 hover:shadow-md"
              >
                {name}
                <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-indigo-600 transition-all duration-300 group-hover:w-full rounded" />
              </Link>
            ))}
          </nav>

          {/* Contact Info (Hidden on small) */}
          <div className="hidden lg:flex items-center space-x-4 text-sm text-gray-700">
            <div className="flex items-center space-x-1">
              <FaPhone className="w-4 h-4 text-indigo-700" />
              <span className="font-medium">9355455140</span>
            </div>
            <div className="flex items-center text-sm">
              <FaEnvelope className="w-4 h-4 text-indigo-600 mr-2" />
              <span className="font-medium text-gray-700">director@maimt.com</span>
            </div>
          </div>

          {/* Hamburger Icon */}
          <button
            className="md:hidden p-2 text-gray-600 hover:text-indigo-700 focus:outline-none"
            onClick={toggleMenu}
          >
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-md">
          <nav className="px-4 py-3 space-y-2">
            {navItems.map(({ name, href }) => (
              <Link
                key={name}
                to={href}
                onClick={() => setMenuOpen(false)} // Close on click
                className="block text-sm font-medium text-gray-700 hover:text-indigo-600 transition-all"
              >
                {name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
