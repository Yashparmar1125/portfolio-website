'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send } from 'lucide-react'
import emailjs from 'emailjs-com'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  // Simple email validation
  const validateEmail = (email: string) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    return emailPattern.test(email)
  }

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Reset previous error or success messages
    setError('')
    setSuccess(false)

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setError('All fields are required.')
      return
    }

    if (!validateEmail(formData.email)) {
      setError('Please enter a valid email address.')
      return
    }

    setLoading(true)

    try {
      // Send form data to EmailJS
      const responseOwner = await emailjs.send(
        'service_43jdvrm',  // Your EmailJS service ID
        'template_jbqfcrf', // Your EmailJS template ID
        formData,           // The form data (name, email, message)
        'hkxZ7Znns_mPuqA_-'      // Your EmailJS API Key (user ID)
      )

      const responseConsumer = await emailjs.send(
        'service_43jdvrm',  // Your EmailJS service ID
        'template_uc6udbe', // Your EmailJS template ID
        formData,           // The form data (name, email, message)
        'hkxZ7Znns_mPuqA_-'      // Your EmailJS API Key (user ID)
      )

      // Check if the response is successful
      if (responseOwner.status === 200 && responseConsumer.status == 200) {
        setSuccess(true)
        setFormData({ name: '', email: '', message: '' })  // Clear the form after success
      } else {
        setError('Something went wrong. Please try again later.')
      }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setError('Network error. Please try again later.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-20 bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-8 text-center"
        >
          Get in Touch
        </motion.h2>

        {/* Display success or error message */}
        {error && <div className="mb-4 text-red-600 text-center">{error}</div>}
        {success && <div className="mb-4 text-green-600 text-center">Message sent successfully!</div>}

        {/* Contact form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg"
        >
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              aria-label="Your name"
              className="w-full px-3 py-2 text-gray-900 bg-gray-100 dark:bg-gray-700 dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              aria-label="Your email address"
              className="w-full px-3 py-2 text-gray-900 bg-gray-100 dark:bg-gray-700 dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              aria-label="Your message"
              className="w-full px-3 py-2 text-gray-900 bg-gray-100 dark:bg-gray-700 dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md transition-colors flex items-center justify-center disabled:bg-gray-400"
          >
            {loading ? 'Sending...' : 'Send Message'} <Send className="ml-2" />
          </button>
        </motion.form>
      </div>
    </section>
  )
}

export default Contact
