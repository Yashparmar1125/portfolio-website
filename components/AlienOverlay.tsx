"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  velocity: { x: number; y: number };
  opacity: number;
}

const AlienOverlay = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<Particle[]>([]);
  const [isHovering, setIsHovering] = useState(false);
  const lastMousePosition = useRef({ x: 0, y: 0 });
  const particleCount = 15; // Reduced number of particles

  useEffect(() => {
    // Initialize particles
    const initialParticles = Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: 1 + Math.random() * 2,
      velocity: {
        x: (Math.random() - 0.5) * 0.5,
        y: (Math.random() - 0.5) * 0.5
      },
      opacity: 0.3 + Math.random() * 0.3
    }));
    setParticles(initialParticles);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      lastMousePosition.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setIsHovering(target.tagName.toLowerCase() === 'button' || target.tagName.toLowerCase() === 'a');
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  useEffect(() => {
    let animationFrameId: number;
    
    const animate = () => {
      setParticles((currentParticles) =>
        currentParticles.map((particle) => {
          // Update particle position
          let newX = particle.x + particle.velocity.x;
          let newY = particle.y + particle.velocity.y;

          // Wrap around screen edges
          if (newX < 0) newX = window.innerWidth;
          if (newX > window.innerWidth) newX = 0;
          if (newY < 0) newY = window.innerHeight;
          if (newY > window.innerHeight) newY = 0;

          // Attract particles towards mouse with subtle force
          const dx = mousePosition.x - newX;
          const dy = mousePosition.y - newY;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 200) {
            const force = (1 - distance / 200) * 0.02;
            particle.velocity.x += (dx / distance) * force;
            particle.velocity.y += (dy / distance) * force;
          }

          // Apply drag to velocity
          particle.velocity.x *= 0.99;
          particle.velocity.y *= 0.99;

          return {
            ...particle,
            x: newX,
            y: newY
          };
        })
      );

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [mousePosition]);

  return (
    <div className="fixed inset-0 pointer-events-none z-40">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent to-sky-500/5 dark:to-sky-500/10 opacity-20" />
      
      {/* Floating particles */}
      <AnimatePresence>
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-sky-400"
            initial={{ opacity: 0 }}
            animate={{
              opacity: particle.opacity,
              x: particle.x,
              y: particle.y,
              scale: [1, 1.2, 1],
            }}
            transition={{
              opacity: { duration: 0.5 },
              scale: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              },
              x: { type: "spring", stiffness: 50, damping: 20 },
              y: { type: "spring", stiffness: 50, damping: 20 }
            }}
            style={{
              width: particle.size,
              height: particle.size,
              boxShadow: '0 0 10px rgba(56, 189, 248, 0.3)'
            }}
          />
        ))}
      </AnimatePresence>

      {/* Cursor follower */}
      <motion.div
        className="absolute"
        animate={{
          x: mousePosition.x + 20,
          y: mousePosition.y - 20,
          scale: isHovering ? 1.2 : 1,
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          rotate: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          },
          scale: { duration: 0.2 },
          x: { type: "spring", stiffness: 150, damping: 15 },
          y: { type: "spring", stiffness: 150, damping: 15 },
        }}
      >
        <motion.svg
          width="24"
          height="24"
          viewBox="0 0 32 32"
          className="drop-shadow-lg"
          initial={{ scale: 0.8 }}
          animate={{ 
            scale: [0.8, 0.85, 0.8],
            filter: [
              "drop-shadow(0 0 6px rgba(56, 189, 248, 0.3))",
              "drop-shadow(0 0 8px rgba(56, 189, 248, 0.4))",
              "drop-shadow(0 0 6px rgba(56, 189, 248, 0.3))"
            ]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <path
            d="M16 4C10 4 5 8.5 5 14c0 2.5 1 4.8 2.5 6.5V25c0 1.5 1.2 2.5 2.5 2.5h12c1.3 0 2.5-1 2.5-2.5v-4.5C26 19 27 16.5 27 14c0-5.5-5-10-11-10z"
            fill="url(#alienGradient)"
          />
          <motion.g
            initial={{ opacity: 0.6 }}
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ellipse cx="12" cy="13" rx="2" ry="2.5" fill="#000" />
            <ellipse cx="20" cy="13" rx="2" ry="2.5" fill="#000" />
            <circle cx="12" cy="12" r="0.8" fill="#fff" />
            <circle cx="20" cy="12" r="0.8" fill="#fff" />
          </motion.g>
          <defs>
            <linearGradient id="alienGradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#38BDF8" />
              <stop offset="100%" stopColor="#0EA5E9" />
            </linearGradient>
          </defs>
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default AlienOverlay;