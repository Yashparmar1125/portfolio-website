"use client";

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
      className="py-12 bg-gray-100 dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">
          Skills
        </h2>

        <div className="skills-container">
          <div className="skills-slider">
            {/* First set of skills */}
            {skills.map((skill) => (
              <div
                key={`${skill.name}-1`}
                className="skill-item"
              >
                <div className="relative group bg-white dark:bg-gray-800 rounded-full p-6 shadow-lg transform transition-transform duration-300 ease-in-out flex justify-center items-center hover:scale-110">
                  <Image
                    src={skill.logo}
                    alt={skill.name}
                    width={80}
                    height={80}
                    className="object-contain"
                  />
                </div>
              </div>
            ))}

            {/* Duplicate set for infinite scroll */}
            {skills.map((skill) => (
              <div
                key={`${skill.name}-2`}
                className="skill-item"
              >
                <div className="relative group bg-white dark:bg-gray-800 rounded-full p-6 shadow-lg transform transition-transform duration-300 ease-in-out flex justify-center items-center hover:scale-110">
                  <Image
                    src={skill.logo}
                    alt={skill.name}
                    width={80}
                    height={80}
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;


//Version 10.4.0