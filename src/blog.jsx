import React from 'react';
import Navbar from './components/Navbar/Navbar';

function Blog() {
  const posts = [
    {
      title: "Caring for the Elderly: A Comprehensive Guide",
      excerpt: "Learn the best practices for taking care of elderly loved ones, ensuring their comfort and well-being.",
      date: "August 18, 2024",
      author: "John Doe",
      image: "https://example.com/image1.jpg",
    },
    {
      title: "The Importance of Mental Health in Elderly Care",
      excerpt: "Understanding and addressing mental health issues in older adults is crucial for their overall well-being.",
      date: "July 25, 2024",
      author: "Jane Smith",
      image: "https://example.com/image2.jpg",
    },
    {
      title: "Creating a Safe Home Environment for Seniors",
      excerpt: "Tips and tricks to make your home a safe haven for elderly family members.",
      date: "June 15, 2024",
      author: "Emily Johnson",
      image: "https://example.com/image3.jpg",
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
      <div class="bg-gradient-to-r from-primary  to-primary py-20 px-6 relative font-[sans-serif]">
      <div class="max-w-2xl mx-auto text-center">
        <h2 class="text-white text-4xl font-extrabold">Subscribe to Our Newsletter</h2>
        <div class="my-6">
          <p class="text-base text-gray-200">Subscribe to our newsletter and stay up to date with the latest news, updates, and exclusive offers. Get valuable insights. Join our community today!</p>
        </div>

        <div class="max-w-2xl left-0 right-0 mx-auto w-full bg-white p-5 flex items-center shadow-lg absolute -bottom-10">
          <input type="email" placeholder="Enter your email" class="w-full bg-gray-50 py-3.5 px-4 text-gray-800 text-base focus:outline-none" />
          <button class="bg-[#a91079] hover:bg-[#a91079e2] text-white text-base font-semibold tracking-wide py-3.5 px-6 focus:outline-none">
            Subscribe
          </button>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Blog;
