"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Github, ExternalLink, Calendar, Users, Tag } from "lucide-react";
import Image from "next/image";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  github: string;
  live?: string;
  category: string;
  completionDate: string;
  teamSize: string;
  impact?: string;
}

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="bg-white dark:bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="relative">
              <Image
                src={project.image}
                alt={project.title}
                width={800}
                height={400}
                className="w-full h-64 object-cover rounded-t-2xl"
              />
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full hover:bg-white dark:hover:bg-gray-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                <span className="px-3 py-1 bg-sky-500/90 backdrop-blur-sm text-white text-sm font-medium rounded-full">
                  {project.category}
                </span>
                <div className="flex gap-2">
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
            </div>

            {/* Content */}
            <div className="p-8">
              <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-6">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>{project.completionDate}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  <span>{project.teamSize}</span>
                </div>
              </div>

              <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                {project.title}
              </h2>

              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                {project.description}
              </p>

              {/* Problem & Solution Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl">
                  <h3 className="text-lg font-semibold text-red-800 dark:text-red-400 mb-3">
                    Problem
                  </h3>
                  <p className="text-red-700 dark:text-red-300">
                    {project.category === "AI/ML" 
                      ? "Complex data analysis and prediction challenges requiring intelligent automation"
                      : project.category === "Web Development"
                      ? "User experience and performance optimization challenges"
                      : "Scalable architecture and integration challenges across multiple platforms"
                    }
                  </p>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl">
                  <h3 className="text-lg font-semibold text-green-800 dark:text-green-400 mb-3">
                    Solution
                  </h3>
                  <p className="text-green-700 dark:text-green-300">
                    {project.category === "AI/ML"
                      ? "Implemented machine learning algorithms and AI-powered automation"
                      : project.category === "Web Development"
                      ? "Built responsive, performant web applications with modern frameworks"
                      : "Developed full-stack solutions with robust architecture and seamless integration"
                    }
                  </p>
                </div>
              </div>

              {/* Impact */}
              {project.impact && (
                <div className="bg-sky-50 dark:bg-sky-900/20 p-6 rounded-xl mb-8">
                  <h3 className="text-lg font-semibold text-sky-800 dark:text-sky-400 mb-3">
                    Impact & Results
                  </h3>
                  <p className="text-sky-700 dark:text-sky-300">
                    {project.impact}
                  </p>
                </div>
              )}

              {/* Tech Stack */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <Tag className="w-5 h-5" />
                  Technology Stack
                </h3>
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
