import React from 'react';
import Navbar from './components/Navbar/Navbar';
import { Link } from 'react-router-dom';
import Footer from './components/Navbar/footer';
import blog1 from './assets/blog1.jpeg';
import blog2 from './assets/blog2.jpeg';
import blog3 from './assets/blog3.jpeg';
import blogcontentpage1 from './assets/blogcontentpage1.jpg'
import Emailsubscription from './components/Navbar/emailsubscription';

function Blogcontent1() {


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
      <header className="relative bg-white text-black py-32">
        <div className="absolute inset-0 -75"></div>
        <div className="relative container md:px-12 text-center">
          <h1 className="text-5xl md:text-5xl text-[30px] font-extrabold mb-6 ">Caring for the Elderly: A Comprehensive Guide</h1>
          <p className="text-lg md:text-1xl mb-10 text-black">Caring for the elderly requires compassion, knowledge, and a bit of planning. Our comprehensive guide covers essential tips and strategies to help you provide the best care for your aging loved ones.</p>
         
           {/* sub head */}
          <h1 className="text-2xl md:text-3xl font-extrabold mb-6 text-left text-black">Understanding Elderly Care</h1>
          <p className="text-lg md:text-1xl  text-left text-black">Elderly care is a broad term that encompasses various aspects of supporting older adults, from daily activities to medical needs. As people age, they often require more assistance with basic tasks such as bathing, dressing, and eating. Additionally, managing chronic conditions like diabetes or arthritis becomes a part of daily life. Understanding these needs is the first step in providing effective care.</p>
         <div className='grid xl:grid-cols-2'>
         <img src={blogcontentpage1}className='mt-10' />
         <div className='xl:mt-[100px] xl:ml-[100px]'>
         <h1 className="text-2xl md:text-3xl font-extrabold mb-6  text-left text-black">Involving Professional Help When Needed</h1>
         <p className="text-lg md:text-1xl text-left  text-black">Sometimes, despite our best efforts, providing care at home may not be enough to meet all the needs of an elderly loved one. In such cases, seeking professional help can be a wise decision. Whether it's hiring an in-home caregiver, exploring adult day care options, or considering assisted living facilities, professional caregivers can provide specialized care that addresses both medical and personal needs. It's important to research and choose services that align with your loved one's preferences and requirements, ensuring they receive the highest standard of care while maintaining their dignity and independence.</p> 
         </div>
         
         </div>


         <h1 className="text-3xl md:text-2xl font-extrabold mb-6  xl:mt-10  text-left text-black">Essential Tips for Elderly Care</h1>
      
<div class="flex items-left">
    <div>
      <h2 class="text-xl font-bold text-gray-800 text-left" >1.	Health Management</h2>
      <ul class="mt-2 text-gray-700 text-left ">
        <li> Regular medical check-ups are crucial. Keep a detailed record of medications, appointments, and any changes in health.</li>
       
      </ul>
    </div>
    

</div>
  

<div class="flex items-left">
    <div>
      <h2 class="text-xl font-bold text-gray-800 text-left mt-10" >2.	Safety First</h2>
      <ul class="mt-2 text-gray-700 ">
        <li> Ensure the home is safe by installing grab bars, removing trip hazards, and using non-slip mats. Simple modifications can prevent falls, which are a common risk for the elderly.</li>
       
      </ul>
    </div>
    

</div>
  
<div class="flex items-left">
    <div>
      <h2 class="text-xl font-bold text-gray-800 text-left mt-10" >3.	Emotional Support</h2>
      <ul class="mt-2 text-gray-700 ">
        <li> Loneliness and isolation are significant issues. Engage in regular conversations, involve them in family activities.</li>
       
      </ul>
    </div>
    

</div>

<div class="flex items-left">
    <div>
      <h2 class="text-xl font-bold text-gray-800 text-left mt-10" >4.	Nutrition and Hydration</h2>
      <ul class="mt-2 text-gray-700 ">
        <li>: Balanced meals and adequate water intake are vital. Elderly individuals may need dietary adjustments, so consult a nutritionist if necessary</li>
       
      </ul>
    </div>
    

</div>
<div class="flex items-left">
    <div>
      <h2 class="text-xl font-bold text-gray-800 text-left mt-10" >5.	Physical Activity</h2>
      <ul class="mt-2 text-gray-700 ">
        <li>Encourage gentle exercises like walking or stretching. Physical activity helps maintain mobility and improves mood.</li>
       
      </ul>
    </div>
    

</div>


<div class="flex items-left">
    <div>
      <h2 class="text-xl font-bold text-gray-800 text-left mt-10 " >6.	Legal and Financial Planning</h2>
      <ul class="mt-2 text-gray-700 ">
        <li>Assist with organizing legal documents and financial plans. This includes power of attorney, wills, and ensuring that all necessary paperwork is up to date.</li>
       
      </ul>
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
        <section id="blog-section" className="container mx-auto px-6 md:px-12 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <article key={index} className="relative group bg-white rounded-lg shadow-lg overflow-hidden transition duration-300 transform hover:scale-105">
             <Link to={`/hastle/blogcontent${index+2}`}>
             <div className="absolute inset-0  group-hover:opacity-70 transition duration-300"></div>
              <img src={post.image} alt={post.title} className="w-full h-64 object-cover transition duration-300 transform group-hover:scale-110" />
              <div className="absolute bottom-0 p-6">
                <h2 className="text-2xl font-bold text-black mb-2 transition duration-300 group-hover:text-yellow-400">{post.title}</h2>
                <p className="text-black text-sm">{post.excerpt}</p>
                <div className="mt-4 flex items-center justify-between text-sm text-gray-300">
                  <p>By {post.author}</p>
                  <p>{post.date}</p>
                </div>
              </div></Link> 
            </article>
          ))}
          <div className="bg-white cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative top-0 hover:-top-2 transition-all duration-300">
              <img src="https://readymadeui.com/Imagination.webp" alt="Blog Post 1" className="w-full h-60 object-cover" />
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

export default Blogcontent1;

