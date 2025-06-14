import React from 'react';
import phoneImage from '../assets/1.jpg';

const Home = () => {
  return (
    <div className="bg-gradient-to-br from-green-50 via-white to-green-100 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 flex flex-col-reverse md:flex-row items-center gap-12">
        
        {/* Left Content */}
        <div className="md:w-1/2 text-center md:text-left space-y-6">
          <span className="inline-block bg-green-200 text-green-800 text-sm font-medium px-3 py-1 rounded-full shadow-md animate-pulse">
            Best Deals of 2025
          </span>
          
          <h1 className="text-4xl sm:text-5xl font-extrabold text-green-900 leading-tight">
            Discover Your Next Phone <br />
            At Unbeatable Prices
          </h1>
          
          <p className="text-gray-700 text-base leading-relaxed">
            Buy, sell, or exchange smartphones with confidence. We provide quality devices, trusted service, and the best prices in the market.
          </p>

          <div className="flex justify-center md:justify-start">
            <button className="bg-green-700 hover:bg-green-800 text-white font-semibold px-6 py-3 rounded-full shadow-md transition duration-300 ease-in-out">
              Shop Now
            </button>
          </div>
        </div>

        {/* Right Image */}
      {/* Right Image */}
<div className="md:w-1/2 flex justify-center md:justify-end">
  <div className="relative">
    <div className="absolute -inset-1 bg-green-300 rounded-xl blur-lg opacity-30 animate-pulse"></div>
    <img
      src={phoneImage}
      alt="Phone"
      className="relative z-10 w-64 sm:w-72 h-auto rounded-2xl shadow-2xl border border-white"
    />
  </div>
</div>

      </div>
    </div>
  );
};

export default Home;
