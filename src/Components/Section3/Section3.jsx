import React from 'react';
import { useNavigate } from 'react-router-dom';
import img5 from '../../../images/img5.png';
import img6 from '../../../images/img6.png';
import img7 from '../../../images/img7.png';
import img8 from '../../../images/img8.png';

export default function Section3() {
  const navigate = useNavigate();

  const products = [
    { id: 1, brand: 'DKHAAN', title: 'Dkhaan Infinity Portable Hookah Nest', price: 'From 200 EGP', image: img5 },
    { id: 2, brand: 'SMYLE LABS', title: 'Smyle (DSPLY 20pc)(510BATT) Mini Plug', price: 'From 1000 EGP', image: img6 },
    { id: 3, brand: 'SMYLE LABS', title: 'Smyle (510BATT) Wandjamin Cart', price: 'From 350 EGP', image: img7 },
    { id: 4, brand: 'SMYLE LABS', title: 'Smyle (Lighter) Fyre Saber Shaped Torch', price: 'From 150 EGP', image: img8 },
  ];

  return (
    <section className="text-white px-4 py-10 bg-black">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold">NEW ARRIVALS</h2>
        <button
          onClick={() => navigate('/new-arrivals')}
          className="bg-white text-[#FD0000] px-4 py-2 rounded hover:bg-[#FD0000] hover:text-white text-sm font-semibold"
        >
          View All
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div key={product.id} className="bg-[#111] p-4 rounded-lg border border-gray-700 hover:shadow-lg transition duration-300">
            <img src={product.image} alt={product.title} className="mx-auto mb-4 h-48 object-contain" />
            <div className="text-left">
              <h4 className="text-sm text-gray-400 mb-2">{product.brand}</h4>
              <p className="text-base text-white font-medium mb-2 line-clamp-2">{product.title}</p>
              <span className="text-[#FD0000] font-semibold text-lg">{product.price}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
