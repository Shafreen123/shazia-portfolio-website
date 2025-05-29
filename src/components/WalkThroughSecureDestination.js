// ✅ WalkThroughSecureDestination.js
import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import confetti from "canvas-confetti";

import Top from "../assets/Top.json";
import destinationLottie from "../assets/each.json";
import partyPopper from "../assets/party_popper.json";

const bubbleColors = [
  "bg-blue-700 text-white shadow-lg",
  "bg-green-700 text-white shadow-lg",
  "bg-indigo-600 text-white shadow-md",
  "bg-emerald-700 text-white shadow-md",
];

const techStack = ["Java", "Swing GUI", "XAMPP", "MySQL", "JDBC"];

const steps = [
  { text: "Secure Destination is a Java-based desktop application.", animation: destinationLottie },
  { text: "It uses XAMPP with MySQL for backend data via JDBC connectivity.", animation: destinationLottie },
  { text: "The application consists of three core components: Place, Security, and Hotel.", animation: destinationLottie },
  { text: "The Place section lets users search destinations and view top 10 tourist spots with distance from major railway stations.", animation: destinationLottie },
  { text: "Each result includes reviews and travel insights to help users plan better.", animation: destinationLottie },
  { text: "The Security section offers crime data: rape, murder, and theft percentages based on the searched place.", animation: destinationLottie },
  { text: "The Hotel section shows nearby hotels with pricing, requires user login, and allows seamless page navigation.", animation: destinationLottie },
];

const WalkThroughSecureDestination = ({ onClose, githubLink }) => {
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
      await speak("Here are the details of the Secure Destination project.");
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
          <h2 className="text-3xl font-bold mt-4">Secure Destination</h2>
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

export default WalkThroughSecureDestination;
