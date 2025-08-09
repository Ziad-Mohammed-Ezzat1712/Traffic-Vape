import React, { useState } from 'react';
import { useCart } from '../../Context/CartContext1';
import toast from 'react-hot-toast';

import kit1 from '../../../images/starter1.webp';
import kit2 from '../../../images/starter2.webp';
import kit3 from '../../../images/starter3.jpeg';
import kit4 from '../../../images/starter4.jpg';
import eliquid1 from '../../../images/eliquid1.webp';   // صور سوائل الكترونية
import eliquid2 from '../../../images/eliquid2.jpg';
import coil1 from '../../../images/coil1.jpg';         // صور اكسسوارات
import charger1 from '../../../images/charger1.jpg';

export default function StarterKitsPage() {
  const { addToCart } = useCart();
  const [loadingId, setLoadingId] = useState(null);

  const products = [
    // Starter Kits (أجهزة)
    {
      id: 1,
      brand: 'SMOK',
      title: 'SMOK Novo 4 Starter Kit | 800mAh | 2mL',
      price: ' 900 EGP',
      image: kit1,
    },
    {
      id: 2,
      brand: 'VAPORESSO',
      title: 'Vaporesso XROS 3 Mini Starter Kit | 1000mAh',
      price: ' 1100 EGP',
      image: kit2,
    },
    {
      id: 3,
      brand: 'UWELL',
      title: 'Uwell Caliburn A3 Starter Kit | 15W | 2mL',
      price: ' 950 EGP',
      image: kit3,
    },
    {
      id: 4,
      brand: 'GEEKVAPE',
      title: 'GeekVape Wenax K1 SE Starter Kit | 600mAh',
      price: ' 850 EGP',
      image: kit4,
    },
    // E-liquids (سوائل إلكترونية)
    {
      id: 5,
      brand: 'Cool Mist',
      title: 'Mint Chill E-Liquid | 60mL | 3mg Nicotine',
      price: ' 250 EGP',
      image: eliquid1,
    },
    {
      id: 6,
      brand: 'Berry Blast',
      title: 'Berry Blast E-Liquid | 60mL | 6mg Nicotine',
      price: ' 280 EGP',
      image: eliquid2,
    },
    // Accessories (إكسسوارات)
    {
      id: 7,
      brand: 'SMOK',
      title: 'SMOK Replacement Coils Pack - 5 pcs',
      price: ' 150 EGP',
      image: coil1,
    },
{
  id: 8,
  brand: 'Generic',
  title: 'Vape Battery Charger   ',
  price: ' 150 EGP',
  image: charger1, 
}
  ];

  const handleAddToCart = async (product) => {
    setLoadingId(product.id);
    await new Promise((res) => setTimeout(res, 700));
    addToCart(product);
    setLoadingId(null);
    toast.success(`${product.title} added to cart!`);
  };

  return (
    <section className="text-white px-6 py-12 bg-black min-h-screen">
      <h1 className="text-3xl font-bold mb-8">Starter Kits & Accessories</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-[#111] p-4 rounded-lg border border-gray-700 hover:shadow-lg transition duration-300 flex flex-col"
          >
            <img
              src={product.image}
              alt={product.title}
              className="mx-auto mb-4 h-48 object-contain"
            />
            <div className="text-left flex-1">
              <h4 className="text-sm text-gray-400 mb-2">{product.brand}</h4>
              <p className="text-base text-white font-medium mb-2 line-clamp-2">{product.title}</p>
              <span className="text-[#FD0000] font-semibold text-lg">{product.price}</span>
            </div>

            <button
              onClick={() => handleAddToCart(product)}
              disabled={loadingId === product.id}
              className="mt-4 w-full bg-[#FD0000] text-white py-2 rounded hover:bg-red-700 transition disabled:opacity-50"
            >
              {loadingId === product.id ? 'Adding...' : 'Add to Cart'}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
