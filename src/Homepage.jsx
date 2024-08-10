import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Navbar/hero';
import Prodect from './components/Navbar/about';
import Topproducts from './components/Navbar/topproducts';
import Banner from './components/Navbar/bannner';
import Subscription from './components/Navbar/subscription';
import Testimonial from './components/Navbar/testimonial';
import Footer from './components/Navbar/footer';
import AnimatedContainer from './components/Navbar/hovertest';
import ScrollableContainer from './components/Navbar/hovertestmobile';
import AnimatedContainermob from './components/Navbar/hovertestmobile';
import Blog from './components/Navbar/blog';
import ContactSection from './components/Navbar/contact';

function Homepage() {
  return (
    <>
      <Navbar />
      <Hero />
      <AnimatedContainer />
      <AnimatedContainermob />
      <Prodect />
      <Topproducts />
      <Banner />
      <Blog />
      <Subscription />
      <Testimonial />
      <ContactSection />
      <Footer />
    </>
  );
}

export default Homepage;
