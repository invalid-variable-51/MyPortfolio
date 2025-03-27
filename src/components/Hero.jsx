import React, { useCallback } from 'react';
import { motion } from 'framer-motion';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import Image from "../assets/bg.jpg";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const TypewriterEffect = () => {
  const phrases = [
    "Full Stack Developer",
    "Problem Solver",
    "AI/ML Enthusiast",
    "AWS Cloud Practitioner",
  ];

  const [text, setText] = React.useState("");
  const [phraseIndex, setPhraseIndex] = React.useState(0);
  const [charIndex, setCharIndex] = React.useState(0);

  React.useEffect(() => {
    if (charIndex < phrases[phraseIndex].length) {
      const timeoutId = setTimeout(() => {
        setText((prev) => prev + phrases[phraseIndex].charAt(charIndex));
        setCharIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timeoutId);
    } else {
      const nextTimeoutId = setTimeout(() => {
        setText("");
        setCharIndex(0);
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
      }, 1500);
      return () => clearTimeout(nextTimeoutId);
    }
  }, [charIndex, phraseIndex, phrases]);

  return (
    <motion.p
      className="text-base sm:text-lg md:text-2xl mt-4 font-light text-gray-300"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      {text}
    </motion.p>
  );
};

const ParticleBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        particles: {
          number: { value: 120, density: { enable: true, area: 800 } },
          size: { value: 3, random: true },
          move: {
            enable: true,
            speed: 2,
            direction: "none",
            outModes: "bounce",
            attract: { enable: false },
          },
          color: { value: "#ffffff" },
          shape: { type: "circle" },
          links: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.5,
            width: 1.2,
          },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: ["grab", "attract"] },
            onClick: { enable: true, mode: "repulse" },
          },
          modes: {
            grab: { distance: 200, lineLinked: { opacity: 0.7 } },
            attract: { distance: 200, duration: 0.5, factor: 5 },
            repulse: { distance: 150, duration: 0.4 },
          },
        },
      }}
      className="absolute top-0 left-0 w-full h-full"
    />
  );
};

const HeroSection = () => {
  return (
    <div
      className="relative w-full h-screen md:h-[80vh] bg-cover bg-center text-white flex flex-col justify-center items-center overflow-hidden"
      style={{ backgroundImage: `url(${Image})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-black opacity-80"></div>

      {/* Particles */}
      <ParticleBackground />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center text-center px-4">
        <motion.h1
          className="text-3xl sm:text-4xl md:text-7xl font-bold font-[Poppins] tracking-wide"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hi, I'm <span className="text-blue-400">Vidit Mehta</span>
        </motion.h1>

        {/* Typewriter Text */}
        <div className="h-10 md:h-12 overflow-hidden">
          <TypewriterEffect />
        </div>

        {/* Buttons */}
        <div className="mt-10 sm:mt-20 md:mt-40 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <motion.a
            href="https://github.com/invalid-variable-51"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 bg-white text-black rounded-lg text-sm sm:text-base font-medium hover:bg-blue-600 transition shadow-lg transform hover:scale-105"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <FaGithub className="mr-2" />
            GitHub
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/vidit-mehta-aa7b09259/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 bg-white text-black rounded-lg text-sm sm:text-base font-medium hover:bg-blue-600 transition shadow-lg transform hover:scale-105"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <FaLinkedin className="mr-2" />
            LinkedIn
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
