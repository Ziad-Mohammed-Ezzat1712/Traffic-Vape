import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  {
    id: 'egyptian-liquid',
    title: 'Egyptian Liquid',
    image: 'https://www.elkoteg.com/wp-content/uploads/2024/12/تصميم-بدون-عنوان1-300x300.jpg',
    productCount: 188,
  },
  {
    id: 'egyptian-salt',
    title: 'Egyptian Salt',
    image: 'https://www.elkoteg.com/wp-content/uploads/2024/12/تصميم-بدون-عنوان2-300x300.jpg',
    productCount: 12,
  },
  {
    id: 'premium-liquid',
    title: 'Premium Liquid',
    image: 'https://www.elkoteg.com/wp-content/uploads/2024/12/تصميم-بدون-عنوان-300x300.jpg',
    productCount: 12,
  },
  {
    id: 'premium-salt',
    title: 'Premium Salt',
    image: 'https://www.elkoteg.com/wp-content/uploads/2024/12/تصميم-بدون-عنوان3-300x300.jpg',
    productCount: 16,
  },
];

export default function CategoriesELiquidsPage() {
  return (
    <>

    <h1 className='text-6xl font-bold mb-8 text-white'>Liquid</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
      
      {categories.map((cat) => (
        <Link
          key={cat.id}
          to={`/brandseLiquids/${cat.id}`}
              className=" rounded shadow hover:shadow-lg text-center p-0 relative overflow-hidden"
        >
          <img src={cat.image} alt={cat.title} className="mx-auto mb-2  object-cover w-full" />
           <div className="absolute bottom-6  left-0 right-0 bg-white bg-opacity-80 w-80 mx-auto py-5 px-3">
      <h3 className="font-semibold text-center">{cat.title.toUpperCase()}</h3>
    </div>
          
          
          
        </Link>
      ))}
    </div>
    </>
  );
}




