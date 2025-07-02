import React from 'react'
import { motion } from "framer-motion";
import { FaBookOpen, FaSearch, FaArrowRight, FaTrophy, FaRegLightbulb } from "react-icons/fa";

const index = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="container mx-auto px-6 py-20 flex flex-col lg:flex-row items-center justify-between gap-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl lg:max-w-3xl"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Welcome To MAIMT
            </span> <br />
            Digital Library
          </h1>
          
          <p className="text-xl text-gray-700 mb-8">
            Explore our comprehensive digital resources including E-books, Journals, 
            Syllabus materials, Previous Years' Questions, and more - all designed 
            to empower your academic journey at Maharaja Agrasen Institute of Management & Technology.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium shadow-lg hover:shadow-indigo-300 transition-all"
            >
              Browse Collection <FaArrowRight />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-6 py-3 border border-indigo-600 text-indigo-600 rounded-lg font-medium hover:bg-indigo-50 transition-all"
            >
              Learn More
            </motion.button>
          </div>

          <div className="flex flex-wrap gap-6 mt-8">
            <div className="flex items-center gap-3">
              <FaBookOpen className="text-indigo-600 text-xl" />
              <span className="text-gray-700">5000+ E-books</span>
            </div>
            <div className="flex items-center gap-3">
              <FaSearch className="text-indigo-600 text-xl" />
              <span className="text-gray-700">Advanced Search</span>
            </div>
            <div className="flex items-center gap-3">
              <FaRegLightbulb className="text-indigo-600 text-xl" />
              <span className="text-gray-700">Study Resources</span>
            </div>
          </div>
        </motion.div>

        {/* Image Section - Now part of the flex layout */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-full lg:w-1/2"
        >
          <img 
            src="https://www.kindpng.com/picc/m/334-3342848_indian-student-with-books-png-transparent-png.png" 
            alt="MAIMT Digital Library" 
            className="w-full scale-150 h-auto rounded-xl shadow-2xl border-8 border-white transform rotate-1"
          />
          <motion.img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD90d_6wDovpcC50OOF1KkgkCDmoM5iJsSNA&s"
            alt="Students studying"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="scale-150 absolute -bottom-10 -left-10 w-1/2 h-auto rounded-xl shadow-lg border-4 border-white transform -rotate-3 z-10"
          />
        </motion.div>
      </div>

      {/* Features Section */}
      <div className="bg-indigo-50 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-indigo-800">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaBookOpen className="text-4xl mb-4 text-indigo-600" />,
                title: "Extensive Collection",
                description: "Access thousands of e-books and academic resources"
              },
              {
                icon: <FaSearch className="text-4xl mb-4 text-indigo-600" />,
                title: "Smart Search",
                description: "Find exactly what you need with our powerful search"
              },
              {
                icon: <FaTrophy className="text-4xl mb-4 text-indigo-600" />,
                title: "Academic Success",
                description: "Resources curated to help you excel in your studies"
              }
            ].map((feature, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-xl shadow-md text-center"
              >
                {feature.icon}
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;