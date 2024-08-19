import React from 'react';
import { BiNotification } from 'react-icons/bi';

const Contentheader = () => {
  return (
    <div className="flex justify-between items-center p-6 bg-gray-100 shadow-md">
      <h1 className="text-2xl font-semibold text-gray-800">
        Dashboard
      </h1>
      <div className="flex items-center">
        <div className="relative">
          <BiNotification className="w-6 h-6 text-gray-600 cursor-pointer" />
          {/* Optionally, you can add a notification badge */}
          {/* <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 text-white text-xs flex items-center justify-center rounded-full">3</span> */}
        </div>
      </div>
    </div>
  );
};

export default Contentheader;
