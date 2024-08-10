import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import image1 from '../../assets/image1.jpeg'
import image2 from '../../assets/image2.jpeg'
import image3 from '../../assets/images3.jpeg'
import image4 from '../../assets/images4.jpeg'



function Topproducts() {
    const topprodect = [
        {
            id:1,
            src:image1,
            tittle:'Personal Care',
            Description: "Assistance with daily activities like bathing, dressing, and grooming."
           
        },
        {
            id:1,
            src:image2,
            tittle:'Medical Care',
            Description: "Skilled nursing care, medication management, and doctor visit assistance."
           
        },
        {
            id:1,
            src:image3,
            tittle:'Companionship',
            Description: "Providing emotional support and companionship to combat loneliness."


           
        },
        {
            id:1,
            src:image4,
            tittle:'Household Assistance',
            Description: "Help with housekeeping, meal preparation, and errands"
           
        }
        
    ]
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <div>
      <div className='container '>
        {/* Header section */}
        <div className='text-center mb-10 max-w-[600px] mx-auto'>
          <p data-aos='fade-up' data-aos-delay="200" className='sm:text-[60px] text-[30px] text-primary '>
            Our Services
          </p>
          <h1 data-aos='fade-up' data-aos-delay="200" className='text-3xl font-bold '>
          Comprehensive Home Care Tailored to Your Needs
          </h1>
        </div>
        {/* Body section */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2  md:gap-10 place-items-center  '>
        {topprodect.map((data, index) => (
  <div
    key={data.id}
    data-aos={index % 2 === 0 ? 'zoom-left' : 'zoom-right'}
    data-aos-delay='300'
    className='w-full max-w-xs mt-[40px] sm:max-w-sm md:max-w-md  rounded-2xl  relative shadow-xl p-6 flex flex-col items-center transition-colors translate-x-4 duration-1200 group hover:bg-[#800080] bg-white hover:text-white'
 
 >
   
    <img 
      src={data.src} 
      className='w-[500px] h-auto sm:h-[400px] sm:mb-4 object-cover rounded-xl block mx-auto transform transition-transform duration-300 group-hover:scale-105' 
      alt={`Product ${data.id}`} 
    />
    <p className='bg-gray-400 p-2 rounded-xl mb-2 hover:text-black mt-10'>{data.tittle}</p>
    <p className=' p-2 rounded-xl'>{data.Description}</p>
   
  </div>
))}

</div>

      </div>
    </div>
  );
}

export default Topproducts;
