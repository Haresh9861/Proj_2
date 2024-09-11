import React, { useState } from 'react';
import { X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const VerifyCard = () => {
  const navigate = useNavigate(); // Hook for navigation

  // Function to handle closing the card and navigating back
  const closebtn = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <div className="flex flex-col fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm items-center justify-center h-screen w-full">
      <div className="relative w-full max-w-md px-8 py-10 bg-white rounded-lg shadow-md">
        {/* Close button */}
        <button
          onClick={closebtn}
          className="absolute top-3 right-3 text-gray-700"
        >
          <X size={24} />
        </button>

        {/* Card content */}
        <h1 className="text-2xl font-semibold text-center mb-6">Enter OTP</h1>
        <p className="text-black font-bold text-center mb-4">Code sent to hare*****.gmail.com</p>

        {/* OTP input fields */}
        <div className="grid grid-cols-5 gap-x-4 my-2">
          {[1, 9, 6, 4, 3].map((digit, index) => (
            <div
              key={index}
              contentEditable="true"
              className="rounded-lg bg-gray-100 cursor-text dark:bg-gray-800 w-14 aspect-square flex items-center justify-center"
            >
              <span className="text-gray-700">{digit}</span>
            </div>
          ))}
        </div>

        {/* Request help section */}
        <div className="flex items-center flex-col justify-between mb-6">
          <p className="text-gray-600 text-sm">Didn't receive code?</p>
          <div className="flex items-center space-x-2">
           
            <button className="px-3 py-2 text-sm font-medium text-center rounded text-gray-500 hover:text-green-500">
            Send Again (00:00:36)
            </button>
          </div>
        </div>

        {/* Verify button */}
        <button className="w-full px-4 py-2 text-lg font-medium text-white bg-green-400 rounded-xl hover:bg-green-300">
          Verify
        </button>
      </div>
    </div>
  );
};

export default VerifyCard;
