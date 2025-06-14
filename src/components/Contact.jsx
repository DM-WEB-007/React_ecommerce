import React from 'react';

const Contact = () => {
  return (
    <div className="bg-gradient-to-br from-red-50 via-white to-red-100 min-h-screen flex items-center justify-center px-4 py-20">
      <div className="bg-white p-8 md:p-10 rounded-xl shadow-xl max-w-xl w-full">
        <div className="text-center mb-6">
          <span className="inline-block bg-red-100 text-red-700 text-sm px-3 py-1 rounded-full font-medium mb-2">
            Get in Touch
          </span>
          <h2 className="text-3xl font-bold text-gray-800">Contact Us</h2>
          <p className="text-gray-500 text-sm mt-2">We'd love to hear from you. Drop us a message!</p>
        </div>

        <form className="space-y-5">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Your Name</label>
            <input
              type="text"
              id="name"
              placeholder="John Doe"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-red-300 focus:outline-none transition"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Your Email</label>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-red-300 focus:outline-none transition"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Your Message</label>
            <textarea
              id="message"
              rows="4"
              placeholder="Write something..."
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-red-300 focus:outline-none transition"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-red-700 hover:bg-red-800 text-white py-2 px-4 rounded-md font-semibold transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
