import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../public/logo.png';
import style from '../Footer/Footer.module.css';

export default function Footer() {
  return (
    <>
    <footer className={` bg-black h-60 opacity-97 bg-center bg-cover w-100% bottom-0 right-0 left-0 mb-0 border-gray-200 text-white px-6 md:px-12 py-10 overflow-hidden`}>
      <div className="relative z-10 max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Logo */}
        <div className="flex flex-col gap-4 items-start">
          <img src={logo} alt="Logo" className="h-40 w-auto" />
        </div>

        {/* Contact Info */}
        <div className="text-center text-md flex flex-col items-end">
          <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
          <p className="mb-2">tarfficstudio@gmial.com</p>
          <p className="mb-2">+20150 0929449‬
</p>
          <p>2 Mohamed Zaki Barakat, 8th District, Nasr City, Cairo Governorate 
</p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4 text-xl text-white">
            <Link to="/facebook" className="hover:text-blue-500">
              <i className="fab fa-facebook-f"></i>
            </Link>
            <Link to="/instagram" className="hover:text-pink-500">
              <i className="fab fa-instagram"></i>
            </Link>
            <Link to="/linkedin" className="hover:text-blue-400">
              <i className="fab fa-linkedin-in"></i>
            </Link>
            <Link to="/x" className="hover:text-gray-400">
              <i className="fab fa-x-twitter"></i>
            </Link>
          </div>
        </div>
      </div>

      {/* footer bottom */}
      <div className="relative z-10 mt-10 border-t border-white border-opacity-20 pt-4 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 gap-4">
        <div className="flex items-center gap-2">
          <span>©</span>
          <span>Traffic Studio All Copy Right</span>
        </div>
  
      </div>
    </footer>
    </>
  );
}
