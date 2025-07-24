"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Trophy, Award, ChevronLeft, ChevronRight } from "lucide-react";

const certificates = [
  {
    id: 1,
    type: "hackathon",
    title: "Smart India Hackathon 2024",
    date: "2024",
    position: "Shortlisted",
    organizer: "Ministry of Education's Innovation Cell",
    description: "Selected as a finalist in India's largest hackathon, showcasing innovative solutions for real-world challenges",
    icon: Trophy,
    image: "/img/hackathons/sih2024.png"
  },
  {
    id: 2,
    type: "hackathon",
    title: "Quasar 3.0",
    date: "2024",
    position: "Top 60",
    organizer: "VPPCOEVA, Mumbai",
    description: "Secured position in Top 60 out of 2600+ registrations and 650+ teams. Built a Learning Path Dashboard for Enhancing Skills. Featured in multiple newspapers for our innovative solution.",
    icon: Trophy,
    image: "/img/hackathons/quasar.png"
  },
  {
    id: 3,
    type: "hackathon",
    title: "CodeAThon 2025",
    date: "2024",
    position: "Finalist",
    organizer: "Vidyalankar Institute of Technology, Mumbai",
    description: "Developed IMPACTLINK - an AI-powered platform connecting NGOs with volunteers. Implemented features like AI chatbot, skill-based matching, and impact tracking using React, Node.js, and Python.",
    icon: Trophy,
    image: "/img/hackathons/codeathon.png"
  },
  {
    id: 4,
    type: "hackathon",
    title: "INSPIRON 4.0",
    date: "2024",
    position: "Finalist",
    organizer: "CSI-COEP, COEP Technological University",
    description: "Built LangSQL - an AI-powered SQL assistant that converts natural language to SQL queries. Selected among top 30 teams out of 300+ participants. Implemented features like query optimization and data insights.",
    icon: Trophy,
    image: "/img/hackathons/inspiron.png"
  },
  {
    id: 5,
    type: "certificate",
    title: "Frontend Developer (React)",
    date: "2024",
    issuer: "HackerRank",
    description: "Demonstrated proficiency in React.js development, including components, state management, and modern frontend practices",
    icon: Award,
    image: "/img/certificates/frontend.png"
  },
  {
    id: 7,
    type: "certificate",
    title: "JavaScript (Intermediate)",
    date: "2024",
    issuer: "HackerRank",
    description: "Advanced JavaScript concepts including closures, promises, async/await, and object-oriented programming",
    icon: Award,
    image: "/img/certificates/js.png"
  },
  {
    id: 8,
    type: "certificate",
    title: "Node.js Bootcamp",
    date: "2024",
    issuer: "HackerRank",
    description: "Comprehensive training in Node.js backend development, including Express.js, APIs, and database integration",
    icon: Award,
    image: "/img/certificates/node.png"
  },
  {
    id: 9,
    type: "certificate",
    title: "Python (Basic)",
    date: "2024",
    issuer: "HackerRank",
    description: "Fundamental Python programming skills including syntax, data structures, and basic algorithms",
    icon: Award,
    image: "/img/certificates/python.png"
  },
  {
    id: 10,
    type: "certificate",
    title: "React Bootcamp",
    date: "2024",
    issuer: "HackerRank",
    description: "Intensive training in React.js, covering components, hooks, state management, and modern React patterns",
    icon: Award,
    image: "/img/certificates/react.png"
  },
  {
    id: 11,
    type: "certificate",
    title: "TCS Ion Career Edge",
    date: "2024",
    issuer: "TCS Young Professionals",
    description: "Professional development program focusing on industry-relevant skills and career preparation",
    icon: Award,
    image: "/img/certificates/tcs ion.png"
  }
];

const Certifications = () => {
  const [activeTab, setActiveTab] = useState("hackathons");
  const [scrollPosition, setScrollPosition] = useState(0);

  const filteredCertificates = certificates.filter(
    cert => cert.type === activeTab.slice(0, -1)
  );

  const scroll = (direction: 'left' | 'right') => {
    const container = document.getElementById('certificates-container');
    if (!container) return;

    const scrollAmount = direction === 'left' ? -400 : 400;
    const newPosition = scrollPosition + scrollAmount;
    
    // Ensure we don't scroll past the bounds
    const maxScroll = container.scrollWidth - container.clientWidth;
    const boundedPosition = Math.max(0, Math.min(newPosition, maxScroll));
    
    container.scrollTo({
      left: boundedPosition,
      behavior: 'smooth'
    });
    setScrollPosition(boundedPosition);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-sky-600 to-teal-400 dark:from-sky-400 dark:to-teal-300 text-transparent bg-clip-text">
            Achievements
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            A collection of my achievements, certifications, and hackathon experiences
          </p>
        </motion.div>

        <div className="flex justify-center gap-4 mb-16">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveTab("hackathons")}
            className={`px-8 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
              activeTab === "hackathons"
                ? "bg-gradient-to-r from-sky-500 to-teal-400 text-white shadow-lg shadow-sky-500/30"
                : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700"
            }`}
          >
            Hackathons
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveTab("certificates")}
            className={`px-8 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
              activeTab === "certificates"
                ? "bg-gradient-to-r from-sky-500 to-teal-400 text-white shadow-lg shadow-sky-500/30"
                : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700"
            }`}
          >
            Certificates
          </motion.button>
        </div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              id="certificates-container"
              className="flex overflow-x-auto gap-6 pb-8 -mx-4 px-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
            >
              {filteredCertificates.map((cert, index) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="flex-none w-[300px] bg-white dark:bg-gray-800/50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-100 dark:border-gray-700"
                >
                  <div className="relative h-40 w-full overflow-hidden">
                    <Image
                      src={cert.image}
                      alt={cert.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3">
                      <div className="flex items-center gap-2">
                        <div className="p-1.5 bg-white/10 backdrop-blur-sm rounded-lg">
                          <cert.icon size={16} className="text-white" />
                        </div>
                        <h3 className="text-lg font-bold text-white">
                          {cert.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-xs text-gray-600 dark:text-gray-400 mb-3">
                      {cert.date}
                    </p>
                    {cert.type === "hackathon" ? (
                      <>
                        <div className="mb-2">
                          <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-sky-100 dark:bg-sky-900/30 text-sky-600 dark:text-sky-400">
                            {cert.position}
                          </span>
                        </div>
                        <p className="text-sm text-sky-600 dark:text-sky-400 font-medium mb-1">
                          {cert.organizer}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                          {cert.description}
                        </p>
                      </>
                    ) : (
                      <>
                        <div className="mb-2">
                          <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-sky-100 dark:bg-sky-900/30 text-sky-600 dark:text-sky-400">
                            {cert.issuer}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                          {cert.description}
                        </p>
                      </>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Scroll Buttons */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white dark:bg-gray-800 p-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-10 border border-gray-200 dark:border-gray-700"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600 dark:text-gray-300" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white dark:bg-gray-800 p-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-10 border border-gray-200 dark:border-gray-700"
          >
            <ChevronRight className="w-6 h-6 text-gray-600 dark:text-gray-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Certifications;

//Version 10.4.0
