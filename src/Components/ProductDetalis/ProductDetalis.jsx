// eslint-disable-next-line no-unused-vars
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Slider from 'react-slick'



//https://ecommerce.routemisr.com/api/v1/products/6428de2adc1175abc65ca05b
export default function ProductDetalis() {

  let {id , category}=useParams()
  const [oneProduct, setoneProduct] = useState(null)
  const [relatedProduct, setrelatedProduct] = useState([])
 

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed:1000
  };

  function getOneProduct(id){
    axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
    .then((res)=>{
    setoneProduct(res.data.data)


    })
    .catch((res)=>{
      console.log(res);

    })
  }

  function getAllProduct(){
    axios.get(`https://ecommerce.routemisr.com/api/v1/products`)
    .then((res)=>{
    let releted = res.data.data.filter((product)=> product.category.name== category)
    setrelatedProduct(releted)
  })
    .catch((err)=>{
    console.log(err)
    })
  }

  useEffect(()=>{
    getOneProduct(id);
    getAllProduct();
  },[id , category])
  
  return (
    <>
   <div className="row items-center text-start  ">
    <div className="w-1/4">
    <Slider {...settings}>
    {oneProduct?.images.map((src)=> <img src={src} className='w-full'/>)}
    </Slider>
    </div>
    <div className="w-3/4 p-5   ">
    <h3 className="font-semibold capitalize text-2xl">{oneProduct?.title}</h3>
    <h4 className="text-gray-700 my-4">{oneProduct?.description}</h4>
    <h4 className="text-gray-700 my-4">{oneProduct?.category.name}</h4>
    <div>
    <div className='flex justify-between my-5 '>
        <span>{oneProduct?.price} EGP</span>
        <span><i className='fas fa-star text-yellow-500'></i>{oneProduct?.ratingsAverage}</span>
      </div>
      <button className='btn'>Add To Cart</button>
    </div>

    </div>

   </div>

     <div className="row">
    { relatedProduct.length >0 ?  relatedProduct.map((product)=> <div key={product.id} className='w-1/6 '>
    <div  className="product p-2 my-2 text-start">
      <Link to={`/productdetalis/${product.id}/${product.category.name}`}><img src={product.imageCover} className='w-full' alt="" />
      <h3 className='text-emerald-600 '>{product.category.name}</h3>
      <h3 className=' font-semibold mb-1'>{product.title.split(" ").slice(0,2).join(" ")}</h3>
      <div className='flex justify-between p-3'>
        <span>{product.price} EGP</span>
        <span><i className='fas fa-star text-yellow-500'></i>{product.ratingsAverage}</span>
      </div></Link>
      <button className='btn'>Add To Cart</button>
    </div>
    </div>) :<> <div className="sk-circle">
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
</div> </> }

    
    </div> 
    </>
  )
}
