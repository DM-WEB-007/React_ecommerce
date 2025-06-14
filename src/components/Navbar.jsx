import React, { useState } from 'react'
import { FaBars } from "react-icons/fa6";
import { MdOutlineClose } from "react-icons/md";
import { Link } from 'react-router-dom';




const Navbar = () => {
  const [isOpen, setIsOpen]= useState(false);
  const [activeLinks, setActiveLink]=useState()

    const toggleMenu = () =>{
      setIsOpen(!isOpen);
    }

    const handleLink = (path) =>{
      setActiveLink(path);
    }
  return (
    
    <nav className='bg-green-900 text-white py-4 md:py-6 top-0 sticky z-50'>
        <div className='mx-auto max-w-7xl flex justify-between items-center md:px-0  px-4'>
            <h3 className='font-bold text-2xl'>DM 007</h3>

            {/* Mobile Menu */}

            <div>
              <button className='cursor-pointer md:hidden' onClick={toggleMenu}>{
                  isOpen ?  <MdOutlineClose /> : <FaBars />
                }

              </button>                
            </div>


            <ul className='hidden md:flex space-x-4 md:space-x-6 '>
                <li>
                  <Link
                    to="/" onClick={()=> handleLink ('/')} className={`${activeLinks=== '/' ? 'bg-green-700' : 'hover:bg-green-700'} px-4 p-2 rounded`}>Home
                  </Link>
                </li>
                

                <li><Link to="/about" onClick={()=> handleLink('about')} className={`${activeLinks=== 'about' ? 'bg-green-700' : 'hover:bg-green-700'} px-4 p-2 rounded`}>About</Link></li>
                <li>
                  <Link 
                    to="/products" onClick={()=> handleLink ('products')}
                    className={`${activeLinks==='products' ? 'bg-green-700' : 'hover:bg-green-700'} px-4 p-2 rounded`} >Products
                  </Link>
                </li>
                <li><Link to="/blogs" onClick={()=> handleLink ('blogs')} className={`${activeLinks==='blogs' ? 'bg-green-700' : 'hover:bg-green-700'} px-4 p-2 rounded`}>Blogs</Link></li>
                {/* <li><Link to="/menu">Menu</Link></li> */}
                <li><Link to="/contact" onClick={()=> handleLink ('contact')} className={`${activeLinks==='contact' ? 'bg-green-700' : 'hover:bg-green-700'} px-4 p-2 rounded`}>Contact</Link></li>
</ul>

            <button className="hidden md:block bg-white text-green-900 font-semibold px-6 py-2 rounded-full shadow hover:bg-green-100 cursor-pointer transition duration-300">
  Login
</button>

            {/* mobile menu collapsed */}

            <div className={`md:hidden w-full absolute bg-green-600 top-full left-0 ${isOpen ? 'block' : 'hidden'}`}>
               <ul className='flex flex-col items-center py-4 '>
                <li>Home</li>
                <li>About</li>
                <li>Products</li>
                <li>Menu</li>
                <li>Contact</li>
                <li><button className=' bg-white text-green-900 font-semibold px-6 py-2 rounded-full shadow hover:bg-green-100 cursor-pointer transition duration-300'>Login</button></li>
               
            </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar