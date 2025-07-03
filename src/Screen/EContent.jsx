import React from 'react'
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import { Card } from "../Components/Card/index.jsx";
import { useNavigate } from 'react-router-dom';
import { courseDetails } from '../staticData/courseDetails.js';

const EContent = () => {
  const navigate = useNavigate();
  return (
   <>
   <Navbar/>
   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 mx-20">
                 {courseDetails.map((course, index) => (
                     <Card key={index} courseName={course.courseName} image={course.image} click={()=>{
                       navigate(`/book/${course.courseName}`);
                       console.log("Clicked");
                     }} />
                 ))}
             </div>
  
   <Footer/>
   </>
  );
}
export default EContent;
