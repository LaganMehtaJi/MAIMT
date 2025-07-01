import React from "react";
import { motion } from "framer-motion";
import { 
  FaUniversity, FaUsers, FaHandsHelping, FaChartLine, 
  FaQuoteLeft, FaGithub, FaCodeBranch, FaCode, 
  FaPalette, FaImage, FaServer, FaBook 
} from "react-icons/fa";
import { FiGitPullRequest, FiGitCommit } from "react-icons/fi";
import ProfileCard from "../Components/ProfileCard/index.jsx";
import Navbar from "../Components/Navbar";

const teamMembers = [
  {
    id: 1,
    name: 'Lagan Mehta',
    position: 'Senior Full Stack Developer',
    image: 'https://randomuser.me/api/portraits/men/1.jpg',
    contributions: [
      'Created and managed PRs on GitHub',
      'Designed hero page',
      'Led the 8-hour development sprint'
    ],
    github: 'laganmehta',
    commits: 42,
    prs: 15
  },
  {
    id: 2,
    name: 'Usman Malik',
    position: 'Frontend Architect',
    image: 'https://randomuser.me/api/portraits/men/2.jpg',
    contributions: [
      'Implemented multiple push/pull operations',
      'Created interactive cards',
      'Built core React components'
    ],
    github: 'usmanmalik',
    commits: 38,
    prs: 12
  },
  {
    id: 3,
    name: 'Gaurav Sahni',
    position: 'Backend Engineer',
    image: 'https://randomuser.me/api/portraits/men/3.jpg',
    contributions: [
      'Developed header and footer',
      'Managed Git repository',
      'Created sample data structures'
    ],
    github: 'gauravsahni',
    commits: 35,
    prs: 10
  },
  {
    id: 4,
    name: 'Tanu Saini',
    position: 'UI/UX Designer',
    image: 'https://randomuser.me/api/portraits/women/1.jpg',
    contributions: [
      'Sourced all images',
      'Removed backgrounds',
      'Implemented animations'
    ],
    github: 'tanusaini',
    commits: 28,
    prs: 8
  }
];

const About = () => {
  const totalCommits = teamMembers.reduce((sum, member) => sum + member.commits, 0);
  const totalPRs = teamMembers.reduce((sum, member) => sum + member.prs, 0);

  return (
    <>
      <Navbar/>
        {/* About MAIMT Section */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="bg-white p-8 rounded-xl shadow-lg border border-gray-100"
          >
            <h2 className="text-3xl font-extrabold tracking-tight text-center text-indigo-600 sm:text-4xl mb-8">
              About MAIMT
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg text-gray-700 mb-4">
                  MAIMT was founded in 1997, the Golden Jubilee year of India's Independence, as the result of the vision of Maharaja Agrasen under Kurukshetra University, Kurukshetra with the approval of AICTE.
                </p>
                <p className="text-lg text-gray-700">
                  MAIMT is one of the premier institutes engaged in providing the necessary environment to facilitate advanced learning in the Management & Technical education. The infrastructure of the institute, facilities, course curriculum and teaching methodology are designed keeping in view its commitment to achieve excellence in the field of professional education.
                </p>
              </div>
              <div>
                <p className="text-lg text-gray-700 mb-4">
                  It is a charitable and non-profit organisation, that initially built its huge infrastructure in the form of Maharaja Agrasen College to cater to the needs of students in the domains of commerce, Arts, Economics & Computers.
                </p>
                <p className="text-lg text-gray-700">
                  Under the prime guidance of Sh. Shushil Gupta (President), Sh. Praveen Goel (Vice President), Dr. Ashwini Goel (General Secretary) and Sh. Pawan Kumar Garg (Finance Secretary), the sabha is continuously expanding its origins by developing new charitable institutions.
                </p>
              </div>
            </div>
          </motion.div>
      <div className="relative bg-white overflow-hidden min-h-screen">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://maimt.com/wp-content/uploads/2024/03/IMG_20231130_144445.jpg"
            alt="University background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-indigo-50"></div>
        </div>

        {/* Content */}
        <div className="relative max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8 z-10">
          {/* Development Story Banner */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-8 rounded-xl shadow-2xl mb-12"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h2 className="text-3xl font-bold mb-2">Our Development Journey</h2>
                <p className="text-indigo-100 max-w-2xl">
                  Built with passion in just 8 hours by a dedicated team of four friends, 
                  combining our skills to create this digital library platform.
                </p>
              </div>
              <div className="flex items-center gap-4 bg-white/10 p-4 rounded-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold">{totalCommits}</div>
                  <div className="text-sm opacity-80">Total Commits</div>
                </div>
                <div className="h-8 w-px bg-white/30"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold">{totalPRs}</div>
                  <div className="text-sm opacity-80">Pull Requests</div>
                </div>
                <div className="h-8 w-px bg-white/30"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold">8</div>
                  <div className="text-sm opacity-80">Hours</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Team Section */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-center mb-8 text-indigo-700">The Dream Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.id}
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <ProfileCard 
                    name={member.name} 
                    image={member.image} 
                    position={member.position}
                    contributions={member.contributions}
                    github={member.github}
                    commits={member.commits}
                    prs={member.prs}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Library Flow Section */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 mb-16"
          >
            <h2 className="text-3xl font-bold text-center mb-8 text-indigo-700">Library Management Flow</h2>
            
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 md:left-1/2 h-full w-1 bg-indigo-200 transform -translate-x-1/2"></div>
              
              {/* Steps */}
              <div className="space-y-12">
                {[
                  {
                    icon: <FaBook className="text-white text-xl" />,
                    title: "Resource Collection",
                    description: "Gathering all academic materials including e-books, journals, and question papers",
                    side: "left"
                  },
                  {
                    icon: <FaServer className="text-white text-xl" />,
                    title: "Database Integration",
                    description: "Structuring data and connecting to our secure backend systems",
                    side: "right"
                  },
                  {
                    icon: <FaCode className="text-white text-xl" />,
                    title: "Frontend Development",
                    description: "Building intuitive interfaces with React and modern UI libraries",
                    side: "left"
                  },
                  {
                    icon: <FaPalette className="text-white text-xl" />,
                    title: "UI/UX Design",
                    description: "Creating visually appealing and user-friendly designs",
                    side: "right"
                  },
                  {
                    icon: <FaGithub className="text-white text-xl" />,
                    title: "Version Control",
                    description: "Collaborative development using Git and GitHub workflows",
                    side: "left"
                  }
                ].map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: step.side === 'left' ? -20 : 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                    className={`relative flex ${step.side === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}
                  >
                    <div className={`flex-1 ${step.side === 'left' ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'} order-1`}>
                      <h3 className="text-xl font-semibold text-indigo-700">{step.title}</h3>
                      <p className="text-gray-600 mt-2">{step.description}</p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center order-2 z-10">
                      {step.icon}
                    </div>
                    <div className={`flex-1 ${step.side === 'left' ? 'md:pl-8' : 'md:pr-8'} order-3`}></div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* GitHub Stats Section */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 mb-16"
          >
            <h2 className="text-3xl font-bold text-center mb-8 text-indigo-700">Our GitHub Journey</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-gray-800">
                  <FiGitCommit className="text-indigo-600" /> Commit Activity
                </h3>
                <div className="space-y-4">
                  {teamMembers.map(member => (
                    <div key={member.id} className="flex items-center">
                      <div className="w-24 font-medium text-gray-700">{member.name}</div>
                      <div className="flex-1 bg-gray-200 rounded-full h-4">
                        <div 
                          className="bg-indigo-600 h-4 rounded-full" 
                          style={{ width: `${(member.commits / totalCommits) * 100}%` }}
                        ></div>
                      </div>
                      <div className="w-12 text-right text-gray-600">{member.commits}</div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-gray-800">
                  <FiGitPullRequest className="text-indigo-600" /> Pull Requests
                </h3>
                <div className="space-y-4">
                  {teamMembers.map(member => (
                    <div key={member.id} className="flex items-center">
                      <div className="w-24 font-medium text-gray-700">{member.name}</div>
                      <div className="flex-1 bg-gray-200 rounded-full h-4">
                        <div 
                          className="bg-purple-600 h-4 rounded-full" 
                          style={{ width: `${(member.prs / totalPRs) * 100}%` }}
                        ></div>
                      </div>
                      <div className="w-12 text-right text-gray-600">{member.prs}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

        
        </div>
      </div>
    </>
  );
};

export default About;