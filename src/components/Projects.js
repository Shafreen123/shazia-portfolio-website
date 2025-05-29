// src/components/Projects.js
import React, { useState, lazy, Suspense } from "react";
import ProjectCard from "./ProjectCard";

// Lazy-load walkthrough components
const WalkThroughVoiceAssistant = lazy(() => import("./WalkThroughVoiceAssistant"));
const WalkThroughSecureDestination = lazy(() => import("./WalkThroughSecureDestination"));
const WalkThroughHotelManagement = lazy(() => import("./WalkThroughHotelManagement"));

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      name: "Voice Assistant",
      walkthrough: WalkThroughVoiceAssistant,
      githubLink: "https://github.com/Shafreen123/Shafreen",
    },
    {
      name: "Secure Destination App",
      walkthrough: WalkThroughSecureDestination,
      githubLink: "https://github.com/Shafreen123/Secure-Destination",
    },
    {
      name: "Hotel Management System",
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
            onClick={() => setSelectedProject(project)}
          />
        ))}
      </div>

      {/* Lazy-load walkthrough when a project is selected */}
      <Suspense fallback={<div className="text-center mt-4">Loading walkthrough...</div>}>
        {selectedProject && ActiveWalkthrough && (
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
