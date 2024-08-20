import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Navbar/footer';
import blog1 from './assets/blog1.jpeg';
import blog2 from './assets/blog2.jpeg';
import blog3 from './assets/blog3.jpeg';

function Blog() {
  const posts = [
    {
      title: "Caring for the Elderly: A Comprehensive Guide",
      excerpt: "Learn the best practices for taking care of elderly loved ones, ensuring their comfort and well-being.",
      date: "August 18, 2024",
      author: "John Doe",
      image: blog1,
    },
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
      <header className="relative bg-gradient-to-r from-purple-600 to-blue-500 text-white py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-red-500 to-[#800080] opacity-75"></div>
        <div className="relative container mx-auto px-6 md:px-12 text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 drop-shadow-lg">Explore Our Blog</h1>
          <p className="text-lg md:text-2xl mb-10">Insights, tips, and stories about elderly care, health, and well-being.</p>
          <a href="#blog-section" className="inline-block bg-yellow-500 hover:bg-yellow-600 text-gray-900 py-4 px-8 rounded-full text-lg font-semibold transition duration-300 transform hover:scale-105">
            Read Our Blogs
          </a>
        </div>
      </header>

      {/* Latest Blogs Heading */}
      <div className="text-center my-12">
        <h2 className="text-3xl font-extrabold text-[#333] relative inline-block">
          LATEST BLOGS
          <span className="block w-4/6 h-1 bg-pink-400 rounded-full absolute bottom-0 left-1/2 transform -translate-x-1/2"></span>
        </h2>
      </div>

      {/* Blog Posts Section */}
      <section id="blog-section" className="container mx-auto px-6 md:px-12 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <article key={index} className="relative group bg-white rounded-lg shadow-lg overflow-hidden transition duration-300 transform hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50 group-hover:opacity-70 transition duration-300"></div>
              <img src={post.image} alt={post.title} className="w-full h-64 object-cover transition duration-300 transform group-hover:scale-110" />
              <div className="absolute bottom-0 p-6">
                <h2 className="text-2xl font-bold text-white mb-2 transition duration-300 group-hover:text-yellow-400">{post.title}</h2>
                <p className="text-gray-300 text-sm">{post.excerpt}</p>
                <div className="mt-4 flex items-center justify-between text-sm text-gray-300">
                  <p>By {post.author}</p>
                  <p>{post.date}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
      
      {/* Subscription Section */}
      <div className="bg-gradient-to-r from-primary to-primary py-20 px-6 relative font-[sans-serif]">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-white text-4xl font-extrabold">Subscribe to Our Newsletter</h2>
          <div className="my-6">
            <p className="text-base text-gray-200">Subscribe to our newsletter and stay up to date with the latest news, updates, and exclusive offers. Get valuable insights. Join our community today!</p>
          </div>

          <div className="max-w-2xl mx-auto w-full bg-white p-5 flex items-center shadow-lg">
            <input type="email" placeholder="Enter your email" className="w-full bg-gray-50 py-3.5 px-4 text-gray-800 text-base focus:outline-none" />
            <button className="bg-[#a91079] hover:bg-[#a91079e2] text-white text-base font-semibold tracking-wide py-3.5 px-6 focus:outline-none">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Sub Blogs Section */}
      <div className="bg-white font-[sans-serif] my-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            {/* Add any additional content here if needed */}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 max-md:max-w-lg mx-auto">
            <div className="bg-white cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative top-0 hover:-top-2 transition-all duration-300">
              <img src="https://readymadeui.com/Imagination.webp" alt="Blog Post 1" className="w-full h-60 object-cover" />
              <div className="p-6">
                <span className="text-sm block text-gray-400 mb-2">10 FEB 2023 | BY JOHN DOE</span>
                <h3 className="text-xl font-bold text-[#333]">A Guide to Igniting Your Imagination</h3>
                <hr className="my-6" />
                <p className="text-gray-400 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan, nunc et tempus blandit, metus mi consectetur felis turpis vitae ligula.</p>
              </div>
            </div>
            <div className="bg-white cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative top-0 hover:-top-2 transition-all duration-300">
              <img src="https://readymadeui.com/hacks-watch.webp" alt="Blog Post 2" className="w-full h-60 object-cover" />
              <div className="p-6">
                <span className="text-sm block text-gray-400 mb-2">7 JUN 2023 | BY MARK ADAIR</span>
                <h3 className="text-xl font-bold text-[#333]">Hacks to Supercharge Your Day</h3>
                <hr className="my-6" />
                <p className="text-gray-400 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan, nunc et tempus blandit, metus mi consectetur felis turpis vitae ligula.</p>
              </div>
            </div>
            <div className="bg-white cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative top-0 hover:-top-2 transition-all duration-300">
              <img src="https://readymadeui.com/prediction.webp" alt="Blog Post 3" className="w-full h-60 object-cover" />
              <div className="p-6">
                <span className="text-sm block text-gray-400 mb-2">5 OCT 2023 | BY SIMON KONECKI</span>
                <h3 className="text-xl font-bold text-[#333]">Trends and Predictions</h3>
                <hr className="my-6" />
                <p className="text-gray-400 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan, nunc et tempus blandit, metus mi consectetur felis turpis vitae ligula.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* faq section */}
      <div class="font-[sans-serif] divide-y rounded-lg max-w-7xl mx-auto px-4">
      <div class="mb-8">
        <h2 class="text-2xl font-bold text-gray-800">Frequently asked questions</h2>
      </div>
      <div role="accordion">
        <button type="button"
          class="w-full text-base text-left font-semibold py-6 text-gray-800 flex items-center">
          <span class="mr-4">Are there any special discounts or promotions available during the event.</span>
          <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 fill-current ml-auto shrink-0" viewBox="0 0 124 124">
            <path d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z" data-original="#000000" />
          </svg>
        </button>
        <div class="py-4">
          <p class="text-sm text-gray-800">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctor arcu,
            at fermentum dui. Maecenas
            vestibulum a turpis in lacinia. Proin aliquam turpis at erat venenatis malesuada. Sed semper, justo vitae
            consequat fermentum, felis diam posuere ante, sed fermentum quam justo in dui. Nulla facilisi. Nulla aliquam
            auctor purus, vitae dictum dolor sollicitudin vitae. Sed bibendum purus in efficitur consequat. Fusce et
            tincidunt arcu. Curabitur ac lacus lectus. Morbi congue facilisis sapien, a semper orci facilisis in.
          </p>
        </div>
      </div>
      <div role="accordion">
        <button type="button"
          class="w-full text-base text-left font-semibold py-6 text-gray-800 flex items-center">
          <span class="mr-4">What are the dates and locations for the product launch events?</span>
          <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 fill-current ml-auto shrink-0" viewBox="0 0 42 42">
            <path d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z" data-original="#000000" />
          </svg>
        </button>
        <div class="hidden py-4">
          <p class="text-sm text-gray-800">Content</p>
        </div>
      </div>
      <div role="accordion">
        <button type="button"
          class="w-full text-base text-left font-semibold py-6 text-gray-800 flex items-center">
          <span class="mr-4">Can I bring a guest with me to the product launch event?</span>
          <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 fill-current ml-auto shrink-0" viewBox="0 0 42 42">
            <path d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z" data-original="#000000" />
          </svg>
        </button>
        <div class="hidden py-4">
          <p class="text-sm text-gray-800">Content</p>
        </div>
      </div>
      <div role="accordion">
        <button type="button"
          class="w-full text-base text-left font-semibold py-6 text-gray-800 flex items-center">
          <span class="mr-4">How can I register for the event?</span>
          <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 fill-current ml-auto shrink-0" viewBox="0 0 42 42">
            <path d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z" data-original="#000000" />
          </svg>
        </button>
        <div class="hidden py-4">
          <p class="text-sm text-gray-800">Content</p>
        </div>
      </div>
      <div role="accordion">
        <button type="button"
          class="w-full text-base text-left font-semibold py-6 text-gray-800 flex items-center">
          <span class="mr-4">Is there parking available at the venue?</span>
          <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 fill-current ml-auto shrink-0" viewBox="0 0 42 42">
            <path d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z" data-original="#000000" />
          </svg>
        </button>
        <div class="hidden py-4">
          <p class="text-sm text-gray-800">Content</p>
        </div>
      </div>
      <div role="accordion">
        <button type="button"
          class="w-full text-base text-left font-semibold py-6 text-gray-800 flex items-center">
          <span class="mr-4">How can I contact the event organizers?</span>
          <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 fill-current ml-auto shrink-0" viewBox="0 0 42 42">
            <path d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z" data-original="#000000" />
          </svg>
        </button>
        <div class="hidden py-4">
          <p class="text-sm text-gray-800">Content</p>
        </div>
      </div>
    </div>


      <Footer />
    </div>
  );
}

export default Blog;

