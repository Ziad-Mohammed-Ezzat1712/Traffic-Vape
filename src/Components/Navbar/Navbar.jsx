import React, { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from "../../../public/logo.png"
import { UserContext } from '../../Context/UserContext'
import { CartContext } from '../../Context/CartContext'
import { WishListContext } from '../../Context/WishListContext'
import PromoSlider from '../CategoriesSlider/PromoSlider'


export default function Navbar() {
  let { NumItem, setNumItem } = useContext(CartContext)
  let { userLogin, setuserLogin } = useContext(UserContext)
  let { setNumItem2, NumItem2 } = useContext(WishListContext)

  let navigate = useNavigate()

  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('');

  function signout() {
    localStorage.removeItem("userToken")
    setuserLogin(null)
    navigate("/login")
  }

  
  function handleSearch(e) {
    e.preventDefault();
    if (!searchTerm.trim()) return;

    
    navigate(`/search?query=${encodeURIComponent(searchTerm)}&category=${encodeURIComponent(category)}`);
  }

  return (
  <>
    <nav className="text-white top-0 right-0 left-0">
      <div className="flex flex-wrap items-center justify-between mx-auto max-w-screen-2xl p-4 gap-y-4">

    
    <Link to='/'>
        <div className="w-full md:w-auto flex justify-center md:justify-start">
          <span className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={logo} className="h-12 w-auto" alt="Logo" />
          </span>
        </div></Link>

        {/* ✅ صندوق البحث */}
        {userLogin != null && (
          <div className="w-full md:flex-1 flex justify-center order-last md:order-none">
            <form
              onSubmit={handleSearch}
              className="flex w-full max-w-[800px] border border-red-500 rounded overflow-hidden bg-white"
            >
              <input
                type="text"
                placeholder="Search for products"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex-1 px-4 py-2 text-red-600 placeholder-red-500 outline-none text-sm"
              />
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="px-3 py-2 text-red-600 bg-white border-l border-red-500 outline-none text-sm"
              >
                <option value="">Select Category</option>
                <option value="All Categories">All Categories</option>
                <option value="Accessories">Accessories</option>
                <option value="Alternatives">Alternatives</option>
                <option value="Disposable E-Cigarette">Disposable E-Cigarette</option>
                <option value="e Juice">e Juice</option>
                <option value="Fee Rule">Fee Rule</option>
                <option value="Mod">Mod</option>
                <option value="Mystery Bage">Mystery Bage</option>
                <option value="Nicotine Pouch">Nicotine Pouch</option>
                <option value="Pod System">Pod System</option>
                <option value="Rebuildables">Rebuildables</option>
                <option value="Replacement Coils">Replacement Coils</option>
                <option value="Replacement Glass">Replacement Glass</option>
                <option value="Replacement Pods">Replacement Pods</option>
                <option value="Starter Kits">Starter Kits</option>
                <option value="Tank">Tank</option>
              </select>
              <button type="submit" className="bg-red-600 px-4 py-2 text-white">
                <i className="fas fa-search"></i>
              </button>
            </form>
          </div>
        )}

        {/* ✅ أزرار الدخول والعربة فقط */}
        <div className="w-full md:w-auto flex justify-center md:justify-end">
          <ul className="flex gap-4 items-center">
            {userLogin != null ? (
              <li><span onClick={signout} className="cursor-pointer font-semibold ">Signout</span></li>
            ) : (
              <>
                <li><Link to="login" className='text-white hover:text-white font-semibold'>Login</Link></li>
                <li><Link to="register" className='text-white hover:text-white font-semibold'>Register</Link></li>
              </>
            )}
            <Link className="text-white relative hover:text-white" to="cart">
              <i className="fa-solid fa-cart-shopping"></i>
              <div className="absolute top-[-13px] right-[-15px] flex items-center justify-center size-5 rounded-full bg-red-600 text-white text-xs font-bold">
                {NumItem}
              </div>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
    <PromoSlider />
    <div className=" py-6  border-b border-white">
  <div className="max-w-screen-2xl mx-auto ">
    <ul className="flex flex-wrap  justify-center text-md gap-6 text-white  font-medium">
      <li><Link to="/brandlist" className="hover:text-red-500 text-white  font-semibold ">Brands</Link></li>
      <li><Link to="/starter-kit" className="hover:text-red-500 text-white  font-semibold">Starter Kit</Link></li>
      <li><Link to="/devices" className="hover:text-red-500 text-white  font-semibold">Devices</Link></li>
      <li><Link to="/tanks" className="hover:text-red-500 text-white  font-semibold">Tanks</Link></li>
      <li><Link to="/accessories" className="hover:text-red-500 text-white  font-semibold">Accessories</Link></li>
      <li><Link to="/e-liquids" className="hover:text-red-500 text-white  font-semibold">E-Liquids</Link></li>
      <li><Link to="/alternatives" className="hover:text-red-500 text-white  font-semibold">Alternatives</Link></li>
      <li><Link to="/disposable" className="hover:text-red-500 text-white  font-semibold">Disposable</Link></li>
      <li><Link to="/clearance" className="hover:text-red-500 text-white  font-semibold">Clearance</Link></li>
    </ul>
  </div>
</div>
  </>
)

}
