import React, { useState, useEffect } from 'react';
import image1 from './assets/blog2.jpeg';
import { TypeAnimation } from 'react-type-animation';
import AOS from 'aos';
import 'aos/dist/aos.css';
import image2 from './assets/images4.jpeg';
import image3 from './assets/blog1.jpeg';
import image4 from './assets/image3.jpeg'
import image7 from './assets/blog3.jpeg'

import image5 from './assets/aboutimage2.jpeg'
import image6 from './assets/aboutimage3.jpeg'
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Navbar/footer';

function About() {
  const [showContainer, setShowContainer] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
  }, []);

  return (
    <div className="min-h-screen relative ">
      <Navbar /> {/* Navbar Component */}
      <div
        className="relative z-20 w-full flex justify-center items-center transition-all duration-500"
        style={{
          height: '100vh', // Full viewport height for the initial section
          backgroundImage: `url(${image1})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-10"></div>

        <div className="absolute  mt-20 inset-0 flex flex-col justify-center items-center px-4">
          <h1 className="text-white  text-center shadow-bulge text-[8vw] sm:text-[60px] md:text-[80px] lg:text-[100px] mb-4 font-extrabold border-8 border-solid border-[#800080] animate-drawBorder">
            About Us
            <div className="mt-4 text-[#800080] font-light text-center text-[4vw] sm:text-[16px] md:text-[20px] lg:text-[24px]">
              <TypeAnimation
                sequence={[
                  'At Holistic Care Services, we believe in creating a world where our clients flourish. Led by the visionary GP Dr. Kunbi Taiwo and Tola Taiwo, our team of compassionate and highly trained care professionals provides personalized care that goes beyond mere assistance. Our mission is to celebrate each triumph, big or small, and remind our clients that aging is not about limitations but embracing life’s possibilities.',
                  1000,
                  () => setShowContainer(true), // Trigger the display of the containers
                ]}
                wrapper="span"
                speed={70}
                style={{ fontSize: 'inherit', color: 'inherit' }}
                repeat={0}
              />
            </div>
          </h1>
        </div>
      </div>

      {showContainer && (
        <>
          {/* First container */}
          <div className="relative z-30 w-[90%] sm:w-[80%] mx-auto sm:mt-[-280px]  mt-[-500px] text-black p-4" data-aos="zoom-in">
            <div className="w-full sm:w-[400px] h-[500px] sm:h-[450px] mx-auto">
              <img
                src={image2}
                alt="Descriptive Alt Text"
                className="w-full h-full shadow-bulge object-scale-contain object-center"
              />
            </div>
          </div>

          {/* Second container */}
          <div className="relative z-20 w-[90%]   sm:w-[100%] mx-auto text-black p-4">
          <div className="w-full sm:h-[500px]  sm:rounded-full shadow-bulge mt-10 grid sm:grid-cols-2" data-aos="flip-up">
              <img src={image3} className="shadow-bulge w-full h-full object-cover" alt="Descriptive Alt Text"/>
              <div className="p-6 sm:p-20">
                <p className="font-bold text-[5vw] sm:text-[20px] text-[#800080] mb-10">Mission Statement</p>
                <p className="font-sans text-[4vw] sm:text-[16px]">
                  Warm hands meet kind eyes, creating a world where our clients flourish. We go beyond mere assistance,
                  fostering independence through personalized care plans. Meaningful connections blossom around shared
                  activities and heartfelt conversations, enriching our clients' days with moments of joy and purpose.
                  Each triumph, big or small, is celebrated, reminding them that aging is not about limitations, but about
                  embracing life's possibilities.
                </p>
              </div>

              
            </div>

            <div className="w-full sm:h-[500px]  shadow-bulge mt-10 grid sm:grid-cols-2" data-aos="flip-up">
             
              <div className="p-6 sm:p-20">
                <p className="font-bold text-[5vw] sm:text-[20px] text-[#800080] mb-10">Vision Statement</p>
                <p className="font-sans text-[4vw] sm:text-[16px]">
                At Holistic Care Services, our incredible Care team doesn't just support; we take the burden off you and your loved ones. With open hearts and caring hands, we weave laughter, love, and unwavering support into your home, helping you live a rich and fulfilling life, just as you deserve.
                </p>
              </div>
              <img src={image4} className="shadow-bulge w-full h-full object-cover" alt="Descriptive Alt Text"/>

              
            </div>
            <div className="w-full sm:h-[500px] sm:rounded-full shadow-bulge mt-10 grid sm:grid-cols-2" data-aos="flip-up">
              <img src={image5} className="shadow-bulge w-full h-full object-cover" alt="Descriptive Alt Text"/>
              <div className="p-6 sm:p-20">
                <p className="font-bold text-[5vw] sm:text-[20px] text-[#800080] mb-10">Experience the Holistic Difference</p>
                <p className="font-sans text-[4vw] sm:text-[16px]">
                Imagine waking up in your own home, bathed in warm sunlight, knowing you have everything you need at your fingertips. A gentle hand to assist you, a kind voice to chat with, and a sense of peace knowing you're surrounded by care that understands your unique needs.
We invite you to experience the Holistic difference. Let's sit down together, chat about your hopes and dreams, and craft a personalized care plan that helps you flourish exactly where you want to be – your own home.

                </p>
              </div>

              
            </div>
            <div className="w-full sm:h-[500px] shadow-bulge mt-10 grid sm:grid-cols-2" data-aos="flip-up">
             
              <div className="p-6 sm:p-20">
                <p className="font-bold text-[5vw] sm:text-[20px] text-[#800080] mb-10">A Gentle Touch for a Golden Age</p>
                <p className="font-sans text-[4vw] sm:text-[16px]">
                At Holistic Care Services, we understand the importance of familiarity and independence, especially as we age. Imagine waking up in the familiar comfort of your own home, sunlight streaming in, a friendly voice greeting you, and a helping hand nearby. Whether it’s a gentle reminder to take your medication, a cup of tea, and a chat, or personalized attention and companionship from a live-in carer, we are here for you.
                </p>
              </div>
              <img src={image6} className="shadow-bulge w-full h-full object-cover" alt="Descriptive Alt Text"/>
              
            </div>
            <div className="w-full sm:rounded-full sm:h-[500px] shadow-bulge mt-10 grid sm:grid-cols-2" data-aos="flip-up">
              <img src={image7} className="shadow-bulge w-full h-full object-cover" alt="Descriptive Alt Text"/>
              <div className="p-6 sm:p-20">
                <p className="font-bold text-[5vw] sm:text-[20px] text-[#800080] mb-10">Championing Your Independence</p>
                <p className="font-sans text-[4vw] sm:text-[16px]">
                Many children worry about their parents aging alone. We understand. That’s why we offer a free, no-obligation consultation to discuss your needs and answer any questions you may have. We will come to your home, chat about your hopes and dreams, and create a personalized care plan that allows you to flourish right where you belong.
                </p>
              </div>

              
            </div>
            


           
            <h1 className="text-[8vw] sm:text-[40px] text-center  text-[#800080]">Why Choose Us</h1>
            <div className="grid sm:grid-cols-2 sm:pl-40 ">
              <div className="sm:w-[500px] sm:h-[200px] shadow-bulge   mb-5 rounded-xl p-5">
                <span className="font-bold text-[20px]">We are different:</span> Our award-winning team is not just about providing care; it's about creating a family atmosphere. Our care professionals are carefully chosen for their warmth, compassion, and dedication. They will become a trusted friend, someone to chat with, share stories with, and even help with those little things that make a big difference.
              </div>
              <div className="sm:w-[500px] sm:h-[200px] shadow-bulge   rounded-xl p-5">
                <span className="font-bold text-[20px]">Hands, Kind Hearts:</span> Our professional carers are selected for their compassion, respect, and dedication. We listen to your needs and create a care plan that is unique to you, adapting as your needs change. They will treat you with dignity and become trusted companions, ready to help with daily tasks or simply share a conversation.
              </div>
            </div>
          </div>
          <Footer />
        </>
      )}
    </div>
  );
}

export default About;
