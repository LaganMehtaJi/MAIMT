import {useEffect} from 'react';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import { FaMailBulk } from "react-icons/fa";

const Contact = () => {
   useEffect(()=>{
      scrollTo(top);
    },[])
  return (
    <>
      <Navbar />
      <div className='w-full min-h-screen flex flex-col lg:flex-row'>
        
        {/* Left Side - Icon */}
        <div className='w-full lg:w-1/2 bg-indigo-600 flex justify-center items-center p-10'>
          <FaMailBulk size={250} className="text-white" />
        </div>

        {/* Right Side - Form */}
        <div className='w-full lg:w-1/2 flex justify-center items-center px-6 py-10 bg-gray-50'>
          <div className='w-full max-w-xl bg-white p-10 rounded-2xl border-t-4 border-indigo-600 shadow-md'>
            <h1 className='text-4xl font-bold text-gray-800'>Contact Us</h1>
            <p className='mt-3 text-gray-600'>
              Complete the information below and we'll get back to you soon.
            </p>

            <form className='mt-6 flex flex-col gap-4'>
              <input 
                type="text" 
                placeholder='Name' 
                className='border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500' 
              />
              <input 
                type="email" 
                placeholder='Email' 
                className='border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500' 
              />
              <input 
                type="text" 
                placeholder='Subject' 
                className='border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500' 
              />
              <textarea 
                placeholder='Message' 
                className='border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 h-32 resize-none' 
              />
              <button 
                type='submit' 
                className='bg-indigo-600 text-white py-3 px-6 rounded-md hover:bg-indigo-700 transition-colors'
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
