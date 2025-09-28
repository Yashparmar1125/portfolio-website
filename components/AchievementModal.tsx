"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, MapPin, Calendar, Award, Building, ExternalLink } from "lucide-react";
import Image from "next/image";

interface AchievementModalProps {
  achievement: {
    id: string;
    title: string;
    description: string;
    image: string;
    date: string;
    type: "hackathon" | "certificate";
    position?: string;
    organizer?: string;
    issuer?: string;
    location?: string;
    icon: any;
    link?: string;
  } | null;
  isOpen: boolean;
  onClose: () => void;
}

const AchievementModal = ({ achievement, isOpen, onClose }: AchievementModalProps) => {
  if (!achievement) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ y: 50, opacity: 0, scale: 0.9 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 50, opacity: 0, scale: 0.9 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="relative w-full max-w-2xl max-h-[90vh] bg-white dark:bg-gray-900 rounded-xl shadow-2xl overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors z-10"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header Image */}
            <div className="relative w-full h-48 md:h-64 overflow-hidden bg-gradient-to-br from-sky-500 to-teal-400">
              <Image
                src={achievement.image}
                alt={achievement.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
                unoptimized={true}
                onError={(e) => {
                  console.log('Image failed to load:', achievement.image);
                  // Hide the image if it fails to load, showing only the gradient background
                  e.currentTarget.style.display = 'none';
                }}
                onLoad={() => {
                  console.log('Image loaded successfully:', achievement.image);
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-white/20 backdrop-blur-sm rounded-lg">
                    <achievement.icon size={24} className="text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">{achievement.title}</h2>
                </div>
                <div className="flex items-center gap-4 text-gray-200 text-sm">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{achievement.date}</span>
                  </div>
                  {achievement.location && (
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{achievement.location}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Content Area */}
            <div className="flex-grow overflow-y-auto p-6 md:p-8 space-y-6">
              {/* Achievement Type Badge */}
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-sky-500" />
                <span className="px-3 py-1 bg-sky-100 dark:bg-sky-900/30 text-sky-600 dark:text-sky-400 rounded-full text-sm font-medium">
                  {achievement.type === "hackathon" ? "Hackathon Achievement" : "Professional Certificate"}
                </span>
              </div>

              {/* Position/Award - Only for hackathons */}
              {achievement.type === "hackathon" && achievement.position && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Position/Award</h3>
                  <div className="p-3 bg-gradient-to-r from-sky-50 to-teal-50 dark:from-sky-900/20 dark:to-teal-900/20 rounded-lg">
                    <p className="text-sky-600 dark:text-sky-400 font-medium">{achievement.position}</p>
                  </div>
                </div>
              )}

              {/* Organizer/Issuer */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                  <Building className="w-5 h-5 text-sky-500" />
                  {achievement.type === "hackathon" ? "Organizer" : "Issuing Organization"}
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  {achievement.type === "hackathon" ? achievement.organizer : achievement.issuer}
                </p>
              </div>

              {/* Description */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Description</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {achievement.description}
                </p>
              </div>

              {/* Additional Details for Hackathons */}
              {achievement.type === "hackathon" && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-sky-500" />
                    Event Details
                  </h3>
                  <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg">
                    {achievement.location && (
                      <p className="text-gray-700 dark:text-gray-300">
                        <strong>Location:</strong> {achievement.location}
                      </p>
                    )}
                    <p className="text-gray-700 dark:text-gray-300 mt-1">
                      <strong>Date:</strong> {achievement.date}
                    </p>
                  </div>
                </div>
              )}

              {/* Certificate Details */}
              {achievement.type === "certificate" && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-sky-500" />
                    Certificate Details
                  </h3>
                  <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg">
                    <p className="text-gray-700 dark:text-gray-300">
                      <strong>Issued:</strong> {achievement.date}
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 mt-1">
                      <strong>Issuer:</strong> {achievement.issuer}
                    </p>
                  </div>
                </div>
              )}

              {/* External Link */}
              {achievement.link && (
                <div className="pt-4">
                  <a
                    href={achievement.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-sky-600 text-white rounded-lg font-medium hover:bg-sky-700 transition-colors shadow-md"
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    View Certificate
                  </a>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AchievementModal;
