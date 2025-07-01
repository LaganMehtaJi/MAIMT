import React from 'react'
import { motion } from "framer-motion";
import { FaBookOpen, FaSearch, FaArrowRight, FaTrophy, FaRegLightbulb } from "react-icons/fa";
import image from "../../assets/image.png";

 const index = () => {
  return (
    <>
    <div className='display flex justify-center'>
    <div className="min-h-screen bg-white">
    

      {/* Hero Section */}
      <div className="container mx-auto px-6 py-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-indigo-600 to-indigo-300 bg-clip-text text-transparent">
              Welcome To
            </span> <br />
MAIMT
          </h1>
          
          <p className="text-xl text-indigo-600 mb-8">
          The Digital Library at Maharaja Agrasen Institute of Management & Technology has been developed to provide easy access of the resources like E-book, Journal, Syllabus, Previous Years University Questions, Time Table and other academic resources to the student of the institute.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-3 bg-indigo-600 hover:bg-indgo-600 rounded-lg text-white font-medium flex items-center gap-2"
            >
              Get Started <FaArrowRight />
            </motion.button>
            
            <button className="px-8 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-lg border border-white/10 flex items-center gap-2">
              <FaSearch /> Quick Search
            </button>
          </div>
        </motion.div>

        
      </div>


    </div>


    {/* image Section */}
    <div className="flex justify-center items-center h-screen">
     <img  src={image} alt="notfoiund" className='w-90  h-70 scale-150' />
    </div>



     </div>
    </>
  );
};

export default index;