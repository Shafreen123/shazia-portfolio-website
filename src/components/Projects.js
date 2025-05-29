// src/components/Projects.js

import React, { useState, lazy, Suspense } from "react";
import ProjectCard from "./ProjectCard";

import voiceLottie from "../assets/voice_assistant_lottie.json";
import secureLottie from "../assets/security_lottie.json";
import hotelLottie from "../assets/hotel_lottie.json";

// Lazy-load walkthrough components
 const WalkThroughVoiceAssistant = lazy(() => import("./WalkThroughVoiceAssistant"));
 const WalkThroughSecureDestination = lazy(() => import("./WalkThroughSecureDestination"));
 const WalkThroughHotelManagement = lazy(() => import("./WalkThroughHotelManagement"));

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      name: "Voice Assistant",
      animation: voiceLottie,
      walkthrough: WalkThroughVoiceAssistant,
      githubLink: "https://github.com/Shafreen123/Shafreen",
    },
    {
      name: "Secure Destination App",
      animation: secureLottie,
       walkthrough: WalkThroughSecureDestination,
      githubLink: "https://github.com/Shafreen123/Secure-Destination",
    },
    {
      name: "Hotel Management System",
      animation: hotelLottie,
     walkthrough: WalkThroughHotelManagement,
      githubLink: "https://github.com/Shafreen123/Hotel_management",
    },
  ];

  const ActiveWalkthrough = selectedProject?.walkthrough;

  return (
    <section
      id="projects"
      className="text-white py-12 px-6 bg-gradient-to-br from-gray-900 via-gray-800 to-black"
    >
      <h2 className="text-3xl font-bold mb-8 text-center">My Projects</h2>

      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.name}
            animationData={project.animation}
            onClick={() => setSelectedProject(project)}
          />
        ))}
      </div>

      <Suspense fallback={<div className="text-center mt-4">Loading walkthrough...</div>}>
        {ActiveWalkthrough  && (
          <ActiveWalkthrough
            githubLink={selectedProject.githubLink}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </Suspense>
    </section>
  );
};

export default Projects;
