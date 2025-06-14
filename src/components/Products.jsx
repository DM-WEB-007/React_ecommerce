import React from 'react'
import phoneImage from '../assets/1.jpg';
const Products = () => {
  return (
    <div className=' '>
      <div className='mx-auto max-w-7xl px-4 md:px-0 p-4'>
          <h2 className='text-center text-3xl font-bold mb-4'>Products</h2>

          <div className="card grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-2 ">
            <div className='bg-white p-4 rounded shadow-md border border-gray-200'>
              <img src={phoneImage} alt="" className="rounded w-full h-30 object-cover"/>
               <h2>Product Name</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo, suscipit?</p>
            <button className='bg-red-900 p-2 rounded btn mt-2 mx-auto flex text-white'>Order Now!</button>
            </div>
            <div className='bg-white p-4 shadow-md border border-gray-200 rounded'>
              <img src={phoneImage} alt="" className="rounded w-full h-30 object-cover"/>
               <h2>Product Name</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo, suscipit?</p>
            <button className='bg-red-900 p-2 rounded btn mt-2 mx-auto flex text-white'>Order Now!</button>
            </div>
            <div className='bg-white p-4 shadow-md border border-gray-200 rounded'>
              <img src={phoneImage} alt="" className="rounded w-full h-30 object-cover"/>
               <h2>Product Name</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo, suscipit?</p>
            <button className='bg-red-900 p-2 rounded btn mt-2 mx-auto flex text-white'>Order Now!</button>
            </div>
            <div className='bg-white p-4 shadow-md border border-gray-200 rounded'>
                <img src={phoneImage} alt="" className="rounded w-full h-30 object-cover"/>
                <h2>Product Name</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo, suscipit?</p>
                <button className='bg-red-900 p-2 rounded btn mt-2 mx-auto flex text-white'>Order Now!</button>
            </div>
                <div className='bg-white p-4 shadow-md border border-gray-200 rounded'>
                <img src={phoneImage} alt="" className="rounded w-full h-30 object-cover"/>
                <h2>Product Name</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo, suscipit?</p>
                <button className='bg-red-900 p-2 rounded btn mt-2 mx-auto flex text-white'>Order Now!</button>
            </div>

    <div className='bg-white p-4 shadow-md border border-gray-200 rounded'>
                <img src={phoneImage} alt="" className="rounded w-full h-30 object-cover"/>
                <h2>Product Name</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo, suscipit?</p>
                <button className='bg-red-900 p-2 rounded btn mt-2 mx-auto flex text-white'>Order Now!</button>
            </div>

    <div className='bg-white p-4 shadow-md border border-gray-200 rounded'>
                <img src={phoneImage} alt="" className="rounded w-full h-30 object-cover"/>
                <h2>Product Name</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo, suscipit?</p>
                <button className='bg-red-900 p-2 rounded btn mt-2 mx-auto flex text-white'>Order Now!</button>
            </div>

            {/* <div className='bg-white p-4 shadow-md border overflow-hidden border-gray-200 rounded h-96 flex flex-col'>
              <div className="image flex h-[60%]">
                <img src={phoneImage} alt="" className="rounded w-full h-full object-cover"/>
              </div>
                <div className="content flex flex-col h-[40%]">
                  <h2 className='font-bold'>Product Name</h2>
                <p>Lorem  adipisicing elitadipisicing elitadipisicing elit. Quo, suscipit?</p>
                <button className='bg-red-900 p-2 rounded btn mt-2 mx-auto flex text-white'>Order Now!</button>
                </div>
                
            </div> */}

    <div className='bg-white p-4 shadow-md border border-gray-200 rounded'>
                <img src={phoneImage} alt="" className="rounded w-full h-30 object-cover"/>
                <h2>Product Name</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo, suscipit?</p>
                <button className='bg-red-900 p-2 rounded btn mt-2 mx-auto flex text-white'>Order Now!</button>
            </div>

             
           
           
          </div>
      </div>
    </div>
  )
}

export default Products