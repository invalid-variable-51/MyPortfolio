import React, { useCallback } from 'react';
import { motion } from 'framer-motion';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <div className="relative left-0 right-0 w-screen bg-black text-white overflow-hidden -mx-4 sm:-mx-6 min-h-[50vh]">
      {/* Particle Background */}
      <Particles
        id="tsparticles-footer"
        init={particlesInit}
        className="absolute top-0 left-0 w-full h-full z-0"
        options={{
          fullScreen: { enable: false },
          particles: {
            number: { value: 60, density: { enable: true, area: 800 } },
            size: { value: 2.5, random: true },
            color: { value: "#ffffff" },
            links: {
              enable: true,
              color: "#ffffff",
              distance: 120,
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true,
              speed: 1.2,
              outModes: "bounce",
            },
          },
          interactivity: {
            events: {
              onHover: { enable: true, mode: "grab" },
              onClick: { enable: true, mode: "repulse" },
            },
            modes: {
              grab: { distance: 150, lineLinked: { opacity: 0.6 } },
              repulse: { distance: 100, duration: 0.4 },
            },
          },
        }}
      />

      {/* Footer Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="relative z-10 text-center py-16 px-4"
      >
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
          Vidit Mehta
        </h3>
        <div className="flex justify-center items-center gap-6 text-3xl sm:text-4xl mb-6">
          <motion.a
            whileHover={{ scale: 1.2 }}
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors duration-300"
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2 }}
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors duration-300"
          >
            <FaGithub />
          </motion.a>
        </div>
        <p className="text-sm sm:text-base text-gray-300">
          © 2025 Vidit Mehta. All Rights Reserved.
        </p>
      </motion.div>
    </div>
  );
};

export default Footer;
