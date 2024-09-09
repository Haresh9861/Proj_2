import React from 'react';
import { Link } from 'react-router-dom';

const Logincard = () => {
  return (
    <div className="h-screen font-sans login bg-cover">
      <div className="container mx-auto h-full flex flex-1 justify-center items-center">
        <div className="w-full max-w-lg">
          <div className="leading-loose">
            <form className="max-w-sm m-4 p-10 bg-white bg-opacity-25 rounded shadow-xl">
              <p className="text-white font-xl text-center text-xl font-bold">LOGIN</p>
              <div>
                <label className="block text-sm text-white" htmlFor="email">E-mail</label>
                <input
                  className="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
                  type="email"
                  id="email"
                  placeholder="Enter your e-mail"
                  aria-label="email"
                  required
                />
              </div>
              
              <div className="mt-2">
                <label className="block text-sm text-white">Password</label>
                <input
                  className="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  aria-label="password"
                  required
                />
              </div>
              <div className="mt-4 flex items-center justify-between">
                <button
                  className="px-4 py-1 text-white font-light tracking-wider bg-gray-900 hover:bg-gray-800 rounded"
                  type="submit"
                >
                  Submit
                </button>
                <Link
                  className="inline-block right-0 align-baseline font-bold text-sm text-white hover:text-red-400"
                  to="/passwordchange"
                >
                  Forgot your password?
                </Link>
              </div>
              <div className="text-center">
                <Link
                  className="inline-block right-0 align-baseline font-light text-sm hover:text-red-400"
                  to="/signup"
                > 
                  Create an account or Signup?
                </
                Link>
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
        `}
      </style>
    </div>
  );
};

export default Logincard;
