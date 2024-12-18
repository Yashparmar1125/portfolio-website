import { useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Sun, Moon } from 'lucide-react'

interface HeaderProps {
  darkMode: boolean
  setDarkMode: (darkMode: boolean) => void
}

const Header: React.FC<HeaderProps> = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeLink, setActiveLink] = useState<string>('Home') // State to track active link

  const handleLinkClick = (link: string) => {
    setActiveLink(link) // Set the active link when clicked
    setIsOpen(false) // Close the mobile menu when a link is clicked
  }

  return (
    <header className="fixed w-full z-50 bg-white dark:bg-gray-900 bg-opacity-90 dark:bg-opacity-90 backdrop-blur-sm transition-colors duration-300">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400 dark:from-blue-300 dark:to-teal-600">
            DevPortfolio
          </h1>
        </motion.div>
        <nav className="hidden md:flex space-x-6">
          {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`relative ${
                activeLink === item ? 'text-blue-500 dark:text-teal-300' : 'text-gray-700 dark:text-gray-300'
              } hover:text-blue-500 transition-all duration-300 transform hover:scale-105 hover:rotate-2`}
              onClick={() => handleLinkClick(item)} // Set active link on click
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {item}
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-500 dark:bg-teal-300 transition-all duration-300 group-hover:w-full" />
            </motion.a>
          ))}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors duration-300"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </nav>
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors duration-300 mr-4"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-white dark:bg-gray-800 py-2 transition-colors duration-300"
        >
          {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`block py-2 px-4 ${
                activeLink === item
                  ? 'bg-blue-100 dark:bg-teal-600 text-blue-500 dark:text-teal-200'
                  : 'hover:bg-gray-100 dark:hover:bg-gray-700'
              } transition-all duration-300 transform hover:scale-105 hover:rotate-2`}
              onClick={() => handleLinkClick(item)} // Set active link on click
            >
              {item}
            </a>
          ))}
        </motion.div>
      )}
    </header>
  )
}

export default Header
