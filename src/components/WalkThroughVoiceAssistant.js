
import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import confetti from "canvas-confetti";

import Top from "../assets/Top.json";
import voiceLottie from "../assets/each.json";
import partyPopper from "../assets/party_popper.json";

const bubbleColors = [
  "bg-pink-600 text-white shadow-lg",
  "bg-purple-700 text-white shadow-lg",
  "bg-pink-500 text-white shadow-md",
  "bg-purple-600 text-white shadow-md",
];

const techStack = ["Python", "SpeechRecognition", "NLTK", "OpenCV", "pyttsx3", "Tkinter"];

const steps = [
  { text: "This Voice Assistant is built to understand and respond to your voice commands just like a smart companion.", animation: voiceLottie },
  { text: "It uses Python and NLP libraries to process your input and perform tasks accordingly.", animation: voiceLottie },
  { text: "You can ask it to set reminders, alarms, or even search the web.", animation: voiceLottie },
  { text: "It integrates with OpenCV to recognize gestures or faces for advanced control.", animation: voiceLottie },
  { text: "A user-friendly GUI is built using Tkinter to support interactions.", animation: voiceLottie },
  { text: "It also uses Text-to-Speech (pyttsx3) to speak the response out loud.", animation: voiceLottie },
  { text: "This assistant can even launch games or open apps on voice command.", animation: voiceLottie },
];

const WalkThroughVoiceAssistant = ({ onClose, githubLink }) => {
  const [, setCurrentStep] = useState(0);

  useEffect(() => {
    let isCancelled = false;
    const speak = (text) => {
      return new Promise((resolve) => {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.rate = 1;
        utterance.pitch = 1;
        utterance.onend = resolve;
        if (!isCancelled) speechSynthesis.speak(utterance);
      });
    };

    async function narrate() {
      await speak("Here are the details of your Voice Assistant project.");
      for (let i = 0; i < steps.length; i++) {
        if (isCancelled) return;
        setCurrentStep(i);
        await speak(steps[i].text);
      }
      if (!isCancelled) {
        confetti({ particleCount: 100, spread: 70, origin: { y: 0.9 } });
        setCurrentStep(-1);
      }
    }

    narrate();

    return () => {
      isCancelled = true;
      speechSynthesis.cancel();
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 bg-black overflow-y-auto px-4 py-10 text-white">
      <div className="max-w-3xl mx-auto space-y-10">
        <div className="text-center">
          <Lottie animationData={Top} className="w-48 mx-auto" />
          <h2 className="text-3xl font-bold mt-4">Voice Assistant</h2>
        </div>

        <div className="flex flex-wrap justify-center gap-2">
          {techStack.map((tech, i) => (
            <span key={i} className="bg-gray-800 text-pink-400 px-4 py-1 rounded-full text-sm font-semibold shadow">
              {tech}
            </span>
          ))}
        </div>

        <div className="space-y-6">
          {steps.map((step, i) => (
            <div key={i} className={`flex items-center ${i % 2 === 0 ? "justify-start" : "justify-end"}`}>
              <div className={`${bubbleColors[i % bubbleColors.length]} rounded-xl p-4 max-w-[75%] flex items-center gap-4`}>
                <Lottie animationData={step.animation} className="w-20 h-20 flex-shrink-0" loop />
                <p className="text-lg">{step.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10 space-y-4">
          <Lottie animationData={partyPopper} className="w-48 mx-auto" />
          <p className="text-xl font-semibold">Thanks for viewing!</p>
          <a href={githubLink} target="_blank" rel="noreferrer" className="inline-block bg-pink-500 text-white px-6 py-2 rounded-lg hover:bg-pink-600 transition">
            View on GitHub
          </a>
        </div>

        <div className="text-center mt-8">
          <button onClick={onClose} className="bg-gray-700 px-4 py-2 rounded hover:bg-gray-600">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default WalkThroughVoiceAssistant;
