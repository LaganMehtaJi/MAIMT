import React, {  useState } from 'react';
import { FiDownload, FiEye, FiSearch, FiChevronDown } from 'react-icons/fi';
import { FaBookOpen, FaUniversity } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../Navbar/index.jsx';
import Footer from '../Footer/index.jsx';

const index = (props) => {
  
  const [selectedPdf, setSelectedPdf] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSemester, setSelectedSemester] = useState('Semester 1');
  const [isSemesterDropdownOpen, setIsSemesterDropdownOpen] = useState(false);

  // Sample syllabus data
  const syllabusData = {
    'Semester 1': [
      { code: 'BCA101', name: 'Programming Fundamentals', pdf: '/syllabus/bca101.pdf' },
      { code: 'BCA102', name: 'Digital Electronics', pdf: '/syllabus/bca102.pdf' },
      { code: 'BCA103', name: 'Mathematics I', pdf: '/syllabus/bca103.pdf' },
      { code: 'BCA104', name: 'Communication Skills', pdf: '/syllabus/bca104.pdf' },
      { code: 'BCA105', name: 'Computer Organization', pdf: '/syllabus/bca105.pdf' },
    ],
    'Semester 2': [
      { code: 'BCA201', name: 'Data Structures', pdf: '/syllabus/bca201.pdf' },
      { code: 'BCA202', name: 'Database Systems', pdf: '/syllabus/bca202.pdf' },
      { code: 'BCA203', name: 'Mathematics II', pdf: '/syllabus/bca203.pdf' },
    ],
    // Add more semesters as needed
  };

  const semesters = Object.keys(syllabusData);
  const filteredSubjects = syllabusData[selectedSemester]?.filter(subject =>
    subject.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    subject.code.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const openPdf = (pdfUrl) => {
    setSelectedPdf(pdfUrl);
  };

  const closePdf = () => {
    setSelectedPdf(null);
  };

  const {id} = useParams();
  console.log(id);

  return (
    <>
    <Navbar/>
    <div className='min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-8 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-6xl mx-auto'>
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='text-center mb-10'
        >
          <div className='flex justify-center mb-4'>
            <FaUniversity className='text-4xl text-indigo-600' />
          </div>
          <h1 className='text-4xl font-bold text-gray-800 mb-2'>{id} Syllabus</h1>
          <p className='text-lg text-gray-600'>Comprehensive syllabus for all semesters</p>
        </motion.div>

        {/* Controls */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className='flex flex-col md:flex-row justify-between items-center mb-8 gap-4'
        >
          {/* Semester Dropdown */}
          <div className='relative w-full md:w-auto'>
            <button
              onClick={() => setIsSemesterDropdownOpen(!isSemesterDropdownOpen)}
              className='flex items-center justify-between w-full px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500'
            >
              <span className='flex items-center'>
                <FaBookOpen className='mr-2 text-indigo-600' />
                {selectedSemester}
              </span>
              <FiChevronDown className={`ml-2 transition-transform ${isSemesterDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            {isSemesterDropdownOpen && (
              <div className='absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-lg shadow-lg'>
                {semesters.map((semester) => (
                  <button
                    key={semester}
                    onClick={() => {
                      setSelectedSemester(semester);
                      setIsSemesterDropdownOpen(false);
                    }}
                    className={`block w-full text-left px-4 py-2 hover:bg-indigo-50 ${semester === selectedSemester ? 'bg-indigo-100 text-indigo-700' : 'text-gray-700'}`}
                  >
                    {semester}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Search */}
          <div className='relative w-full md:w-64'>
            <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
              <FiSearch className='text-gray-400' />
            </div>
            <input
              type='text'
              placeholder='Search subjects...'
              className='pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </motion.div>

        {/* Syllabus Table */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className='bg-white rounded-xl shadow-md overflow-hidden mb-8'
        >
          <div className='overflow-x-auto'>
            <table className='min-w-full divide-y divide-gray-200'>
              <thead className='bg-indigo-50'>
                <tr>
                  <th className='px-6 py-3 text-left text-xs font-medium text-indigo-700 uppercase tracking-wider'>Subject Code</th>
                  <th className='px-6 py-3 text-left text-xs font-medium text-indigo-700 uppercase tracking-wider'>Subject Name</th>
                  <th className='px-6 py-3 text-right text-xs font-medium text-indigo-700 uppercase tracking-wider'>Actions</th>
                </tr>
              </thead>
              <tbody className='bg-white divide-y divide-gray-200'>
                {filteredSubjects?.length > 0 ? (
                  filteredSubjects.map((subject, index) => (
                    <motion.tr
                      key={subject.code}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className='hover:bg-gray-50'
                    >
                      <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>{subject.code}</td>
                      <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>{subject.name}</td>
                      <td className='px-6 py-4 whitespace-nowrap text-right text-sm font-medium'>
                        <button
                          onClick={() => openPdf(subject.pdf)}
                          className='inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mr-2'
                        >
                          <FiEye className='mr-1' /> View
                        </button>
                        <a
                          href={subject.pdf}
                          download
                          className='inline-flex items-center px-3 py-1.5 border border-gray-300 text-xs font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                        >
                          <FiDownload className='mr-1' /> Download
                        </a>
                      </td>
                    </motion.tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan='3' className='px-6 py-4 text-center text-sm text-gray-500'>
                      No subjects found for this semester.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* PDF Viewer Modal */}
        {selectedPdf && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className='fixed inset-0 z-50 overflow-y-auto'
          >
            <div className='flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0'>
              <div className='fixed inset-0 transition-opacity' aria-hidden='true'>
                <div className='absolute inset-0 bg-gray-500 opacity-75' onClick={closePdf}></div>
              </div>
              <span className='hidden sm:inline-block sm:align-middle sm:h-screen' aria-hidden='true'>&#8203;</span>
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className='inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full'
              >
                <div className='bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4'>
                  <div className='flex justify-between items-center mb-4'>
                    <h3 className='text-lg leading-6 font-medium text-gray-900'>Syllabus PDF Viewer</h3>
                    <button
                      onClick={closePdf}
                      className='text-gray-400 hover:text-gray-500 focus:outline-none'
                    >
                      <span className='sr-only'>Close</span>
                      <svg className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12' />
                      </svg>
                    </button>
                  </div>
                  <div className='h-96 sm:h-[32rem]'>
                    <iframe 
                      src={selectedPdf} 
                      className='w-full h-full border border-gray-200 rounded-md'
                      title='Syllabus PDF'
                    ></iframe>
                  </div>
                </div>
                <div className='bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse'>
                  <button
                    type='button'
                    className='w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm'
                    onClick={closePdf}
                  >
                    Close
                  </button>
                  <a
                    href={selectedPdf}
                    download
                    className='mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm'
                  >
                    <FiDownload className='mr-2' /> Download
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default index;