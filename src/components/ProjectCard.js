import React from "react";
import Lottie from "lottie-react";

const ProjectCard = ({ title, animationData, onClick }) => {
  return (
    <div
      className="bg-gray-800 p-4 rounded-xl shadow-lg text-center cursor-pointer hover:scale-105 transition-transform duration-300"
      onClick={onClick}
    >
      <div className="w-32 h-32 mx-auto">
        <Lottie animationData={animationData} loop autoplay />
      </div>
      <h3 className="text-lg font-semibold mt-4">{title}</h3>
    </div>
  );
};

export default ProjectCard;
