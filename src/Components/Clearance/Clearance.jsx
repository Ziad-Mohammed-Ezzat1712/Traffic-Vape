import React, { useState } from 'react';
import { useCart } from '../../Context/CartContext1';
import toast from 'react-hot-toast';

const clearanceProducts = [
  {
    id: 'clear1',
    name: 'SMOK Starter Kit - Clearance',
    price: '750 EGP',
    image: 'https://cdn11.bigcommerce.com/s-og5cwbhm/images/stencil/1280x1280/products/5460/20234/SMOK_Vape_Pen_V2_Pen_Kits__49289.1627130123.jpg?c=2',
  },
  {
    id: 'clear2',
    name: 'GeekVape Coil Pack - Clearance',
    price: '100 EGP',
    image: 'https://lavaporwholesale.com/cdn/shop/files/image_2024_02_20T00_15_52_028Z_1.png?v=1708535488',
  },
  {
    id: 'clear3',
    name: 'Vape Battery Charger - Clearance',
    price: '70 EGP',
    image: 'https://cdn11.bigcommerce.com/s-og5cwbhm/images/stencil/290x360/products/4121/14750/Xtar_VC2_Charger_Lead__46260.1554715208.jpg?c=2',
  },
  {
    id: 'clear4',
    name: 'Berry Blast E-Liquid - Clearance',
    price: '200 EGP',
    image: 'https://cdn.vapeclub.co.uk/img/products/berry-blast-e-liquid-by-doozy-vape-co.jpg',
  },
];

export default function Clearance() {
  const { addToCart } = useCart();
  const [loadingId, setLoadingId] = useState(null);

  const handleAddToCart = async (product) => {
    setLoadingId(product.id);
    await new Promise((r) => setTimeout(r, 700));
    addToCart(product);
    setLoadingId(null);
    toast.success(`${product.name} added to cart!`);
  };

  return (
    <section className="p-6 bg-black min-h-screen text-white">
      <h1 className="text-3xl font-bold mb-8">Clearance Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {clearanceProducts.map((product) => (
          <div
            key={product.id}
            className="bg-[#111] p-4 rounded-lg border border-gray-700 hover:shadow-lg transition duration-300 flex flex-col"
          >
            <img
              src={product.image}
              alt={product.name}
              className="mx-auto mb-4 h-80 object-contain"
              loading="lazy"
            />
            <div className="text-left flex-1">
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-white font-semibold text-lg">{product.price}</p>
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
