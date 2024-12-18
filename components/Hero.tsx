'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useTypewriter } from 'react-simple-typewriter'

const Hero = () => {
  const [text] = useTypewriter({
    words: ['Yash Parmar', 'a Software Developer', ' an AI & ML Enthusiast', 'a App Developer'],
    loop: true,
    delaySpeed: 3000,
  })

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="text-center z-10">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-7xl font-bold mb-4"
        >
          Hi, I'm <span className="text-blue-500">{text}</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl mb-8"
        >{text =='Yash Parmar'}
          {text === 'Software Developer' }
          {text === 'AI & ML Enthusiast' }
          {text === 'App Developer' }
        </motion.p>
        <motion.a
          href="#contact"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full inline-flex items-center transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get in touch <ArrowRight className="ml-2" />
        </motion.a>
      </div>
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-20 dark:opacity-40" />
        <motion.div
          className="absolute inset-0"
          initial={{ backgroundPosition: '0 0' }}
          animate={{ backgroundPosition: '100% 100%' }}
          transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          }}
        />
      </div>
    </section>
  )
}

export default Hero
