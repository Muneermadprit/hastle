import React, { useState, useEffect } from 'react';
import demo from '../../assets/heromob.mp4';

const AnimatedContainermob = () => {
  const [style, setStyle] = useState({
    width: '90%',
    height: '600px',
    borderRadius: '0%',
    transform: 'translateY(0px)', // Initial position
    marginBottom: '0px', // Initial margin-bottom
  });

  const [videoClass, setVideoClass] = useState('rounded-none');
  const [textClass, setTextClass] = useState('opacity-100');

  const handleScroll = () => {
    const maxScroll = 1000; // Adjust this value as needed
    const scrollY = window.scrollY;
    const progress = Math.min(scrollY / maxScroll, 1);

    // Calculate width, height, transform, and margin-bottom based on scroll progress
    const width = `${100 - progress * 100}%`; // Reduces width to 0%
    const height = `${600 - progress * 400}px`; // Decrease height at a slower rate (reduced speed)
    const transform = `translateY(${progress * 200}px)`; // Move container down at a slower speed
    const marginBottom = `${progress * 200}px`; // Reduce margin-bottom change for smoother scrolling

    // Set styles based on progress
    setStyle(prevStyle => ({
      ...prevStyle,
      width,
      height,
      transform,
      marginBottom,
      borderRadius: progress > 0 ? '50%' : '0%',
    }));

    setVideoClass(progress > 0 ? 'rounded-full' : 'rounded-none');
    setTextClass(progress > 0 ? 'opacity-0' : 'opacity-100');
  };

  useEffect(() => {
    handleScroll(); // Initial scroll handling

    // Attach scroll event listener
    window.addEventListener('scroll', handleScroll);

    return () => {
      // Clean up the scroll event listener
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className="w-full h-auto flex justify-center items-center bg-gray-200 overflow-hidden sm:hidden"
      style={{
        transition: 'transform 0.9s ease-out, margin-bottom 0.9s ease-out', // Smoother and slower transition for container movement and margin
        transform: style.transform, // Apply transform to move the main container
        marginBottom: style.marginBottom, // Apply margin-bottom
      }}
    >
      <div
        className="flex justify-center items-center bg-white"
        style={{
          transition: 'width 0.9s ease-out, height 0.9s ease-out, border-radius 0.9s ease-out',
          ...style,
        }}
      >
        <video
          className={`object-fill w-full h-full ${videoClass} transition-all duration-[0.9s] ease-out`}
          autoPlay
          muted
          loop
        >
          <source src={demo} type="video/mp4" />
        </video>
        <div className='absolute mt-[400px]'>

        <div
          className={` text-white ml-1 text-[35px] sm:text-[26px] md:text-[20px] lg:text-[24px] font-bold transition-opacity duration-[0.9s] ease-out ${textClass}`}
        >
          Quality Home Care Services<span className='ml-4'>in Liverpool</span> <br />
         
          
          
        </div>
        <button className={`${textClass} group  ml-[10px] relative  px-[80px] py-5 min-h-[30px] sm:min-h-[40px] w-[100px] sm:w-[200px] md:w-[200px] lg:w-[300px] overflow-hidden border border-white bg-purple-500 text-white shadow-2xl transition-all hover:text-purple-500 hover:bg-white rounded-md  sm:ml-[10px] md:ml-[20px] lg:ml-[30px]`}>
            <span className=" font-semibold absolute bottom-0 left-0 right-0 top-0 z-10 flex h-full w-full items-center justify-center group-hover:text-purple-500 text-[12px] sm:text-[12px] md:text-[16px] lg:text-[20px]">
              Schedule <br/> Free Consultation
            </span>
          </button>
        </div>
          
      
      </div>
      
    </div>
  );
};

export default AnimatedContainermob;


