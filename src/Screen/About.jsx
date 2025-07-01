import React from "react";
import { FaUniversity, FaUsers, FaHandsHelping, FaChartLine, FaQuoteLeft } from "react-icons/fa";
import Navbar from "../Components/Navbar";

const About = () => {
  return (
    <>
      <Navbar/>
      <div className="relative bg-white overflow-hidden min-h-screen">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://maimt.com/wp-content/uploads/2024/03/IMG_20231130_144445.jpg"
            alt="University background"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-50 to-indigo-50"></div>
        </div>

        {/* Content */}
        <div className="relative max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8 z-10">
          {/* Motto Banner */}
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-6 rounded-lg shadow-lg mb-12 text-center">
            <FaQuoteLeft className="mx-auto text-2xl text-white opacity-70 mb-2" />
            <p className="text-xl font-medium italic">"Where every student is a success story"</p>
          </div>

          {/* About MAIMT Card */}
          <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100 mb-8">
            <h2 className="text-3xl font-extrabold tracking-tight text-center text-indigo-600 sm:text-4xl mb-6">
              About MAIMT
            </h2>
            <div className="text-lg text-gray-700 space-y-4">
              <p>
                MAIMT was founded in 1997, the Golden Jubilee year of India's Independence, as the result of the vision of Maharaja Agrasen under Kurukshetra University, Kurukshetra with the approval of AICTE.
              </p>
              <p>
                MAIMT is one of the premier institutes engaged in providing the necessary environment to facilitate advanced learning in the Management & Technical education. The infrastructure of the institute, facilities, course curriculum and teaching methodology are designed keeping in view its commitment to achieve excellence in the field of professional education.
              </p>
              <p>
                It is a charitable and non-profit organisation, that initially built its huge infrastructure in the form of Maharaja Agrasen College to cater to the needs of students in the domains of commerce, Arts, Economics & Computers by running B.A., B.Com., BIM, BCA, MBE, M.Com. courses. It expanded its arena of responsibility by incepting its sister concern, MAIMT to offer MBA and MCA courses.
              </p>
            </div>
          </div>

          {/* Our Motto Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
              <h3 className="text-xl font-semibold text-purple-800 mb-4">Our Mission</h3>
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
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
              <h3 className="text-xl font-semibold text-purple-800 mb-4">Our Vision</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <FaUniversity className="flex-shrink-0 h-5 w-5 text-purple-600 mt-1 mr-3" />
                  <span className="text-gray-700">To educate the public</span>
                </li>
                <li className="flex items-start">
                  <FaHandsHelping className="flex-shrink-0 h-5 w-5 text-purple-600 mt-1 mr-3" />
                  <span className="text-gray-700">To fulfill the social responsibility</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 text-purple-600 mt-1 mr-3 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                    </svg>
                  </div>
                  <span className="text-gray-700">To create success stories</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Leadership Section */}
          <div className="mt-8 bg-white p-6 rounded-lg shadow-lg border border-gray-100">
            <h3 className="text-xl font-semibold text-purple-800 mb-4">Leadership</h3>
            <p className="text-gray-700">
              Under the prime guidance of Sh. Shushil Gupta (President), Sh. Praveen Goel (Vice President), Dr. Ashwini Goel (General Secretary) and Sh. Pawan Kumar Garg (Finance Secretary), the sabha is continuously expanding its origins by developing new charitable institutions.
            </p>
          </div>
        </div>
      </div>

    
 

    </>
  );
};

export default About;