'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function JoinUs() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-white px-6 md:px-16 py-20 gap-10 overflow-hidden">
      
      {/* Text Section */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-xl"
      >
        <h1 className="text-4xl font-extrabold text-indigo-800 mb-6">JOIN US</h1>
        <p className="text-lg text-gray-800 leading-relaxed">
          At Paves Technologies, we’re not just building software —<br />
          we’re building the future of AI-driven innovation, one idea at a time.<br />
          We’re a team of passionate technologists, thinkers, and problem-solvers<br />
          who thrive on challenges and believe in the power of collaboration.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 mt-10">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-indigo-800 text-white px-6 py-3 rounded-md shadow-md hover:bg-indigo-900 transition-all duration-300"
          >
            Explore Jobs
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-indigo-800 text-white px-6 py-3 rounded-md shadow-md hover:bg-indigo-900 transition-all duration-300"
          >
            Search and Apply
          </motion.button>
        </div>
      </motion.div>

      {/* Image with Hover Zoom-in */}
      <motion.div
        initial={{ scale: 0.8 }}
        whileHover={{ scale: 1 }}
        transition={{ duration: 0.4 }}
        className="w-full md:w-1/2 max-w-[300px] mx-auto"
      >
        <Image
          src="/join-us-png.png"
          alt="AI Globe Graphic"
          width={300}
          height={300}
          className="rounded-lg object-contain w-full h-auto shadow-xl"
        />
      </motion.div>
    </div>
  )
}
