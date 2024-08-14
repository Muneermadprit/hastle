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
    setPadding(progress > 0 ? 'p-0' : 'px-[50px] md:pb-[700px]');
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
    <div className='hidden lg:flex md:bottom-[1200px] sm:hidden '>
      <div className="lg:flex  w-full h-[600px] justify-center items-center bg-gray-200 overflow-auto">
        <div
          style={{
            transition: 'width 1s ease-in-out, height 1s ease-in-out, border-radius 1s ease-in-out, top 1s ease-in-out',
            position: 'absolute',
            zIndex: '10',
            left: '50%',
            top: style.top,
            transform: 'translate(-50%, 0)',
            ...style,
          }}
          className="bg-white w-full lg:w-[500px] h-[100px]"
        >
          <video
            className={`object-cover absolute z-20 w-full h-full md:[1200px] ${videoClass} transition-all duration-500 ${padding}`}
            autoPlay
            muted
            loop
          >
            <source src={demo} type="video/mp4" />
          </video>
         
          
          <div className='absolute z-30 mt-[300px] sm:ml-[30px]'>
            <div className={`text-white text-[36px] md:text-[48px] lg:text-[52px] ml-[50px] sm:ml-[100px] md:ml-[30px] lg:ml-[60px] mt-[100px] font-bold transition-opacity duration-500 ${textClass}`}>
              Quality Home Care Services in Liverpool<br />
            </div>
            <span className={`ml-[65px] text-[14px] sm:text-[18px] md:text-[22px] lg:text-[26px] leading-tight text-white ${textClass}`}>Personalized, Compassionate Care for Your Loved Ones</span><br />
            <button className={`group relative min-h-[30px] w-[100px] sm:w-[150px] md:w-[200px] lg:w-[300px] overflow-hidden border border-white bg-[#800080] text-white shadow-2xl transition-all before:absolute before:left-0 before:top-0 before:h-0 before:w-1/4 before:bg-white before:duration-500 after:absolute after:bottom-0 after:right-0 after:h-0 after:w-1/4 after:bg-white after:duration-500 hover:text-purple-500 hover:bg-white hover:before:h-full hover:after:h-full rounded-xl ml-[2px] md:ml-[20px] lg:ml-[70px] mt-10 px-20 ${textClass}`}>
              <span className="absolute bottom-0 left-0 right-0 top-0 z-10 flex h-full w-full items-center justify-center group-hover:text-purple-500 text-[10px] sm:text-[12px] md:text-[16px] lg:text-[20px]">Schedule a Free Consultation</span>
            </button>
          </div>
          <div className={`md:w-full mx-10 md:h-[400px] mt-[800px] bg-[#800080] ${textClass}`}>noasdhohpij</div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedContainer;
