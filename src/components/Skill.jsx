import React, { useMemo } from 'react';
import { Element } from 'react-scroll';
import { motion } from 'framer-motion';
import awsLogo from '../assets/awslogo.png';

const initialSkills = [
  { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'HTML', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'Machine Learning', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
  { name: 'AWS', logo: awsLogo },
  { name: 'Linux', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
  { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'Postman', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg' },
  { name: 'GitHub', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
  { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Express.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
  { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'C/C++', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
];

// Function to shuffle the skills array
const shuffleArray = (array) => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

const Skills = () => {
  // Shuffle the skills only once using useMemo
  const shuffledSkills = useMemo(() => shuffleArray(initialSkills), []);

  return (
    <Element name="Skills">
      <section className="w-full min-h-screen flex flex-col items-center justify-start py-20 px-4 bg-gray-100">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-gray-800 mb-12"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.05, textShadow: "0px 0px 8px rgba(0, 0, 0, 0.5)" }}
        >
          My Skills
        </motion.h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 justify-items-center max-w-6xl w-full">
          {shuffledSkills.map(({ name, logo }, idx) => (
            <motion.figure
              key={idx}
              className="flex flex-col items-center justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.1 }}
              viewport={{ once: true }}
              transition={{  duration: 0.5 }}
            >
              <img
                src={logo}
                alt={name}
                className="w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 object-contain"
              />
              <figcaption className="mt-2 text-center text-gray-800 font-medium text-xs sm:text-sm transition-colors duration-75 hover:text-blue-600">
                {name}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </section>
    </Element>
  );
};

export default Skills;
