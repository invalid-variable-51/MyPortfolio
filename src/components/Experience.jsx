import React from 'react';
import { motion } from 'framer-motion';
import { Element } from 'react-scroll';

const Experience = () => {
  // Variants for entry wiggle effect
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      rotate: [-3, 3, -3, 2, 0], // Wiggle animation
      transition: { duration: 0.8, ease: "easeInOut" },
    },
    hover: {
      scale: 1.02,
      rotate: 2,
      transition: { duration: 0.3 }
    }
  };

  // Clip-path to resemble an uneven plank/letter
  const clippedStyle = {
    backgroundColor: "#fff",
    clipPath:
      "polygon(5% 0%, 95% 0%, 100% 15%, 100% 85%, 95% 100%, 5% 100%, 0% 85%, 0% 15%)",
    boxShadow: "5px 5px 15px rgba(0,0,0,1)", // Added custom shadow for depth
  };

  return (
    <Element name="Experience">
      <section className="w-full min-h-screen flex flex-col items-center justify-start py-16 px-4 bg-gray-100">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-12 text-center">
          Experience
        </h2>

        <div className="max-w-4xl w-full space-y-8">
          {/* Akudo Technologies Internship */}
          <motion.div
            className="relative rounded-md shadow-xl p-6 text-black"
            style={clippedStyle}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }} // Triggers animation when in view
            whileHover="hover"
          >
            <h3 className="text-2xl sm:text-3xl font-semibold mb-2">
              Front-End Developer Intern at Akudo Technologies
            </h3>
            <p className="italic mb-4">Nov 2022 - Feb 2023 | Bengaluru, KA</p>
            <ul className="list-disc list-inside space-y-1">
              <li>
                Developed a prototype front end based on insights from company operations.
              </li>
              <li>
                Gained hands-on experience in front-end development and UI design.
              </li>
              <li>
                Learned about fintech startup operations and its technology stack.
              </li>
              <li>
                Collaborated with the team to enhance user experience based on product requirements.
              </li>
            </ul>
          </motion.div>

          {/* cHEAL Lab Internship */}
          <motion.div
            className="relative rounded-md shadow-xl p-6 text-black"
            style={clippedStyle}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }} // Triggers animation when in view
            whileHover="hover"
          >
            <h3 className="text-2xl sm:text-3xl font-semibold mb-2">
              Intern at cHEAL Lab
            </h3>
            <p className="italic mb-4">Presently Ongoing</p>
            <ul className="list-disc list-inside space-y-1">
              <li>
                Working on a Large Language Model (LLM) for low-resource language translation in healthcare.
              </li>
              <li>
                Focused on improving translation accuracy for a specific low-resource language.
              </li>
              <li>
                Collaborating with domain experts to integrate healthcare-specific requirements.
              </li>
            </ul>
          </motion.div>
        </div>
      </section>
    </Element>
  );
};

export default Experience;
