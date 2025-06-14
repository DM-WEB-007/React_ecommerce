import React, { useState } from 'react';
import phoneImage1 from '../assets/1.jpg';
import phoneImage2 from '../assets/2.jpg';
import phoneImage3 from '../assets/3.jpg';
import phoneImage4 from '../assets/4.jpg';
import phoneImage5 from '../assets/5.jpg';
import phoneImage6 from '../assets/6.jpg'; // Make sure these files exist

// Blog data with different images
const blogData = [
  {
    id: 1,
    title: '5 Tips to Choose the Best Phone',
    description: 'Learn how to pick the perfect smartphone for your needs — performance, camera, battery, and more.',
    image: phoneImage1,
  },
  {
    id: 2,
    title: 'Refurbished Phones: Are They Worth It?',
    description: 'Discover the pros and cons of buying refurbished smartphones, and how to avoid common mistakes.',
    image: phoneImage2,
  },
  {
    id: 3,
    title: 'Top 10 Budget Phones in 2025',
    description: 'We\'ve reviewed the best budget smartphones of 2025 — powerful yet affordable options for everyone.',
    image: phoneImage3,
  },
  {
    id: 4,
    title: 'Gaming Phones: What to Look For',
    description: 'Tips for choosing high-performance gaming phones without breaking your budget.',
    image: phoneImage4,
  },
  {
    id: 5,
    title: 'Battery Life Myths Busted',
    description: 'Let\'s debunk the common myths about charging habits and phone battery life.',
    image: phoneImage5,
  },
  {
    id: 6,
    title: 'How to Sell Your Old Phone Safely',
    description: 'Follow these steps to ensure your data is safe and you get the best price.',
    image: phoneImage6,
  }
];

const Blogs = () => {
  const [showMore, setShowMore] = useState(false);
  const visibleBlogs = showMore ? blogData : blogData.slice(0, 3);

  return (
    <div className="bg-gray-50 min-h-screen py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Our Latest Blogs</h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleBlogs.map((blog) => (
            <div key={blog.id} className="bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition">
              <img
                src={blog.image}
                alt={blog.title}
                className="rounded mb-4 h-40 w-full object-cover"
              />
              <h2 className="text-xl font-semibold mb-2 text-red-800">{blog.title}</h2>
              <p className="text-gray-600 mb-4">{blog.description}</p>
              <button className="text-sm text-white bg-red-700 px-4 py-2 rounded hover:bg-red-800">
                Read More
              </button>
            </div>
          ))}
        </div>

        {!showMore && (
          <div className="text-center mt-10">
            <button
              onClick={() => setShowMore(true)}
              className="bg-green-600 text-white px-6 cursor-pointer py-2 rounded hover:bg-green-700 transition"
            >
              See More
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blogs;
