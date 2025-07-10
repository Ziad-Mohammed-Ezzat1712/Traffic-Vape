import axios from 'axios';
import { useFormik } from 'formik'
import React, { useContext, useState } from 'react'
import { UserContext } from '../../Context/UserContext';
import { CartContext } from '../../Context/CartContext';



export default function Checkout() {
  
 let {checkout,CartId} = useContext(CartContext)

 let formik = useFormik({
  initialValues : {
   
    details : "",
    phoen: "",
    city: "",
 
  },
  
  onSubmit:()=>
    handleCheckout(CartId, `http://localhost:5173`),
})
async function handleCheckout(cartId,url) {

  let {data} = await checkout(cartId,url , formik.values) 

  // console.log(data.session.url);
  window.location.href = data.session.url
  
}







  return (
    <>
  
    <h1 className='text-emerald-600 font-bold'>Checkout Now</h1>
    <form onSubmit={formik.handleSubmit} className="max-w-md mx-auto" >

  <div className="relative z-0 w-full mb-5 group">
      <input type="text" name="details" value={formik.values.details} onChange={formik.handleChange} onBlur={formik.handleBlur} id="emal" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-emerald-600 peer" placeholder=" " required />
      <label htmlFor="details" className="peer-focus:font-medium left-0 absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-emerald-600 peer-focus:dark:text-emerald-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter Your details</label>
      {formik.errors.details&& formik.touched.details ? (
<div className="p-4 mb-4 text-red-800 rounded-lg" role="alert">
<span className="font-medium">{formik.errors.details}</span>
</div>
  ) : null }
  </div>
  <div className="relative z-0 w-full mb-5 group">
  <input type="tel" name="phone" value={formik.values.phone} onChange={formik.handleChange} onBlur={formik.handleBlur} id="phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-emerald-600 peer" placeholder=" " required />
      <label htmlFor="phone" className="peer-focus:font-medium left-0 absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-emerald-600 peer-focus:dark:text-emerald-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter Your phone</label>
      {formik.errors.phone&& formik.touched.phone ? (
<div className="p-4 mb-4 text-red-800 rounded-lg" role="alert">
<span className="font-medium">{formik.errors.phone}</span>
</div>
  ) : null }
  </div>
  <div className="relative z-0 w-full mb-5 group">
      <input type="text" name="city" value={formik.values.city} onChange={formik.handleChange} onBlur={formik.handleBlur} id="city" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-emerald-600 peer" placeholder=" " required />
      <label htmlFor="city" className="peer-focus:font-medium left-0 absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-emerald-600 peer-focus:dark:text-emerald-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter Your city</label>
      {formik.errors.city&& formik.touched.city ? (
<div className="p-4 mb-4 text-red-800 rounded-lg" role="alert">
<span className="font-medium">{formik.errors.city}</span>
</div>
  ) : null }
  </div>

 
  
 
  <div className='flex items-center gap-4'>
  <button type="submit" className="text-white bg-emerald-700 hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Checkout</button>
  </div>
  
  </form>
    </>
  )
}
