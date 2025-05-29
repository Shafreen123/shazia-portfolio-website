import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="max-w-5xl mx-auto px-6 py-12 text-white text-center"
    >
      <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>

      <p className="mb-6 text-lg max-w-md mx-auto">
        Whether you want to collaborate, ask a question, or just say hello, feel free to reach out!
      </p>

      <div className="flex justify-center gap-12 text-4xl mb-6">
        <a
          href="mailto:shaziya0205@gmail.com?subject=Portfolio Inquiry&body=Hi Shazia,"
          target="_blank"
          rel="noreferrer"
          aria-label="Email"
          className="hover:text-pink-400 transition"
        >
          <FaEnvelope />
        </a>
        <a
          href="tel:+916205826568"
          aria-label="Phone"
          className="hover:text-pink-400 transition"
        >
          <FaPhoneAlt />
        </a>
        <a
          href="https://github.com/Shafreen123"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          className="hover:text-pink-400 transition"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/shazia-afreen-692b08302/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          className="hover:text-pink-400 transition"
        >
          <FaLinkedin />
        </a>
      </div>

      <p className="text-sm text-gray-400">
        Phone: <a href="tel:+91-6205826568" className="underline hover:text-pink-400">+1 (234) 567-890</a>
      </p>
    </section>
  );
};

export default Contact;
