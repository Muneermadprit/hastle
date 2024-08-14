import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Subscription() {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <div className='w-full h-[230px] bg-primary backdrop-blur-sm py-10 mb-20' data-aos="fade-right">
      <div className='container mx-auto px-4 flex flex-col sm:flex-row items-center sm:justify-between'>
        <div className='space-y-6 max-w-xl mx-auto'>
          <h1 className='text-2xl text-center sm:text-left sm:ml-20 sm:text-4xl font-semibold mb-4 sm:mb-0 text-white'>
            Get in touch with us
          </h1>
          <div className='flex flex-col sm:flex-row items-center gap-4'>
            <input
              data-aos='fade-up'
              type='text'
              placeholder='Enter your E-mail'
              className='w-full sm:w-[800px] p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary'
            />
            
            <button data-aos='fade-up' className='mt-4 sm:mt-0 p-2 w-full sm:w-[200px] hover:bg-gray-400 rounded-xl bg-white'>
              Subscribe 
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Subscription;
