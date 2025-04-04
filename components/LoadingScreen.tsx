"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const messages = [
  "Initializing systems...",
  "Establishing neural networks...",
  "Calibrating quantum processors...",
  "Loading portfolio data...",
  "Ready for launch...",
];

const LoadingScreen = ({ onLoadingComplete }: LoadingScreenProps) => {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    let charIndex = 0;
    const message = messages[currentMessageIndex];

    const typeMessage = () => {
      if (charIndex <= message.length) {
        setCurrentText(message.substring(0, charIndex));
        charIndex++;
        timeout = setTimeout(typeMessage, 40);
      } else {
        timeout = setTimeout(() => {
          if (currentMessageIndex < messages.length - 1) {
            setCurrentMessageIndex(prev => prev + 1);
          } else {
            setIsComplete(true);
            setTimeout(onLoadingComplete, 1000);
          }
        }, 800);
      }
    };

    typeMessage();
    return () => clearTimeout(timeout);
  }, [currentMessageIndex, onLoadingComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950"
      animate={{
        opacity: isComplete ? 0 : 1,
      }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative w-full max-w-lg px-8">
        {/* Background Effects */}
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
        <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" />

        <div className="relative">
          {/* Loading Bar */}
          <div className="w-full h-1 mb-8 bg-slate-800 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-sky-500"
              animate={{
                width: [
                  "0%",
                  "20%",
                  "40%",
                  "60%",
                  "80%",
                  "100%"
                ],
              }}
              transition={{
                duration: 4,
                ease: "easeInOut",
                times: [0, 0.2, 0.4, 0.6, 0.8, 1]
              }}
            />
          </div>

          {/* Message Display */}
          <div className="space-y-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentMessageIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-lg md:text-xl text-sky-400 font-mono"
              >
                {currentText}
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                  className="inline-block ml-1 w-2 h-5 bg-sky-400"
                />
              </motion.div>
            </AnimatePresence>

            {/* Previous Messages */}
            <div className="space-y-2">
              {messages.slice(0, currentMessageIndex).map((msg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.5 }}
                  className="text-sm text-slate-500 font-mono"
                >
                  {msg}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 grid grid-cols-8 gap-1 opacity-5 pointer-events-none">
        {Array.from({ length: 64 }).map((_, i) => (
          <motion.div
            key={i}
            className="aspect-square bg-gradient-to-br from-sky-500 to-transparent rounded-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: Math.random() }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default LoadingScreen;

// Add these animations to your globals.css
/*
@keyframes blob {
  0% {
    transform: translate(0px, 0px) scale(1);
  }
  33% {
    transform: translate(30px, -50px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
  100% {
    transform: translate(0px, 0px) scale(1);
  }
}

.animate-blob {
  animation: blob 7s infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}
*/ 