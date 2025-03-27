import React from 'react';
import pesLogo from '../assets/peslogo.png';
import vyasLogo from '../assets/vyaslogo.jpeg';
import { Element } from 'react-scroll';

const Education = () => {
  return (
    <Element name="Education">
      <section className="w-full min-h-[50vh] flex flex-col items-center justify-start py-16 px-4 bg-gray-100">
        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-8 text-center">
          My Education
        </h2>

        {/* First Education Card - PES University */}
        <div className="max-w-2xl w-full bg-white rounded-md shadow-md p-6 flex flex-col md:flex-row items-center gap-6 mb-8">
          {/* College/University Logo */}
          <img
            src={pesLogo}
            alt="PES University Logo"
            className="w-20 sm:w-24 h-20 sm:h-24 object-contain"
          />
          {/* Education Details */}
          <div className="text-center md:text-left">
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-1">
              Master of Computer Applications
            </h3>
            <p className="text-gray-700">
              <strong>PES University</strong>, Bangalore, KA
            </p>
            <p className="text-gray-700">
              <em>Oct 2023 - Jul 2025</em>
            </p>
          </div>
        </div>

        {/* Second Education Card - Vyas College */}
        <div className="max-w-2xl w-full bg-white rounded-md shadow-md p-6 flex flex-col md:flex-row items-center gap-6">
          {/* College/University Logo */}
          <img
            src={vyasLogo}
            alt="Vyas College Logo"
            className="w-20 sm:w-24 h-20 sm:h-24 object-contain"
          />
          {/* Education Details */}
          <div className="text-center md:text-left">
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-1">
              Bachelor of Commerce
            </h3>
            <p className="text-gray-700">
              <strong>Jai Narain Vyas University</strong>, Jodhpur, RAJ
            </p>
            <p className="text-gray-700">
              <em>Aug 2019 - Sep 2022</em>
            </p>
          </div>
        </div>
      </section>
    </Element>
  );
};

export default Education;
