import React from 'react';
import { Link } from 'react-router-dom';

const PasswordChangeCard = () => {
  return (
    <div className="h-screen font-sans login bg-cover flex items-center justify-center">
      <div className="container mx-auto h-full flex flex-1 justify-center items-center">
        <div className="w-full max-w-lg">
          <div className="leading-loose">
            <form className="max-w-sm m-4 p-8 bg-white bg-opacity-25 rounded shadow-xl">
              <p className="text-white text-2xl font-semibold text-center mb-6">Reset Your Password</p>
              <div className='text-center'>
                <label className="block text-lg text-white mb-2" htmlFor="email">Enter your registered email</label>
                <input
                  className="w-full text-center px-5 py-3 text-gray-800 bg-gray-100 rounded-lg focus:outline-none focus:bg-white transition duration-200 ease-in-out"
                  type="email"
                  id="email"
                  placeholder="Enter your e-mail"
                  aria-label="email"
                  required
                />
              </div>
              <div className="mt-6 flex items-center justify-center">
                <button
                  className="px-6 py-3 text-white text-lg font-light tracking-wider bg-gray-900 hover:bg-gray-800 rounded"
                  type="submit"
                >
                  Submit
                </button>
              </div>

              <div className="mt-6 text-center">
                <Link
                  className="inline-block text-sm text-white font-light hover:text-blue-300 transition duration-200 ease-in-out"
                  to="/signin"
                >
                  Back to Login
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>

      <style>
        {`
          .login {
            background: url('http://bit.ly/2gPLxZ4');
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
          }
          .backdrop-blur-lg {
            backdrop-filter: blur(10px);
          }
        `}
      </style>
    </div>
  );
};

export default PasswordChangeCard;
