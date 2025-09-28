"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Code2, Brain, Rocket, Users } from "lucide-react";

// Fluid Image style and hover effect
const fluidImageStyle: React.CSSProperties = {
  animation: "morphShape 8s ease-in-out infinite",
  borderRadius: "50%",
  objectFit: "cover",
  width: "100%",
  height: "100%",
};

// Keyframes for fluid morphing effect
const fluidImageKeyframes = `
@keyframes morphShape {
  0%, 100% {
    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  }
  50% {
    border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
  }
}
`;

const highlights = [
  {
    icon: Code2,
    title: "Full Stack Development",
    description: "Building scalable web applications with modern technologies",
  },
  {
    icon: Brain,
    title: "AI & ML Enthusiast",
    description: "Exploring and implementing intelligent solutions",
  },
  {
    icon: Rocket,
    title: "Innovation Driven",
    description: "Creating efficient and innovative solutions",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Working effectively in diverse team environments",
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="py-16 bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 transition-colors duration-300"
    >
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-10 text-center bg-gradient-to-r from-sky-600 to-teal-400 dark:from-sky-400 dark:to-teal-300 text-transparent bg-clip-text"
        >
          About Me
        </motion.h2>

        {/* Asymmetrical Layout: 60/40 split with image breaking out */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
          {/* Image container - spans 2 columns and breaks out */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative lg:col-span-2 lg:-ml-8"
          >
            <style>{fluidImageKeyframes}</style>
            <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto lg:mx-0">
              <div className="absolute inset-0 bg-gradient-to-br from-sky-500 to-teal-400 opacity-20 rounded-[60%_40%_30%_70%/60%_30%_70%_40%]" />
              <Image
                src="/img/yash.jpg"
                alt="Yash Parmar"
                width={320}
                height={320}
                className="relative z-10 shadow-2xl"
                style={fluidImageStyle}
              />
              {/* Enhanced decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-sky-500/15 rounded-full blur-xl" />
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-teal-500/15 rounded-full blur-xl" />
              {/* Floating accent elements */}
              <div className="absolute top-3 right-3 w-4 h-4 bg-sky-400 rounded-full animate-pulse" />
              <div className="absolute bottom-6 left-3 w-3 h-3 bg-teal-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
            </div>
          </motion.div>

          {/* Text content - spans 3 columns for 60/40 split */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-6 lg:col-span-3"
          >
            <p className="text-base leading-relaxed">
              I am a passionate Software Developer with a deep interest in
              Artificial Intelligence (AI) and Machine Learning (ML). I have a
              strong foundation in building scalable web and mobile
              applications, always focused on creating efficient and innovative
              solutions.
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="bg-white dark:bg-gray-800/50 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow group"
                >
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-gradient-to-br from-sky-500 to-teal-400 rounded-lg text-white group-hover:scale-110 transition-transform">
                      <item.icon size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-base mb-1">{item.title}</h3>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Resume Button */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-6 flex justify-start"
            >
              <motion.a
                href="/resume/Resume_YashParmar.pdf"
                download="Yash_Parmar_Resume.pdf"
                className="inline-flex items-center px-6 py-2.5 bg-gradient-to-r from-sky-600 to-teal-400 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-sky-500/25 transition-all duration-300 text-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download Resume
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-2 w-5 h-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

//Version 10.4.0