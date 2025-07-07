import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const AboutClass = ({ duration, eligibility, intake, type, features, outcomes }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 mb-8">
      <h3 className="text-2xl font-bold text-indigo-800 mb-6 pb-2 border-b border-indigo-100">About This Class</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div className="bg-indigo-50 p-4 rounded-lg">
          <span className="block text-sm font-medium text-indigo-600">Duration:</span>
          <span className="block text-lg font-semibold text-gray-800 mt-1">{duration}</span>
        </div>
        <div className="bg-indigo-50 p-4 rounded-lg">
          <span className="block text-sm font-medium text-indigo-600">Eligibility:</span>
          <span className="block text-lg font-semibold text-gray-800 mt-1">{eligibility}</span>
        </div>
        <div className="bg-indigo-50 p-4 rounded-lg">
          <span className="block text-sm font-medium text-indigo-600">Intake Capacity:</span>
          <span className="block text-lg font-semibold text-gray-800 mt-1">{intake}</span>
        </div>
        <div className="bg-indigo-50 p-4 rounded-lg">
          <span className="block text-sm font-medium text-indigo-600">Course Type:</span>
          <span className="block text-lg font-semibold text-gray-800 mt-1">{type}</span>
        </div>
      </div>
      
      <div className="mb-8">
        <h4 className="text-xl font-bold text-indigo-700 mb-4 flex items-center">
          <span className="bg-indigo-100 p-2 rounded-full mr-3">
            <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </span>
          Key Features
        </h4>
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <span className="text-green-500 mt-1 mr-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <div>
        <h4 className="text-xl font-bold text-indigo-700 mb-4 flex items-center">
          <span className="bg-indigo-100 p-2 rounded-full mr-3">
            <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </span>
          Learning Outcomes
        </h4>
        <ul className="space-y-3">
          {outcomes.map((outcome, index) => (
            <li key={index} className="flex items-start">
              <span className="text-blue-500 mt-1 mr-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </span>
              <span className="text-gray-700">{outcome}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const ClassApp = () => {
  const { id } = useParams();
  const [activeCourse, setActiveCourse] = useState(id);

    const courses = {
    BCA: {
      title: "Bachelor of Computer Applications (BCA)",
      subtitle: "A 3-year undergraduate program focusing on computer applications and software development",
      about: {
        description: "The BCA program provides students with a strong foundation in computer applications, programming languages, and software development. The curriculum is designed to meet the growing demands of the IT industry.",
        highlights: [
          "Duration: 3 years (6 semesters)",
          "Eligibility: 10+2 with Mathematics/Computer Science",
          "Focus on practical skills and industry-relevant technologies",
          "Regular workshops and guest lectures from industry experts",
          "Project-based learning approach"
        ]
      },
      description: {
        curriculum: [
          "Programming Fundamentals (C, C++, Java, Python)",
          "Data Structures and Algorithms",
          "Database Management Systems",
          "Web Technologies",
          "Computer Networks",
          "Software Engineering",
          "Mobile Application Development",
          "Cloud Computing Basics"
        ],
        careers: [
          "Software Developer",
          "Web Developer",
          "System Analyst",
          "Database Administrator",
          "IT Consultant"
        ]
      },
      aboutClassData: {
        duration: "3 years",
        eligibility: "10+2 with Mathematics/Computer Science",
        intake: "60 students",
        type: "Full-time",
        features: [
          "Industry-aligned curriculum",
          "Experienced faculty",
          "Practical hands-on training",
          "Industry visits and guest lectures",
          "Placement assistance"
        ],
        outcomes: [
          "Develop programming skills in multiple languages",
          "Understand software development lifecycle",
          "Gain database management skills",
          "Learn web and mobile application development",
          "Develop problem-solving and analytical skills"
        ]
      }
    },
    MCA: {
      title: "Master of Computer Applications (MCA)",
      subtitle: "A 2-year postgraduate program for advanced computer applications and software development",
      about: {
        description: "The MCA program is designed to provide advanced knowledge in computer applications with a strong emphasis on application development, system design, and emerging technologies.",
        highlights: [
          "Duration: 2 years (4 semesters)",
          "Eligibility: Bachelor's degree with Mathematics/Computer Science",
          "Advanced curriculum with specialization options",
          "Industry-oriented projects and internships",
          "Research opportunities in emerging technologies"
        ]
      },
      description: {
        curriculum: [
          "Advanced Programming and Data Structures",
          "Object-Oriented Analysis and Design",
          "Advanced Database Systems",
          "Artificial Intelligence and Machine Learning",
          "Cloud Computing and Big Data",
          "Internet of Things (IoT)",
          "Cybersecurity Fundamentals",
          "Project Management"
        ],
        careers: [
          "Senior Software Engineer",
          "Systems Architect",
          "Data Scientist",
          "Cloud Solutions Architect",
          "IT Project Manager",
          "Research Scientist"
        ]
      },
      aboutClassData: {
        duration: "2 years",
        eligibility: "Bachelor's degree with Mathematics/Computer Science",
        intake: "40 students",
        type: "Full-time",
        features: [
          "Advanced curriculum with specialization options",
          "Industry-oriented projects",
          "Research opportunities",
          "Internship program",
          "Placement support"
        ],
        outcomes: [
          "Master advanced programming concepts",
          "Develop system design skills",
          "Learn emerging technologies",
          "Gain project management skills",
          "Prepare for leadership roles in IT"
        ]
      }
    },
    BBA: {
      title: "Bachelor of Business Administration (BBA)",
      subtitle: "A 3-year undergraduate program in business and management fundamentals",
      about: {
        description: "The BBA program provides a comprehensive understanding of business principles, management practices, and entrepreneurial skills essential for today's dynamic business environment.",
        highlights: [
          "Duration: 3 years (6 semesters)",
          "Eligibility: 10+2 in any stream",
          "Industry-relevant curriculum with case study approach",
          "Leadership and soft skills development",
          "Internship opportunities with leading organizations"
        ]
      },
      description: {
        curriculum: [
          "Principles of Management",
          "Business Economics",
          "Accounting and Finance",
          "Marketing Management",
          "Human Resource Management",
          "Business Law and Ethics",
          "Operations Management",
          "Entrepreneurship Development"
        ],
        careers: [
          "Business Analyst",
          "Marketing Executive",
          "HR Executive",
          "Operations Manager",
          "Entrepreneur",
          "Management Trainee"
        ]
      },
      aboutClassData: {
        duration: "3 years",
        eligibility: "10+2 in any stream",
        intake: "60 students",
        type: "Full-time",
        features: [
          "Case-based learning approach",
          "Industry expert sessions",
          "Leadership development programs",
          "Entrepreneurship cell",
          "Placement support"
        ],
        outcomes: [
          "Understand business fundamentals",
          "Develop managerial skills",
          "Learn decision-making techniques",
          "Gain marketing and financial knowledge",
          "Prepare for leadership roles"
        ]
      }
    },
    MBA: {
      title: "Master of Business Administration (MBA)",
      subtitle: "A 2-year postgraduate program for advanced business management and leadership",
      about: {
        description: "The MBA program is designed to develop future business leaders with strategic thinking, decision-making skills, and specialized knowledge in various business domains.",
        highlights: [
          "Duration: 2 years (4 semesters)",
          "Eligibility: Bachelor's degree in any discipline",
          "Specializations available (Marketing, Finance, HR, IT, Operations)",
          "Case-based learning methodology",
          "Industry mentorship program",
          "International immersion opportunities"
        ]
      },
      description: {
        curriculum: [
          "Strategic Management",
          "Financial Management",
          "Marketing Strategy",
          "Organizational Behavior",
          "Business Analytics",
          "Supply Chain Management",
          "International Business",
          "Leadership Development"
        ],
        careers: [
          "Business Development Manager",
          "Financial Analyst",
          "Marketing Manager",
          "HR Manager",
          "Operations Director",
          "Management Consultant"
        ]
      },
      aboutClassData: {
        duration: "2 years",
        eligibility: "Bachelor's degree in any discipline",
        intake: "60 students",
        type: "Full-time",
        features: [
          "Specialization options",
          "Industry mentorship",
          "International exposure",
          "Leadership workshops",
          "Entrepreneurship support"
        ],
        outcomes: [
          "Develop strategic thinking",
          "Master business analytics",
          "Gain leadership skills",
          "Understand global business",
          "Prepare for executive roles"
        ]
      }
    }
  };

  useEffect(() => {
    if (id && courses[id]) {
      setActiveCourse(id);
    }
  }, [id]);

  const currentCourse = courses[id];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Header */}
      <div className="bg-gradient-to-r from-indigo-700 to-purple-600 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Department of Computer Science & Management</h1>
          <p className="text-xl text-indigo-100 max-w-3xl mx-auto">Explore our academic programs and value-added courses</p>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Course Header */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-10">
          <div className="bg-gradient-to-r from-indigo-600 to-blue-600 p-8 md:p-10 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">{currentCourse.title}</h2>
            <p className="text-xl text-indigo-100">{currentCourse.subtitle}</p>
          </div>
        </div>
        
        {/* Course Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            <AboutClass {...currentCourse.aboutClassData} />
            
            {/* About the Program */}
            <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
              <h3 className="text-2xl font-bold text-indigo-800 mb-4 pb-2 border-b border-indigo-100">About the Program</h3>
              <p className="text-gray-700 leading-relaxed mb-6">{currentCourse.about.description}</p>
              
              <h3 className="text-2xl font-bold text-indigo-800 mb-4 pb-2 border-b border-indigo-100">Program Highlights</h3>
              <ul className="space-y-4">
                {currentCourse.about.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start">
                    <span className="bg-indigo-100 text-indigo-700 rounded-full p-1 mr-3 mt-1">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </span>
                    <span className="text-gray-700">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Right Column */}
          <div className="space-y-8">
            {/* Curriculum Overview */}
            <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
              <h3 className="text-2xl font-bold text-indigo-800 mb-4 pb-2 border-b border-indigo-100">Curriculum Overview</h3>
              <p className="text-gray-700 mb-6">The {activeCourse} curriculum covers:</p>
              <ul className="space-y-3">
                {currentCourse.description.curriculum.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="bg-blue-100 text-blue-700 rounded-full p-1 mr-3 mt-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Career Opportunities */}
            <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
              <h3 className="text-2xl font-bold text-indigo-800 mb-4 pb-2 border-b border-indigo-100">Career Opportunities</h3>
              <p className="text-gray-700 mb-6">Graduates can pursue careers as:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {currentCourse.description.careers.map((career, index) => (
                  <div key={index} className="bg-indigo-50 p-4 rounded-lg hover:bg-indigo-100 transition duration-200">
                    <div className="flex items-center">
                      <span className="bg-indigo-600 text-white p-2 rounded-full mr-3">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </span>
                      <span className="font-medium text-gray-800">{career}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassApp;