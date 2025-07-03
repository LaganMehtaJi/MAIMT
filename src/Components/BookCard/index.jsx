import React from 'react'
import {FaStreetView,FaDownload} from "react-icons/fa";
const index = () => {
  return (
   <>
     <div className='bg-white display flex h-40 w-100 '>
        <img src="https://www.madrasshoppe.com/40653-home_default/java-the-complete-reference-seventh-edition.jpg" alt="notfound" />
        
        <div className='p-3'>
          <h3>JAVA: The Complete Reference</h3>
          <p className='text-gray-600'>Author: Herbert Schildt</p>
          <p className='text-gray-600'>Publisher: McGraw-Hill Education</p>
          <div className='flex justify-between gap-2'>
             <button className='flex items-center justify-center gap-2 w-full bg-indigo-600  border-transparent rounded-xl text-white py-2 px-4'>
    <FaStreetView className="text-lg" />
    <span>View</span>
  </button>
  <button className='flex items-center justify-center gap-2 w-full bg-green-600 border-transparent rounded-xl text-white py-2 px-4 '>
    <FaDownload className="text-lg" />
    <span>Download</span>
  </button>
          </div>
        </div>
     </div>
   </>
  )
}
export default index;