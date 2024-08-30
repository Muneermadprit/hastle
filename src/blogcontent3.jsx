import React from 'react';
import Navbar from './components/Navbar/Navbar';
import { Link } from 'react-router-dom';
import Footer from './components/Navbar/footer';
import blog1 from './assets/blog1.jpeg';
import blog2 from './assets/blog2.jpeg';
import blog3 from './assets/blog3.jpeg';
import blog3pageimage1 from './assets/blog3pageimage1.jpg'
import blogcontentpage1 from './assets/blogcontentpage1.jpg'
import blog3pageimagemain from './assets/oldmanwithadog.jpg'
import readmoresectionimage1 from './assets/readmoresectionimage1.jpg'
import readmoresectionimage2 from './assets/readmoresectionimage2.jpg'
import readmoresectionimage3 from './assets/readmoresectionimage3.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';

import Emailsubscription from './components/Navbar/emailsubscription';

function Blogcontent3() {


    const services = [
        {
          title: "Web Development",
          description: "Building responsive and dynamic websites.",
          imageUrl: "web-development.jpg",
        },
        {
          title: "Graphic Design",
          description: "Crafting visually stunning designs.",
          imageUrl: "graphic-design.jpg",
        },
        {
          title: "SEO Optimization",
          description: "Improving search engine rankings.",
          imageUrl: "seo-optimization.jpg",
        },
        {
          title: "Digital Marketing",
          description: "Enhancing online presence through strategic marketing.",
          imageUrl: "digital-marketing.jpg",
        },
      ];
      



  const posts = [
  
    {
      title: "The Importance of Mental Health in Elderly Care",
      excerpt: "Understanding and addressing mental health issues in older adults is crucial for their overall well-being.",
      date: "July 25, 2024",
      author: "Jane Smith",
      image: blog2,
    },
    {
      title: "Creating a Safe Home Environment for Seniors",
      excerpt: "Tips and tricks to make your home a safe haven for elderly family members.",
      date: "June 15, 2024",
      author: "Emily Johnson",
      image: blog3,
    },
  ];

  return (
    <div>
      <Navbar />
      
      {/* Hero Section */}
      <header className="relative bg-white text-[#800080]  pt-40  ">
        <div className="absolute inset-0 -75"></div>
        <div className="relative container md:px-12 text-center">
        
           {/* sub head */}
         
           <div className='relative grid xl:grid-cols-1'>
  <p className='  text-black xl:text-[50px] text-[30px] font-bold'>Pets as Companions: The Therapeutic Benefits for
  Seniors</p>
  <p className="text-lg md:text-1xl text-left text-black  xl:px-10 px-4">Have you ever seen a senior smiling ear-to-ear while petting their furry friend? It’s a heartwarming sight that speaks volumes about the therapeutic benefits of pets for older adults. In this blog post, we’ll dive into the incredible ways that pets can enhance the quality of life for seniors. From offering companionship to reducing feelings of loneliness and anxiety, pets provide a sense of purpose and routine that can be immensely beneficial for mental health. Studies have shown that interacting with pets can lower blood pressure and increase levels of serotonin and dopamine, which promote relaxation and happiness. Moreover, the daily care of a pet encourages physical activity, whether it's a leisurely walk with a dog or playing with a cat at home. Let's explore how the bond between seniors and their pets can foster joy, comfort, and a more fulfilling life.</p> 
  <img src={blog3pageimagemain} className='mt-10 '  />
  <div className='xl:mt-[100px] ml-[100px]'>
    
    
  </div>
</div>

<div className=' relative xl:mt-[10px] xl:ml-[100px]'>
    <h1 className="text-2xl md:text-3xl font-extrabold mb-6 text-left text-black">Involving Professional Help When Needed</h1>
    <p className="text-lg md:text-1xl text-left text-black ">Sometimes, despite our best efforts, providing care at home may not be enough to meet all the needs of an elderly loved one. In such cases, seeking professional help can be a wise decision. Whether it's hiring an in-home caregiver, exploring adult day care options, or considering assisted living facilities, professional caregivers can provide specialized care that addresses both medical and personal needs. It's important to research and choose services that align with your loved one's preferences and requirements, ensuring they receive the highest standard of care while maintaining their dignity and independence.</p> 
  </div>

     

     {/* content sections */}


     <div className='grid xl:grid-cols-2 mt-20'>
      <img src={blog3pageimage1}/>

      <div className='xl:mt-[50px] xl:ml-[100px]'>
    <h1 className="text-2xl md:text-3xl font-extrabold mb-6 text-left text-black">Physical Health Benefits</h1>
    <p className="text-lg md:text-1xl text-left text-black ">Beyond emotional support, pets can also have a positive impact on seniors&#39; physical
   health. Studies have shown that pet owners are more likely to exercise
   regularly, maintain a healthy weight, and have lower blood pressure. Caring for a pet
   can also provide a sense of responsibility and routine, which can be beneficial for both
   mental and physical health.</p> 
  </div>

     </div>
     

     <div className='grid xl:grid-cols-2 mt-10'>

      {/* thefirstline */}

      <div className='border-solid xl:border-[5px] xl:border-black h-[1200px] xl:border-l-0 xl:border-t-0 xl:border-b-0' > 
        
        {/* the first item */}

        <div className='' data-aos='fade-right'>

        <h1 className="text-2xl md:text-3xl font-extrabold mb-6 text-left text-black">Cognitive Stimulation</h1>
    <p className="text-lg md:text-1xl text-left text-black ">Pets can help to keep seniors&#39; minds sharp by providing cognitive stimulation. Playing
with a pet, training a dog, or caring for a cat can help to improve
memory, concentration, and problem-solving skills. Additionally, interacting with a pet
can provide a sense of accomplishment and boost self-esteem.</p> 
        </div>
        

        {/* the second item */}

        <div className='xl:mt-[400px]' data-aos='fade-right'>

        <h1 className="text-2xl md:text-3xl font-extrabold mb-6 text-left text-black">Cognitive Stimulation</h1>
    <p className="text-lg md:text-1xl text-left text-black ">Pets can help to keep seniors&#39; minds sharp by providing cognitive stimulation. Playing
 with a pet, training a dog, or caring for a cat can help to improve
 memory, concentration, and problem-solving skills. Additionally, interacting with a pet
 can provide a sense of accomplishment and boost self-esteem.</p> 
        </div>
        
        
         </div>

             {/* The second line */}
             

         <div className=' h-[1200px] '  > 
        
         <div className='ml-10 xl:mt-[300px]' data-aos='fade-left'>
        <h1 className="text-2xl md:text-3xl font-extrabold mb-6 text-left text-black">Social Interaction</h1>
    <p className="text-lg md:text-1xl text-left text-black ">
    Pets can also be a great way for seniors to meet new people and socialize. Walking a
 dog in the park or attending a pet-friendly event can provide opportunities to connect
 with other pet owners and build friendships. These social interactions can help to
 reduce feelings of isolation and improve overall quality of life.</p> 
        </div>



        {/* the second item */}

        <div className='ml-10 xl:mt-[300px]' data-aos='fade-left'>
        <h1 className="text-2xl md:text-3xl font-extrabold mb-6 text-left text-black">Stress Reduction</h1>
    <p className="text-lg md:text-1xl text-left text-black ">
    Pets have been shown to have a calming effect on humans, which can be especially
beneficial for seniors who may experience stress or anxiety. Simply petting a dog or cat
can help to reduce stress levels, lower blood pressure, and improve mood.</p> 
        </div>
        
        </div>
         


     </div>











      
          
        </div>
      </header>

      {/* Latest Blogs Heading */}
      <div className="text-center my-12">
  <h2 className="text-3xl font-extrabold text-[#333] relative inline-block">
    READ MORE
    
  </h2>
  <span className="block  w-[200px] ml-[660px] h-1 mt-4 bg-pink-400  rounded-full  bottom-0 "></span>
</div>



        {/* Blog Posts Section */}
        <Link></Link>
        <section id="blog-section" className="container mx-auto px-6 md:px-12 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
         <Link to={'/hastle/blogcontent4'}>

           
          <div className="bg-white cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative top-0 hover:-top-2 transition-all duration-300">
              <img src={readmoresectionimage1 } alt="Blog Post 1" className="w-full h-60 object-cover" />
              <div className="p-6">
                <span className="text-sm block text-gray-400 mb-2">10 FEB 2023 | BY JOHN DOE</span>
                <h3 className="text-xl font-bold text-[#333]">A Guide to Igniting Your Imagination</h3>
                <hr className="my-6" />
                <p className="text-gray-400 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan, nunc et tempus blandit, metus mi consectetur felis turpis vitae ligula.</p>
              </div>

              

              
            </div>

         </Link>


            <div className="bg-white cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative top-0 hover:-top-2 transition-all duration-300">
              <img src={readmoresectionimage2 } alt="Blog Post 1" className="w-full h-60 object-cover" />
              <div className="p-6">
                <span className="text-sm block text-gray-400 mb-2">10 FEB 2023 | BY JOHN DOE</span>
                <h3 className="text-xl font-bold text-[#333]">A Guide to Igniting Your Imagination</h3>
                <hr className="my-6" />
                <p className="text-gray-400 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan, nunc et tempus blandit, metus mi consectetur felis turpis vitae ligula.</p>
              </div>

              

              
            </div>


            <div className="bg-white cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative top-0 hover:-top-2 transition-all duration-300">
              <img src={readmoresectionimage3 } alt="Blog Post 1" className="w-full h-60 object-cover" />
              <div className="p-6">
                <span className="text-sm block text-gray-400 mb-2">10 FEB 2023 | BY JOHN DOE</span>
                <h3 className="text-xl font-bold text-[#333]">A Guide to Igniting Your Imagination</h3>
                <hr className="my-6" />
                <p className="text-gray-400 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan, nunc et tempus blandit, metus mi consectetur felis turpis vitae ligula.</p>
              </div>

              

              
            </div>
        </div>
      </section>
{/* Subscription Section */}
<Emailsubscription/>
    

      <Footer />
    </div>
  );
}

export default Blogcontent3;

