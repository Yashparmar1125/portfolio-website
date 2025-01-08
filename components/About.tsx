"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Fluid Image style and hover effect
const fluidImageStyle: React.CSSProperties = {
  animation: "morphShape 8s ease-in-out infinite", // Adding fluid animation
  borderRadius: "50%", // Initial shape (circle)
  objectFit: "cover", // Ensures the image fits well within the shape
  width: "100%", // Full width to fit container
  height: "100%", // Full height to fit container
};

// Keyframes for fluid morphing effect
const fluidImageKeyframes = `
@keyframes morphShape {
  0%, 100% {
    border-radius: 50%;
  }
  33% {
    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  }
  66% {
    border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
  }
}
`;

const About = () => {
  return (
    <section
      id="about"
      className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-8 text-center"
        >
          About Me
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Image container */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:w-1/2 mb-8 md:mb-0 flex justify-center"
          >
            <style>{fluidImageKeyframes}</style>{" "}
            {/* Insert the CSS keyframes directly */}
            <motion.div
              className="relative"
              style={{ width: "300px", height: "300px" }} // Set the size of the container
            >
              <Image
                src="/img/yash.jpg"
                alt="Yash Parmar"
                width={300}
                height={300}
                className="rounded-full object-cover mx-auto shadow-lg hover:scale-110 transition-transform duration-300 ease-in-out"
                style={fluidImageStyle} // Apply the fluid animation and shape
              />
            </motion.div>
          </motion.div>

          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:w-1/2"
          >
            <p className="text-lg mb-4">
              I am a passionate Software Developer with a deep interest in
              Artificial Intelligence (AI) and Machine Learning (ML). I have a
              strong foundation in building scalable web and mobile
              applications, always focused on creating efficient and innovative
              solutions that add value to users and businesses alike.
            </p>
            <p className="text-lg mb-4">
              My journey in tech has been driven by my fascination with the
              potential of AI and ML to revolutionize industries. I am
              constantly exploring new algorithms, tools, and frameworks to stay
              ahead of the curve and leverage these technologies to build
              smarter, more intuitive applications.
            </p>
            <p className="text-lg mb-6">
              Outside of coding, I&apos;m actively involved in the tech
              community through open-source contributions, writing technical
              articles, and mentoring aspiring developers. Let&apos;s
              collaborate to create cutting-edge solutions and push the
              boundaries of technology together!
            </p>

            {/* Get My Resume Button */}
            <motion.a
              href="/resume/Resume_YashParmar.pdf" // Replace with the actual path to your resume
              download="Yash_Parmar_Resume.pdf"
              className="inline-flex items-center bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-lg transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Get My Resume
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-2 w-5 h-5"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 011 1v7.293l2.146-2.147a1 1 0 111.414 1.414l-3.5 3.5a1 1 0 01-1.414 0l-3.5-3.5a1 1 0 111.414-1.414L9 11.293V4a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

//Version 10.4.0