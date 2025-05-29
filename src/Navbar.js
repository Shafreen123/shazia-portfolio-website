import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About Me" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); // close menu on mobile after click
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-60 backdrop-blur-md shadow-md z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Brand */}
        <div
          className="text-pink-400 font-bold text-xl cursor-pointer"
          onClick={() => handleScroll("hero")}
        >
          Shazia Afreen
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-white font-semibold">
          {navItems.map(({ id, label }) => (
            <li
              key={id}
              className="cursor-pointer relative group"
              onClick={() => handleScroll(id)}
            >
              {label}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-pink-400 group-hover:w-full transition-all duration-300"></span>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger Button */}
        <div
          className="md:hidden cursor-pointer text-pink-400"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h16" />
            </svg>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-black bg-opacity-90 backdrop-blur-md text-white font-semibold flex flex-col space-y-4 px-6 pb-6">
          {navItems.map(({ id, label }) => (
            <li
              key={id}
              className="cursor-pointer py-2 border-b border-pink-400"
              onClick={() => handleScroll(id)}
            >
              {label}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
