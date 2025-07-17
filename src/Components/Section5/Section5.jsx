// eslint-disable-next-line no-unused-vars
import React from 'react';
import brand1 from '../../../images/brand1.jpg';
import brand2 from '../../../images/brand2.jpg';
import brand3 from '../../../images/brand3.png';
import brand4 from '../../../images/brand4.jpg';
import brand5 from '../../../images/brand5.jpg';
import brand6 from '../../../images/brand6.jpg';
import brand7 from '../../../images/brand7.jpg';
import brand8 from '../../../images/brand8.jpg';
import brand9 from '../../../images/brand9.jpg';
import brand10 from '../../../images/brand10.jpg';
export default function Section5() {
  const products = [
    {
      id: 1,
      
      image: brand1,
    },
    {
      id: 2,
      
      image: brand2,
    },
    {
      id: 3,
     
      image: brand3,
    },
    {
      id: 4,
      image: brand4,
    },
      {
      id: 5,
      image: brand5,
    },
      {
      id: 6,
      image: brand6,
    },
      {
      id: 7,
      image: brand7,
    },
      {
      id: 8,
      image: brand8,
    },
      {
      id: 9,
      image: brand9,
    },
      {
      id: 10,
      image: brand10,
    },

  ];

  return (
    <section className="text-white px-4 py-10 bg-black">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold">FEATURED BRANDS
</h2>
       
      </div>

      {/* Product Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-0">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-[#111] p-4  border border-white hover:shadow-lg transition duration-300"
          >
            <img
              src={product.image}
              alt={product.title}
              className="mx-auto mb-4 h-48 object-contain"
            />
            
          </div>
        ))}
      </div>
    </section>
  );
}
