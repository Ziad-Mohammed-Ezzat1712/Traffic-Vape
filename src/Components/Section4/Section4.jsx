// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../../images/img2.png';
import img2 from '../../../images/img1.png';

export default function Section4() {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center gap-6 px-4 py-10 bg-black">
      {/* Card 1 */}
      <div className="relative w-full lg:w-1/2">
        <img src={img1} alt="Starter Kits" className="w-full h-auto rounded-md" />
        <div className="absolute inset-0 flex flex-col justify-center items-start p-6">
          <h1 className="text-white mb-4 text-2xl md:text-3xl font-semibold">Starter Kits</h1>
          <Link to="/shopstartkits">
            <button className="bg-[#FD0000] py-2 px-5 rounded-md text-white font-semibold text-lg">
              Shop Now
            </button>
          </Link>
        </div>
      </div>

      {/* Card 2 */}
      <div className="relative w-full lg:w-1/2">
        <img src={img2} alt="Review" className="w-full h-auto rounded-md" />
        <div className="absolute inset-0 flex flex-col justify-center items-start p-6">
          <h1 className="text-white mb-4 text-2xl md:text-3xl font-semibold">Check Out Our Review</h1>
          <Link to="/reviews">
            <button className="bg-[#FD0000] py-2 px-5 rounded-md text-white font-semibold text-lg">
              Reviews
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
