import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../public/logo.png';

export default function Footer() {
  return (
    <>
      {/* Main Footer */}
      <footer className="bg-black text-white px-6 md:px-12 py-12">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo */}
          <div className="flex flex-col gap-4 items-start">
            <img src={logo} alt="Logo" className="h-20 w-40 object-contain" />
          </div>

          {/* Need Help */}
          <div className="flex flex-col items-start">
            <h3 className="font-semibold text-lg mb-4">NEED HELP</h3>
            <p className="mb-2 cursor-pointer hover:underline">Contact Us</p>
            <p className="mb-2 cursor-pointer hover:underline">Do We Ship To You</p>
            <p className="mb-2 cursor-pointer hover:underline">Affiliate Program</p>
            <p className="mb-2 cursor-pointer hover:underline">FAQs</p>
            <p className="mb-2 cursor-pointer hover:underline">Help Center</p>
          </div>

          {/* Info */}
          <div className="flex flex-col items-start">
            <h3 className="font-semibold text-lg mb-4">INFO</h3>
            <p className="mb-2 cursor-pointer hover:underline">About Us</p>
            <p className="mb-2 cursor-pointer hover:underline">Age Policy</p>
            <p className="mb-2 cursor-pointer hover:underline">Terms of Service</p>
            <p className="mb-2 cursor-pointer hover:underline">Privacy Policy</p>
            <p className="mb-2 cursor-pointer hover:underline">Return Policy</p>
            <p className="mb-2 cursor-pointer hover:underline">Shipping & Handling</p>
          </div>

          {/* Blog Posts */}
          <div className="flex flex-col items-start">
            <h3 className="font-semibold text-lg mb-4">BLOG POSTS</h3>
            <p className="mb-2 cursor-pointer hover:underline">Vaping for Beginners</p>
            <p className="mb-2 cursor-pointer hover:underline">Tips On Buying Your First Vape</p>
            <p className="mb-2 cursor-pointer hover:underline">All Vape Guides</p>
            <p className="mb-2 cursor-pointer hover:underline">Mystery Bags</p>
          </div>
        </div>
      </footer>

      {/* Copyright Bottom Bar */}
      <div className="bg-red-600 p-6 text-white text-center md:text-left">
        <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <h1 className="text-lg font-semibold">© 2025 Puff Stuff Group.com</h1>
        </div>
      </div>
    </>
  );
}
