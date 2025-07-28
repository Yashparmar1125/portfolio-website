"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import Link from "next/link";
import Navigation from "./Navigation";
import Logo from "./Logo"; 

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [darkMode]);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled 
        ? "bg-white/80 dark:bg-slate-900/80 shadow-lg dark:shadow-slate-800/20 backdrop-blur-md py-4" 
        : "py-5"
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <Link href="/" className="block">
            <Logo variant={darkMode ? 'dark' : 'light'} />
          </Link>
        </motion.div>

        <nav className="hidden md:flex items-center gap-8">
          <Navigation />
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2 rounded-lg transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 ${
              scrolled
                ? "bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700"
                : "hover:bg-white/10 dark:hover:bg-slate-800/50"
            }`}
          >
            <motion.div
              initial={false}
              animate={{ rotate: darkMode ? 360 : 0 }}
              transition={{ duration: 0.5, ease: "anticipate" }}
            >
              {darkMode ? (
                <Sun className="w-5 h-5 text-amber-500" />
              ) : (
                <Moon className="w-5 h-5 text-slate-700 dark:text-slate-200" />
              )}
            </motion.div>
          </button>
        </nav>

        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2 rounded-lg transition-all duration-300 ${
              scrolled
                ? "bg-slate-100 dark:bg-slate-800"
                : "hover:bg-white/10 dark:hover:bg-slate-800/50"
            }`}
          >
            <motion.div
              initial={false}
              animate={{ rotate: darkMode ? 360 : 0 }}
              transition={{ duration: 0.5, ease: "anticipate" }}
            >
              {darkMode ? (
                <Sun className="w-5 h-5 text-amber-500" />
              ) : (
                <Moon className="w-5 h-5 text-slate-700 dark:text-slate-200" />
              )}
            </motion.div>
          </button>
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className={`p-2 rounded-lg transition-all duration-300 ${
              scrolled
                ? "bg-slate-100 dark:bg-slate-800"
                : "hover:bg-white/10 dark:hover:bg-slate-800/50"
            }`}
          >
            <div className="relative w-5 h-5">
              <motion.div
                initial={false}
                animate={{ 
                  rotate: isOpen ? 45 : 0,
                  y: isOpen ? 8 : 0
                }}
                className="absolute w-5 h-0.5 bg-current rounded-full"
                transition={{ duration: 0.2 }}
              />
              <motion.div
                initial={false}
                animate={{ 
                  opacity: isOpen ? 0 : 1
                }}
                className="absolute w-5 h-0.5 bg-current rounded-full top-2"
                transition={{ duration: 0.2 }}
              />
              <motion.div
                initial={false}
                animate={{ 
                  rotate: isOpen ? -45 : 0,
                  y: isOpen ? -8 : 4
                }}
                className="absolute w-5 h-0.5 bg-current rounded-full"
                transition={{ duration: 0.2 }}
              />
            </div>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ 
              opacity: 1, 
              height: "auto",
              transition: {
                height: {
                  duration: 0.3,
                  ease: "easeOut"
                }
              }
            }}
            exit={{ 
              opacity: 0, 
              height: 0,
              transition: {
                opacity: { duration: 0.2 },
                height: { duration: 0.3 }
              }
            }}
            className={`md:hidden overflow-hidden ${
              scrolled
                ? "bg-white/80 dark:bg-slate-900/80 backdrop-blur-md"
                : "bg-transparent"
            }`}
          >
            <div className="container mx-auto py-4 px-6">
              <Navigation mobile onItemClick={() => setIsOpen(false)} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;


//Version 10.4.0
