import React from 'react';
import { Element } from 'react-scroll';
import { motion } from 'framer-motion';
import propic from '../assets/propic.jpeg';

const About = () => {
  return (
    <Element name="About">
      <section className="w-full min-h-[80vh] flex items-center justify-center py-12 sm:py-16 px-4 bg-gray-100">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 max-w-5xl">
          {/* Profile Picture with Slide-In and Hover Enlarge Animation */}
          <div style={{ perspective: '1000px' }}>
            <motion.img
              src={propic}
              alt="Profile Picture"
              className="rounded-full w-32 sm:w-40 md:w-56 h-32 sm:h-40 md:h-56 object-cover shadow-2xl border-4 border-blue-300"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 1.2, ease: 'easeInOut' }}
              whileHover={{ scale: 1.1 }}
            />
          </div>

          {/* Text Section with Modern Animation */}
          <motion.div
            className="max-w-xl text-center md:text-left"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
            whileHover={{ scale: 1.02 }}
          >
            <motion.h1 
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-3"
              initial={{ y: -20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Known as
            </motion.h1>
            <motion.p 
              className="text-sm sm:text-base md:text-lg text-gray-800 leading-relaxed mb-3"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              A versatile individual who excels in dynamic environments, 
              continuously driven by an eagerness to acquire new skills and explore emerging technologies.
              My innate curiosity motivates me to seek fresh challenges and complex problems,
              enhancing my intellectual and problem-solving capabilities.
            </motion.p>
            <motion.p 
              className="text-sm sm:text-base md:text-lg text-gray-800 leading-relaxed"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Throughout my career in software development, 
              I have contributed to diverse projects ranging from fintech prototypes to AI-powered solutions, 
              demonstrating adaptability and a deep commitment to innovation. 
              I eagerly look forward to collaborating on impactful, 
              real-world projects to effectively address and overcome challenging problems together.
            </motion.p>
          </motion.div>
        </div>
      </section>
    </Element>
  );
};

export default About;
