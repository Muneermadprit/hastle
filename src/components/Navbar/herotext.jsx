import React, { useState, useEffect } from 'react';
import demo from '../../assets/demo.mp4';

const AnimatedContainer = () => {
  const [style, setStyle] = useState({
    width: '100%',
    height: '1400px',
    borderRadius: '0%',
    top: '0px',
  });

  const [videoClass, setVideoClass] = useState('rounded-none');
  const [padding, setPadding] = useState('px-[80px] pb-[400px]');
  const [textClass, setTextClass] = useState('opacity-100');

  const handleScroll = () => {
    const maxScroll = 1000;
    const scrollY = window.scrollY;
    const progress = Math.min(scrollY / maxScroll, 1);

    const width = `${100 - progress * 100}vw`;
    const height = `${1400 - progress * 1400}px`;
    const borderRadius = progress > 0 ? '50%' : '0%';

    setVideoClass(progress > 0 ? 'rounded-full' : 'rounded-none');
    setPadding(progress > 0 ? 'p-0' : 'px-[50px] pb-[700px]');
    setTextClass(progress > 0 ? 'opacity-0' : 'opacity-100');

    const top = `${scrollY}px`;

    setStyle({
      width,
      height,
      borderRadius,
      top,
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] flex justify-center items-center bg-gray-200 overflow-auto sm:block md:hidden">
      
      <div
          className={`absolute  z-40  text-white text-[12px] sm:text-[16px] md:text-[20px] lg:text-[24px] ml-[10px] sm:ml-[20px] md:ml-[30px] lg:ml-[60px] mt-[20px] sm:mt-[50px] md:mt-[100px] lg:mt-[150px] font-bold transition-opacity duration-500 ${textClass}`}
        >
          Quality Home Care Services in Liverpool<br />
          <span className='text-[12px] sm:text-[16px] md:text-[20px] lg:text-[24px]'>Personalized, Compassionate Care for Your Loved Ones</span><br />
          <button className="group relative min-h-[30px] sm:min-h-[40px] w-[100px] sm:w-[150px] md:w-[200px] lg:w-[300px] overflow-hidden border border-white bg-purple-500 text-white shadow-2xl transition-all before:absolute before:left-0 before:top-0 before:h-0 before:w-1/4 before:bg-white before:duration-500 after:absolute after:bottom-0 after:right-0 after:h-0 after:w-1/4 after:bg-white after:duration-500 hover:text-purple-500 hover:bg-white hover:before:h-full hover:after:h-full rounded-full ml-[5px] sm:ml-[10px] md:ml-[20px] lg:ml-[30px]">
            <span className="absolute bottom-0 left-0 right-0 top-0 z-10 flex h-full w-full items-center justify-center group-hover:text-purple-500 text-[10px] sm:text-[12px] md:text-[16px] lg:text-[20px]">Schedule a Free Consultation</span>
          </button>
        </div>
      
    </div>
  );
};

export default AnimatedContainer;