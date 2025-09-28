"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Palette } from "lucide-react";
import Link from "next/link";
import Navigation from "./Navigation";
import Logo from "./Logo"; 

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [showThemeMenu, setShowThemeMenu] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (showThemeMenu && !(event.target as Element).closest('.theme-selector')) {
        setShowThemeMenu(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("click", handleClickOutside);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", handleClickOutside);
    };
  }, [darkMode, showThemeMenu]);

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
          
          {/* Advanced Theme Selector */}
          <div className="relative theme-selector">
            <button
              onClick={() => setShowThemeMenu(!showThemeMenu)}
              className={`p-2 rounded-lg transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 ${
                scrolled
                  ? "bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700"
                  : "hover:bg-white/10 dark:hover:bg-slate-800/50"
              }`}
            >
              <motion.div
                initial={false}
                animate={{ rotate: showThemeMenu ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <Palette className="w-5 h-5 text-sky-500" />
              </motion.div>
            </button>

            {/* Theme Menu Dropdown */}
            <AnimatePresence>
              {showThemeMenu && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 top-full mt-2 w-48 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden z-50"
                >
                  <div className="p-2">
                    <div className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-2 px-2">
                      Choose Theme
                    </div>
                    
                    {/* Current Dark Theme */}
                    <button
                      onClick={() => {
                        setDarkMode(true);
                        setShowThemeMenu(false);
                      }}
                      className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors ${
                        darkMode 
                          ? "bg-sky-100 dark:bg-sky-900/30 text-sky-700 dark:text-sky-300" 
                          : "hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"
                      }`}
                    >
                      <div className="w-4 h-4 rounded-full bg-gradient-to-br from-sky-500 to-teal-400"></div>
                      <span>Ocean Dark</span>
                      {darkMode && <div className="ml-auto w-2 h-2 bg-sky-500 rounded-full"></div>}
                    </button>

                    {/* Light Theme */}
                    <button
                      onClick={() => {
                        setDarkMode(false);
                        setShowThemeMenu(false);
                      }}
                      className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors ${
                        !darkMode 
                          ? "bg-sky-100 dark:bg-sky-900/30 text-sky-700 dark:text-sky-300" 
                          : "hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"
                      }`}
                    >
                      <div className="w-4 h-4 rounded-full bg-gradient-to-br from-blue-400 to-cyan-300"></div>
                      <span>Ocean Light</span>
                      {!darkMode && <div className="ml-auto w-2 h-2 bg-sky-500 rounded-full"></div>}
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
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
