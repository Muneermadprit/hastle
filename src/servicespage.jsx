import React, { useState } from 'react';
import mainimage1 from './assets/blog3.jpeg';
import mainimage2 from './assets/blog2.jpeg';
import mainimage3 from './assets/blog1.jpeg';
import mainimage4 from './assets/blog2.jpeg';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Navbar/footer';
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
    <div className="p-4">
      <Navbar />
      <div className="mt-24">
        <h1 className="text-3xl text-white pb-4 rounded-full font-bold mb-6 mx-auto text-center bg-[#800080]">
          Care Services
          <p className="text-lg font-thin">
            We provide practical support that enables people to live their best life for as long as possible.
          </p>
        </h1>
      </div>
      <div className="w-full grid grid-cols-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {/* Main services */}
        {servicemainlist.map((data, index) => (
          <div
            key={index}
            className={`w-full h-auto rounded-3xl shadow-md cursor-pointer ${
              activeService === index ? 'bg-[#800080] text-white' : 'bg-gray-50'
            }`}
            onClick={() => handleClick(index)}
          >
            <img
              src={data.src}
              className="h-[150px] w-full rounded-t-3xl object-cover"
              alt={data.title}
            />
            <p
              className={`p-4 text-[#800080] font-semibold ${
                activeService === index ? 'bg-[#800080] text-white' : 'bg-gray-50'
              }`}
            >
              {data.title}
            </p>
          </div>
        ))}
      </div>

      {activeService !== null && (
        <div className="w-full mt-10 p-6" data-aos="fade-left">
          {/* Submenu container */}
          <h2 className="text-2xl font-bold text-[#800080] mb-4">
            {servicemainlist[activeService].title}
          </h2>
          <div className="text-[#800080] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {servicemainlist[activeService].submenu.map((data, index) => (
              <div
                key={index}
                className="w-full rounded-3xl pb-10 border-solid border-[#800080] border-2 flex flex-col items-center"
              >
                <img
                  src={data.image || 'default-image.jpg'}
                  className="h-[180px] w-full rounded-t-3xl object-cover"
                  alt={data.name}
                />
                <div className="flex flex-col items-center justify-between h-full text-center px-2">
                  <div>
                    <p className="font-bold">{data.name}</p>
                    <p className="text-sm mb-4 font-bold">{data.namelength}</p>
                  </div>
                  <p className="text-center list-decimal font-light px-2">
                    {data.details}
                  </p>
                  <div className="mt-2">
                    <button className="bg-[#800080] text-white px-6 py-2 mt-auto">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}

export default Servicespage;
