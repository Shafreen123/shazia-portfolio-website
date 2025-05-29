import React, { useState, useEffect } from 'react';

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    if (window.pageYOffset > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisible);
    return () => window.removeEventListener('scroll', toggleVisible);
  }, []);

  return (
    <button
      onClick={scrollToTop}
      style={{
        position: 'fixed',
        bottom: '40px',
        right: '40px',
        padding: '10px 15px',
        fontSize: '18px',
        borderRadius: '50%',
        border: 'none',
        backgroundColor: '#6b21a8', // purple-700 from Tailwind
        color: 'white',
        cursor: 'pointer',
        display: visible ? 'inline' : 'none',
        boxShadow: '0 4px 6px rgba(0,0,0,0.3)',
      }}
      aria-label="Scroll to top"
      title="Scroll to top"
    >
      ↑
    </button>
  );
};

export default ScrollToTop;
