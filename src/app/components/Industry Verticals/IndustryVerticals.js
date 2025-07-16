'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
// import robotImg from '@/public/robot.avif';

const sectors = [
  { name: 'Payments', href: '/payments', icon: '💳', description: 'Secure and seamless payment processing for businesses of all sizes.' },
  { name: 'Banking', href: '/banking', icon: '🏦', description: 'Modern banking solutions tailored for digital-first customers.' },
  { name: 'Payments Fraud & AML', href: '/fraud', icon: '🔐', description: 'AI-powered tools to detect fraud and ensure compliance with AML regulations.' },
  { name: 'Insurance', href: '/insurance', icon: '📋', description: 'Customized insurance services leveraging data-driven insights.' },
  { name: 'Governance Risk & Compliance', href: '/grc', icon: '📊', description: 'Integrated GRC tools for efficient risk management and regulatory compliance.' },
  { name: 'Capital Markets & Wealth Management', href: '/capital', icon: '💼', description: 'Advanced platforms for capital market analysis and wealth advisory.' },
];

export default function IndustryVerticals() {
  const [selected, setSelected] = useState(2);
  const scrollRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    const el = scrollRef.current?.children[selected];
    if (el) {
      el.scrollIntoView({ block: 'center', behavior: 'smooth' });
      const line = lineRef.current;
      const targetRect = el.getBoundingClientRect();
      const containerRect = scrollRef.current.getBoundingClientRect();
      if (line) {
        line.style.top = `${targetRect.top - containerRect.top + targetRect.height / 2}px`;
      }
    }
  }, [selected]);

  return (
  <div className="bg-gradient-to-br from-gray-100 to-blue-100 px-4 py-12">
    {/* Page Heading at top center */}
    <h1 className="text-4xl md:text-5xl font-bold text-blue-800 text-center mb-12">
      Industry Verticals
    </h1>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white rounded-3xl shadow-2xl p-12 flex flex-col md:flex-row items-start gap-12 max-w-7xl w-full"
      >
        {/* Left Section (text + description) */}
        <div className="md:w-1/2 w-full space-y-6">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Where Experience Meets Execution
          </h2>
          <p className="text-gray-600 text-lg">
            Our expertise covers the entire financial ecosystem. Each sector is led by seasoned industry experts. We deliver practical solutions backed by real-world experience.
          </p>

          {/* Active Description - Only for desktop */}
          <div className="hidden md:block mt-6 p-6 rounded-xl bg-blue-50 border border-blue-300 shadow">
            <h4 className="text-xl font-semibold text-blue-800">
              {sectors[selected].icon} {sectors[selected].name}
            </h4>
            <p className="text-gray-700 mt-2 text-base">
              {sectors[selected].description}
            </p>
          </div>
        </div>

        {/* Right Section (robot + list) */}
        <div className="flex items-center gap-6 md:w-1/2 w-full relative">
          {/* Robot */}
          <motion.div
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            className="relative"
          >
            <Image
              src="/robot.avif"
              alt="robot"
              width={140}
              height={140}
              className="rounded-full"
            />
          </motion.div>

          {/* Dashed Line */}
          <motion.div
            ref={lineRef}
            className="absolute left-[155px] w-14 border-t-2 border-dashed border-blue-600"
            style={{ transition: 'top 0.4s ease' }}
          ></motion.div>

          {/* Sectors List */}
          <div
            className="space-y-4 w-full max-w-xs max-h-72 overflow-y-auto scroll-smooth scrollbar-thin scrollbar-thumb-blue-400"
            ref={scrollRef}
          >
            {sectors.map((sector, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2 }}
                className={`cursor-pointer px-5 py-4 rounded-xl transition-all duration-300 shadow-md relative group
                  ${selected === index
                    ? 'bg-white border-2 border-blue-400 shadow-lg scale-[1.02]'
                    : 'bg-blue-50 hover:bg-blue-100'}
                `}
                onClick={() => setSelected(index)}
              >
                <div className="flex items-center gap-3">
                  <span className="text-xl">{sector.icon}</span>
                  <a href={sector.href} className="text-lg font-medium text-gray-900 no-underline">
                    {sector.name}
                  </a>
                </div>
                {/* Show description in small screens */}
                <div className="md:hidden mt-2 text-sm text-gray-700">
                  {selected === index && sector.description}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
