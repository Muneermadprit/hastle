import React, { useState } from 'react'
import { Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import { Viewer } from '@react-pdf-viewer/core';
import muneerpdf from './assets/muneer@gmail.com.pdf'

import Footer from './components/Navbar/footer';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import careersimage from './assets/aboutimage1.jpeg'
import bannerimage from './assets/image3.jpeg'
import formimage from './assets/servicemain1.jpeg'
import Navbar from './components/Navbar/Navbar'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { pdf } from '@react-pdf/renderer';
import axios from 'axios';
import Sidebar from './components/Navbar/sidebar';




function Careerspage() {
    const [name,setName]= useState()
    const [email,setemail]= useState()
    const [phonenumber,setphonenumber]= useState()
    const [experience,setexperience]= useState()
    const [message,setmessage]= useState()
    const [pdfFile, setPdfFile] = useState(null);
    const defaultLayoutPluginInstance = defaultLayoutPlugin();
    const [errors, setErrors] = useState({}); 


    const handleValidation = () => {
      const newErrors = {};
    
      if (!name) newErrors.fullname = 'Name is required';
      if (!email) newErrors.email = 'Email is required';
      else if (!email.endsWith('@gmail.com')) newErrors.email = 'Please enter a valid Gmail ID';
      if (!phonenumber) newErrors.phonenumber = 'Phone number is required';
      if (!experience) newErrors.experience = 'Experience is required';
      if (!message) newErrors.message = 'Message is required';
    
      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    };

    

    const handleFileChange = (event) => {
      const file = event.target.files[0];
      if (file && file.type === 'application/pdf') {
        setPdfFile(file);
      } else {
        setPdfFile(null);
        alert('Please select a valid PDF file');
      }
    };

    


    const careersubmit = async (event) => {
      event.preventDefault(); // Prevent default form submission behavior
    
      // Validate form fields
      if (!handleValidation()) {
        alert("Please fill in all inputs correctly.");
        return;
      }
    
      const careers = {
        name,
        email,
        phonenumber,
        experiences: experience,
        message,
      };
    
      const formData = new FormData();
      formData.append("email", email);
      if (pdfFile) formData.append("file", pdfFile);
    
      try {
        // Submit career details
        await axios.post("http://localhost:8082/careers/", careers);
        console.log("Career details submitted successfully");
    
        // Upload the resume if a file is present
        if (pdfFile) {
          await axios.post("http://localhost:8082/careers/upload-file/", formData);
          console.log("Resume uploaded successfully");
        }
    
        // Clear the form inputs
        setName("");
        setemail("");
        setphonenumber("");
        setexperience("");
        setmessage("");
        setPdfFile(null);
    
        alert("Submitted successfully");
      } catch (error) {
        console.error("Error during submission, please try again later:", error);
        alert("Submission failed, please try again later.");
      }
    };
    
      
  
  return (
   
    <div >
         <Navbar /> 
            
         <div>
   
     
        <div className="relative h-[600px]    w-full bg-white shadow-bulge rounded-b-[150px] overflow-hidden">
  <img 
    src={careersimage} 
    alt="Careers" 
    className="h-full w-full object-cover " 
  />
  <div className='bg-black/60 inset-0 absolute z-5 '></div>
  <div className="absolute inset-0 justify-center items-center  grid xl:grid-cols-2 z-10 ">
    <div className="xl:w-[800px] xl:mt-[300px]   xl:h-[200px] xl:bg-[#800080]/70 justify-center items-center" data-aos='fade-left'>
      <h1 className="text-white xl:text-[60px] text-[30px] mt-2 font-light text-center flex justify-center items-center ">
        Join Our Team
      </h1>
      <p className='text-white text-center font-light text-[16px] mt-2'>Make a meaningful impact in the lives of our elderly community</p>
      
    </div>
   
    <div className="absolute  right-0 xl:flex justify-end items-center xl:w-[400px] xl:h-[400px] hidden ">
  <div className="relative flex xl:w-[400px] xl:h-[400px] rounded-full overflow-hidden xl:p-[5px]">
    <div className="absolute inset-0  rounded-full bg-[conic-gradient(#800080,transparent_120deg)] animate-rotate"></div>
    <div className="relative z-10 flex rounded-full bg-[] ">
      <img src={careersimage} className="object-cover p-2 rounded-full w-full h-full" alt="Careers"/>
    </div>
  </div>
</div>


    
  </div>
</div>


<p className='xl:px-40 px-4 text-center font-light mt-10 text xl:text-[20px]'>As a member of our dedicated team, you will contribute to creating a nurturing and enriching environment, where your commitment to providing exceptional care will help foster a sense of community and belonging for each of our senior residents</p>

   {/* join us banner */}

<div class="bg-gray-50 mt-20 font-[sans-serif]  relative mb-10 max-w-6xl shadow-lg h-[500px] w-full shadow-[#e9d9f3] mx-auto rounded overflow-hidden">
      <div class="grid sm:grid-cols-2 max-sm:gap-6">
        <div class="text-center p-6 flex flex-col justify-center items-center">
          <h3 class="font-light text-5xl text-[#800080] leading-tight "><span class="text-gray-800">Become a Valued Member of Our </span> Team</h3>
          <h6 class="text-lg text-gray-800 mt-4">Embrace the chance to be part of a meaningful mission, where your efforts will directly impact the quality of life for our cherished residents, helping them to live with joy, respect, and the highest standard of care.</h6>

          <button type="button" class="bg-[#4e0083] hover:bg-[#4f0083cc] text-white tracking-wide font-semibold text-sm py-3 px-6 rounded-xl mt-8">
            Get Started
          </button>

          <ul class="flex flex-wrap justify-center gap-6 mt-8">
            <li class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill='#4e0083' viewBox="0 0 482.6 482.6">
                <path
                  d="M98.339 320.8c47.6 56.9 104.9 101.7 170.3 133.4 24.9 11.8 58.2 25.8 95.3 28.2 2.3.1 4.5.2 6.8.2 24.9 0 44.9-8.6 61.2-26.3.1-.1.3-.3.4-.5 5.8-7 12.4-13.3 19.3-20 4.7-4.5 9.5-9.2 14.1-14 21.3-22.2 21.3-50.4-.2-71.9l-60.1-60.1c-10.2-10.6-22.4-16.2-35.2-16.2-12.8 0-25.1 5.6-35.6 16.1l-35.8 35.8c-3.3-1.9-6.7-3.6-9.9-5.2-4-2-7.7-3.9-11-6-32.6-20.7-62.2-47.7-90.5-82.4-14.3-18.1-23.9-33.3-30.6-48.8 9.4-8.5 18.2-17.4 26.7-26.1 3-3.1 6.1-6.2 9.2-9.3 10.8-10.8 16.6-23.3 16.6-36s-5.7-25.2-16.6-36l-29.8-29.8c-3.5-3.5-6.8-6.9-10.2-10.4-6.6-6.8-13.5-13.8-20.3-20.1-10.3-10.1-22.4-15.4-35.2-15.4-12.7 0-24.9 5.3-35.6 15.5l-37.4 37.4c-13.6 13.6-21.3 30.1-22.9 49.2-1.9 23.9 2.5 49.3 13.9 80 17.5 47.5 43.9 91.6 83.1 138.7zm-72.6-216.6c1.2-13.3 6.3-24.4 15.9-34l37.2-37.2c5.8-5.6 12.2-8.5 18.4-8.5 6.1 0 12.3 2.9 18 8.7 6.7 6.2 13 12.7 19.8 19.6 3.4 3.5 6.9 7 10.4 10.6l29.8 29.8c6.2 6.2 9.4 12.5 9.4 18.7s-3.2 12.5-9.4 18.7c-3.1 3.1-6.2 6.3-9.3 9.4-9.3 9.4-18 18.3-27.6 26.8l-.5.5c-8.3 8.3-7 16.2-5 22.2.1.3.2.5.3.8 7.7 18.5 18.4 36.1 35.1 57.1 30 37 61.6 65.7 96.4 87.8 4.3 2.8 8.9 5 13.2 7.2 4 2 7.7 3.9 11 6 .4.2.7.4 1.1.6 3.3 1.7 6.5 2.5 9.7 2.5 8 0 13.2-5.1 14.9-6.8l37.4-37.4c5.8-5.8 12.1-8.9 18.3-8.9 7.6 0 13.8 4.7 17.7 8.9l60.3 60.2c12 12 11.9 25-.3 37.7-4.2 4.5-8.6 8.8-13.3 13.3-7 6.8-14.3 13.8-20.9 21.7-11.5 12.4-25.2 18.2-42.9 18.2-1.7 0-3.5-.1-5.2-.2-32.8-2.1-63.3-14.9-86.2-25.8-62.2-30.1-116.8-72.8-162.1-127-37.3-44.9-62.4-86.7-79-131.5-10.3-27.5-14.2-49.6-12.6-69.7z"
                  data-original="#000000" />
              </svg>
              <a href="javascript:void(0)" class="text-[#4e0083] text-sm ml-2">180-548-2588</a>
            </li>
            <li class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill='#4e0083' viewBox="0 0 479.058 479.058">
                <path
                  d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"
                  data-original="#000000" />
              </svg>
              <a href="javascript:void(0)" class="text-[#4e0083] text-sm ml-2">info@example.com</a>
            </li>
          </ul>
        </div>

        <div class="flex justify-end items-center p-2 bg-gradient-to-b from-[#800080] to-[#796089] rounded-bl-[230px] w-full h-full">
          <div class="h-72 w-72 rounded-full bg-gradient-to-tr from-[#800080] to-[#c19ed6] p-5">
            <img src={bannerimage} class="w-full h-full rounded-full object-cover border-8 border-white" alt="img" />
          </div>
        </div>
      </div>

      <div class="absolute -top-[50px] -left-[50px] w-28 h-28 rounded-full bg-[#4e0083] opacity-40 shadow-lg"></div>
      <div class="absolute -top-10 -left-10 w-28 h-28 rounded-full bg-[#4e0083] opacity-40 shadow-lg"></div>
   
   
   
   
    </div>

     {/* Job submission form */}
    
</div>
    <div className='w-full h-auto'>
    <div class="font-[sans-serif]">
      <div class="bg-gradient-to-r from-blue-700 to-blue-300 w-full h-60">
        <img src={formimage} alt="Banner Image" class="w-full h-full object-cover" />
      </div>

      <div class="-mt-28 mb-6  w-full px-4">
        <div class="mx-auto max-w-6xl shadow-lg p-8 relative bg-white rounded-md">
          <h2 class="text-xl text-gray-800 font-bold">Apply to joint with us</h2>

          <form class="mt-8 grid sm:grid-cols-2 xl:grid-cols-2 grid-cols-1 gap-6">
            <div>
              <label class="text-gray-800 text-sm block mb-2">Your Name</label>
              <input type='text' placeholder='Enter Name'
                class="w-full rounded-md py-2.5 px-4 border border-gray-300 text-sm outline-[#800080]" 
                onChange={(e) => {
                  setName(e.target.value);
                  setErrors((prev) => ({ ...prev, name: false }));
                }}/>
            </div>
            <div>
              <label class="text-gray-800 text-sm block mb-2">Your Email</label>
              <input type='email' placeholder='Email'
                class="w-full rounded-md py-2.5 px-4 border border-gray-300 text-sm outline-[#800080]"
                onChange={(e) => {
                  setemail(e.target.value);
                  setErrors((prev) => ({ ...prev, email: false }));
                }} />
            </div>
            <div>
              <label class="text-gray-800 text-sm block mb-2">Your Number</label>
              <input type='number' placeholder='Phone No.'
                class="w-full rounded-md py-2.5 px-4 border border-gray-300 text-sm outline-[#800080]" 
                onChange={(e) => {
                  setphonenumber(e.target.value);
                  setErrors((prev) => ({ ...prev, phonenumber: false }));
                }}/>
            </div>
            <div>
              <label class="text-gray-800 text-sm block mb-2">experience</label>
              <input type='number' placeholder='experience in years'
                class="w-full rounded-md py-2.5 px-4 border border-gray-300 text-sm outline-[#800080]"
                onChange={(e) => {
                  setexperience(e.target.value);
                  setErrors((prev) => ({ ...prev, experience: false }));
                }} />
            </div>
            
           
            <div class="col-span-full">
              <label class="text-gray-800 text-sm block mb-2">Message</label>
              <textarea placeholder='Message' rows="6"
                class="w-full rounded-md px-4 border border-gray-300 text-sm pt-3 outline-[#800080]"
                onChange={(e) => {
                  setmessage(e.target.value);
                  setErrors((prev) => ({ ...prev, message: false }));
                }}></textarea>
            </div>

           {/* resume upload */}

           <div className="col-span-full xl:hidden flex flex-col items-center">
  <label className="text-gray-800 text-sm block mb-2">Message</label>
  <label className="text-gray-800 text-sm block mb-2">CV</label>
  <label
    htmlFor="uploadFile1"
    className="flex bg-gray-800 hover:bg-gray-700 text-white text-base px-5 py-3 outline-none rounded w-max cursor-pointer mx-auto font-[sans-serif]  items-center"
  >
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 mr-2 fill-white inline" viewBox="0 0 32 32">
      <path d="M23.75 11.044a7.99 7.99 0 0 0-15.5-.009A8 8 0 0 0 9 27h3a1 1 0 0 0 0-2H9a6 6 0 0 1-.035-12 1.038 1.038 0 0 0 1.1-.854 5.991 5.991 0 0 1 11.862 0A1.08 1.08 0 0 0 23 13a6 6 0 0 1 0 12h-3a1 1 0 0 0 0 2h3a8 8 0 0 0 .75-15.956z" />
      <path d="M20.293 19.707a1 1 0 0 0 1.414-1.414l-5-5a1 1 0 0 0-1.414 0l-5 5a1 1 0 0 0 1.414 1.414L15 16.414V29a1 1 0 0 0 2 0V16.414z" />
    </svg>
    {pdfFile ? <p className='w-[200px]'>{pdfFile.name}</p> : <p>Upload Resume</p>}
    <input
      type="file"
      id="uploadFile1"
      className="hidden"
      onChange={handleFileChange}
      accept=".pdf"
    />
  </label>
</div>

{/* desktop */}

<div className="col-span-full hidden xl:block">
  <label className="text-gray-800 text-sm block mb-2">CV</label>
  <label
    htmlFor="uploadFile1"
    className="bg-white text-center rounded w-full max-w-sm min-h-[180px] py-4 px-4 flex flex-col items-center justify-center cursor-pointer border-2 border-gray-300 mx-auto font-[sans-serif]"
  >
    <svg xmlns="http://www.w3.org/2000/svg" className="w-10 mb-3 fill-gray-400" viewBox="0 0 24 24">
      <path d="M22 13a1 1 0 0 0-1 1v4.213A2.79 2.79 0 0 1 18.213 21H5.787A2.79 2.79 0 0 1 3 18.213V14a1 1 0 0 0-2 0v4.213A4.792 4.792 0 0 0 5.787 23h12.426A4.792 4.792 0 0 0 23 18.213V14a1 1 0 0 0-1-1Z" />
      <path d="M6.707 8.707 11 4.414V17a1 1 0 0 0 2 0V4.414l4.293 4.293a1 1 0 0 0 1.414-1.414l-6-6a1 1 0 0 0-1.414 0l-6 6a1 1 0 0 0 1.414 1.414Z" />
    </svg>
    <p className="text-gray-400 font-semibold text-sm">
      <span className="text-[#007bff]">Choose file</span> to upload
    </p>
    <input
      type="file"
      id="uploadFile1"
      className="hidden"
      onChange={handleFileChange}
      accept=".pdf"
    />
    <p className="text-xs text-gray-400 mt-2">PDF only allowed.</p>
  </label>

  {/* PDF Viewer */}
  {pdfFile && (
    <div className='xl:h-[100vh] mt-[100px]'>
      <iframe
        src={URL.createObjectURL(pdfFile)}
        type="application/pdf"
        style={{ width: '100%', height: '100%', border: 'none' }}
        title="PDF Viewer"
      >
        <p>Alternative text - include a link <a href={URL.createObjectURL(pdfFile)}>to the PDF!</a></p>
      </iframe>
    </div>
  )}
</div>

      




            <div class="flex items-center col-span-full">
              <input id="checkbox1" type="checkbox"
                class="w-4 h-4 mr-3 shrink-0" />
              <label for="checkbox1" class="text-sm text-gray-500">I agree to the <a href="javascript:void(0);" class="underline">Terms and Conditions</a> and <a href="javascript:void(0);" class="underline">Privacy Policy</a></label>
            </div>

            <button type='button'
            
              class="text-white w-max bg-[#800080] hover:bg-blue-600 tracking-wide rounded-md text-sm px-6 py-3 mt-4"
              onClick={careersubmit}>
             
              submit
            </button>
          </form>
        </div>
      </div>
    </div>
    </div>
   
    <Footer/>
    </div>
   
  )
}

export default Careerspage