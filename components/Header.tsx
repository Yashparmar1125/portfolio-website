"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import Link from "next/link";
import Navigation from "./Navigation";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <header className="fixed w-full z-50 bg-sky-50 dark:bg-slate-900 bg-opacity-90 dark:bg-opacity-95 backdrop-blur-sm transition-colors duration-300">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/">
            <h1 className="text-2xl font-bold cursor-pointer text-sky-600 dark:text-sky-400">
              Yash Parmar
            </h1>
          </Link>
        </motion.div>
        <nav className="hidden md:flex space-x-6">
          <Navigation />
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-sky-200 dark:bg-slate-700 text-sky-600 dark:text-sky-400 transition-colors duration-300"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </nav>
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-sky-200 dark:bg-slate-700 text-sky-600 dark:text-sky-400 transition-colors duration-300 mr-4"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <X className="text-sky-600 dark:text-sky-400" />
            ) : (
              <Menu className="text-sky-600 dark:text-sky-400" />
            )}
          </button>
        </div>
      </div>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-sky-50 dark:bg-slate-900 py-2 transition-colors duration-300"
        >
          <Navigation onItemClick={() => setIsOpen(false)} />
        </motion.div>
      )}
    </header>
  );
};

export default Header;


//Version 8.3.7