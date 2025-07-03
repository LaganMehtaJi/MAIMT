import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import Footer from '../Footer';
import Navbar from '../Navbar';
import BookCard from '../BookCard/index.jsx';
import { useParams } from 'react-router-dom';

const index = () => {
const {id} = useParams();
  const [currentSemester, setCurrentSemester] = useState(1);
  const [isSemesterDropdownOpen, setIsSemesterDropdownOpen] = useState(false);

  // Sample data organized by semester
  const semesterContent = {
    1: {
      name: "Semester 1",
      books: [
        { id: 1, title: "Programming Fundamentals", type: "E-book" },
        { id: 2, title: "Mathematics for Computing", type: "E-book" },
        { id: 3, title: "Digital Electronics", type: "E-book" },
        { id: 4, title: "Syllabus", type: "Syllabus" },
        { id: 5, title: "2023 Question Papers", type: "PYQ" },
        { id: 6, title: "Computer Fundamentals", type: "E-book" }
      ]
    },
    2: {
      name: "Semester 2",
      books: [
        { id: 7, title: "Data Structures", type: "E-book" },
        { id: 8, title: "Discrete Mathematics", type: "E-book" },
        { id: 9, title: "2022 Question Papers", type: "PYQ" }
      ]
    },
    // Add more semesters as needed
  };

  const handleSemesterChange = (semester) => {
    setCurrentSemester(semester);
    setIsSemesterDropdownOpen(false);
  };

  return (
    <>
      <Navbar/>
      <div className="min-h-screen">
        <h1 className='text-3xl font-bold text-center my-8'>{id} E-Content</h1>
       
        {/* Semester Dropdown Selector */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <button
              onClick={() => setIsSemesterDropdownOpen(!isSemesterDropdownOpen)}
              className="flex items-center justify-between px-6 py-3 bg-indigo-100 text-indigo-700 rounded-lg shadow-md hover:bg-indigo-200 transition-colors w-64"
            >
              <span className="font-medium">{semesterContent[currentSemester].name}</span>
              <FaChevronDown className={`transition-transform ${isSemesterDropdownOpen ? 'transform rotate-180' : ''}`} />
            </button>
            
            {isSemesterDropdownOpen && (
              <div className="absolute top-16 z-10 w-64 bg-white rounded-lg shadow-lg border border-gray-200">
                {Object.keys(semesterContent).map((semester) => (
                  <button
                    key={semester}
                    onClick={() => handleSemesterChange(Number(semester))}
                    className={`w-full text-left px-6 py-3 hover:bg-indigo-50 ${currentSemester === Number(semester) ? 'bg-indigo-100 text-indigo-700 font-medium' : 'text-gray-700'}`}
                  >
                    Semester {semester}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Content Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center items-center mx-6 mb-12'>
          {semesterContent[currentSemester].books.map((book) => (
            <BookCard 
              key={book.id}
              title={book.title}
              type={book.type}
              semester={currentSemester}
            />
          ))}
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default index;