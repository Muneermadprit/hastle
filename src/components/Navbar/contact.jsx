import React from 'react';
import { MdOutlinePhoneForwarded } from "react-icons/md";
import { MdOutgoingMail } from "react-icons/md";
import { BsFillSendFill } from "react-icons/bs";
import contactimage from '../../assets/contact.png'

const ContactSection = () => {
  return (
    <div className='relative'>
      <div className='w-[80%] h-[500px] ml-[150px] max-md:w-full max-md:h-[300px] max-md:ml-0'>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2381.410717585168!2d-2.8721811!3d53.3538041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487ae196e48c384f%3A0x4d450bcfb457f810!2sHolistic%20Care%20Services!5e0!3m2!1sen!2sin!4v1723283657434!5m2!1sen!2sin"
          className="absolute top-0 left-0 w-[80%] h-[500px] border-0 ml-[150px] max-md:w-full max-md:h-[300px] max-md:ml-0"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <img 
        src={contactimage} 
        className='w-[700px]  sm:h-[730px] absolute ml-[20px] mr-60 max-md:w-full max-md:h-auto max-md:relative' 
      />

      <div className="grid md:grid-cols-2 sm:gap-16  items-center sm:mb-10 sm:h-[600px] overflow-hidden pr-10 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] max-w-6xl mx-auto sm:mt-4 font-[sans-serif] before:absolute before:right-0 before:w-[300px] before:h-full max-md:before:hidden max-md:pr-0 max-md:shadow-none max-md:mx-4 max-md:h-auto max-md:gap-8">
        <div className="rounded-3xl hidden  sm:flex overflow-hidden  w-full h-[400px] relative max-md:h-[200px]"></div>
        <div className='text-center md:text-left max-md:w-full ]'>
          <h2 className="text-gray-800 text-2xl font-bold sm:ml-[180px] max-md:ml-0">CONTACT US</h2>
          <form>
            <div className="space-y-4 mt-8">
              <input
                type="text"
                placeholder="Full Name"
                className="px-2 py-3 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-[#800080] outline-none"
              />
              <input
                type="text"
                placeholder="Street"
                className="px-2 py-3 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-[#800080] outline-none"
              />
              <div className="grid grid-cols-2 gap-6 max-md:grid-cols-1">
                <input
                  type="text"
                  placeholder="City"
                  className="px-2 py-3 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-[#800080] outline-none"
                />
                <input
                  type="text"
                  placeholder="Postcode"
                  className="px-2 py-3 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-[#800080] outline-none"
                />
              </div>
              <input
                type="number"
                placeholder="Phone No."
                className="px-2 py-3 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-[#800080] outline-none"
              />
              <input
                type="email"
                placeholder="Email"
                className="px-2 py-3 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-[#800080] outline-none"
              />
              <textarea
                placeholder="Write Message"
                className="px-2 pt-3 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-[#800080] outline-none"
              />
            </div>

            <button
              type="button"
              className="mt-8 hover:text-[#800080] hover:border-[#800080] border-solid border-[2px] flex items-center justify-center text-sm w-full rounded-md px-6 py-3 bg-[#800080] hover:bg-white text-white"
            ><BsFillSendFill className='mr-5 hover:text-[#800080]' />
              Send Message
            </button>
          </form>

          <ul className="mt-4 flex flex-wrap justify-center md:justify-start gap-6">
            <li className="flex items-center text-black">
              <MdOutgoingMail />
              <a href="javascript:void(0)" className="text-sm ml-4">
                <strong>info@holistic-careservices.co.uk</strong>
              </a>
            </li>
            <li className="flex items-center text-black">
              <MdOutlinePhoneForwarded />
              <a href="javascript:void(0)" className="text-sm ml-4">
                <strong>44 123 456 7890</strong>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
