"use client";

import { useState, useEffect, useMemo } from "react";
import { motion, useAnimation } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Cursor } from "react-simple-typewriter";
import Image from "next/image";

const Hero = () => {
  const [text, setText] = useState(""); // Use local state for immediate typing
  const [isTyping, setIsTyping] = useState(false); // To track typing state

  const quotes = useMemo(
    () => [
      "if (bug == true) { debug(); } else { deploy(); }",
      "while (!understandCode()) { debug(); }",
      "There is no place like 127.0.0.1",
      "It’s not a bug; it’s an undocumented feature.",
      "if (code == 'clean') { documentation = 'redundant'; } else { refactor(); }",
      "const life = 'debugging'; // It's all about finding solutions",
      "function getBestSolution() { return 'Google it'; }",
      "if (error == true) { console.log('It\'s not a bug, it\'s a feature'); }",
      "const bestPractice = 'write code that writes itself';",
    ],
    [],
  );

  const [typedText, setTypedText] = useState("");
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const [scrollY, setScrollY] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    // Trigger typewriting manually
    const timeout = setTimeout(() => {
      setIsTyping(true);
    }, 100); // Wait 100ms to ensure page loads before starting typing

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (isTyping) {
      const typewriterEffect = setTimeout(() => {
        setText("Yash Parmar");
      }, 100); // Immediate text setting

      return () => clearTimeout(typewriterEffect);
    }
  }, [isTyping]);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    controls.start("visible");
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

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

  // Typing and untyping the quotes
  useEffect(() => {
    if (quoteIndex < quotes.length) {
      const currentQuote = quotes[quoteIndex];
      let currentText = "";
      let i = 0;
      let timeout: NodeJS.Timeout;

      // Typing effect
      const typeQuote = () => {
        if (i < currentQuote.length) {
          currentText += currentQuote.charAt(i);
          setTypedText(currentText); // Updating typedText here
          i++;
          timeout = setTimeout(typeQuote, 120); // Typing speed: 120ms per character
        } else {
          setTimeout(() => {
            setIsDeleting(true); // Start deleting after 1 second
          }, 1000); // Wait for 1 second before starting to delete
        }
      };

      // Untyping effect
      const deleteQuote = () => {
        if (i > 0) {
          currentText = currentText.slice(0, -1);
          setTypedText(currentText); // Updating typedText here
          i--;
          timeout = setTimeout(deleteQuote, 80); // Deleting speed: 80ms per character
        } else {
          setTimeout(() => {
            setIsDeleting(false); // Stop deleting after it's done
            setQuoteIndex((prev) => (prev + 1) % quotes.length); // Loop through quotes
          }, 1000); // Wait for 1 second before typing next quote
        }
      };

      if (!isDeleting) {
        typeQuote();
      } else {
        deleteQuote();
      }

      // Cleanup timeout on component unmount
      return () => clearTimeout(timeout);
    }
  }, [isDeleting, quoteIndex, quotes]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <motion.div
        className="container mx-auto px-4 py-12 flex flex-col md:flex-row items-center justify-between"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        <motion.div
          className="md:w-1/2 text-center md:text-left mb-8 md:mb-0"
          variants={containerVariants}
        >
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 font-poppins"
            variants={itemVariants}
          >
            Hi, I&apos;m{" "}
            <span className="text-sky-600 dark:text-sky-400 bg-clip-text text-transparent bg-gradient-to-r from-sky-600 to-teal-400 dark:from-sky-400 dark:to-teal-300">
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

          <motion.button
            onClick={() => {
              const contactSection = document.getElementById("contact");
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="bg-sky-600 hover:bg-sky-700 dark:bg-sky-500 dark:hover:bg-sky-600 text-white font-bold py-3 px-6 rounded-full inline-flex items-center transition-all duration-300 ease-in-out cursor-pointer"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 15px rgba(2, 132, 199, 0.5)",
            }}
            whileTap={{ scale: 0.95 }}
            variants={itemVariants}
          >
            Get in touch <ArrowRight className="ml-2" />
          </motion.button>
        </motion.div>

        {/* Image Container with margin-right */}
        <motion.div
          className="md:w-1/2 flex justify-center md:justify-end mr-8"
          variants={imageVariants}
        >
          <div className="relative w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 flex justify-center items-center">
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-sky-500 to-teal-400 opacity-20 rounded-blob"
              animate={{
                borderRadius: [
                  "30% 70% 70% 30% / 30% 30% 70% 70%",
                  "60% 40% 30% 70% / 60% 30% 70% 40%",
                  "30% 60% 70% 40% / 50% 60% 30% 60%",
                ],
              }}
              transition={{
                duration: 8,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
            <Image
              src="/img/yash2.jpg"
              alt="yash"
              layout="fill"
              objectFit="cover"
              className="rounded-blob"
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Quotes Display */}
      <motion.div
        className="absolute bottom-10 left-0 right-0 text-center"
        variants={itemVariants}
      >
        <motion.p
          className="text-lg md:text-xl lg:text-2xl mb-6 font-code"
          variants={itemVariants}
          style={{ fontFamily: "'Fira Code', monospace", color: "#0284c7" }}
        >
          {typedText}
        </motion.p>
      </motion.div>

      {/* Background Animation */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-sky-500 to-teal-400 opacity-10 dark:opacity-20" />
        <motion.div
          className="absolute inset-0"
          initial={{ backgroundPosition: "0 0" }}
          animate={{ backgroundPosition: "100% 100%" }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          style={{
            backgroundImage:
              'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%230284c7" fill-opacity="0.2"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        />
      </div>
    </section>
  );
};

export default Hero;


//Version 10.3.7