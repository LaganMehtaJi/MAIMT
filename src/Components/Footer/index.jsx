import React from "react";
import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white px-6 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <img src="/maimt_logo.png" alt="Logo" className="h-12 mb-4" />
          <p className="text-base text-gray-400 mb-4">
            Let's connect with our socials
          </p>
          <div className="flex space-x-4">
            <Link to="https://www.instagram.com/maimt_official/" aria-label="Instagram">
              <FaInstagram className="text-xl hover:text-violet-400 transition" />
            </Link>
            <Link to="https://www.facebook.com/maimtdetail" aria-label="Facebook">
              <FaFacebookF className="text-xl hover:text-violet-400 transition" />
            </Link>
            <Link to="https://www.youtube.com/channel/UC1QMVfQRa6IC-ljOBu1HIBQ" aria-label="YouTube">
              <FaYoutube className="text-xl hover:text-violet-400 transition" />
            </Link>
            <Link to="https://www.linkedin.com/school/maimtdetail/" aria-label="LinkedIn">
              <FaLinkedinIn className="text-xl hover:text-violet-400 transition" />
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-x-6 text-base text-gray-400">
          <Link to="#" className="mb-2 hover:text-white">About Us</Link>
          <Link to="#" className="mb-2 hover:text-white">Support</Link>
          <Link to="#" className="mb-2 hover:text-white">Privacy Policy</Link>
          <Link to="#" className="mb-2 hover:text-white">Terms & Conditions</Link>
          <Link to="#" className="mb-2 hover:text-white">Pricing</Link>
          <Link to="#" className="mb-2 hover:text-white">Hire From Us</Link>
        </div>
        <div className="space-y-4 text-base text-gray-400">
          <div className="flex items-start space-x-2">
            <FaPhoneAlt className="text-violet-400 mt-1" />
            <span>9355455140</span>
          </div>
          <div className="flex items-start space-x-2">
            <FaEnvelope className="text-violet-400 mt-1" />
            <span>director@maimt.com</span>
          </div>
          <div className="flex items-start space-x-2">
            <FaMapMarkerAlt className="text-violet-400 mt-1" />
            <div className="whitespace-nowrap max-w-[250px] truncate md:whitespace-normal md:max-w-none">
              Maharaja Agrasen Institute of Management and Technology, Near Sec-15, HUDA, Old Saharanpur Road, Jagadhri - 135003
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
        © Maharaja Agrasen Institute of Management & Technology, 2025. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
