import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeroSection from "./components/Hero.jsx";
import "./index.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Education from "./components/Education.jsx";
import Skill from "./components/Skill.jsx";
import Experience from "./components/Experience.jsx";
import Project from "./components/Project.jsx";
import Contact from "./components/Contact.jsx"; 
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <Router>
      {/* Main Container */}
      <div className="bg-black text-white font-poppins scroll-smooth" lang="en">
        <Navbar />
        {/* Main Content */}
        <main role="main">
          <HeroSection />
          <About />
          <Education />
          <Experience />
          <Project />
          <Skill />
          <Contact />
        </main>
        <Footer /> 
      </div>
    </Router>
  );
}

export default App;