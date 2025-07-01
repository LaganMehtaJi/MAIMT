import React from 'react';
import { motion } from "framer-motion";
import { FaBookOpen, FaSearch, FaArrowRight, FaTrophy, FaRegLightbulb, FaUserTie } from "react-icons/fa";
import Nr from "./../../assets/NR1.png";

const LibraryHero = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-indigo-50">
      

      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 mb-12 lg:mb-0"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-indigo-600 to-blue-400 bg-clip-text text-transparent">
                Welcome To
              </span> <br />
              <span className="text-indigo-800">MAIMT Digital Library</span>
            </h1>
            
            <p className="text-lg text-indigo-700 mb-8 leading-relaxed">
              The Digital Library at Maharaja Agrasen Institute of Management & Technology provides 
              seamless access to academic resources including E-books, Journals, Syllabus, 
              Previous Years' University Questions, Time Tables, and more.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-blue-500 hover:from-indigo-700 hover:to-blue-600 rounded-lg text-white font-medium flex items-center gap-2 shadow-lg shadow-indigo-200"
              >
                Explore Resources <FaArrowRight />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="px-8 py-3 bg-white hover:bg-indigo-50 rounded-lg border border-indigo-200 text-indigo-600 font-medium flex items-center gap-2 shadow-sm"
              >
                <FaSearch /> Quick Search
              </motion.button>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-white rounded-xl border border-indigo-100 shadow-sm">
                <FaBookOpen className="text-indigo-500 text-xl mb-2" />
                <h3 className="font-semibold text-indigo-800">10,000+ E-Resources</h3>
              </div>
              <div className="p-4 bg-white rounded-xl border border-indigo-100 shadow-sm">
                <FaRegLightbulb className="text-indigo-500 text-xl mb-2" />
                <h3 className="font-semibold text-indigo-800">24/7 Access</h3>
              </div>
            </div>
          </motion.div>

          {/* Image Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 flex flex-col items-center"
          >
            <div className="relative">
              <img 
                src={Nr} 
                alt="MAIMT Digital Library" 
                className="w-full max-w-md rounded-xl shadow-2xl border-8 border-white"
              />
              
              {/* Director Badge */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="absolute -bottom-6 -right-6 bg-white px-6 py-3 rounded-full shadow-lg border border-indigo-100 flex items-center"
              >
                <div className="bg-indigo-100 p-2 rounded-full mr-3">
                  <FaUserTie className="text-indigo-600" />
                </div>
                <div>
                  <p className="text-xs text-indigo-400">Director</p>
                  <p className="font-semibold text-indigo-800">Dr. Narinder Rana</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Testimonials */}
        <div className="mt-24 text-center">
          <h2 className="text-2xl font-bold text-indigo-800 mb-8">Trusted by Students & Faculty</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              "The digital library transformed my research workflow completely.",
              "Instant access to all my course materials in one place.",
              "The most comprehensive academic resource portal I've used."
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-xl border border-indigo-100 shadow-sm"
              >
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FaTrophy key={i} className="text-yellow-400 mx-0.5" />
                  ))}
                </div>
                <p className="text-indigo-700 mb-4">{testimonial}</p>
                <div className="h-px bg-indigo-100 my-4"></div>
                <p className="text-sm text-indigo-400">MAIMT Student</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LibraryHero;