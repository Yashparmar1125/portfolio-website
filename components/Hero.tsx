"use client";

import { useState, useEffect, useMemo } from "react";
import { motion, useAnimation, Variants } from "framer-motion";
import { ArrowRight, Github, Linkedin, Twitter, Mail } from "lucide-react";
import { Cursor } from "react-simple-typewriter";
import Image from "next/image";
import Script from "next/script";

const Hero = () => {
  const [text, setText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [particles, setParticles] = useState<Array<{ x: number, y: number }>>([]);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  // Social Links Data
  const socialLinks = [
    { icon: Github, href: "https://github.com/Yashparmar1125", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/yashparmar1125/", label: "LinkedIn" },
    { icon: Mail, href: "mailto:yashparmar11y@gmail.com", label: "Email" },
  ];

  const quotes = useMemo(
    () => [
      "if (bug == true) { debug(); } else { deploy(); }",
      "while (!understandCode()) { debug(); }",
      "There is no place like 127.0.0.1",
      "It's not a bug; it's an undocumented feature.",
      "if (code == 'clean') { documentation = 'redundant'; } else { refactor(); }",
      "const life = 'debugging'; // It's all about finding solutions",
      "function getBestSolution() { return 'Google it'; }",
      "if (error == true) { console.log('It\'s not a bug, it's a feature'); }",
      "const bestPractice = 'write code that writes itself';",
    ],
    [],
  );

  const [typedText, setTypedText] = useState("");
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsTyping(true);
    }, 100);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (isTyping) {
      const typewriterEffect = setTimeout(() => {
        setText("Yash Parmar");
      }, 100);

      return () => clearTimeout(typewriterEffect);
    }
  }, [isTyping]);

  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    updateDimensions();

    setParticles(Array(5).fill(null).map(() => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight
    })));

    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const imageVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.8,
      },
    },
  };

  const scanlineVariants: Variants = {
    initial: { y: -100, opacity: 0 },
    animate: {
      y: 400,
      opacity: [0, 0.5, 0],
      transition: {
        duration: 2.5,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  const circuitPatternVariants: Variants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: {
      opacity: [0.2, 0.3, 0.2],
      scale: [0.8, 1, 0.8],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  useEffect(() => {
    if (quoteIndex < quotes.length) {
      const currentQuote = quotes[quoteIndex];
      let currentText = "";
      let i = 0;
      let timeout: NodeJS.Timeout;

      const typeQuote = () => {
        if (i < currentQuote.length) {
          currentText += currentQuote.charAt(i);
          setTypedText(currentText);
          i++;
          timeout = setTimeout(typeQuote, 120);
        } else {
          setTimeout(() => {
            setIsDeleting(true);
          }, 1000);
        }
      };

      const deleteQuote = () => {
        if (i > 0) {
          currentText = currentText.slice(0, -1);
          setTypedText(currentText);
          i--;
          timeout = setTimeout(deleteQuote, 80);
        } else {
          setTimeout(() => {
            setIsDeleting(false);
            setQuoteIndex((prev) => (prev + 1) % quotes.length);
          }, 1000);
        }
      };

      if (!isDeleting) {
        typeQuote();
      } else {
        deleteQuote();
      }

      return () => clearTimeout(timeout);
    }
  }, [isDeleting, quoteIndex, quotes]);

  return (
    <>
      <Script id="person-schema" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Yash Parmar",
          "url": "https://yashparmar.in",
          "image": "https://yashparmar.in/img/yash2.jpg",
          "jobTitle": "Full Stack Developer & AI Engineer",
          "description": "A passionate Full Stack Developer and AI Engineer specializing in React, Next.js, Python, and Machine Learning.",
          "sameAs": [
            "https://github.com/Yashparmar1125",
            "https://www.linkedin.com/in/yashparmar1125/",
            "https://twitter.com/yashparmar"
          ],
          "knowsAbout": [
            "Web Development",
            "React",
            "Next.js",
            "Python",
            "Machine Learning",
            "Full Stack Development",
            "AI Engineering"
          ]
        })}
      </Script>
      
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative overflow-hidden px-6 md:px-12 lg:px-24"
      >
        {/* Circuit Pattern Background */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          variants={circuitPatternVariants}
          initial="initial"
          animate="animate"
        >
          <svg width="100%" height="100%" className="opacity-[0.15] dark:opacity-[0.12]">
            <pattern id="circuitPattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <path
                d="M10 10h20M20 10v20M30 20h-20M10 30h20"
                stroke="currentColor"
                strokeWidth="1.5"
                fill="none"
                className="stroke-sky-900/40 dark:stroke-current"
              />
              <circle cx="10" cy="10" r="2" className="fill-sky-900/40 dark:fill-current" />
              <circle cx="30" cy="10" r="2" className="fill-sky-900/40 dark:fill-current" />
              <circle cx="10" cy="30" r="2" className="fill-sky-900/40 dark:fill-current" />
              <circle cx="30" cy="30" r="2" className="fill-sky-900/40 dark:fill-current" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#circuitPattern)" />
          </svg>
        </motion.div>

        <motion.div
          className="container mx-auto py-12 flex flex-col md:flex-row items-center justify-between max-w-7xl"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          <motion.div
            className="md:w-1/2 text-center md:text-left mb-8 md:mb-0 md:pr-12 lg:pr-20"
            variants={containerVariants}
          >
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 font-poppins whitespace-nowrap"
              variants={itemVariants}
            >
              Hi, I&apos;m{" "}
              <span className="text-sky-600 dark:text-sky-400 bg-clip-text text-transparent bg-gradient-to-r from-sky-600 to-teal-400 dark:from-sky-400 dark:to-teal-300 inline-block">
                {text}
              </span>
              <Cursor cursorColor="#0284c7" />
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl lg:text-2xl mb-6 font-inter"
              variants={itemVariants}
            >
              Software Developer | AI & ML Enthusiast | App Developer
            </motion.p>

            <motion.div className="flex flex-col md:items-start items-center gap-6" variants={itemVariants}>
              <motion.button
                onClick={() => {
                  const contactSection = document.getElementById("contact");
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="bg-gradient-to-r from-sky-500 to-teal-400 hover:from-sky-600 hover:to-teal-500 text-white font-bold py-3 px-8 rounded-full inline-flex items-center transition-all duration-300 ease-in-out cursor-pointer shadow-lg hover:shadow-xl"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(2, 132, 199, 0.5)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                Get in touch <ArrowRight className="ml-2" />
              </motion.button>

              {/* Social Buttons - Fixed Animation */}
              <motion.div 
                className="flex items-center gap-4 mt-1" 
                variants={itemVariants}
              >
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    // 'group' allows children (background and icon) to react to the hover state of this container
                    className="group relative p-3.5 rounded-full bg-white dark:bg-slate-950 border border-sky-100 dark:border-sky-500/20 shadow-sm dark:shadow-none overflow-hidden transition-all duration-300"
                    // Motion props for physics only
                    whileHover={{ scale: 1.15, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {/* Gradient Background Layer - Absolute & Fades in */}
                    <div className="absolute inset-0 bg-gradient-to-r from-sky-500 to-teal-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out" />
                    
                    {/* Icon - Relative to sit on top of gradient */}
                    <social.icon 
                      size={20} 
                      strokeWidth={2} 
                      className="relative z-10 text-sky-600 dark:text-sky-300 group-hover:text-white transition-colors duration-300" 
                    />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Image Container with enhanced animations */}
          <motion.div
            className="md:w-1/2 flex justify-center md:justify-end relative"
            variants={imageVariants}
          >
            <div className="relative w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80">
              {/* Enhanced blob animation */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-sky-600/60 to-teal-500/60 dark:from-sky-400/40 dark:to-teal-300/40"
                style={{
                  filter: "blur(2px)",
                  mixBlendMode: "soft-light"
                }}
                animate={{
                  borderRadius: [
                    "60% 40% 30% 70% / 60% 30% 70% 40%",
                    "30% 60% 70% 40% / 50% 60% 30% 60%",
                    "60% 40% 30% 70% / 60% 30% 70% 40%"
                  ],
                  scale: [1, 1.08, 1],
                  rotate: [0, 8, 0]
                }}
                transition={{
                  duration: 8,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />

              {/* Scanning effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-b from-sky-500/0 via-sky-500/25 to-sky-500/0 dark:from-sky-400/0 dark:via-sky-400/20 dark:to-sky-400/0 z-10"
                variants={scanlineVariants}
                initial="initial"
                animate="animate"
              />

              {/* Glowing ring */}
              <motion.div
                className="absolute -inset-4 rounded-full"
                animate={{
                  boxShadow: [
                    "0 0 25px rgba(2, 132, 199, 0.3)",
                    "0 0 35px rgba(2, 132, 199, 0.4)",
                    "0 0 25px rgba(2, 132, 199, 0.3)"
                  ]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              <Image
                src="/img/yash2.jpg"
                alt="yash"
                layout="fill"
                objectFit="cover"
                className="rounded-blob relative z-0"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Quotes Display */}
        <motion.div
          className="absolute bottom-16 left-0 right-0 text-center"
          variants={itemVariants}
        >
          <motion.p
            className="text-lg md:text-xl lg:text-2xl font-code px-4"
            variants={itemVariants}
            style={{ fontFamily: "'Fira Code', monospace", color: "#0284c7" }}
          >
            {typedText}
          </motion.p>
        </motion.div>

        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none">
          {particles.map((particle, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-sky-600/50 dark:bg-sky-400/40 rounded-full"
              animate={{
                x: [particle.x, Math.random() * dimensions.width],
                y: [particle.y, Math.random() * dimensions.height],
                opacity: [0.4, 0.7, 0.4],
                scale: [1, 1.5, 1]
              }}
              transition={{
                duration: 8 + i * 2,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                filter: "blur(1px) drop-shadow(0 0 5px rgba(2, 132, 199, 0.6))"
              }}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Hero;