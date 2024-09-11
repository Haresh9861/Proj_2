import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import VerifyCard from './VerifyCard';

const Logincard = () => {
  const [modal, setModal] = useState(false);

  // Function to toggle the modal visibility
  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      {/* Sign In Card */}
      <div className="flex flex-col border-green-500 border-y-4 bg-white shadow-xl px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-3xl w-50 max-w-md">
        <div className="font-medium self-center text-3xl sm:text-3xl text-gray-800">
          Login
        </div>
        <div className="mt-4 font-bold self-center text-xl sm:text-sm text-gray-800">
          Enter your credentials to access your account
        </div>

        <div className="mt-10">
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col mb-5">
              <label htmlFor="email" className="mb-1 text-xs tracking-wide text-gray-600">
                E-Mail Address:
              </label>
              <div className="relative">
                <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                  <i className="fas fa-at text-blue-500"></i>
                </div>
                <input
                  id="email"
                  type="email"
                  name="email"
                  className="text-sm placeholder-gray-500 pl-10 pr-4 rounded-2xl border border-gray-400 w-full py-2 focus:outline-none focus:border-green-500"
                  placeholder="Enter email"
                />
              </div>
            </div>

            <div className="flex w-full">
              <button
                type="button"
                onClick={toggleModal} // Toggle the modal on button click
                className="flex mt-2 items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-green-500 hover:bg-green-400 rounded-2xl py-2 w-full transition duration-150 ease-in"
              >
                <span className="mr-2">Send One Time Password</span>
                <span>
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Registration Link */}
      <div className="flex justify-center items-center mt-6">
        <a href="#" className="inline-flex items-center text-gray-700 font-medium text-xs text-center">
          <span className="ml-2">
            New to Agency?{" "}
            <Link to="/signup" className="text-xs ml-2 text-green-500 font-semibold">
              Create account
            </Link>
          </span>
        </a>
      </div>

      {/* Modal - Render VerifyCard with overlay if modal is true */}
      {modal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <VerifyCard />
        </div>
      )}
    </div>
  );
};

export default Logincard;
