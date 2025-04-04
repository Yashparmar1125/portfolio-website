"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, useSpring } from "framer-motion";

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  // Use springs for smoother cursor movement
  const springConfig = { damping: 25, stiffness: 200, mass: 0.1 };
  const cursorX = useSpring(0, springConfig);
  const cursorY = useSpring(0, springConfig);

  // Debounced hover handler for better performance
  const handleMouseOver = useCallback((e: MouseEvent) => {
    if (e.target instanceof HTMLElement) {
      const isClickable = e.target.tagName.toLowerCase() === 'button' ||
        e.target.tagName.toLowerCase() === 'a' ||
        e.target.closest('button') ||
        e.target.closest('a') ||
        e.target.closest('[role="button"]');
      setIsHovering(isClickable);
    }
  }, []);

  useEffect(() => {
    let rafId: number;
    
    const updateMousePosition = (e: MouseEvent) => {
      // Use requestAnimationFrame for smoother updates
      rafId = requestAnimationFrame(() => {
        setMousePosition({ x: e.clientX, y: e.clientY });
        cursorX.set(e.clientX);
        cursorY.set(e.clientY);
      });
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [cursorX, cursorY, handleMouseOver]);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {/* Main cursor */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{
          scale: {
            type: "spring",
            stiffness: 300,
            damping: 20,
            mass: 0.2,
          },
        }}
      >
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          className="w-full h-full"
        >
          {/* Outer Ring */}
          <motion.circle
            cx="16"
            cy="16"
            r="15"
            stroke="url(#cursorGradient)"
            strokeWidth="1.5"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ 
              pathLength: 1,
              rotate: [0, 360],
            }}
            transition={{
              pathLength: { duration: 2, repeat: Infinity },
              rotate: { duration: 8, repeat: Infinity, ease: "linear" }
            }}
          />
          
          {/* Inner Ring */}
          <motion.circle
            cx="16"
            cy="16"
            r="6"
            className="fill-sky-500/20 dark:fill-sky-400/20"
            initial={{ scale: 0.8 }}
            animate={{ 
              scale: isHovering ? [0.8, 1.1, 0.8] : [0.8, 1, 0.8],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          {/* Center Dot */}
          <motion.circle
            cx="16"
            cy="16"
            r="2"
            className="fill-sky-500 dark:fill-sky-400"
            initial={{ scale: 1 }}
            animate={{ 
              scale: isHovering ? [1, 1.2, 1] : 1,
            }}
            transition={{
              duration: 0.8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          {/* Gradient definition */}
          <defs>
            <linearGradient id="cursorGradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#38BDF8" />
              <stop offset="100%" stopColor="#0EA5E9" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>

      {/* Cursor trail */}
      <motion.div
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        className="fixed top-0 left-0 w-4 h-4"
        animate={{
          scale: isHovering ? 1.2 : 0.8,
          opacity: isHovering ? 0.6 : 0.3,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 15,
          mass: 0.2,
        }}
      >
        <motion.div
          className="w-full h-full rounded-full bg-gradient-to-r from-sky-500 to-sky-400 dark:from-sky-400 dark:to-sky-300 blur-[1px]"
          animate={{
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    </div>
  );
};

export default CustomCursor;


//Version 10.4.0