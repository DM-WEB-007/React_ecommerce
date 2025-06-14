import React from 'react';
import phoneImage from '../assets/1.jpg';

const About = () => {
  return (
    <div className="bg-red-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Left Image */}
          <div className="md:w-1/2 flex justify-center md:justify-start">
 <img
  src={phoneImage}
  alt="About"
  className="w-56 sm:w-64 md:w-72 h-auto object-contain rounded-xl shadow-lg border border-white"
/>


          </div>

          {/* Right Content */}
          <div className="md:w-1/2 space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-green-900 mb-2">Why Choose Us</h2>
              <p className="text-gray-700 leading-relaxed">
                We offer high-quality phones with unbeatable pricing and a satisfaction guarantee. Our team ensures every device is tested, certified, and delivered fast.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-green-800 mb-1">✔ Trusted Quality</h2>
              <p className="text-gray-700">Each phone is thoroughly inspected and comes with a full warranty.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-green-800 mb-1">✔ Affordable Prices</h2>
              <p className="text-gray-700">Whether new or refurbished, our pricing is competitive and transparent.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-green-800 mb-1">✔ Excellent Support</h2>
              <p className="text-gray-700">Our support team is ready to assist you before and after your purchase.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
