import React from "react";

const About = () => {
  return (
    <section id ="about" className="max-w-4xl mx-auto px-6 pt-6 pb-10 text-white text-center">
      <h2 className="text-3xl font-bold mb-6">About Me</h2>
      <p className="text-lg leading-relaxed mb-8">
        I am a dedicated web developer with 2 years of experience,
        specializing in Java, C, C++, JavaScript, and Node.js.
        I am a perfectionist passionate about delivering high-quality
        solutions. Besides web development, I have hands-on experience
        in machine learning, constantly eager to learn and innovate.
      </p>
      {/* Labels inside About Me */}
      <div className="flex justify-center gap-8">
        <div className="bg-pink-600 text-white rounded-lg px-8 py-3 font-semibold text-lg shadow-md">
          10+ Projects
        </div>
        <div className="bg-pink-600 text-white rounded-lg px-8 py-3 font-semibold text-lg shadow-md">
          4th Year Student 
        </div>
      </div>
    </section>
  );
};

export default About;
