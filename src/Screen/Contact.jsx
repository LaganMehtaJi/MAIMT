import React from 'react'
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import {FaMailBulk} from "react-icons/fa";

const Contact = () => {
  return (
   <>
   <Navbar/>
   <div className='w-full h-screen flex '>
   
   <div className='w-140 bg-indigo-600 justify-center items-center flex flex-col text-white p-10'>
    <FaMailBulk size={300}/>
   </div>
    <div className=' ml-10 pl-20 justify-center items-center mt-3'>
         <div className='w-100 h-40 bg-white p-10  rounded-t-4xl border-t-4 border-indigo-600'>
            <h1 className='text-4xl font-bold'>Contact Us</h1>
            <p className='mt-3'>Complete the information  below and we'll get <b/> back to you soon</p>

            <div>
                <form className='mt-5 flex flex-col gap-4'>
                    <input type="text" placeholder='Name' className='border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500'/>
                    <input type="email" placeholder='Email' className='border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500'/>
                    <input type="text" placeholder='Subject' className='border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500'/>
                    <textarea placeholder='Message' className='border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 h-32'></textarea>
                    <button type='submit' className='bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors'>Send Message</button>
                </form>
            </div>
            
         </div>  
   </div>
   </div>
   <Footer/>
   </>
  );
}
export default Contact;
