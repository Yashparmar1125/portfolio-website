"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, Tag, Calendar, Users, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Script from "next/script";

// Project categories
const categories = ["All", "Web Development", "AI/ML", "Mobile", "Full Stack"];

const projects = [
  
  
  {
    title: "LangSQL - AI-Powered SQL Assistant",
    description:
      "An advanced web application that leverages AI to help developers generate, translate, and optimize SQL queries. Features a modern three-tier architecture with React frontend and specialized backend servers for query processing and AI-powered natural language understanding.",
    technologies: ["React", "Node.js", "Django", "MongoDB", "TensorFlow", "Firebase"],
    image: "/img/LangSQL.png",
    github: "https://github.com/Yashparmar1125/LangSQL-Inspiron-4.0",
    live: "https://example.com",
    category: "Full Stack",
    completionDate: "March 2025",
    teamSize: "4",
    impact: "Reduced SQL query writing time by 60% for developers",
  },
  {
    title: "EduAI - AI-Powered Learning Platform",
    description:
      "A modern, AI-powered learning platform that provides personalized education experiences through interactive courses, assessments, and gamification features. Combines cutting-edge technology with proven educational methodologies for an engaging learning environment.",
    technologies: ["React", "Node.js", "MongoDB", "Firebase", "Tailwind CSS"],
    image: "/img/EduAI.png",
    github: "https://github.com/Yashparmar1125/EduAI",
    live:"https://eduai-frontend.onrender.com/dashboard",
    category: "Web Development",
    completionDate: "February 2025",
    teamSize: "4",
    impact: "Improved student engagement by 40% through personalized learning",
  },
  {
    title: "StockSage AI",
    description: "A full-stack web application that predicts stock prices using machine learning techniques. Features include data collection from Yahoo Finance, technical indicator calculations, and XGBoost-based price predictions.",
    image: "/img/stock-sage.png",
    technologies: ["Next.js", "Python", "XGBoost", "Machine Learning", "Flask", "Tailwind CSS"],
    github: "https://github.com/Yashparmar1125/StockSage-AI",
    live: "http://stocksageai.vercel.app",
    category: "AI/ML",
    color: "from-blue-500/20 to-cyan-500/20 dark:from-blue-500/10 dark:to-cyan-500/10",
    completionDate: "November 2024",
    teamSize: "Solo",
    impact: "Empowers users to make informed investment decisions by leveraging AI-driven stock price predictions and technical analysis.",
  },
  {
  "title": "Impact Link",
  "description": "A platform connecting volunteers with NGOs based on skills and availability, with features like task discovery and campaign tracking.",
  "image": "/img/image.png",
  "technologies": ["Node.js", "Express", "MongoDB", "React", "Tailwind CSS", "JWT"],
  "github": "https://github.com/Yashparmar1125/Impact-Link",
  "live": "https://impactlink.vercel.app",
  "category": "Social Good",
  "color": "from-green-500/20 to-emerald-500/20 dark:from-green-500/10 dark:to-emerald-500/10",
  "completionDate": "April 2025",
  "teamSize": "Team of 3",
  "impact": "Bridges the gap between NGOs and volunteers through skill-based matchmaking."
}
,
  {
    title: "Student Management System",
    description:
      "The Student Management System is a web application designed to facilitate the management of classroom activities, enhance communication among students, teachers, and school management, and streamline various administrative tasks.",
    technologies: ["React", "Django", "SqLite"],
    image: "/img/student_management_system.jpeg",
    github:
      "https://github.com/Yashparmar1125/Student_Management_Systeam/tree/master",
    live: "",
    category: "Full Stack",
    completionDate: " May 2024",
    teamSize: "Solo",
    impact: "Streamlined administrative tasks",
  },
  {
    title: "Facial Attendence System",
    description:
      "This project is an Attendance System using Face Recognition. Built with Flask for the web framework, OpenCV for face detection, and MySQL for storing data, it automates the process of marking attendance by recognizing faces in real-time.",
    technologies: ["Flask", "OpenCV", "MySQL"],
    image: "/img/face_attendence.jpg",
    github:
      "https://github.com/Yashparmar1125/FaceID.git",
    live: "https://github.com/Yashparmar1125/FaceID.git",
    category: "AI/ML",
    completionDate: "May 2024",
    teamSize: "Solo",
    impact: "Automated attendance marking",
  },
  {
    title: "Pharmacy Management System",
    description:
      "A simple and efficient system for managing pharmacy operations, including inventory, prescriptions, sales, and customer transactions. It helps pharmacies track stock levels, process sales, generate reports, and manage user roles.",
    technologies: ["Bootstrap", "Django", "Postgress"],
    image: "/img/Pharmcy-Management-system.png",
    github: "https://github.com/Yashparmar1125/Pharmacy_Management_System",
    live: "https://example.com",
    category: "Full Stack",
    completionDate: " January 2024",
    teamSize: "Solo",
    impact: "Streamlined pharmacy operations",
  },
  {
    title: "AI ChatBot",
    description:
      "AI-powered chatbot using machine learning and NLP to handle queries, provide recommendations, and assist in domains like customer support and personal assistance. Customizable, learnable, and scalable for integration with websites and messaging apps.",
    technologies: ["Python", "Machine Learning", "NLP"],
    image: "/img/ai_chatbot.png",
    github: "https://github.com/Yashparmar1125/AI_Chatbot",
    live: "https://example.com",
    category: "AI/ML",
    completionDate: "January 2024",
    teamSize: "Solo",
    impact: "Enhanced customer support",
  },
  {
    title: "Face Emotion Detector",
    description:
      "A Face Emotion Detector uses computer vision and machine learning to identify emotions from facial expressions in images or videos, using tools like OpenCV and TensorFlow. It has applications in areas such as human-computer interaction and security.",
    technologies: ["OpenCV", "DeepFace", "Python"],
    image: "/img/face_emotion.jpg",
    github: "https://github.com/Yashparmar1125/Face_Emotion_Detector",
    live: "https://example.com",
    category: "AI/ML",
    completionDate: " January 2024",
    teamSize: "Solo",
    impact: "Enhanced human-computer interaction",
  },
];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showTechnologies, setShowTechnologies] = useState<{ [key: string]: boolean }>({});
  const containerRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: "left" | "right") => {
    if (containerRef.current) {
      const scrollAmount = direction === "left" ? -400 : 400;
      containerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const toggleTechnologies = (projectTitle: string) => {
    setShowTechnologies(prev => ({
      ...prev,
      [projectTitle]: !prev[projectTitle]
    }));
  };

  const filteredProjects = projects.filter((project) => {
    return selectedCategory === "All" || project.category === selectedCategory;
  });

  return (
    <>
      <Script id="projects-schema" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          "itemListElement": projects.map((project, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "item": {
              "@type": "SoftwareApplication",
              "name": project.title,
              "description": project.description,
              "applicationCategory": project.category,
              "operatingSystem": "Web",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "author": {
                "@type": "Person",
                "name": "Yash Parmar"
              }
            }
          }))
        })}
      </Script>
      
      <section
        id="projects"
        className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 transition-colors duration-300"
      >
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-sky-600 to-teal-400 dark:from-sky-400 dark:to-teal-300 text-transparent bg-clip-text">
              Featured Projects
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
              Explore my latest projects showcasing my skills in web development, AI/ML, and full-stack solutions.
            </p>
          </motion.div>

          {/* Category Filter Section */}
          <div className="mb-12 flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-sky-500 to-teal-400 text-white shadow-lg scale-105"
                    : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700"
                }`}
                whileHover={{ scale: selectedCategory === category ? 1.05 : 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {category}
              </motion.button>
            ))}
          </div>

          <div className="relative">
            <button
              onClick={() => handleScroll("left")}
              className="absolute -left-4 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg hover:shadow-xl transition-all z-10 group"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-sky-500 transition-colors" />
            </button>
            
            <div
              ref={containerRef}
              className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory scroll-smooth hide-scrollbar"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex-none w-[350px] snap-center"
                >
                  <div className="bg-white dark:bg-gray-800/50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full border border-gray-200 dark:border-gray-700/50 group">
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={500}
                        height={300}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors"
                          >
                            <Github className="w-5 h-5 text-white" />
                          </a>
                          {project.live && (
                            <a
                              href={project.live}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors"
                            >
                              <ExternalLink className="w-5 h-5 text-white" />
                            </a>
                          )}
                        </div>
                      </div>
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 bg-sky-500/90 backdrop-blur-sm text-white text-xs font-medium rounded-full">
                          {project.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400 mb-3">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{project.completionDate}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          <span>{project.teamSize}</span>
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
                        {project.description}
                      </p>
                      {project.impact && (
                        <div className="mb-4 p-3 bg-sky-50 dark:bg-sky-900/20 rounded-lg">
                          <p className="text-sm text-sky-600 dark:text-sky-400">
                            <strong>Impact:</strong> {project.impact}
                          </p>
                        </div>
                      )}
                      <div>
                        <button
                          onClick={() => toggleTechnologies(project.title)}
                          className="flex items-center gap-2 text-sky-500 hover:text-sky-600 transition-colors text-sm font-medium"
                        >
                          <Tag className="w-4 h-4" />
                          {showTechnologies[project.title] ? "Hide Stack" : "View Stack"}
                        </button>
                        {showTechnologies[project.title] && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mt-3 flex flex-wrap gap-2"
                          >
                            {project.technologies.map((tech, index) => (
                              <span
                                key={index}
                                className="px-2 py-1 bg-gray-100 dark:bg-gray-700/50 text-gray-600 dark:text-gray-300 rounded-md text-xs"
                              >
                                {tech}
                              </span>
                            ))}
                          </motion.div>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <button
              onClick={() => handleScroll("right")}
              className="absolute -right-4 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg hover:shadow-xl transition-all z-10 group"
            >
              <ChevronRight className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-sky-500 transition-colors" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;

//Version 10.4.0
