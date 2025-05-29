import React from "react";
import { motion } from "framer-motion";
import shaziaPhoto from "../assets/shazia_portfolio.jpg"; // Use ../ if this file is in components/
import TypewriterQuote from "./TypewriterQuote";
const HeroSection = () => {
  return (
    <section id ="hero" className="text-white min-h-screen flex flex-col items-center justify-center text-center px-6">
      <motion.img
        src={shaziaPhoto}
        alt="Shazia Afreen"
        className="w-60 h-60 rounded-full border-4 border-white mb-6 object-cover shadow-lg"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      />
      <motion.h1
        className="text-4xl md:text-5xl font-extrabold mb-4"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Hi, I'm <span className="text-pink-400">Shazia Afreen</span>
      </motion.h1>
       <TypewriterQuote text="Turning ideas into digital reality with code and creativity." 
      speed ={70}
      />
      <p className="text-xl md:text-2xl font-medium max-w-xl">
        Final-year Computer Science student passionate about AI & web development.
      </p>
       <a
  href="/RESUMEFINAL.pdf"
  download
  className="bg-pink-500 hover:bg-pink-600 text-white font-semibold px-6 py-2 rounded-lg mb-2 mt-4 transition"
>
  Download Resume
</a>

    </section>
  );
};

export default HeroSection;
