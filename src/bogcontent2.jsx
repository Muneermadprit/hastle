import React from 'react';
import Navbar from './components/Navbar/Navbar';
import { Link } from 'react-router-dom';
import Footer from './components/Navbar/footer';
import blog1 from './assets/blog1.jpeg';
import blog2 from './assets/blog2.jpeg';
import blog3 from './assets/blog3.jpeg';
import blogcontentpage1 from './assets/blogcontentpage1.jpg';
import GalleryGrid from './blogsections';
import Emailsubscription from './components/Navbar/emailsubscription';

function Blogcontent2() {
  const posts = [
   
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
      <div className='pt-[100px]'>
        <h1 className="xl:text-5xl md:text-5xl font-extrabold mb-6 text-center text-[25px] px-2">Holistic Elderly Care: Nurturing Health, Happiness, and Connection</h1>
        <p className="text-lg md:text-xl mb-10 text-black text-center xl:mx-40 px-2">
  Caring for the elderly requires compassion, knowledge, and thoughtful planning. Our comprehensive guide provides essential tips and strategies to help you deliver the best care for your aging loved ones. Explore our insights and make a positive difference today!
</p>

        <GalleryGrid />
      </div>

      {/* Paragraph */}
      <p className='xl:w-[1200px] mx-auto mb-10 lg:text-lg mt-10 px-4'>
        Elderly care, often referred to as senior care, encompasses a wide range of services designed to meet the unique needs of older adults as they age. This care can range from basic assistance with daily activities, such as bathing, dressing, and meal preparation, to more comprehensive medical care for those with chronic illnesses or cognitive impairments like dementia and Alzheimer's disease. The goal of elderly care is not only to ensure the physical well-being of seniors but also to support their emotional and mental health, providing a sense of dignity and quality of life. It can be provided in various settings, including the senior's home, assisted living facilities, nursing homes, and specialized memory care units. In-home care is often preferred by seniors who wish to maintain independence while still receiving the necessary support. However, as the aging population grows and life expectancy increases, there are ongoing challenges in providing adequate resources, ensuring the availability of trained caregivers, and managing the financial aspects of care. Family members often play a crucial role in providing informal care, which can be both rewarding and demanding, requiring a balance between personal and professional responsibilities. As societies worldwide grapple with the complexities of an aging population, there is an increasing focus on developing sustainable, compassionate, and personalized care solutions that cater to the diverse needs of the elderly.
      </p>

      {/* Latest Blogs Heading */}
      <div className="text-center my-12">
        <h2 className="text-3xl font-extrabold text-[#333] relative inline-block">
          READ MORE
        </h2>
        <span className="block w-[200px] mx-auto h-1 mt-4 bg-pink-400 rounded-full"></span>
      </div>

      {/* Blog Posts Section */}
      <section id="blog-section" className="container mx-auto px-6 md:px-12 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <article
              key={index}
              className="relative group bg-white rounded-lg shadow-lg overflow-hidden transition duration-300 transform hover:scale-105"
            >
              <Link to={`/hastle/blogcontent${index + 3}`}>
                <div className="absolute inset-0 group-hover:opacity-70 transition duration-300"></div>
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-64 object-cover transition duration-300 transform group-hover:scale-110"
                />
                <div className="absolute bottom-0 p-6">
                  <h2 className="text-2xl font-bold text-black mb-2 transition duration-300 group-hover:text-yellow-400">
                    {post.title}
                  </h2>
                  <p className="text-black text-sm">{post.excerpt}</p>
                  <div className="mt-4 flex items-center justify-between text-sm text-gray-300">
                    <p>By {post.author}</p>
                    <p>{post.date}</p>
                  </div>
                </div>
              </Link>
            </article>
          ))}
          <div className="bg-white cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative top-0 hover:-top-2 transition-all duration-300">
            <img
              src="https://readymadeui.com/Imagination.webp"
              alt="A Guide to Igniting Your Imagination"
              className="w-full h-60 object-cover"
            />
            <div className="p-6">
              <span className="text-sm block text-gray-400 mb-2">
                10 FEB 2023 | BY JOHN DOE
              </span>
              <h3 className="text-xl font-bold text-[#333]">
                A Guide to Igniting Your Imagination
              </h3>
              <hr className="my-6" />
              <p className="text-gray-400 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan, nunc et tempus blandit, metus mi consectetur felis turpis vitae ligula.
              </p>
            </div>
          </div>
           
           {/* The fith item of Read more Item */}

          <div className="bg-white cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative top-0 hover:-top-2 transition-all duration-300">
              <img src="https://readymadeui.com/hacks-watch.webp" alt="Blog Post 2" className="w-full h-60 object-cover" />
              <div className="p-6">
                <span className="text-sm block text-gray-400 mb-2">7 JUN 2023 | BY MARK ADAIR</span>
                <h3 className="text-xl font-bold text-[#333]">Hacks to Supercharge Your Day</h3>
                <hr className="my-6" />
                <p className="text-gray-400 text-sm ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan, nunc et tempus blandit, metus mi consectetur felis turpis vitae ligula.</p>
              </div>
            </div>
        </div>

        {/* the fifth Readmore Item */}

        


      </section>

      {/* Subscription Section */}
     <Emailsubscription/>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}

export default Blogcontent2;
