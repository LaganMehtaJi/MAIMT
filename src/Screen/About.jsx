import React from "react";
import { motion } from "framer-motion";
import { 
  FaUniversity, FaUsers, FaChartLine, FaGithub, 
  FaCodeBranch, FaCode, FaPalette, FaServer, 
  FaBook, FaClock, FaGitAlt, FaLaptopCode
} from "react-icons/fa";
import { FiGitPullRequest, FiGitCommit } from "react-icons/fi";
import { IoMdSchool } from "react-icons/io";
import Navbar from "../Components/Navbar";

const teamMembers = [
  {
    id: 1,
    name: 'Lagan Mehta',
    position: 'Full Stack Developer',
    github: 'laganmehta',
    commits: 40,
    prs: 15
  },
  {
    id: 2,
    name: 'Gourav',
    position: 'Full Stack Developer',
    github: 'Gourav',
    commits: 38,
    prs: 12
  },
  {
    id: 3,
    name: 'Usman Malik',
    position: 'Backend Developer',
    github: 'UsmanMalik',
    commits: 35,
    prs: 10
  },
  {
    id: 4,
    name: 'Firoz Khan',
    position: 'UI/UX Designer',
    github: 'Firoz',
    commits: 12,
    prs: 8
  }
];

const About = () => {
  const totalCommits = teamMembers.reduce((sum, member) => sum + member.commits, 0);
  const totalPRs = teamMembers.reduce((sum, member) => sum + member.prs, 0);

  const developmentPhases = [
    {
      title: "Planning & Setup",
      icon: <FaClock className="text-blue-500" />,
      activities: [
        "Created GitHub repository",
        "Initialized project structure",
        "Set up development environment"
      ],
      githubActions: [
        { type: "repo", action: "Created main repository", by: "Lagan" },
        { type: "branch", action: "Setup dev/main branches", by: "Team" }
      ]
    },
    {
      title: "Core Development",
      icon: <FaLaptopCode className="text-green-500" />,
      activities: [
        "Built React components",
        "Developed API endpoints",
        "Implemented database structure",
        "Designed user interfaces"
      ],
      githubActions: [
        { type: "commit", action: "42 commits by Lagan", by: "Lagan" },
        { type: "commit", action: "38 commits by Gourav", by: "Gourav" },
        { type: "commit", action: "35 commits by Usman", by: "Usman" },
        { type: "commit", action: "28 commits by Firoz", by: "Firoz" }
      ]
    },
    {
      title: "Collaboration",
      icon: <FaGitAlt className="text-purple-500" />,
      activities: [
        "Code reviews",
        "Pull request merges",
        "Conflict resolution",
        "Design feedback sessions"
      ],
      githubActions: [
        { type: "pr", action: "15 PRs by Lagan", by: "Lagan" },
        { type: "pr", action: "12 PRs by Usman", by: "Usman" },
        { type: "pr", action: "10 PRs by Firoz", by: "Firoz" },
        { type: "pr", action: "8 PRs by Gourav", by: "Gourav" }
      ]
    }
  ];

  return (
    <>
      <Navbar/>
      
      {/* College Hero Section */}
      <div className="relative h-96 w-full">
        <img
          src="https://maimt.com/wp-content/uploads/2024/03/IMG_20231130_144445.jpg"
          alt="MAIMT Campus"
          className="w-full h-full object-cover brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-2"
          >
            Maharaja Agrasen Institute
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl"
          >
            Excellence in Management & Technical Education Since 1997
          </motion.p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* College Information Section */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-16 bg-white rounded-xl shadow-md overflow-hidden"
        >
          <div className="p-8">
            <h2 className="text-3xl font-bold text-indigo-700 mb-6 flex items-center gap-3">
              <IoMdSchool className="text-indigo-500" />
              About MAIMT
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Established in 1997 during India's Golden Jubilee year of Independence, 
                  Maharaja Agrasen Institute of Management & Technology (MAIMT) operates 
                  under Kurukshetra University with AICTE approval.
                </p>
                <img
                  src="data:image/jpeg;base64,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"
                  alt="MAIMT Building"
                  className="w-full h-auto rounded-lg shadow-sm"
                />
              </div>
              <div>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Our institute provides state-of-the-art infrastructure and innovative 
                  teaching methodologies to foster excellence in professional education.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Founded as a charitable initiative by Maharaja Agrasen Sabha, MAIMT 
                  began with programs in Commerce, Arts, Economics & Computers, and has 
                  since expanded into management and technical education.
                </p>
                <img
                  src="data:image/jpeg;base64,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"
                  alt="MAIMT Campus"
                  className="w-full h-auto rounded-lg shadow-sm mt-4"
                />
              </div>
            </div>
          </div>
        </motion.section>

        {/* Development Team Section */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-indigo-700 mb-2">Development Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The team behind this digital library platform
            </p>
          </div>
          
          {/* Group Photo */}
          <div className="mb-12 rounded-xl overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
              alt="Development Team"
              className="w-full h-auto"
            />
            <div className="bg-white p-4 text-center">
              <h3 className="text-xl font-semibold">Our Development Team</h3>
              <p className="text-gray-600">Lagan, Usman, Firoz & Gourav</p>
            </div>
          </div>
          
          {/* Team Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-md border border-gray-100"
              >
                <h3 className="text-xl font-bold text-indigo-700 mb-2">{member.name}</h3>
                <p className="text-gray-600 mb-4">{member.position}</p>
                <div className="flex justify-between text-sm">
                  <div className="flex items-center gap-1">
                    <FiGitCommit className="text-green-500" />
                    <span>{member.commits} commits</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FiGitPullRequest className="text-purple-500" />
                    <span>{member.prs} PRs</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Development Process with GitHub Flow */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16 bg-white rounded-xl shadow-lg overflow-hidden"
        >
          <div className="p-8 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
            <h2 className="text-3xl font-bold flex items-center gap-3">
              <FaGithub className="text-white" />
              Our Development Workflow
            </h2>
            <p className="text-indigo-100 mt-2">
              How we built this platform using GitHub collaboration
            </p>
          </div>

          <div className="p-8">
            <div className="space-y-12">
              {developmentPhases.map((phase, phaseIndex) => (
                <motion.div
                  key={phaseIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: phaseIndex * 0.1 }}
                  className="flex flex-col md:flex-row gap-8"
                >
                  <div className="md:w-1/3">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center">
                        {phase.icon}
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">{phase.title}</h3>
                    </div>
                    <ul className="space-y-2">
                      {phase.activities.map((activity, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-indigo-500">•</span>
                          <span className="text-gray-700">{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="md:w-2/3 bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium text-gray-800 mb-3 flex items-center gap-2">
                      <FaGithub className="text-gray-700" />
                      GitHub Activities
                    </h4>
                    <div className="space-y-3">
                      {phase.githubActions.map((action, actionIndex) => (
                        <div key={actionIndex} className="flex items-start gap-3">
                          <div className={`mt-1 w-6 h-6 rounded-full flex items-center justify-center 
                            ${action.type === 'commit' ? 'bg-green-100 text-green-600' : 
                              action.type === 'pr' ? 'bg-purple-100 text-purple-600' : 
                              action.type === 'repo' ? 'bg-blue-100 text-blue-600' : 
                              'bg-orange-100 text-orange-600'}`}>
                            {action.type === 'commit' ? <FiGitCommit /> : 
                             action.type === 'pr' ? <FiGitPullRequest /> : 
                             action.type === 'repo' ? <FaGithub /> : 
                             <FaCodeBranch />}
                          </div>
                          <div>
                            <p className="text-gray-800">{action.action}</p>
                            <p className="text-sm text-gray-500">By {action.by}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* GitHub Stats Summary */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-white rounded-xl shadow-lg overflow-hidden"
        >
          <div className="p-8">
            <h2 className="text-3xl font-bold text-center mb-8 text-indigo-700">GitHub Statistics</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-indigo-50 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-4">
                  <FiGitCommit className="text-indigo-600 text-2xl" />
                  <h3 className="text-xl font-bold text-gray-800">Commit Distribution</h3>
                </div>
                <div className="space-y-4">
                  {teamMembers.map(member => (
                    <div key={member.id} className="flex items-center">
                      <div className="w-32 font-medium text-gray-700">{member.name}</div>
                      <div className="flex-1 bg-gray-200 rounded-full h-3">
                        <div 
                          className="bg-indigo-600 h-3 rounded-full" 
                          style={{ width: `${(member.commits / totalCommits) * 100}%` }}
                        ></div>
                      </div>
                      <div className="w-12 text-right font-medium">{member.commits}</div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-4">
                  <FiGitPullRequest className="text-purple-600 text-2xl" />
                  <h3 className="text-xl font-bold text-gray-800">Pull Requests</h3>
                </div>
                <div className="space-y-4">
                  {teamMembers.map(member => (
                    <div key={member.id} className="flex items-center">
                      <div className="w-32 font-medium text-gray-700">{member.name}</div>
                      <div className="flex-1 bg-gray-200 rounded-full h-3">
                        <div 
                          className="bg-purple-600 h-3 rounded-full" 
                          style={{ width: `${(member.prs / totalPRs) * 100}%` }}
                        ></div>
                      </div>
                      <div className="w-12 text-right font-medium">{member.prs}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </>
  );
};

export default About;