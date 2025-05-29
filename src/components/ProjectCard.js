// src/components/Projects.js
import React, { useState } from "react";
import WalkThroughVoiceAssistant from "./WalkThroughVoiceAssistant";
import WalkThroughSecureDestination from "./WalkThroughSecureDestination";
import WalkThroughHotelManagement from "./WalkThroughHotelManagement";
import ProjectCard from "./ProjectCard";

import securityLottie from "../assets/security_lottie.json";
import voiceAssistantLottie from "../assets/voice_assistant_lottie.json";
import hotelLottie from "../assets/hotel_lottie.json";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: "voiceAssistant",
      name: "Voice Assistant",
      lottieData: voiceAssistantLottie,
      githubLink: "https://github.com/yourusername/voice-assistant",
    },
    {
      id: "secureDestination",
      name: "Secure Destination App",
      lottieData: securityLottie,
      githubLink: "https://github.com/yourusername/secure-destination-app",
    },
    {
      id: "hotelManagement",
      name: "Student Management System",
      lottieData: hotelLottie,
      githubLink: "https://github.com/yourusername/student-management-system",
    },
  ];

  return (
    <section
      id="projects"
      className="text-white py-12 px-6 bg-gradient-to-br from-gray-900 via-gray-800 to-black"
    >
      <h2 className="text-3xl font-bold mb-8 text-center">My Projects</h2>

      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.name}
            lottieData={project.lottieData}
            onClick={() => setSelectedProject(project)}
          />
        ))}
      </div>

      {selectedProject && (
        <>
          {selectedProject.id === "voiceAssistant" && (
            <WalkThroughVoiceAssistant
              onClose={() => setSelectedProject(null)}
            />
          )}
          {selectedProject.id === "secureDestination" && (
            <WalkThroughSecureDestination
              onClose={() => setSelectedProject(null)}
            />
          )}
          {selectedProject.id === "hotelManagement" && (
            <WalkThroughHotelManagement
              onClose={() => setSelectedProject(null)}
            />
          )}
        </>
      )}
    </section>
  );
};

export default Projects;
