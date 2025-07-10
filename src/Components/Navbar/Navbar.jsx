import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from "../../../public/logo.png"
import { UserContext } from '../../Context/UserContext'
import { CartContext } from '../../Context/CartContext'
import { WishListContext } from '../../Context/WishListContext'



export default function Navbar() {
  let {NumItem,setNumItem} =useContext(CartContext)
  let {userLogin,setuserLogin}=useContext(UserContext)
  let {setNumItem2, NumItem2 } = useContext(WishListContext)
  
  let navigate = useNavigate()
  

  function signout(){
    localStorage.removeItem("userToken")
    setuserLogin(null)
    navigate("/login")
  }
  
  return (
    <>
    

<nav className="bg-slate-300  top-0 right-0 left-0 border-gray-200  ">
    <div className="flex flex-wrap  justify-center gap-3 lg:justify-between items-center mx-auto max-w-screen-2xl p-4">

<div className='flex items-center gap-2'>
        <span to="" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={logo} className='h-12 w-50' />
            
        </span>
        {userLogin != null ? <>
          <ul className='flex gap-5'>
          <li><Link className='text-slate-600' to = "">Home</Link></li>
          <li><Link className='text-slate-600' to = "brands">Brands</Link></li>
          <li><Link className='text-slate-600 relative' to = "cart">
          Cart 
          <div className='absolute top-[-13px] right-[-15px] flex items-center justify-center size-5 rounded-full bg-red-600 text-white'>{NumItem}</div>
        
          </Link></li>
          <li><Link className='text-slate-600 relative' to = "wishlist">
          Wishlist 
          <div className='absolute top-[-13px] right-[-15px] flex items-center justify-center size-5 rounded-full bg-red-600 text-white'>{NumItem2}</div>

          </Link></li>
          <li><Link className='text-slate-600' to = "categories">Categories</Link></li>
        </ul>
        </> : null}
        </div>




        <div className="flex items-center space-x-6 rtl:space-x-reverse">
         <ul className='flex gap-4'>
<li><i className="fab fa-facebook"></i></li>
<li><i className="fab fa-youtube"></i></li>
<li><i className="fab fa-instagram"></i></li>
<li><i className="fab fa-linkedin"></i></li>
<li><i className="fab fa-tiktok"></i></li>
<li><i className="fab fa-twitter"></i></li>
         </ul>
         <ul  className='flex gap-4'>

          {userLogin != null ? <li><span onClick={signout} className="cursor-pointer" >Signout</span></li> : <>
            <li><Link to="login">Login</Link></li>
            <li><Link to="register">Register</Link></li>
          </>}
  
          
         </ul>
        </div>
    </div>
</nav>


    </>
  )
}
