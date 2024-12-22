"use client";

import { motion } from "framer-motion";
import Image from "next/image"; // Import Image component
import { useRef } from "react";

const skills = [
  { name: "JavaScript", logo: "/img/js.png", category: "Frontend" },
  { name: "PyTorch", logo: "/img/pytorch.png", category: "Machine Learning" },
  { name: "React", logo: "/img/react.png", category: "Frontend" },
  { name: "Node.js", logo: "/img/node.png", category: "Backend" },
  { name: "Python", logo: "/img/python.png", category: "Backend" },
  {
    name: "TensorFlow",
    logo: "/img/TensorFlow.png",
    category: "Machine Learning",
  },
  { name: "Postgress", logo: "/img/postgress.png", category: "Backend" },
  { name: "Flutter", logo: "/img/flutter.png", category: "Mobile" },
  { name: "Git", logo: "/img/git.png", category: "DevOps" },
  { name: "Java", logo: "/img/java.png", category: "DevOps" },
  { name: "Django", logo: "/img/django.png", category: "Backend" },
];

const Skills = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const scrollSkills = (direction: "left" | "right") => {
    if (containerRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      containerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section
      id="skills"
      className="py-20 bg-gray-100 dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.01 }}
          className="text-4xl font-bold mb-12 text-center text-gray-800 dark:text-white"
        >
          Skills
        </motion.h2>

        {/* Skill container with arrows */}
        <div className="flex items-center justify-between">
          <motion.button
            onClick={() => scrollSkills("left")}
            className="p-2 rounded-full bg-gray-800 text-white hover:bg-gray-600 focus:outline-none transition transform hover:scale-110"
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.1 }}
          >
            <span className="text-xl">&lt;</span>
          </motion.button>

          {/* Horizontal container for skills */}
          <div
            ref={containerRef}
            className="flex items-center gap-8 w-full overflow-x-auto scroll-smooth scrollbar-hidden"
            style={{
              scrollbarWidth: "none", // Firefox scrollbar hiding
              msOverflowStyle: "none", // IE/Edge scrollbar hiding
              scrollBehavior: "smooth", // Smooth scroll behavior
            }}
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.01, delay: index * 0.1 },
                }}
                viewport={{ once: true }} // Animates only once when visible
                className="bg-white dark:bg-gray-800 rounded-full p-6 shadow-lg transform transition-transform duration-300 ease-in-out flex justify-center items-center flex-shrink-0"
              >
                <div className="relative group">
                  {/* Hover 3D pop-out effect */}
                  <Image
                    src={skill.logo}
                    alt={skill.name}
                    width={80} // Set the width (adjust as needed)
                    height={80} // Set the height (adjust as needed)
                    className="object-contain transition-all duration-300 ease-in-out group-hover:scale-125 group-hover:translate-y-[-8px]"
                  />
                  <div className="absolute inset-0 w-full h-full bg-transparent group-hover:bg-opacity-10 transition-all duration-300 ease-in-out"></div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.button
            onClick={() => scrollSkills("right")}
            className="p-2 rounded-full bg-gray-800 text-white hover:bg-gray-600 focus:outline-none transition transform hover:scale-110"
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.1 }}
          >
            <span className="text-xl">&gt;</span>
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Skills;
