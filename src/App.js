import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ContactCallToAction from './components/ContactCallToAction';
import Footer from "./components/Footer";
function App() {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
<Navbar />
      <main className="pt-20">
      <HeroSection />
      <About />
      <Skills />
     <Projects />
<ContactCallToAction />
       <Contact />
       <Footer />
     </main>
      {/* Later: Add labels, skills, projects, contact, footer */}
    </div>
  );
}

export default App;
