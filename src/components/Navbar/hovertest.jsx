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
    <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]  justify-center items-center bg-gray-200 overflow-auto sm:flex hidden">
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
        className="bg-white w-full sm:w-[300px] md:w-[400px] lg:w-[500px] h-full"
      >
        <video
          className={`object-cover absolute z-20 w-full h-full ${videoClass} transition-all duration-500 ${padding}`}
          autoPlay
          muted
          loop
        >
          <source src={demo} type="video/mp4" />
        </video>
<div className=' absolute z-30 mt-[300px] sm:ml-[50px] '>

<div className={`   text-white text-[36px] md:text-[48px] lg:text-[52px] ml-[50px] sm:ml-[100px] md:ml-[30px] lg:ml-[60px] mt-[100px] sm:mt-[100px] md:mt-[100px] lg:mt-[120px] font-bold transition-opacity duration-500 ${textClass}`}>
  Quality Home Care Services in Liverpool<br />
 
 
</div>

<span className={`  ${textClass}  ml-[80px] text-[14px] sm:text-[18px] md:text-[22px] lg:text-[26px] leading-tight text-white`}>Personalized, Compassionate Care for Your Loved Ones</span><br />
<button className={` ${textClass} group relative min-h-[30px] sm:min-h-[40px] w-[100px] sm:w-[150px] md:w-[200px] lg:w-[300px] overflow-hidden border border-white bg-[#800080] text-white shadow-2xl transition-all before:absolute before:left-0 before:top-0 before:h-0 before:w-1/4 before:bg-white before:duration-500 after:absolute after:bottom-0 after:right-0 after:h-0 after:w-1/4 after:bg-white after:duration-500 hover:text-purple-500 hover:bg-white hover:before:h-full hover:after:h-full rounded-full ml-[5px] sm:ml-[10px] md:ml-[20px] lg:ml-[340px] px-20`}>
    <span className=" absolute bottom-0 left-0 right-0 top-0 z-10 flex h-full w-full items-center justify-center group-hover:text-purple-500 text-[10px] sm:text-[12px] md:text-[16px] lg:text-[20px]">Schedule a Free Consultation</span>
  </button>
</div>
        
      </div>
    </div>
  );
};

export default AnimatedContainer;

