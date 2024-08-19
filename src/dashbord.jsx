import React, { useState, useEffect } from 'react';
import Sidebar from './components/Navbar/sidebar';
import Contentheader from './components/Navbar/contentheader';
import { FaRegUser } from "react-icons/fa";
import { AiOutlineClose } from 'react-icons/ai'; // Import close icon
import axios from 'axios';

function Dashbord() {
  const [queries, setQueries] = useState([]);
  const [careers, setCareers] = useState([]);
  const [subscribers, setSubscribers] = useState([]);
  const [notificationVisible, setNotificationVisible] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:8082/Queries/')
      .then((response) => {
        setQueries(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the queries!", error);
      });

    axios.get('http://localhost:8082/careers/')
      .then((response) => {
        setCareers(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the careers!", error);
      });

      
    axios.get('http://localhost:8082/subscribers/')
    .then((response) => {
      setSubscribers(response.data);
    })
    .catch((error) => {
      console.error("There was an error fetching the careers!", error);
    });


  }, []);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <aside className="xl:w-64 bg-gray-800">
        <Sidebar />
      </aside>
      
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-y-auto">
        <Contentheader />
       <div className='grid xl:grid-cols-2 w-[full] '>
         {/* Notification Modal */}
         { queries.length > 0 && (
          <div className=" inset-0 flex items-center  justify-center bg-opacity-50 relative mb-10 mt-10">
            <div className="bg-white text-black p-6 rounded-lg shadow-lg max-w-2xl w-[80%] h-[40vh] overflow-y-auto">
              <div className="flex justify-between items-center mb-4  ">
                <h2 className="text-xl font-semibold">Customer Queries</h2>
                <button 
                  onClick={() => setNotificationVisible(false)} 
                  className="text-gray-600 hover:text-gray-900 "
                >
                </button>
              </div>
              
              <div className='space-y-4'>
                {queries.map((query, index) => (
                  <div 
                    key={index} 
                    className='bg-gray-100 border border-gray-300 rounded-lg p-4 shadow-sm  max-w-2xlw-full h-[40vh]'
                  >
                    <p className='font-semibold'>{query.name}</p>
                    <p>{query.message}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}


        {/* subscriberslst */}
          {/* Notification Modal */}
          { subscribers.length > 0 && (
          <div className=" inset-0 flex items-center justify-center bg-opacity-50 relative  mb-10 mt-10">
            <div className="bg-white text-black p-6 rounded-lg shadow-lg max-w-2xl w-[80%] h-[40vh] overflow-y-auto">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Customer Queries</h2>
                <button 
                  onClick={() => setNotificationVisible(false)} 
                  className="text-gray-600 hover:text-gray-900 "
                >
                </button>
              </div>
              
              <div className='space-y-4'>
                {subscribers.map((query, index) => (
                  <div 
                    key={index} 
                    className='bg-gray-100 border border-gray-300 rounded-lg p-4 shadow-sm  max-w-2xlw-full h-[40vh]'
                  >
                    <p className='font-semibold'>{query.name}</p>
                    
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}


       </div>
       
        {/* Careers Section */}
        <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 p-4'>
          {careers.length > 0 ? (
            careers.map((query, index) => (
              <div 
                key={index} 
                className='bg-white shadow-lg rounded-lg p-6 mb-6 mx-auto transform hover:scale-105 transition-transform duration-300 ease-in-out w-full max-w-md'
              >
                <div className='flex items-center mb-4'>
                  <FaRegUser className='text-[#800080] text-4xl mr-4' />
                  <div>
                    <p className='text-xl font-semibold text-gray-800'>{query.name}</p>
                    <p className='text-sm text-gray-600'>{query.email}</p>
                  </div>
                </div>
                <div className='text-gray-700 mb-4'>
                  <p><strong>Experience:</strong> {query.experiences}</p>
                  <p><strong>Phone:</strong> {query.phonenumber}</p>
                  <p><strong>Message:</strong> {query.message}</p>
                </div>
                <div className='text-right'>
                  <a href={query.resume} target="_blank" rel="noopener noreferrer">
                    <button className='bg-[#800080] text-white px-4 py-2 rounded-full hover:bg-purple-700 transition-colors duration-300'>
                      Download Resume
                    </button>
                  </a>
                </div>
              </div>
            ))
          ) : (
            <p>No careers found.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashbord;

