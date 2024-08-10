import React, { useEffect } from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import image1 from './assets/aboutimage1.jpeg';
import image2 from './assets/aboutimage2.jpeg';
import image3 from './assets/aboutimage3.jpeg';
import Slider from 'react-slick';

function About() {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  const settings = {
    dots: true,
    arrows: false,
    fade:true,
    speed: 2500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: 'linear',
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slideToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="relative bg-red-500 overflow-hidden sm:min-h-[650px] bg-grey-100 flex justify-center items-center">
        <div className="w-full sm:h-[600px] h-[300px]">
          <Slider {...settings} className='h-[400px]'>
            <div>
              <img src={image1} alt="Slide 1" className="w-full  h-[500px] object-cover" />
            </div>
            <div>
              <img src={image2} alt="Slide 2" className="w-full  h-[500px] object-cover" />
            </div>
            <div>
              <img src={image3} alt="Slide 3" className="w-full  h-[500px] object-cover" />
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
}

export default About;
