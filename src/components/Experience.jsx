import React from 'react';
import { motion } from 'framer-motion';
import { Element } from 'react-scroll';

const Experience = () => {
  return (
    <Element name="Experience">
      <section className="w-full min-h-screen flex flex-col items-center justify-start py-16 px-4 bg-gray-100">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-12 text-center">
          Experience
        </h2>

        <div className="max-w-4xl w-full space-y-8">
          {/* Akudo Technologies Internship */}
          <motion.div
            className="bg-white rounded-md shadow-lg p-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-2xl sm:text-3xl font-semibold text-blue-700">
              Front-End Developer Intern at Akudo Technologies
            </h3>
            <p className="text-gray-600 italic mb-4">
              Nov 2022 - Feb 2023 | Bengaluru, KA
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>
                Developed a prototype front end based on insights gained from company operations.
              </li>
              <li>
                Gained hands-on experience in front-end development and UI design.
              </li>
              <li>
                Learned about fintech startup operations and its technology stack.
              </li>
              <li>
                Collaborated with the team to understand product requirements and enhance user experience.
              </li>
            </ul>
          </motion.div>

          {/* cHEAL Lab Internship */}
          <motion.div
            className="bg-white rounded-md shadow-lg p-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <h3 className="text-2xl sm:text-3xl font-semibold text-blue-700">
              Intern at cHEAL Lab
            </h3>
            <p className="text-gray-600 italic mb-4">Presently Ongoing</p>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>
                Working on a project focused on developing a Large Language Model (LLM) for low-resource language translation in the healthcare sector.
              </li>
              <li>
                Tasked with creating an LLM for a specific low-resource language, aiming to improve translation accuracy in healthcare communications.
              </li>
              <li>
                Collaborating with experts to integrate domain-specific requirements into the model.
              </li>
            </ul>
          </motion.div>
        </div>
      </section>
    </Element>
  );
};

export default Experience;
