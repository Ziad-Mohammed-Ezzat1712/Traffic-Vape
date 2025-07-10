// eslint-disable-next-line no-unused-vars
import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext';
import toast from 'react-hot-toast';
import { WishListContext } from '../../Context/WishListContext';




export default function ReacentProduct() {

  let {addProductToCart, NumItem , setNumItem} = useContext(CartContext)
let {addProductToWishList , setNumItem2, NumItem2 } = useContext(WishListContext)
  const [Loading, setLoading] = useState(false)
  const [CurrentId, setCurrentId] = useState(0)
  const [CurrentId2, setCurrentId2] = useState(0)


 async function addToCart (id) {
  setCurrentId(id)
  setLoading(true)
  let response = await addProductToCart(id)
  console.log(response.data );


  if(response.data.status == "success"){

    toast.success(response.data.message)

    setNumItem(NumItem + 1 )

    setLoading(false)

  }
  else{

    toast.error(response.data.message)
    setLoading(false)


  }
  
 }
 async function addToWishList (id) {
   setCurrentId2(id)
   setLoading(true)
  let response = await addProductToWishList(id)
  console.log(response );


  if(response.data.status == "success"){

    toast.success(response.data.message)

    setNumItem2(NumItem2 + 1 )

    setLoading(false)

  }
  else{

    toast.error(response.data.message)
    setLoading(false)


  }
  
 }

const [products, setproducts] = useState([])
 async function getProducts(){
   await axios.get('https://ecommerce.routemisr.com/api/v1/products')
    .then((res)=>{
     
      
     setproducts(res.data.data)

     
    })
    .catch((res)=>{


    })

   
  }

  useEffect(()=>{
    getProducts();
      },[])

  return (
    <>
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
      <br />
      <br />
      <button onClick={()=>addToWishList(product.id)} className='btn'>{Loading && CurrentId2 == product.id ? <i className='fas fa-spinner fa-spin'></i> : "Add To WishList"}</button>
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
