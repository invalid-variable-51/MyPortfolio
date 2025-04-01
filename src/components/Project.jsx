import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Element } from 'react-scroll';

// Example screenshots from your assets folder
import preppalImg from '../assets/preppal.png';
import musicgenImg from '../assets/automusic.png';
import teenpayImg from '../assets/teenpay.png';

// Each project’s data
const projects = [
  {
    title: 'PrepPal AI',
    screenshot: preppalImg,
    techStack: ['React', 'React Native', 'MongoDB', 'Hugging Face'],
    description: `
      A cloud-based study planner featuring AI-driven schedules, flashcards, 
      and topic roadmaps to boost learning efficiency. Developed a cross-platform 
      app with React and React Native, leveraging MongoDB Atlas for secure user 
      management and real-time syncing. Integrated Hugging Face models to 
      auto-generate flashcards for targeted study sessions.
    `,
  },
  {
    title: 'Automated Music Generator',
    screenshot: musicgenImg,
    techStack: ['Python', 'Music21', 'TensorFlow', 'Scikit-Learn'],
    description: `
      An automated music generation system that uses a CNN to process MIDI files 
      and predict chord progressions. Utilized Python libraries such as Music21 
      for data parsing and TensorFlow-Keras for deep learning. Generated dynamic 
      compositions from various instrument chords, exploring new harmonies 
      and musical patterns.
    `,
  },
  {
    title: 'TeenPay - Prepaid Card Management',
    screenshot: teenpayImg,
    techStack: ['React.js', 'Tailwind CSS', 'TypeScript'],
    description: `
      A responsive, interactive front-end for a prepaid card management system. 
      Implemented dynamic card customization, QR code generation, and real-time 
      updates using React.js and Tailwind CSS. Optimized performance with 
      TypeScript, React hooks, and memoization, ensuring a seamless user 
      experience.
    `,
  },
];

// Framer Motion variants for left/right slide animation
const slideVariants = {
  initial: (direction) => ({
    x: direction > 0 ? 100 : -100,
    opacity: 0,
  }),
  animate: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: 'easeInOut' },
  },
  exit: (direction) => ({
    x: direction > 0 ? -100 : 100,
    opacity: 0,
    transition: { duration: 0.6, ease: 'easeInOut' },
  }),
};

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const nextProject = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <Element name="Projects">
      <section className="w-full min-h-screen flex flex-col items-center justify-center py-16 px-4 bg-gray-100">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-10 text-center">
          My Projects
        </h2>

        <div className="relative w-full max-w-5xl min-h-[400px]">
          {/* AnimatePresence handles exit transitions for the outgoing card */}
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={projects[currentIndex].title}
              variants={slideVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              custom={direction}
              className="bg-white rounded-xl shadow-xl p-6 sm:p-8 flex flex-col md:flex-row items-center gap-6 hover:shadow-2xl transition-shadow duration-300"
              whileHover={{ scale: 1.01 }}
            >
              {/* Left side: Project Text */}
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-blue-600 mb-3">
                  {projects[currentIndex].title}
                </h3>
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4">
                  {projects[currentIndex].description}
                </p>
                {/* Tech Stack */}
                <div className="flex flex-wrap items-center gap-3 mt-2">
                  {projects[currentIndex].techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right side: Screenshot */}
              <div className="flex-1 flex items-center justify-center">
                <img
                  src={projects[currentIndex].screenshot}
                  alt={projects[currentIndex].title}
                  className="w-full h-auto object-cover rounded-md"
                />
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Pagination Dots */}
          <div className="flex justify-center items-center mt-6">
            {projects.map((_, index) => (
              <div
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`h-2 w-2 mx-2 rounded-full ${
                  index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
                } cursor-pointer`}
              />
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex flex-col sm:flex-row justify-between items-center mt-6 gap-4">
            <button
              onClick={prevProject}
              className={`px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300`}
            >
              Previous
            </button>
            <button
              onClick={nextProject}
              className={`px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300`}
            >
              Next
            </button>
          </div>
        </div>
      </section>
    </Element>
  );
};

export default Projects;
