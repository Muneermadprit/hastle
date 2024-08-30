import React, { useState } from 'react';
import { MdOutlinePhoneForwarded } from "react-icons/md";
import { MdOutgoingMail } from "react-icons/md";
import { BsFillSendFill } from "react-icons/bs";
import contactimage from '../../assets/contact.png';
import contactnew from '../../assets/contactformlast.png'
import axios from 'axios';

const ContactSectionpage = () => {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');  
  const [postalcode, setPostalcode] = useState('');
  const [phonenumber, setPhonenumber] = useState('');
  const [message, setMessages] = useState('');
  const [errors, setErrors] = useState({});  

  const handleValidation = () => {
    const newErrors = {};

    if (!fullname) newErrors.fullname = true;
    if (!street) newErrors.street = true;
    if (!city) newErrors.city = true;
    if (!postalcode) newErrors.postcode = true;
    if (!phonenumber) newErrors.phoneNumber = true;
    if (!email) newErrors.email = true;
    if (!message) newErrors.message = true;

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const submits = async () => {
    if (handleValidation()) {
      const contact = {
        fullname,
        street,
        city,
        postalcode,
        phonenumber,
        email,
        message
      };

      try {
        await axios.post("http://localhost:8082/contacts/", contact);
        console.log("Success");

        setFullname("");
        setStreet("");
        setCity("");
        setPostalcode("");
        setPhonenumber("");
        setEmail("");
        setMessages("");

        alert("Contact submitted successfully");
      } catch (error) {
        console.error("Error contact submission, try later:", error);
      }
    } else {
      alert('Please fill in all the fields.');
    }
  };

  return (
    <div className='flex flex-col items-center mb-10'>
      <div className="relative max-w-6xl w-full h-auto flex flex-col md:flex-row items-center justify-center lg:gap-16 md:gap-4 overflow-hidden px-4 py-8 md:px-10">
        <div className="relative w-full md:w-1/2 h-[300px] md:h-[500px] lg:h-[600px]">
          <img 
            src={contactnew} 
            className="absolute left-0 top-0 w-full h-full object-cover"
            alt="Contact"
          />
        </div>
        
        <div className='w-full md:w-1/2 flex flex-col items-center md:items-start mt-8 md:mt-0'>
          <h2 className="text-gray-800 text-2xl font-bold mb-4 xl:ml-[200px]">CONTACT US</h2>
          <form className='w-full max-w-lg'>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="px-2 py-3 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-[#800080] outline-none"
                onChange={(e) => {
                  setFullname(e.target.value);
                  setErrors((prev) => ({ ...prev, fullname: false }));
                }}
              />
              <input
                type="text"
                placeholder="Street"
                className="px-2 py-3 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-[#800080] outline-none"
                onChange={(e) => {
                  setStreet(e.target.value);
                  setErrors((prev) => ({ ...prev, street: false }));
                }}
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="City"
                  className="px-2 py-3 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-[#800080] outline-none"
                  onChange={(e) => {
                    setCity(e.target.value);
                    setErrors((prev) => ({ ...prev, city: false }));
                  }}
                />
                <input
                  type="text"
                  placeholder="Postcode"
                  className="px-2 py-3 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-[#800080] outline-none"
                  onChange={(e) => {
                    setPostalcode(e.target.value);
                    setErrors((prev) => ({ ...prev, postcode: false }));
                  }}
                />
              </div>
              <input
                type="number"
                placeholder="Phone No."
                className="px-2 py-3 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-[#800080] outline-none"
                onChange={(e) => {
                  setPhonenumber(e.target.value);
                  setErrors((prev) => ({ ...prev, phoneNumber: false }));
                }}
              />
              <input
                type="email"
                placeholder="Email"
                className="px-2 py-3 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-[#800080] outline-none"
                onChange={(e) => {
                  setEmail(e.target.value);
                  setErrors((prev) => ({ ...prev, email: false }));
                }}
              />
              <textarea
                placeholder="Write Message"
                className="px-2 pt-3 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-[#800080] outline-none"
                onChange={(e) => {
                  setMessages(e.target.value);
                  setErrors((prev) => ({ ...prev, message: false }));
                }}
              />
            </div>

            <button
              type="button"
              className="mt-8 flex items-center justify-center text-sm w-full rounded-md px-6 py-3 bg-[#800080] hover:bg-white text-white hover:text-[#800080] border-[2px] border-[#800080]"
              onClick={submits}
            >
              <BsFillSendFill className='mr-2' />
              Send Message
            </button>
          </form>

          <ul className="mt-8 flex flex-col items-center md:items-start gap-6">
            <li className="flex items-center text-black">
              <MdOutgoingMail />
              <a href="mailto:info@holistic-careservices.co.uk" className="text-sm ml-4">
                <strong>info@holistic-careservices.co.uk</strong>
              </a>
            </li>
            <li className="flex items-center text-black">
              <MdOutlinePhoneForwarded />
              <a href="tel:+441231234567890" className="text-sm ml-4">
                <strong>44 123 456 7890</strong>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className='relative w-full max-w-6xl mt-10'>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2381.410717585168!2d-2.8721811!3d53.3538041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487ae196e48c384f%3A0x4d450bcfb457f810!2sHolistic%20Care%20Services!5e0!3m2!1sen!2sin!4v1723283657434!5m2!1sen!2sin"
          className="w-full h-[300px] md:h-[500px] border-0"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactSectionpage;
