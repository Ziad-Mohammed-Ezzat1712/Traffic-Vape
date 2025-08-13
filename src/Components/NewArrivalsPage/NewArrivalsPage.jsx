import React, { useState } from 'react';
import { useCart } from '../../context/CartContext1';

import 'react-toastify/dist/ReactToastify.css';
import img5 from '../../../images/img5.png';
import img6 from '../../../images/img6.png';
import img7 from '../../../images/img7.png';
import img8 from '../../../images/img8.png';
import toast from 'react-hot-toast';

export default function NewArrivalsPage() {
  const { addToCart } = useCart();
  const [loadingId, setLoadingId] = useState(null); // لتحديد الزر اللي بيعمل لودينج

  const products = [
    { id: 1, brand: 'DKHAAN', title: 'Dkhaan Infinity Portable Hookah Nest', price: 'From 200 EGP', image: img5 },
    { id: 2, brand: 'SMYLE LABS', title: 'Smyle (DSPLY 20pc)(510BATT) Mini Plug', price: 'From 1000 EGP', image: img6 },
    { id: 3, brand: 'SMYLE LABS', title: 'Smyle (510BATT) Wandjamin Cart', price: 'From 350 EGP', image: img7 },
    { id: 4, brand: 'SMYLE LABS', title: 'Smyle (Lighter) Fyre Saber Shaped Torch', price: 'From 150 EGP', image: img8 },
  ];

  const handleAddToCart = (product) => {
    setLoadingId(product.id);

    // محاكاة تحميل قبل الإضافة
    setTimeout(() => {
      addToCart(product);
     toast.success(`${product.title} added to cart!`);
      setLoadingId(null);
    }, 800);
  };

  return (
    <section className="text-white px-4 py-10 bg-black min-h-screen">
      <h2 className="text-3xl font-bold mb-8">New Arrivals</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-[#111] p-4 rounded-lg border border-gray-700 hover:shadow-lg transition duration-300"
          >
            <img src={product.image} alt={product.title} className="mx-auto mb-4 h-48 object-contain" />
            <div className="text-left mb-4">
              <h4 className="text-sm text-gray-400 mb-2">{product.brand}</h4>
              <p className="text-base text-white font-medium mb-2">{product.title}</p>
              <span className="text-[#FD0000] font-semibold text-lg">{product.price}</span>
            </div>
            <button
              onClick={() => handleAddToCart(product)}
              disabled={loadingId === product.id}
              className={`w-full py-2 rounded transition ${
                loadingId === product.id
                  ? 'bg-gray-600 cursor-not-allowed'
                  : 'bg-[#FD0000] hover:bg-red-700 text-white'
              }`}
            >
              {loadingId === product.id ? 'Adding...' : 'Add to Cart'}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
