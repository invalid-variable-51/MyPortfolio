import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-20 w-full max-w-4xl px-4">
      <nav className="bg-gray-100 px-4 py-2 rounded-full flex flex-wrap items-center justify-center gap-5 sm:gap-10 shadow-md">
        {/* About Link */}
        <Link
          to="About"
          smooth={true}
          duration={500}
          spy={true}
          offset={-70}
          activeClass="bg-gray-300 text-gray-800 font-semibold"
          className="px-3 py-1 rounded-full text-gray-600 hover:text-gray-700 cursor-pointer transition-colors duration-300"
        >
          About
        </Link>
        {/* Education Link */}
        <Link
          to="Education"
          smooth={true}
          duration={500}
          spy={true}
          offset={-70}
          activeClass="bg-gray-300 text-gray-800 font-semibold"
          className="px-3 py-1 rounded-full text-gray-500 hover:text-gray-700 cursor-pointer transition-colors duration-300"
        >
          Education
        </Link>

        {/* Experience Link */}
        <Link
          to="Experience"
          smooth={true}
          duration={500}
          spy={true}
          offset={-70}
          activeClass="bg-gray-300 text-gray-800 font-semibold"
          className="px-3 py-1 rounded-full text-gray-500 hover:text-gray-700 cursor-pointer transition-colors duration-300"
        >
          Experience
        </Link>

        {/* Projects Link */}
        <Link
          to="Projects"
          smooth={true}
          duration={500}
          spy={true}
          offset={-70}
          activeClass="bg-gray-300 text-gray-800 font-semibold"
          className="px-3 py-1 rounded-full text-gray-500 hover:text-gray-700 cursor-pointer transition-colors duration-300"
        >
          Projects
        </Link>

        {/* Skills Link */}
        <Link
          to="Skills"
          smooth={true}
          duration={500}
          spy={true}
          offset={-70}
          activeClass="bg-gray-300 text-gray-800 font-semibold"
          className="px-3 py-1 rounded-full text-gray-500 hover:text-gray-700 cursor-pointer transition-colors duration-300"
        >
          Skills
        </Link>

        {/* Contact Link */}
        <Link
          to="Contact"
          smooth={true}
          duration={500}
          spy={true}
          offset={-70}
          activeClass="bg-gray-300 text-gray-800 font-semibold"
          className="px-3 py-1 rounded-full text-gray-500 hover:text-gray-700 cursor-pointer transition-colors duration-300"
        >
          Contact
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
