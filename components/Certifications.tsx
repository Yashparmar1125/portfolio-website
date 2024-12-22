"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const certifications = [
  {
    name: "JavaScript (Intermidiate)",
    organization: "HackerRank",
    logo: "/img/HackerRank_Icon-1000px.png",
    year: 2024,
    url: "https://www.hackerrank.com/certificates/86b3bf02d3ed", // Add URL here
  },
  {
    name: "React.js",
    organization: "LetsUpgrade",
    logo: "/img/letsupgrade.png",
    year: 2024,
    url: "https://verify.letsupgrade.in/certificate/LUERJSDEC1241014", // Add URL here
  },
  {
    name: "Python (Advance)",
    organization: "HackerRank",
    logo: "/img/HackerRank_Icon-1000px.png",
    year: 2024,
    url: "https://www.hackerrank.com/certificates/86b3bf02d3ed", // Add URL here
  },
  {
    name: "Node.js",
    organization: "LetsUpgrade",
    logo: "/img/letsupgrade.png",
    year: 2024,
    url: "https://verify.letsupgrade.in/certificate/LUENJSDEC12413", // Add URL here
  },
];

const Certifications = () => {
  return (
    <section
      id="certifications"
      className="py-20 bg-gray-100 dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-12 text-center"
        >
          Certifications
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col items-center text-center"
              whileHover={{
                scale: 1.05, // Slightly scale up the card
                boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)", // Add a shadow
                transition: { duration: 0.3 }, // Smooth transition
              }}
            >
              <a
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full h-full"
              >
                <div className="w-24 h-24 mb-4 relative">
                  <Image
                    src={cert.logo}
                    alt={`${cert.organization} logo`}
                    layout="fill"
                    objectFit="contain"
                    className="rounded-full"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 font-poppins">
                  {cert.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-2 font-inter">
                  {cert.organization}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 font-inter">
                  Obtained in {cert.year}
                </p>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
