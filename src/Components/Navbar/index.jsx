import React from "react";
import { Link } from "react-router-dom";
import { FaPhone, FaEnvelope } from "react-icons/fa";

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
          
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map(({ name, href }) => (
              <Link
                key={name}
                to={href}
                className="text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors relative py-1"
              >
                {name}
                <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-indigo-600 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>
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
          
          <button className="md:hidden p-2 text-gray-500 hover:text-gray-700 focus:outline-none">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;