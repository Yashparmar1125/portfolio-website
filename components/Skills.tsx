"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const skills = [
  { name: "JavaScript", logo: "/img/js.png", category: "Frontend" },
  { name: "PyTorch", logo: "/img/pytorch.png", category: "Machine Learning" },
  { name: "React", logo: "/img/react.png", category: "Frontend" },
  { name: "Node.js", logo: "/img/node.png", category: "Backend" },
  { name: "Python", logo: "/img/python.png", category: "Backend" },
  { name: "TensorFlow", logo: "/img/TensorFlow.png", category: "Machine Learning" },
  { name: "Postgress", logo: "/img/postgress.png", category: "Backend" },
  { name: "Flutter", logo: "/img/flutter.png", category: "Mobile" },
  { name: "Git", logo: "/img/git.png", category: "DevOps" },
  { name: "Java", logo: "/img/java.png", category: "DevOps" },
  { name: "Django", logo: "/img/django.png", category: "Backend" },
  
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 transition-colors duration-300"
    >
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-10 text-center bg-gradient-to-r from-sky-600 to-teal-400 dark:from-sky-400 dark:to-teal-300 text-transparent bg-clip-text"
        >
          Tech Stack
        </motion.h2>

        <div className="skills-container">
          <div className="skills-slider">
            {/* First set of skills */}
            {skills.map((skill, index) => (
              <motion.div
                key={`${skill.name}-1`}
                className="skill-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="relative group bg-white dark:bg-gray-800/50 rounded-xl p-5 shadow-lg hover:shadow-xl transform transition-all duration-300 ease-in-out flex flex-col justify-center items-center hover:scale-105 border border-gray-200 dark:border-gray-700/50 h-28 w-24">
                  <Image
                    src={skill.logo}
                    alt={skill.name}
                    width={60}
                    height={60}
                    className="object-contain mb-2 group-hover:scale-110 transition-transform duration-300"
                  />
                  <span className="text-xs font-medium text-gray-700 dark:text-gray-300 text-center leading-tight">
                    {skill.name}
                  </span>
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-sky-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            ))}

            {/* Duplicate set for infinite scroll */}
            {skills.map((skill, index) => (
              <motion.div
                key={`${skill.name}-2`}
                className="skill-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: (index + skills.length) * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="relative group bg-white dark:bg-gray-800/50 rounded-xl p-5 shadow-lg hover:shadow-xl transform transition-all duration-300 ease-in-out flex flex-col justify-center items-center hover:scale-105 border border-gray-200 dark:border-gray-700/50 h-28 w-24">
                  <Image
                    src={skill.logo}
                    alt={skill.name}
                    width={60}
                    height={60}
                    className="object-contain mb-2 group-hover:scale-110 transition-transform duration-300"
                  />
                  <span className="text-xs font-medium text-gray-700 dark:text-gray-300 text-center leading-tight">
                    {skill.name}
                  </span>
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-sky-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;


//Version 10.4.0