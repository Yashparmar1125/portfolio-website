'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const HireMe = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-r from-blue-500 to-teal-400 text-white rounded-lg p-8"
    >
      <h2 className="text-3xl font-bold mb-4 font-poppins text-center">Ready to start your project?</h2>
      <p className="text-xl mb-8 text-center">
        Let&apos;s collaborate and bring your ideas to life!
      </p>
      <div className="flex justify-center">
        <Link href="/#contact">
          <button className="bg-white text-blue-500 font-bold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
            Hire Me
          </button>
        </Link>
      </div>
    </motion.div>
  )
}

export default HireMe



//Version 10.4.0
