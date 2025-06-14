import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Logo/Brand */}
        <div>
          <h3 className="text-xl font-bold">DM007</h3>
          <p className="text-sm">© {new Date().getFullYear()} All rights reserved.</p>
        </div>

        {/* Links */}
        <div className="flex space-x-6">
          <a href="/" className="hover:text-gray-300">Home</a>
          <a href="/about" className="hover:text-gray-300">About</a>
          <a href="/products" className="hover:text-gray-300">Products</a>
          <a href="/products" className="hover:text-gray-300">Blogs</a>
          <a href="/contact" className="hover:text-gray-300">Contact</a>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-4">
          <a href="#" className="hover:text-blue-500"><FaFacebookF /></a>
          <a href="#" className="hover:text-sky-400"><FaTwitter /></a>
          <a href="#" className="hover:text-pink-500"><FaInstagram /></a>
          <a href="#" className="hover:text-blue-400"><FaLinkedinIn /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
