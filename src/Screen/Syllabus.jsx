import React from 'react'
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import { Card } from "../Components/Card/index.jsx";
import { useNavigate } from 'react-router-dom';
import { courseDetails } from '../staticData/courseDetails.js';
import { useEffect } from 'react';

const Syllabus = () => {
  const navigate = useNavigate();
  useEffect(() => {
    scrollTo(top);
  }, [])
  return (
    <>

      <Navbar />
      <h1 className="bg-gradient-to-r  from-indigo-600 to-purple-600 bg-clip-text text-transparent w-full text-4xl mt-2 h-13 font-bold text-center ">
        Syllabus     </h1> <br />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 mx-20">
        {courseDetails.map((course, index) => (
          <Card key={index} courseName={course.courseName} image={course.image} click={() => {
            navigate(`/class/${course.courseName}`);
            console.log("Clicked");
          }} />
        ))}
      </div>
      <Footer />
    </>
  );
}
export default Syllabus;
