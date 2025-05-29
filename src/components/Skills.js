import React from "react";

import javaLogo from "../assets/Java.png";
import cppLogo from "../assets/C++.png";
import jsLogo from "../assets/java-script.png";
import nodeLogo from "../assets/Node JS.png";
import cssLogo from "../assets/css-file.png";
import htmlLogo from "../assets/html.png";
import CLogo from "../assets/C.png";
import pythonLogo from "../assets/python.png";
import mysqlLogo from "../assets/mysql.png";

const skills = [
  { name: "Java", logo: javaLogo },
  { name: "C++", logo: cppLogo },
  { name: "JavaScript", logo: jsLogo },
  { name: "Node.js", logo: nodeLogo },
  { name: "CSS", logo: cssLogo },
  { name: "HTML", logo: htmlLogo },
  { name: "C", logo: CLogo },
  { name: "Python", logo: pythonLogo },
  { name: "MySQL", logo: mysqlLogo },
];

const Skills = () => {
  return (
    <section id ="skills" className="max-w-6xl mx-auto px-6 py-16 text-white text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-10">My Skills</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {skills.map(({ name, logo }, idx) => (
          <div
            key={idx}
            className="bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 shadow-xl rounded-2xl p-6 w-32 h-32 flex flex-col items-center justify-center transform hover:scale-105 transition duration-300"
          >
            <img
              src={logo}
              alt={`${name} logo`}
              className="w-10 h-10 mb-3 object-contain"
            />
            <span className="text-sm font-semibold">{name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
