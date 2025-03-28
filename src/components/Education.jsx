import React from 'react';
import { Element } from 'react-scroll';
import { motion } from 'framer-motion';
import pesLogo from '../assets/peslogo.png';
import vyasLogo from '../assets/vyaslogo.jpeg';

const cardVariantsLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: 'spring', stiffness: 120, damping: 20 }
  },
  hover: { scale: 1.05, rotate: 3, transition: { type: 'spring', stiffness: 300 } }
};

const cardVariantsRight = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: 'spring', stiffness: 120, damping: 20 }
  },
  hover: { scale: 1.05, rotate: -3, transition: { type: 'spring', stiffness: 300 } }
};

const Education = () => {
  return (
    <Element name="Education">
      <section className="w-full min-h-[50vh] flex flex-col items-center justify-start py-16 px-4 bg-gray-100">
        {/* Section Heading */}
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-gray-800 mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.05, textShadow: "0px 0px 8px rgba(0, 0, 0, 0.5)" }}
        >
          My Education
        </motion.h2>

        {/* First Education Card - PES University (enters from left) */}
        <motion.div
          className="max-w-2xl w-full bg-white rounded-md shadow-md p-6 flex flex-col md:flex-row items-center gap-6 mb-8"
          variants={cardVariantsLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          whileHover="hover"
        >
          <motion.img
            src={pesLogo}
            alt="PES University Logo"
            className="w-20 sm:w-24 h-20 sm:h-24 object-contain"
            whileHover={{ scale: 1.1 }}
          />
          <div className="text-center md:text-left">
            <motion.h3
              className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-1"
              whileHover={{ color: "#2563EB" }}
            >
              Master of Computer Applications
            </motion.h3>
            <motion.p className="text-gray-700">
              <strong>PES University</strong>, Bangalore, KA
            </motion.p>
            <motion.p className="text-gray-700">
              <em>Oct 2023 - Jul 2025</em>
            </motion.p>
          </div>
        </motion.div>

        {/* Second Education Card - Vyas College (enters from right) */}
        <motion.div
          className="max-w-2xl w-full bg-white rounded-md shadow-md p-6 flex flex-col md:flex-row items-center gap-6"
          variants={cardVariantsRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          whileHover="hover"
        >
          <motion.img
            src={vyasLogo}
            alt="Vyas College Logo"
            className="w-20 sm:w-24 h-20 sm:h-24 object-contain"
            whileHover={{ scale: 1.1 }}
          />
          <div className="text-center md:text-left">
            <motion.h3
              className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-1"
              whileHover={{ color: "#2563EB" }}
            >
              Bachelor of Commerce
            </motion.h3>
            <motion.p className="text-gray-700">
              <strong>Jai Narain Vyas University</strong>, Jodhpur, RAJ
            </motion.p>
            <motion.p className="text-gray-700">
              <em>Aug 2019 - Sep 2022</em>
            </motion.p>
          </div>
        </motion.div>
      </section>
    </Element>
  );
};

export default Education;
