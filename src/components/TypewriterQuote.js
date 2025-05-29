import React, { useEffect, useState } from "react";

const TypewriterQuote = ({ text = "", speed = 100 }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    if (!text || typeof text !== "string") return;

    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayedText((prev) => prev + text.charAt(i));
        i++;
      } else {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <p
      className="text-2xl md:text-3xl text-pink-400 max-w-2xl mx-auto mt-4"
      style={{ fontFamily: "'Great Vibes', cursive" }}
    >
      {displayedText}
      <span className="animate-pulse">|</span>
    </p>
  );
};

export default TypewriterQuote;
