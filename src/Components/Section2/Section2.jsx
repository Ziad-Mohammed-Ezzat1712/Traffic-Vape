// eslint-disable-next-line no-unused-vars
import React from 'react';
import img1 from '../../../images/prod1.png';
import img2 from '../../../images/prod2.png';
import img3 from '../../../images/prod3.png';
import img4 from '../../../images/prod4.png';
import { Link } from 'react-router-dom';
export default function Section2() {
  const products = [
    {
      id: 1,
      brand: 'HORIZONTECH',
      title: 'HorizonTech - Binaries Cabin Disposable | 6000 puffs | 15mL',
      price: 'From 500 EGP',
      image: img1,
    },
    {
      id: 2,
      brand: 'HORIZONTECH',
      title: 'HorizonTech Binaries Cabin Disposable SV | 15000 Puffs | 20mL',
      price: 'From 1000 EGP',
      image: img2,
    },
    {
      id: 3,
      brand: 'TYSON',
      title: 'HorizonTech Binaries Cabin Disposable SV | 15000 Puffs | 20mL',
      price: 'From 1500 EGP',
      image: img3,
    },
    {
      id: 4,
      brand: 'HORIZONTECH',
      title: 'Binaries Cabin TH6000 Disposable | 6000 Puffs | 12mL | 50mg',
      price: 'From 200 EGP',
      image: img4,
    },
  ];

  return (
    <section className="text-white px-4 py-10 bg-black">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold">TRENDING</h2>
        <Link
  to="/trending"
  className="bg-white text-[#FD0000] px-4 py-2 rounded hover:bg-[#FD0000] hover:text-white text-sm font-semibold"
>
  View All
</Link>
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
