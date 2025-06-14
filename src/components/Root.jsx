import React from 'react'
import Navbar from './Navbar'
import Footer from './footer'
import { Outlet } from 'react-router'


const Root = () => {
  return (
    <div>
        <Navbar />
        <Outlet></Outlet>
        <Footer />
        
    </div>
  )
}

export default Root