import React from 'react'
import Navbar from "../Components/Navbar/index.jsx";
import Hero from "../Components/Hero/index.jsx";
import Footer from "../Components/Footer/index.jsx";
import { CourseCards } from '../Components/CourseCards/index.jsx';

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <CourseCards/>
      <Footer />
    </>
  );
}
export default Home;
