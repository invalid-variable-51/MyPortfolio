import React from 'react';
import { Element } from 'react-scroll';
import { motion } from 'framer-motion';
import resume from "../assets/resume_vidit_'.pdf";


const Contact = () => {
  return (
    <Element name="Contact">
      <div className="w-full bg-gray-100 text-black px-4 sm:px-6 pt-28 flex flex-col justify-between relative">
        {/* Top Contact Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center flex flex-col items-center relative z-10"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            Get In Touch
          </h2>
          <p className="text-base sm:text-lg md:text-xl max-w-2xl mb-10 text-gray-800">
            Let’s collaborate! Reach out via email or connect on social platforms.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 mb-20">
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="mailto:viditmehtaqwe@gmail.com"
              className="bg-blue-500 text-white text-base sm:text-lg md:text-xl px-8 py-4 rounded-full font-semibold hover:bg-blue-600 transition-all duration-300 shadow-lg text-center"
            >
              Email Me
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              href={resume}
              download
              className="bg-blue-500 text-white text-base sm:text-lg md:text-xl px-8 py-4 rounded-full font-semibold hover:bg-blue-600 transition-all duration-300 shadow-lg text-center"
            >
              Download Resume
            </motion.a>
          </div>
        </motion.div>
      </div>
    </Element>
  );
};

export default Contact;
