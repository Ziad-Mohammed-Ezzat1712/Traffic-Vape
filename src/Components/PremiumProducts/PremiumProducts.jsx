import React from 'react';
import { FaStar } from 'react-icons/fa';
import { useCart } from '../../Context/CartContext1';

const products = [
  {
    id: 1,
    name: 'Strawberry Burst',
    price: 14.99,
    image: 'https://vapekit.co.uk/images/strawberry-burst-nic-salt-e-liquid-original-series-10ml-p8845-21842_image.jpg',
    rating: 4,
  },
  {
    id: 2,
    name: 'Minty Fresh',
    price: 12.49,
    image: 'https://cdn.vapeclub.co.uk/img/products/fresh-mint-e-liquid-by-hayati-pro-max-nic-salts_4.jpg',
    rating: 5,
  },
  {
    id: 3,
    name: 'Vanilla Dream',
    price: 16.75,
    image: 'https://m.media-amazon.com/images/I/61Ks3EhzL-S._UF1000,1000_QL80_.jpg',
    rating: 3,
  },
   {
    id: 1,
    name: 'Strawberry Burst',
    price: 14.99,
    image: 'https://vapekit.co.uk/images/strawberry-burst-nic-salt-e-liquid-original-series-10ml-p8845-21842_image.jpg',
    rating: 4,
  },
  {
    id: 2,
    name: 'Minty Fresh',
    price: 12.49,
    image: 'https://cdn.vapeclub.co.uk/img/products/fresh-mint-e-liquid-by-hayati-pro-max-nic-salts_4.jpg',
    rating: 5,
  },
  {
    id: 3,
    name: 'Vanilla Dream',
    price: 16.75,
    image: 'https://m.media-amazon.com/images/I/61Ks3EhzL-S._UF1000,1000_QL80_.jpg',
    rating: 3,
  }, {
    id: 1,
    name: 'Strawberry Burst',
    price: 14.99,
    image: 'https://vapekit.co.uk/images/strawberry-burst-nic-salt-e-liquid-original-series-10ml-p8845-21842_image.jpg',
    rating: 4,
  },
  {
    id: 2,
    name: 'Minty Fresh',
    price: 12.49,
    image: 'https://cdn.vapeclub.co.uk/img/products/fresh-mint-e-liquid-by-hayati-pro-max-nic-salts_4.jpg',
    rating: 5,
  },
  {
    id: 3,
    name: 'Vanilla Dream',
    price: 16.75,
    image: 'https://m.media-amazon.com/images/I/61Ks3EhzL-S._UF1000,1000_QL80_.jpg',
    rating: 3,
  },
];

export default function PremiumProducts() {
  const { addToCart } = useCart();
  return (
    <div className="bg-black text-white py-12 px-4 md:px-10">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-[#FD0000]">
        Premium E-Liquids
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="bg-[#1a1a1a] rounded-xl p-5 shadow-md hover:shadow-lg transition-all duration-300">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-80 object-contain rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
            <p className="text-gray-300 mb-2">${product.price.toFixed(2)}</p>
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  className={`mr-1 ${i < product.rating ? 'text-yellow-400' : 'text-gray-500'}`}
                />
              ))}
            </div>
           <button
      onClick={() => addToCart(product)}
      className="bg-[#FD0000] w-full py-2 rounded-md text-white font-semibold hover:bg-red-700 transition"
    >
      Add to Cart
    </button>
          </div>
        ))}
      </div>
    </div>
  );
}
