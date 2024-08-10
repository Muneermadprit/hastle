import React, { useState, useEffect } from 'react';
import demo from '../../assets/demo.mp4';

const Animatedbanner = () => {
  const [style, setStyle] = useState({
    width: '100%',
    height: '100vh', // Full viewport height to start with a circular shape
    borderRadius: '50%', // Initial border-radius to make it a circle
    top: '0px', // Start at the top
  });

  const handleScroll = () => {
    const maxScroll = 500; // Adjust based on the desired scrollable content length
    const scrollY = window.scrollY;

    // Calculate the scroll progress (0 to 1)
    const progress = Math.min(scrollY / maxScroll, 1);

    // Calculate height based on scroll progress
    const height = `${100 + progress * 300}vh`; // Increase height as you scroll
    const borderRadius = '50%'; // Maintain circular shape

    // Update styles
    setStyle({
      width: '100%',
      height,
      borderRadius,
      top: `${scrollY}px`, // Move container down by scroll amount
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="flex justify-center items-center bg-gray-200 overflow-auto sm:hidden block">
      <div
        style={{
          transition: 'height 1s ease-in-out, top 1s ease-in-out',
          position: 'absolute',
          left: '50%',
          top: style.top,
          transform: 'translate(-50%, 0)', // Center horizontally, but not vertically
          borderRadius: style.borderRadius, // Apply border-radius from state
          width: '100%',
          height: style.height,
        }}
        className="bg-white"
      >
        <video
          className={`object-cover w-full h-full transition-all duration-500 ${style.borderRadius === '50%' ? 'rounded-full' : 'rounded-none'}`} // Ensure rounded-full class is applied
          autoPlay
          muted
          loop
        >
          <source src={demo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Animatedbanner;
