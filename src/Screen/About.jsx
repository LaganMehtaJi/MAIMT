import React from "react";
import { motion } from "framer-motion";
import { IoMdSchool } from "react-icons/io";
import {
  FaBriefcase,
  FaAward,
  FaIndustry,
  FaChalkboardTeacher,
} from "react-icons/fa";

import {
  FaGithub,
  FaCodeBranch,
  FaLaptopCode,
  FaClock,
  FaGitAlt,
} from "react-icons/fa";
import { FiGitCommit, FiGitPullRequest } from "react-icons/fi";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const teamMembers = [
  {
    id: 1,
    name: "Lagan Mehta",
    position: "Full Stack Developer",
    github: "laganmehta",
    commits: 40,
    prs: 15,
    img: "/lagan.jpeg",
  },
  {
    id: 2,
    name: "Gaurav Sahni",
    position: "Full Stack Developer",
    github: "Gaurav",
    commits: 38,
    prs: 14,
    img: "/gaurav.jpeg",
  },
  {
    id: 3,
    name: "Usman Malik",
    position: "Full Stack Developer",
    github: "Usman Malik",
    commits: 35,
    prs: 10,
    img: "/usman.jpeg",
  },
  {
    id: 4,
    name: "Firoj Khan",
    position: "Full Stack Developer",
    github: "Firoj",
    commits: 12,
    prs: 8,
    img: "/firoj.jpeg",
  },
];

const developmentPhases = [
  {
    title: "Planning & Setup",
    icon: <FaClock className="text-blue-500 text-xl" />,
    activities: [
      "Created GitHub repository",
      "Initialized project structure",
      "Set up development environment",
    ],
    githubActions: [
      { type: "repo", action: "Created main repository", by: "Lagan" },
      { type: "branch", action: "Setup dev/main branches", by: "Team" },
    ],
  },
  {
    title: "Core Development",
    icon: <FaLaptopCode className="text-green-500 text-xl" />,
    activities: [
      "Built React components",
      "Developed API endpoints",
      "Integrated MongoDB schema",
      "Redux state setup",
    ],
    githubActions: [
      { type: "commit", action: "40 commits", by: "Lagan" },
      { type: "commit", action: "38 commits", by: "Gaurav" },
      { type: "commit", action: "35 commits", by: "Usman" },
      { type: "commit", action: "12 commits", by: "Firoj" },
    ],
  },
  {
    title: "Collaboration",
    icon: <FaGitAlt className="text-purple-500 text-xl" />,
    activities: [
      "Code reviews & PRs",
      "UI/UX feedback sessions",
      "Merged branches and resolved conflicts",
    ],
    githubActions: [
      { type: "pr", action: "15 PRs", by: "Lagan" },
      { type: "pr", action: "14 PRs", by: "Gaurav" },
      { type: "pr", action: "10 PRs", by: "Usman" },
      { type: "pr", action: "8 PRs", by: "Firoj" },
    ],
  },
];

export default function About() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <div className="relative h-[90vh] w-full">
        <img
          src="https://maimt.com/wp-content/uploads/2024/03/IMG_20231130_144445.jpg"
          alt="MAIMT Campus"
          className="w-full h-full object-cover brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute bottom-0 p-8 text-white">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold"
          >
            Maharaja Agrasen Institute
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-xl md:text-2xl"
          >
            Excellence in Management & Technical Education Since 1997
          </motion.p>
        </div>
      </div>

     {/* Enhanced About MAIMT Section */}
     <section className="bg-white py-20 px-6 xl:px-0 max-w-7xl mx-auto">
  {/* Heading */}
  <motion.h2
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="text-4xl md:text-5xl font-bold text-center text-indigo-700 mb-10 tracking-tight"
  >
    About MAIMT
  </motion.h2>

  {/* Paragraphs */}
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ delay: 0.2, duration: 0.8 }}
    className="text-gray-700 text-center text-base md:text-lg max-w-5xl mx-auto mb-16 leading-8 space-y-6 px-2"
  >
    <p>
      Maharaja Agrasen Institute of Management & Technology (MAIMT), established in 1997, is a flagship institute
      known for delivering excellence in professional education across North India. Founded by Maharaja Agrasen Mahavidyalaya Sabha (Regd.), MAIMT has consistently raised the bar for academic performance and innovation.
    </p>
    <p>
      Affiliated to Kurukshetra University and approved by AICTE, MAIMT proudly holds NAAC accreditation. The institute offers top-tier infrastructure—air-conditioned classrooms, state-of-the-art computer labs, digital library access, and smart teaching environments that nurture intellectual and personal growth.
    </p>
    <p>
      With a strong emphasis on real-world exposure, the institute regularly hosts industrial visits, live projects, internships, and startup incubation workshops. Faculty members combine academic depth with industry expertise to create future-ready professionals.
    </p>
    <p>
      The hallmark of MAIMT lies in its consistent <span className="text-green-600 font-semibold">100% placement record</span> and its alumni working in leading MNCs, government bodies, and entrepreneurial ventures. At MAIMT, education goes beyond books—it shapes visionaries.
    </p>
  </motion.div>

  {/* Highlight Cards */}
  <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 px-2">
    {[
      {
        icon: <FaBriefcase className="text-indigo-600 text-4xl" />,
        title: "100% Placement",
        desc: "All batches consistently achieve 100% placement across top companies.",
      },
      {
        icon: <FaAward className="text-yellow-500 text-4xl" />,
        title: "NAAC Accredited",
        desc: "Recognized for educational excellence by national accreditation bodies.",
      },
      {
        icon: <FaIndustry className="text-green-600 text-4xl" />,
        title: "Industry Driven",
        desc: "Curriculum designed with real-world use-cases, workshops & exposure.",
      },
      {
        icon: <FaChalkboardTeacher className="text-pink-600 text-4xl" />,
        title: "Smart Campus",
        desc: "Smart classrooms, digital library & top-tier infrastructure for learning.",
      },
    ].map((card, index) => (
      <motion.div
        key={index}
        whileHover={{ scale: 1.05, boxShadow: "0 8px 30px rgba(0,0,0,0.1)" }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.2, duration: 0.6 }}
        className="bg-white border border-gray-200 hover:border-indigo-300 hover:shadow-xl rounded-2xl p-6 text-center transition-all duration-300"
      >
        <div className="mb-4">{card.icon}</div>
        <h3 className="text-lg font-semibold mb-2 text-indigo-800">{card.title}</h3>
        <p className="text-sm text-gray-600 leading-relaxed">{card.desc}</p>
      </motion.div>
    ))}
  </div>

  {/* Full-Width Image */}
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1 }}
    className="mt-20 rounded-2xl overflow-hidden shadow-lg px-2"
  >
    <img
      src="https://maimt.com/wp-content/uploads/2024/03/IMG_20231130_144445.jpg"
      alt="MAIMT Campus"
      className="w-full h-[400px] object-cover rounded-xl"
    />
  </motion.div>
</section>



      {/* Development Team Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10 text-indigo-700">
            Development Team
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <motion.div
                key={member.id}
                whileHover={{ scale: 1.03 }}
                className="bg-white rounded-xl shadow p-5 text-center"
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-32 h-32 object-cover mx-auto rounded-full mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-800">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-500">{member.position}</p>
                <p className="mt-2 flex items-center justify-center gap-2 text-sm text-gray-600">
                  <FaGithub /> {member.github}
                </p>
                <p className="mt-2 text-sm">
                  <FiGitCommit className="inline mr-1" /> Commits:{" "}
                  {member.commits}
                </p>
                <p className="text-sm">
                  <FiGitPullRequest className="inline mr-1" /> PRs: {member.prs}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Journey */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 text-indigo-700">
          Development Journey
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {developmentPhases.map((phase, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="bg-white shadow-md rounded-xl p-6"
            >
              <div className="flex items-center gap-4 mb-4">
                {phase.icon}
                <h3 className="text-xl font-semibold text-gray-800">
                  {phase.title}
                </h3>
              </div>
              <ul className="list-disc list-inside text-gray-700 mb-4">
                {phase.activities.map((activity, idx) => (
                  <li key={idx}>{activity}</li>
                ))}
              </ul>
              <div className="mt-2 space-y-1">
                {phase.githubActions.map((action, idx) => (
                  <p
                    key={idx}
                    className="text-sm text-gray-600 flex items-center gap-2"
                  >
                    {action.type === "commit" && <FiGitCommit />}
                    {action.type === "pr" && <FiGitPullRequest />}
                    {action.type === "repo" && <FaGithub />}
                    {action.type === "branch" && <FaCodeBranch />}
                    <span>
                      {action.action} by <strong>{action.by}</strong>
                    </span>
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer/>
    </>
  );
}
