'use client'

import { motion } from 'framer-motion'
import { Server,BrainCircuit, Globe } from 'lucide-react'
import { useState } from 'react'
import HireMe from './HireMe'

const services = [
  {
    title: 'Web Development',
    description: 'Creating responsive and dynamic websites using modern frameworks like React, Bootstrap, Next.js, Tailwind CSS, and JavaScript.',
    icon: Globe,
    color: 'bg-blue-500',
    skills: ['React', 'Bootstrap', 'Next.js', 'Tailwind CSS', 'JavaScript']
  },
  
  {
    title: 'Backend Development',
    description: 'Building robust server-side applications and APIs using Django, Flask, Node.js, Express, and databases like MongoDB and PostgreSQL.',
    icon: Server,
    color: 'bg-green-500',
    skills: ['Django', 'Flask', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL']
  },
  
  {
    title: 'AI Solutions',
    description: 'Creating intelligent systems with machine learning, natural language processing, and conversational AI.',
    icon: BrainCircuit,  // You can change this to a relevant AI icon
    color: 'bg-indigo-500',
    skills: ['Machine Learning (ML)', 'TensorFlow', 'NLP (Natural Language Processing)', 'Chatbots & Conversational AI']
  },
  
]

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="py-20 px-4 md:px-0 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl relative overflow-hidden"
            >
              <div className="flex items-center mb-4 relative z-10">
                <div className={`p-3 rounded-full ${service.color} text-white mr-4`}>
                  <service.icon className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-semibold font-poppins">{service.title}</h2>
              </div>
              <p className="text-gray-600 dark:text-gray-300 font-inter mb-4 relative z-10">{service.description}</p>
              <div className="flex flex-wrap gap-2 mt-4 relative z-10">
                {service.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-sm rounded-full">{skill}</span>
                ))}
              </div>
              <motion.div
                className={`absolute inset-0 ${service.color} opacity-10`}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: hoveredIndex === index ? 1 : 0, opacity: hoveredIndex === index ? 0.1 : 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>
        <HireMe />
      </div>
    </section>
  )
}

export default Services




//Version 10.4.0