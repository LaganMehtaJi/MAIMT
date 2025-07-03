import React, { useState } from 'react';
import { FaDownload, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import {useParams}  from "react-router-dom";

const index = () => {
    const {id} = useParams();
  const [currentSemester, setCurrentSemester] = useState(1);
  const [selectedSubject, setSelectedSubject] = useState(null);

  // Sample data - replace with your actual question papers data
  const semesterData = {
    1: {
      name: "Semester 1",
      subjects: [
        {
          name: "Programming Fundamentals",
          papers: [
            { year: "2023", url: "/papers/bca/sem1/programming-fundamentals-2023.pdf" },
            { year: "2022", url: "/papers/bca/sem1/programming-fundamentals-2022.pdf" },
            { year: "2021", url: "/papers/bca/sem1/programming-fundamentals-2021.pdf" }
          ]
        },
        {
          name: "Mathematics",
          papers: [
            { year: "2023", url: "/papers/bca/sem1/mathematics-2023.pdf" },
            { year: "2022", url: "/papers/bca/sem1/mathematics-2022.pdf" }
          ]
        },
        {
          name: "Digital Electronics",
          papers: [
            { year: "2023", url: "/papers/bca/sem1/digital-electronics-2023.pdf" },
            { year: "2022", url: "/papers/bca/sem1/digital-electronics-2022.pdf" },
            { year: "2021", url: "/papers/bca/sem1/digital-electronics-2021.pdf" },
            { year: "2020", url: "/papers/bca/sem1/digital-electronics-2020.pdf" }
          ]
        }
      ]
    },
    2: {
      name: "Semester 2",
      subjects: [
        {
          name: "Data Structures",
          papers: [
            { year: "2023", url: "/papers/bca/sem2/data-structures-2023.pdf" },
            { year: "2022", url: "/papers/bca/sem2/data-structures-2022.pdf" }
          ]
        },
        {
          name: "Discrete Mathematics",
          papers: [
            { year: "2023", url: "/papers/bca/sem2/discrete-math-2023.pdf" }
          ]
        }
      ]
    },
    3: {
      name: "Semester 3",
      subjects: [
        {
          name: "Database Management",
          papers: [
            { year: "2023", url: "/papers/bca/sem3/dbms-2023.pdf" },
            { year: "2022", url: "/papers/bca/sem3/dbms-2022.pdf" }
          ]
        }
      ]
    },
    4: {
      name: "Semester 4",
      subjects: [
        {
          name: "Operating Systems",
          papers: [
            { year: "2023", url: "/papers/bca/sem4/os-2023.pdf" }
          ]
        }
      ]
    },
    5: {
      name: "Semester 5",
      subjects: [
        {
          name: "Computer Networks",
          papers: [
            { year: "2023", url: "/papers/bca/sem5/networks-2023.pdf" }
          ]
        }
      ]
    },
    6: {
      name: "Semester 6",
      subjects: [
        {
          name: "Software Engineering",
          papers: [
            { year: "2023", url: "/papers/bca/sem6/se-2023.pdf" }
          ]
        }
      ]
    }
  };

  const handlePrevSemester = () => {
    if (currentSemester > 1) {
      setCurrentSemester(currentSemester - 1);
      setSelectedSubject(null);
    }
  };

  const handleNextSemester = () => {
    if (currentSemester < 6) {
      setCurrentSemester(currentSemester + 1);
      setSelectedSubject(null);
    }
  };

  const handleDownload = (url) => {
    // In a real app, this would trigger the download
    console.log(`Downloading: ${url}`);
    // For demo purposes, we'll just open in new tab
    window.open(url, '_blank');
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-indigo-700">{id} Question Papers</h1>
      
      {/* Semester Navigation */}
      <div className="flex justify-between items-center mb-8">
        <button
          onClick={handlePrevSemester}
          disabled={currentSemester === 1}
          className={`flex items-center px-4 py-2 rounded-lg ${currentSemester === 1 ? 'bg-gray-200 text-gray-500 cursor-not-allowed' : 'bg-indigo-100 text-indigo-700 hover:bg-indigo-200'}`}
        >
          <FaChevronLeft className="mr-2" />
          Previous Semester
        </button>
        
        <h2 className="text-2xl font-semibold text-gray-800">
          {semesterData[currentSemester].name}
        </h2>
        
        <button
          onClick={handleNextSemester}
          disabled={currentSemester === 6}
          className={`flex items-center px-4 py-2 rounded-lg ${currentSemester === 6 ? 'bg-gray-200 text-gray-500 cursor-not-allowed' : 'bg-indigo-100 text-indigo-700 hover:bg-indigo-200'}`}
        >
          Next Semester
          <FaChevronRight className="ml-2" />
        </button>
      </div>

      {/* Subjects List */}
      {!selectedSubject ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {semesterData[currentSemester].subjects.map((subject, index) => (
            <div 
              key={index}
              onClick={() => setSelectedSubject(subject)}
              className="bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:border-indigo-300 hover:shadow-lg transition-all cursor-pointer"
            >
              <h3 className="text-xl font-bold text-indigo-700 mb-2">{subject.name}</h3>
              <p className="text-gray-600">
                {subject.papers.length} question paper{subject.papers.length !== 1 ? 's' : ''} available
              </p>
            </div>
          ))}
        </div>
      ) : (
        /* Papers List for Selected Subject */
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold text-indigo-700">{selectedSubject.name}</h3>
            <button 
              onClick={() => setSelectedSubject(null)}
              className="text-indigo-600 hover:text-indigo-800 font-medium"
            >
              Back to subjects
            </button>
          </div>
          
          <div className="space-y-4">
            {selectedSubject.papers.map((paper, index) => (
              <div key={index} className="flex justify-between items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
                <div>
                  <h4 className="font-medium text-gray-800">{selectedSubject.name} - {paper.year}</h4>
                  <p className="text-sm text-gray-500">BCA {semesterData[currentSemester].name}</p>
                </div>
                <button
                  onClick={() => handleDownload(paper.url)}
                  className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                >
                  <FaDownload className="mr-2" />
                  Download
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Empty State */}
      {semesterData[currentSemester].subjects.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No question papers available for this semester yet.</p>
          <p className="text-gray-400">Check back later or contact the administration.</p>
        </div>
      )}
    </div>
  );
};

export default index;