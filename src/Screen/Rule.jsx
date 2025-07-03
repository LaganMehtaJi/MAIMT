import NavBar from "../Components/Navbar";
import Footer from "../Components/Footer";
import React, { useState } from 'react';
import { 
  FiBook, FiUsers, FiLayers, FiAward, 
  FiCalendar, FiMonitor, FiFileText, 
  FiAlertTriangle, FiClock, FiList 
} from 'react-icons/fi';

const Rule = () => {
  const [activeTab, setActiveTab] = useState('general');
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const programTabs = [
    { id: 'general', label: 'General Rules', icon: <FiBook /> },
    { id: 'mba', label: 'MBA', icon: <FiUsers /> },
    { id: 'mca', label: 'MCA', icon: <FiMonitor /> },
    { id: 'bba', label: 'BBA', icon: <FiFileText /> },
    { id: 'bca', label: 'BCA', icon: <FiLayers /> },
  ];

  const rulesData = {
    general: [
      {
        title: "Attendance Policy",
        icon: <FiCalendar />,
        content: [
          "Minimum 75% attendance mandatory in each subject",
          "Below 75% may result in disqualification from exams",
          "Medical leave requires proper documentation"
        ]
      },
      {
        title: "Examination Rules",
        icon: <FiAward />,
        content: [
          "Valid college ID mandatory for all exams",
          "Zero tolerance for malpractice (minimum 1-year suspension)",
          "Re-evaluation requests within 15 days of result declaration"
        ]
      }
    ],
    mba: [
      {
        title: "Specialization Rules",
        icon: <FiUsers />,
        content: [
          "Must be finalized by end of 1st semester",
          "Minimum 15 students required for specialization offering"
        ]
      },
      {
        title: "Internship Requirements",
        icon: <FiClock />,
        content: [
          "6-8 weeks mandatory after 2nd semester",
          "Final report submission within 15 days of term restart"
        ]
      }
    ],
    // Add similar structures for MCA, BBA, BCA
  };

  const assessmentData = [
    { program: "MBA", internal: 30, projects: 25, attendance: 10, participation: 10, endTerm: 25 },
    { program: "MCA", internal: 40, projects: 30, attendance: 10, participation: 5, endTerm: 15 },
    { program: "BBA", internal: 30, projects: 20, attendance: 10, participation: 15, endTerm: 25 },
    { program: "BCA", internal: 40, projects: 30, attendance: 10, participation: 5, endTerm: 15 }
  ];

  return (
    <>
   <NavBar/>
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-indigo-600 text-white py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-2">MAIMT Rules & Regulations</h1>
          <p className="text-indigo-100">For MBA, MCA, BBA, and BCA Programs</p>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Program Tabs */}
        <div className="flex overflow-x-auto mb-8 scrollbar-hide">
          <div className="flex space-x-1 bg-indigo-100 rounded-lg p-1">
            {programTabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-4 py-2 rounded-md transition-colors ${activeTab === tab.id ? 'bg-white text-indigo-600 shadow-sm' : 'text-indigo-700 hover:bg-indigo-50'}`}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Rules Sections */}
        <div className="space-y-4 mb-12">
          {rulesData[activeTab]?.map((section, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <button
                onClick={() => toggleSection(index)}
                className="w-full flex justify-between items-center p-4 text-left hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center">
                  <div className="p-2 rounded-full bg-indigo-100 text-indigo-600 mr-3">
                    {section.icon}
                  </div>
                  <h3 className="font-semibold text-lg">{section.title}</h3>
                </div>
                <svg
                  className={`w-5 h-5 text-indigo-600 transform transition-transform ${expandedSection === index ? 'rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {expandedSection === index && (
                <div className="px-4 pb-4 pt-2 border-t border-gray-100">
                  <ul className="space-y-2 pl-8 list-disc text-gray-700">
                    {section.content.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Assessment System */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-bold text-indigo-600 mb-4 flex items-center">
            <FiList className="mr-2" />
            Assessment System
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-indigo-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-indigo-600 uppercase tracking-wider">Program</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-indigo-600 uppercase tracking-wider">Internal</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-indigo-600 uppercase tracking-wider">Projects</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-indigo-600 uppercase tracking-wider">Attendance</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-indigo-600 uppercase tracking-wider">Participation</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-indigo-600 uppercase tracking-wider">End-Term</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {assessmentData.map((row, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">{row.program}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{row.internal}%</td>
                    <td className="px-6 py-4 whitespace-nowrap">{row.projects}%</td>
                    <td className="px-6 py-4 whitespace-nowrap">{row.attendance}%</td>
                    <td className="px-6 py-4 whitespace-nowrap">{row.participation}%</td>
                    <td className="px-6 py-4 whitespace-nowrap">{row.endTerm}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Important Notice */}
        <div className="bg-indigo-50 border-l-4 border-indigo-600 p-4 rounded-r-lg">
          <div className="flex">
            <div className="flex-shrink-0 text-indigo-600">
              <FiAlertTriangle className="h-5 w-5" />
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-indigo-800">Important Notice</h3>
              <div className="mt-2 text-sm text-indigo-700">
                <p>All students must sign a declaration acknowledging these rules during admission. Digital copy available on college portal.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
     </>
  );
};

export default Rule;