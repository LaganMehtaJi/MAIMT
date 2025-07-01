import React from "react";
import { FaUniversity, FaUsers, FaHandsHelping, FaChartLine } from "react-icons/fa";
import Navbar from "../Components/Navbar";

const About = () => {
  return (
    <>
    <Navbar/>
    <div className="relative bg-white overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://maimt.com/wp-content/uploads/2024/03/IMG_20231130_144445.jpg"
          alt="University background"
          className="w-full h-full object-cover opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 to-indigo-900/10"></div>
      </div>

      {/* Content */}
      <div className="  relative max-w-7xl  py-16 px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center bg-white p-8 rounded-lg shadow-lg border border-gray-100">
          <h2 className="text-3xl font-extrabold tracking-tight text-indigo-600 sm:text-4xl">
            About MAIMT
          </h2>
          <div className="mt-6 max-w-2xl mx-auto text-lg text-gray-700 ">
            <p className="mb-4">
              MAIMT was founded in 1997, the Golden Jubilee year of India's Independence, as the result of the vision of Maharaja Agrasen under Kurukshetra University, Kurukshetra with the approval of AICTE.
            </p>
          </div>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Left Column */}
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
              <p className="text-gray-700 mb-6">
                MAIMT is one of the premier institutes engaged in providing the necessary environment to facilitate advanced learning in the Management & Technical education. The infrastructure of the institute, facilities, course curriculum and teaching methodology are designed keeping in view its commitment to achieve excellence in the field of professional education.
              </p>
              
              <p className="text-gray-700 mb-6">
                It is a charitable and non-profit organisation, that initially built its huge infrastructure in the form of Maharaja Agrasen College to cater to the needs of students in the domains of commerce, Arts, Economics & Computers by running B.A., B.Com., BIM, BCA, MBE, M.Com. courses. It expanded its arena of responsibility by incepting its sister concern, MAIMT to offer MBA and MCA courses.
              </p>
            </div>

            {/* Right Column */}
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
              <h3 className="text-xl font-semibold text-purple-800 mb-4">Our Motto</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <FaHandsHelping className="flex-shrink-0 h-5 w-5 text-purple-600 mt-1 mr-3" />
                  <span className="text-gray-700">To serve the society</span>
                </li>
                <li className="flex items-start">
                  <FaUsers className="flex-shrink-0 h-5 w-5 text-purple-600 mt-1 mr-3" />
                  <span className="text-gray-700">To bring awareness among general public</span>
                </li>
                <li className="flex items-start">
                  <FaChartLine className="flex-shrink-0 h-5 w-5 text-purple-600 mt-1 mr-3" />
                  <span className="text-gray-700">To increase the standard of living</span>
                </li>
                <li className="flex items-start">
                  <FaUniversity className="flex-shrink-0 h-5 w-5 text-purple-600 mt-1 mr-3" />
                  <span className="text-gray-700">To educate the public</span>
                </li>
                <li className="flex items-start">
                  <FaHandsHelping className="flex-shrink-0 h-5 w-5 text-purple-600 mt-1 mr-3" />
                  <span className="text-gray-700">To fulfill the social responsibility</span>
                </li>
              </ul>

              <div className="mt-8">
                <h3 className="text-xl font-semibold text-purple-800 mb-2">Leadership</h3>
                <p className="text-gray-700">
                  Under the prime guidance of Sh. Shushil Gupta (President), Sh. Praveen Goel (Vice President), Dr. Ashwini Goel (General Secretary) and Sh. Pawan Kumar Garg (Finance Secretary), the sabha is continuously expanding its origins by developing new charitable institutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default About;