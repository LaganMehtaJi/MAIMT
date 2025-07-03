import React from 'react'
import Navbar from "../Components/Navbar/index.jsx";
import Hero from "../Components/Hero/index.jsx";
import Footer from "../Components/Footer/index.jsx";
import { Card } from "../Components/Card/index.jsx";
import { useNavigate } from 'react-router-dom';
import { courseDetails } from '../staticData/courseDetails.js';


const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <Hero />
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 mx-20">
                      {courseDetails.map((course, index) => (
                          <Card key={index} courseName={course.courseName} image={course.image} click={()=>{
                            navigate(`/class/${course.courseName}`);
                            console.log("Clicked");
                          }} />
                      ))}
                  </div>
      <Footer />
    </>
  );
}
export default Home;
