import React from 'react'
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import BookCard from '../Components/BookCard/index.jsx';
const EContent = () => {
  return (
   <>
   <Navbar/>
   <div>
    <h1 className='text-3xl font-bold text-center my-8'>E-Content</h1>
    <p className='text-center text-gray-600 mb-8'>Explore our extensive collection of digital resources including E-books, Journals, Syllabus materials, Previous Years' Questions, and more.</p>
     <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 justify-center items-center mx-6'>
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
      </div>
   </div>
  
   <Footer/>
   </>
  );
}
export default EContent;
