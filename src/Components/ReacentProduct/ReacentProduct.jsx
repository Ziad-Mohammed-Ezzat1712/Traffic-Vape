// eslint-disable-next-line no-unused-vars
import axios from 'axios'
import img1 from '../../../images/1.jpg'
import img2 from '../../../images/2.jpg'
import img3 from '../../../images/3.jpg'
import img4 from '../../../images/4.jpg'
import img5 from '../../../images/5.jpg'
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext';
import toast from 'react-hot-toast';
import { WishListContext } from '../../Context/WishListContext';

export default function ReacentProduct() {
  let { addProductToCart, NumItem, setNumItem } = useContext(CartContext);
  let { addProductToWishList, setNumItem2, NumItem2 } = useContext(WishListContext);

  const [Loading, setLoading] = useState(false);
  const [CurrentId, setCurrentId] = useState(0);
  const [CurrentId2, setCurrentId2] = useState(0);
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');

  // ✅ بيانات وهمية لمنتجات
  const mockProducts = [
    {
      id: "mock1",
      title: "Vape Device X100",
      category: { name: "E-Liquids" },
      imageCover: "../../../images/1.jpg",
      price: 1500,
      ratingsAverage: 4.5
    },
    
    {
      id: "mock1",
      title: "Vape Device X100",
      category: { name: "Devices" },
      imageCover: '../../../images/3.jpg',
      price: 1500,
      ratingsAverage: 4.5
    },
    {
      id: "mock1",
      title: "Vape Device X100",
      category: { name: "Devices" },
      imageCover: '../../../images/3.jpg',
      price: 1500,
      ratingsAverage: 4.5
    },

    {
      id: "mock2",
      title: "Mint Ice Liquid",
      category: { name: "E-Liquids" },
      imageCover: {img2},
      price: 250,
      ratingsAverage: 4.2
    },
    {
      id: "mock3",
      title: "Car Charger",
      category: { name: "Accessories" },
      imageCover: {img3},
      price: 120,
      ratingsAverage: 3.9
    }
  ];

  async function addToCart(id) {
    setCurrentId(id);
    setLoading(true);
    let response = await addProductToCart(id);

    if (response.data.status === "success") {
      toast.success(response.data.message);
      setNumItem(NumItem + 1);
    } else {
      toast.error(response.data.message);
    }
    setLoading(false);
  }

  async function addToWishList(id) {
    setCurrentId2(id);
    setLoading(true);
    let response = await addProductToWishList(id);

    if (response.data.status === "success") {
      toast.success(response.data.message);
      setNumItem2(NumItem2 + 1);
    } else {
      toast.error(response.data.message);
    }
    setLoading(false);
  }

  async function getProducts() {
    try {
      const res = await axios.get('https://ecommerce.routemisr.com/api/v1/products');
      // ✅ دمج المنتجات الوهمية مع المنتجات الفعلية
      setProducts([...res.data.data,...mockProducts]);
    } catch (error) {
      // ✅ في حالة فشل جلب البيانات من الـ API نستخدم المنتجات الوهمية فقط
      setProducts([...mockProducts]);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter(product => product.category.name === selectedCategory);

  return (
    <>
   <div className="my-4 flex justify-center gap-3 flex-wrap">
  {['All', 'Devices', 'E-Liquids', 'Accessories'].map(cat => (
    <button
      key={cat}
      className={`px-4 py-2 items-center rounded-full text-sm font-medium border ${
        selectedCategory === cat
          ? 'bg-red-600 text-white'
          : 'bg-white text-red-600 border-red-600'
      }`}
      onClick={() => setSelectedCategory(cat)}
    >
      {cat}
    </button>
  ))}
</div>

      <div className="row">
        {filteredProducts.length > 0 ? filteredProducts.map((product) => (
          <div key={product.id} className='w-1/6'>
            <div className="product p-2 my-2 text-start">
              <Link to={`productdetalis/${product.id}/${product.category.name}`}>
                <img src={product.imageCover} className='w-full' alt={product.title} />
                <h3 className='text-emerald-600 '>{product.category.name}</h3>
                <h3 className='font-semibold mb-1'>{product.title.split(" ").slice(0, 2).join(" ")}</h3>
                <div className='flex justify-between p-3'>
                  <span>{product.price} EGP</span>
                  <span><i className='fas fa-star text-yellow-500'></i>{product.ratingsAverage}</span>
                </div>
              </Link>
              <button onClick={() => addToCart(product.id)} className='btn'>
                {Loading && CurrentId === product.id ? <i className='fas fa-spinner fa-spin'></i> : "Add To Cart"}
              </button>
              <br /><br />
              <button onClick={() => addToWishList(product.id)} className='btn'>
                {Loading && CurrentId2 === product.id ? <i className='fas fa-spinner fa-spin'></i> : "Add To WishList"}
              </button>
            </div>
          </div>
        )) : (
         <div className="sk-circle">
  <div className="sk-circle1 sk-child"></div>
  <div className="sk-circle2 sk-child"></div>
  <div className="sk-circle3 sk-child"></div>
  <div className="sk-circle4 sk-child"></div>
  <div className="sk-circle5 sk-child"></div>
  <div className="sk-circle6 sk-child"></div>
  <div className="sk-circle7 sk-child"></div>
  <div className="sk-circle8 sk-child"></div>
  <div className="sk-circle9 sk-child"></div>
  <div className="sk-circle10 sk-child"></div>
  <div className="sk-circle11 sk-child"></div>
  <div className="sk-circle12 sk-child"></div>
</div>
        )}
      </div>

      {/* 
        ✅ الكود القديم قبل الفلترة، لو حبيت ترجعه:

        <div className="row ">
          { products.length >0 ?  products.map((product)=> <div key={product.id} className='w-1/6 '>
          <div  className="product p-2 my-2 text-start">
            <Link to={`productdetalis/${product.id}/${product.category.name}`}><img src={product.imageCover} className='w-full' alt="" />
            <h3 className='text-emerald-600 '>{product.category.name}</h3>
            <h3 className=' font-semibold mb-1'>{product.title.split(" ").slice(0,2).join(" ")}</h3>
            <div className='flex justify-between p-3'>
              <span>{product.price} EGP</span>
              <span><i className='fas fa-star text-yellow-500'></i>{product.ratingsAverage}</span>
            </div></Link>
            <button onClick={()=>addToCart(product.id)} className='btn'>{Loading && CurrentId == product.id ? <i className='fas fa-spinner fa-spin'></i> : "Add To Cart"}</button>
            <br /><br />
            <button onClick={()=>addToWishList(product.id)} className='btn'>{Loading && CurrentId2 == product.id ? <i className='fas fa-spinner fa-spin'></i> : "Add To WishList"}</button>
          </div>
          </div>) :<> 
          <div className="sk-circle">...</div> 
        </> }
        </div> 
      */}
    </>
  );
}
