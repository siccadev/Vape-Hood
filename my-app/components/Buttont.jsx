"use client"; // Make this a client component

import React, { useEffect, useState } from "react";

const BackToTopButton = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  // Function to scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Effect to handle scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {showScrollButton && (
        <button 
          onClick={scrollToTop} 
        className="fixed bottom-4 right-4 bg-red-600 text-white p-2 rounded-full shadow-lg hover:bg-red-600 transition-all rotate-180 z-50">
      
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m0 0l-4.5-4.5m4.5 4.5l4.5-4.5" />
          </svg>
        </button>
      )}
    </>
  );
};

export default BackToTopButton;
