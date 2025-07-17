// eslint-disable-next-line no-unused-vars
import React from 'react';
import photo1 from '../../../images/photo1.png';
import photo2 from '../../../images/photo2.png';
import photo3 from '../../../images/photo3.png';
import photo4 from '../../../images/photo4.png';

export default function Section7() {
  const products = [
    { id: 1, image: photo1, title: "Free Shipping Over 500 EGP" },
    { id: 2, image: photo2, title: "Become An Affiliate" },
    { id: 3, image: photo3 , title: "Clearance"},
    { id: 4, image: photo4, title: "Perks & Rewards" },
  ];

  return (
    <section className="text-white px-4 py-10 bg-black">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product, index) => (
          <div
            key={product.id}
            className="relative border border-white overflow-hidden group"
          >
            {/* ✅ الصورة */}
            <img
              src={product.image}
              alt={`product-${index}`}
              className="w-full h-full object-cover"
            />

            {/* ✅ اللاير فوق الصورة */}
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <h1 className="text-white text-xl font-bold text-center">{product.title}</h1>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
