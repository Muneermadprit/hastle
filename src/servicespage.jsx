import React, { useState } from 'react';
import mainimage1 from './assets/servicemain2.jpg';
import mainimage2 from './assets/blog2.jpeg';
import mainimage3 from './assets/blog1.jpeg';
import mainimage4 from './assets/blog2.jpeg';
import servicesmain from './assets/servicemain1.jpeg'
import servicelist1 from './assets/serviceslist3.jpeg'
import servicelist2 from './assets/servicelist1.jpeg'
import servicelist3 from './assets/servicelists2.jpeg'
import servicelist4 from './assets/servicelists3.jpeg'
import servicelist5 from './assets/servicelisst4.jpeg'
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Navbar/footer';
import Testimonial from './components/Navbar/testimonial'
import pngimage from './assets/new.png'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Servicespage() {
  const [activeService, setActiveService] = useState(0); // Set default to the first item

  const servicemainlist = [
    {
      title: 'Daily Support/Visiting Care Services',
      description: 'Holistic Care Services offers a variety of customized visiting care services tailored to provide our clients and their families with the right choices and more possibilities while ensuring they oversee their care',
      src: mainimage1,
      submenu: [
        {
          name: 'Personal Care',
          image: mainimage1,
          details: 'We assist with daily activities like bathing, dressing, and grooming to ensure our clients maintain their dignity and well-being.',
        },
        {
          name: 'Medication Support',
          image: mainimage2,
          details: 'Our caregivers help with medication reminders and administration to ensure our clients take their medications on time and safely.',
        },
        {
          name: 'Domestic Assistance/Household Tasks',
          image: mainimage3,
          details: 'We provide support with household chores such as cleaning, laundry, and meal preparation to help maintain a clean and comfortable living environment.',
        },
        {
          name: 'Nutrition and Hydration',
          image: mainimage3,
          details: 'Led by Dr. Kunbi Taiwo, our team understands the importance of good nutrition and hydration. We assist with meal planning and preparation to ensure our clients receive balanced and healthy meals.',
        },
      ],
    },
    {
      title: 'Staying Active & Engaged',
      description: 'Holistic Care Services encourages our clients to stay active and engaged to promote their overall well-being',
      src: mainimage2,
      submenu: [
        {
          name: 'Exercise Programs',
          image: 'null',
          details: 'ok',
        },
        {
          name: 'Jogging',
          image: 'null',
          details: 'ok',
        },
        {
          name: 'Kayaking',
          image: 'null',
          details: 'ok',
        },
      ],
    },
    {
      title: 'Live-in Care',
      description: 'Enjoy personalized attention and companionship in the comfort of your own home. Our Live-in Care services provide 24-hour support tailored to meet the individual needs of each client. This service promotes independence and dignity while ensuring safety and well-being through comprehensive care, including personal care, medication management, and assistance with daily activities',
      src: mainimage3,
      submenu: [
        {
          name: '24-Hour Support',
          image: 'null',
          details: 'ok',
        },
        {
          name: 'Companionship',
          image: 'null',
          details: 'ok',
        },
        {
          name: 'Home Safety',
          image: 'null',
          details: 'ok',
        },
      ],
    },
    {
      title: 'Specialised Care',
      description: 'We provide tailored care to meet the unique needs of each individual, shaped by their specific conditions or situations.',
      src: mainimage4,
      submenu: [
        {
          name: 'Dementia Care',
          image: 'null',
          details: 'ok',
        },
        {
          name: 'All Care',
          image: 'null',
          details: 'ok',
        },
        {
          name: 'Status Care',
          image: 'null',
          details: 'ok',
        },
      ],
    },
  ];

  const handleClick = (index) => {
    setActiveService(index); // Set the clicked service as active
  };

  return (
    <div className="p-4 overflow-hidden">
      <Navbar />
      <div className="mt-24">
        <h1 className="text-6xl text-[#800080]  rounded-full font-thin mb-6 mx-auto text-center ">
          Our Services
          <p className="text-lg font-thin">
            We provide practical support that enables people to live their best life for as long as possible.
          </p>
        </h1>
      </div>

      <div>
        <img src={mainimage1} className='h-[500px] xl:w-[70%] md:flex lg:flex hidden xl:flex xl:ml-60 '/>
        <img src={servicesmain} className='h-[500px] flex xl:hidden xl:w-[70%]  md:hidden xl:ml-60 '/>
      </div>
      <div ><h1 className='text-center  text-[30px] text-[#800080] mt-10'>Daily Support/Visiting Care Services</h1>
      <p className='text-center '>offers a variety of customized visiting care services tailored to provide our clients and their families with the right choices and more possibilities while ensuring they oversee their care</p></div>
      <div className='xl:w-[90%] h-auto bg-primary/10 xl:ml-20 shadow-xl'>
      <div className='w-full xl:h-[400px]  grid lg:grid-cols-3  mb-10 '>
        <div className='w-[80%] xl:h-[85%] bg-gray-100 rounded-3xl border-solid border-[0px] border-black  ml-10  mt-10'>
          <img src={servicelist1} className='xl:h-[200px] object-fill h-[200px] w-full bg-red-500 xl:w-full  rounded-t-3xl shadow-sm'/>
          <h1 className='text-[20px] text-[#800080] font-bold text-center
          '>Personal Care</h1>
          <p className='text-center font-light'>We assist with daily activities like bathing, dressing, and grooming to ensure our clients maintain their dignity and well-being</p>
        </div>
        <div className='w-[80%] xl:h-[85%]  bg-gray-100 rounded-3xl border-solid border-[0px] border-black ml-10 mt-10'>
        <img src={servicelist2} className='   xl:h-[200px] object-cover w-full  h-[200px] rounded-t-3xl shadow-sm'/>
          <h1 className='text-[20px] text-[#800080] font-bold text-center
          '>Medication Support</h1>
          <p className='text-center font-light'>Our caregivers help with medication reminders and administration to ensure our clients take their medications on time and safely</p>
        </div>
        <div className='w-[80%] xl:h-[85%]  bg-gray-100 rounded-3xl  border-solid border-[0px] border-black   ml-10 mt-10'>
        <img src={servicelist3} className='h-[200px] w-full object-fill  rounded-t-3xl shadow-sm'/>
          <h1 className='text-[20px] text-[#800080] xl-px-10 font-bold text-center
          '>Domestic Assistance/Household Tasks</h1>
          <p className='text-center font-light xl:px-2'>We provide support with household chores such as cleaning, laundry, and meal preparation to help maintain a clean and comfortable living environment</p>
        </div>
       
       
      </div>
      <div className='w-full xl:h-[300px] grid grid-cols-2 xl:grid-cols-4 xl:px'>
  <div className='xl:w-[300px] xl:h-[250px] bg-white xl:ml-5 xl:mt-5 shadow-bulge'>
    <img src={pngimage} className='w-40 h-40 mx-auto' />
    <h1 className='text-[20px] text-[#800080] font-bold text-center'>Caring</h1>
  </div>
  <div className='xl:w-[300px] xl:h-[250px] bg-white xl:ml-5 xl:mt-5 xl:shadow-bulge'>
    <img src={pngimage} className='w-40 h-40 mx-auto' />
    <h1 className='text-[20px] text-[#800080] font-bold text-center'>Supportive</h1>
  </div>
  <div className='xl:w-[300px] xl:h-[250px] bg-white xl:ml-5 xl:mt-5 xl:shadow-bulge'>
    <img src={pngimage} className='w-40 h-40 mx-auto' />
    <h1 className='text-[20px] text-[#800080] font-bold text-center'>Experienced</h1>
  </div>
  <div className='xl:w-[300px] xl:h-[250px] bg-white xl:ml-5 xl:mt-5 xl:shadow-bulge'>
    <img src={pngimage} className='w-40 h-40 mx-auto' />
    <h1 className='text-[20px] text-[#800080] font-bold text-center'>Personalized</h1>
  </div>
</div>

<div className='w-full xl:h-[300px] grid grid-cols-2 lg:grid-cols-4 xl:px-10 xl:flex hidden'>
  <div className='xl:w-[300px] xl:h-[250px] bg-white xl:ml-5 xl:mt-5 xl:shadow-bulge'>
    <img src={pngimage} className='w-40 h-40 mx-auto ' />
    <h1 className='text-[20px] text-[#800080] font-bold text-center'>Professional</h1>
  </div>
  <div className='xl:w-[300px] xl:h-[250px] bg-white xl:ml-5 xl:mt-5 xl:shadow-bulge'>
    <img src={pngimage} className='w-40 h-40 mx-auto' />
    <h1 className='text-[20px] text-[#800080] font-bold text-center'>Medication</h1>
  </div>
  <div className='xl:w-[300px] xl:h-[250px] bg-white xl:ml-5 xl:mt-5 xl:shadow-bulge'>
    <img src={pngimage} className='w-40 h-40 mx-auto' />
    <h1 className='text-[20px] text-[#800080] font-bold text-center'>Companionship</h1>
  </div>
  <div className='xl:w-[300px] xl:h-[250px] bg-white xl:ml-5 xl:mt-5 xl:shadow-bulge'>
    <img src={pngimage} className='w-40 h-40 mx-auto' />
    <h1 className='text-[20px] text-[#800080] font-bold text-center'>Mobility</h1>
  </div>
</div>

      <div className='w-full xl:h-[400px] grid lg:grid-cols-3 mt-10'>
      <div className='xl:w-[445px] xl:h-[250px] bg-white xl:ml-1 xl:mt-5  border-solid border-black rounded-xl border-[0px] '>
      <h1 className='text-[20px] text-[#800080] font-bold text-center mr-10
          '>Nutrition and Hydration
          
          
          </h1>
          <div className='grid grid-cols-2 w-full  '>
  <img src={servicelist4} className='xl:h-[150px] h-[120px] object-cover w-full  mt-5 shadow-sm *:' />
  <p className='font-thin text-balance text-[12px] xl:text-[14px] w-full mt-5 xl:px-4 pl-5 pb-2 '>
  Led by Dr. Kunbi Taiwo, our team understands the importance of good nutrition and hydration. We assist with meal planning and preparation to ensure our clients receive balanced and healthy meals
  </p>
</div>



      </div>
      <div className='xl:w-[440px] xl:h-[250px] bg-white xl:ml-2 mt-5   border-solid border-black rounded-xl border-[0px] '>
      <h1 className='text-[20px] text-[#800080] font-bold text-center
          '>Overnight Care
          
          
          </h1>
          <div className='grid grid-cols-2 w-full  '>
  <img src={ servicelist5} className='xl:h-[150px] h-[120px] object-center w-full mt-5 shadow-sm *:' />
  <p className='font-thin text-balance text-[12px] xl:text-[14px] w-full mt-5 xl:px-4 pl-6'>
  Our team provides support during the night, offering reassurance and assistance to ensure a safe and restful night’s sleep for our clients
   </p>
</div>
      </div>

      <div className='xl:w-[440px] xl:h-[250px] bg-white xl:ml-2 mt-5   border-solid border-black rounded-xl border-[0px] '>
      <h1 className='text-[20px] text-[#800080] font-bold text-center mb-4
          '>Respite Care
          
          
          </h1>
          <div className='grid grid-cols-2 w-full  '>
  <img src={mainimage1} className='xl:h-[150px] h-[120px] object-center w-full  shadow-sm *:' />
  <p className='font-thin text-balance text-[12px] xl:text-[14px] w-full mt-1 xl:px-4 pl-6'>
  We offer temporary relief for primary caregivers, allowing them to rest and recharge while we take care of their loved ones.
  </p>
</div>
      </div>

    
    
    

      </div>
      </div>
     <Testimonial/> 
     <div className='sm:relative    absolute   overflow-hidden w-[94%] max-w-[800px] mx-auto lg:absolute lg:ml-[340px] mt-10 bg-white shadow-bulge text-center font-thin-bold text-[#800080] p-4'>
  <p className='mt-4 text-lg sm:text-[21px]'>Stay Up to Date with Holistic Care Services</p>
  <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
    <input
      data-aos='fade-up'
      type='text'
      placeholder='Enter your E-mail'
      className='w-full sm:w-[500px] text-[15px] text-blue h-[40px] p-3 rounded-full border border-black focus:outline-none focus:ring-2 focus:ring-primary placeholder-black'
    />
    <button data-aos='fade-up' className='mt-4 sm:mt-0 text-[18px] p-2 w-full sm:w-[200px] hover:bg-gray-400 rounded-xl bg-[#800080] text-white'>
      Subscribe
    </button>
  </div>
  <p className='text-xs sm:text-base text-black mt-4'>
    Compassionate care is just a call away - let us support you or your loved one today
    <a href="#" className="text-base underline ml-2">Contact us</a>
  </p>
</div>

<div className='w-full  sm:h-[300px] h-[400px]  bg-primary mt-10'></div>

      <Footer />
    </div>
  );
}

export default Servicespage;
