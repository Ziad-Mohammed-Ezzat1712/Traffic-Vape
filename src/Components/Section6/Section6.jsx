// eslint-disable-next-line no-unused-vars
import React from 'react';
import best1 from '../../../images/best1.png';
import best2 from '../../../images/best2.png';
import best3 from '../../../images/best3.png';
import best4 from '../../../images/best4.png';

export default function Section6() {
  const products = [
    {
      id: 1,
      brand: 'JOOS',
      title: 'Tango Twist Freeze by Voodoo Joos Salt Series 30mL',
      price: ' 300 EGP',
      image: best1,
    },
    {
      id: 2,
      brand: 'RUTHLESS',
      title: 'Cherry Drank by Ruthless Series 120ml',
      price: '250 EGP',
      image: best2,
    },
    {
      id: 3,
      brand: 'ORGNX',
      title: 'ORGNX Disposable | 4000 puffs | 9mL | 5%',
      price: 'From 200 EGP',
      image: best3,
    },
    {
      id: 4,
      brand: 'GEEKVAPE',
      title: 'Geekvape Obelisk 65 Kit',
      price: 'From 200 EGP',
      image: best4,
    },
  ];

  return (
    <section className="text-white px-4 py-10 bg-black">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold">BEST SELLERS</h2>
        <button className="bg-white text-[#FD0000] px-4 py-2 rounded hover:bg-[#FD0000] hover:text-white text-sm font-semibold">
          View All
        </button>
      </div>

      {/* Product Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-[#111] p-4 rounded-lg border border-gray-700 hover:shadow-lg transition duration-300"
          >
            <img
              src={product.image}
              alt={product.title}
              className="mx-auto mb-4 h-48 object-contain"
            />
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
