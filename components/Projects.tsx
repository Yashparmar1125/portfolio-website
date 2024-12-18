'use client'

import { useState, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react'

const projects = [
  {
    title: 'Student Management System',
    description: 'The Student Management System is a web application designed to facilitate the management of classroom activities, enhance communication among students, teachers, and school management, and streamline various administrative tasks.',
    technologies: ['React', 'Django', 'SqLite'],
    image: '/img/student_management_system.jpeg',
    github: 'https://github.com/Yashparmar1125/Student_Management_Systeam/tree/master',
    live: 'https://example.com',
  },
  {
    title: 'Facial Attendence System',
    description: 'This project is an Attendance System using Face Recognition. Built with Flask for the web framework, OpenCV for face detection, and MySQL for storing data, it automates the process of marking attendance by recognizing faces in real-time.',
    technologies: ['Flask', 'OpenCV', 'MySQL'],
    image: '/img/face_attendence.jpg',
    github: 'https://github.com/Yashparmar1125/Face_Attendence_System/tree/master',
    live: 'https://example.com',
  },
  {
    title: 'Pharmacy MAnagement System',
    description: 'A simple and efficient system for managing pharmacy operations, including inventory, prescriptions, sales, and customer transactions. It helps pharmacies track stock levels, process sales, generate reports, and manage user roles.',
    technologies: ['Bootstrap', 'Django', 'Postgress'],
    image: 'img/Pharmcy-Management-system.png',
    github: 'https://github.com/Yashparmar1125/Pharmacy_Management_System',
    live: 'https://example.com',
  },
  {
    title: 'AI ChatBot',
    description: 'AI-powered chatbot using machine learning and NLP to handle queries, provide recommendations, and assist in domains like customer support and personal assistance. Customizable, learnable, and scalable for integration with websites and messaging apps.',
    technologies: ['Python', 'Machine Learning', 'NLP'],
    image: '/img/ai_chatbot.png',
    github: 'https://github.com/Yashparmar1125/AI_Chatbot',
    live: 'https://example.com',
  },
  {
    title: 'Face Emotion Detector',
    description: 'A Face Emotion Detector uses computer vision and machine learning to identify emotions from facial expressions in images or videos, using tools like OpenCV and TensorFlow. It has applications in areas such as human-computer interaction and security.',
    technologies: ['OpenCV', 'DeepFace', 'Python'],
    image: '/img/face_emotion.jpg',
    github: 'https://github.com/Yashparmar1125/Face_Emotion_Detector',
    live: 'https://example.com',
  },
]

const Projects = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollX } = useScroll({ container: containerRef })
  const opacity = useTransform(scrollX, [0, 100], [1, 0])

  const handleScroll = (direction: 'left' | 'right') => {
    if (containerRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300
      containerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-8 text-center"
        >
          My Projects
        </motion.h2>
        <div className="relative">
          <motion.div style={{ opacity }} className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10">
            <button
              onClick={() => handleScroll('left')}
              className="bg-white dark:bg-gray-700 p-2 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          </motion.div>
          <div
            ref={containerRef}
            className="flex overflow-x-scroll scrollbar-hide snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {projects.map((project, index) => {
              // Use useState to manage technologies visibility for each project
              const [showTechnologies, setShowTechnologies] = useState(false);

              return (
                <motion.div
                  key={project.title}
                  className="flex-shrink-0 w-full md:w-96 mx-4 snap-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                    <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                      {/* Technologies Button */}
                      <div className="mb-4">
                        <button
                          onClick={() => setShowTechnologies((prev) => !prev)}
                          className="text-blue-500 hover:text-blue-600"
                        >
                          View More
                        </button>
                        {/* Show Technologies if button clicked */}
                        {showTechnologies && (
                          <div className="mt-4">
                            <h4 className="font-semibold">Technologies:</h4>
                            <ul className="list-inside list-disc text-gray-600 dark:text-gray-300">
                              {project.technologies.map((tech, index) => (
                                <li key={index}>{tech}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                      <div className="flex justify-between">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-blue-500 hover:text-blue-600 transition-colors"
                        >
                          <Github className="mr-2" /> GitHub
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10">
            <button
              onClick={() => handleScroll('right')}
              className="bg-white dark:bg-gray-700 p-2 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
