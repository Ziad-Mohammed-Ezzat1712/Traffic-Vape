// eslint-disable-next-line no-unused-vars
import React from 'react'
import Navbar from './../Navbar/Navbar';
import Footer from './../Footer/Footer';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <>
      <Navbar/>

      <div className="container mx-auto my-5 py-20 lg:py-12">
      <Outlet/>
      </div>
      <Footer/>
    </>
  )
}
