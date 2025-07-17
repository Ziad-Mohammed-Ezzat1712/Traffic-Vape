import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from "../../../public/logo.png";
import { UserContext } from '../../Context/UserContext';
import { CartContext } from '../../Context/CartContext';
import { WishListContext } from '../../Context/WishListContext';
import PromoSlider from '../CategoriesSlider/PromoSlider';

export default function Navbar() {
  let { NumItem } = useContext(CartContext);
  let { userLogin, setuserLogin } = useContext(UserContext);
  let { setNumItem2, NumItem2 } = useContext(WishListContext);

  let navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  function signout() {
    localStorage.removeItem("userToken");
    setuserLogin(null);
    navigate("/login");
  }

  function handleSearch(e) {
    e.preventDefault();
    if (!searchTerm.trim()) return;
    navigate(`/search?query=${encodeURIComponent(searchTerm)}&category=${encodeURIComponent(category)}`);
  }

  return (
    <>
      <nav className="text-white top-0 right-0 left-0 bg-black">
        <div className="flex flex-wrap items-center justify-between mx-auto max-w-screen-2xl p-4 gap-y-4">
          {/* Logo */}
          <Link to='/'>
            <div className="w-full md:w-auto flex justify-center md:justify-start">
              <span className="flex items-center space-x-3 rtl:space-x-reverse">
                <img src={logo} className="h-12 w-auto" alt="Logo" />
              </span>
            </div>
          </Link>

          {/* Hamburger for mobile */}
          <button
            className="md:hidden text-white text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <i className="fas fa-bars"></i>
          </button>

          {/* Search Bar */}
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

          {/* Desktop Buttons */}
          <div className="hidden md:flex w-full md:w-auto justify-center md:justify-end">
            <ul className="flex gap-4 items-center">
              {userLogin ? (
                <li><span onClick={signout} className="cursor-pointer font-semibold">Signout</span></li>
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

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-black text-white text-left px-4 py-3 space-y-4">
            <ul className="space-y-2 text-sm">
              {userLogin ? (
                <li><span onClick={signout} className="cursor-pointer font-semibold block">Signout</span></li>
              ) : (
                <>
                  <li><Link to="/login" className="block hover:text-red-500 text-white  font-semibold">Login</Link></li>
                  <li><Link to="/register" className="block hover:text-red-500 text-white  font-semibold">Register</Link></li>
                </>
              )}
              <li>
                <Link className="relative inline-block hover:text-red-500 text-white  font-semibold" to="/cart">
                  <i className="fa-solid fa-cart-shopping"></i>
                  
                  <span className="ml-2 text-white  font-semibold bg-red-600 text-xs px-2 py-1 rounded-full">{NumItem}</span>
                </Link>
              </li>
            </ul>

            <div className="border-t border-white pt-3">
              <ul className="flex flex-col gap-2 text-sm font-medium">
                <li><Link to="/brandlist" className="hover:text-red-500 text-white  font-semibold">Brands</Link></li>
                <li><Link to="/starter-kit"className="hover:text-red-500 text-white  font-semibold">Starter Kit</Link></li>
                <li><Link to="/devices"className="hover:text-red-500 text-white  font-semibold">Devices</Link></li>
                <li><Link to="/tanks"className="hover:text-red-500 text-white  font-semibold">Tanks</Link></li>
                <li><Link to="/accessories"className="hover:text-red-500 text-white  font-semibold">Accessories</Link></li>
                <li><Link to="/e-liquids"className="hover:text-red-500 text-white  font-semibold">E-Liquids</Link></li>
                <li><Link to="/alternatives"className="hover:text-red-500 text-white  font-semibold">Alternatives</Link></li>
                <li><Link to="/disposable"className="hover:text-red-500 text-white  font-semibold">Disposable</Link></li>
                <li><Link to="/clearance"className="hover:text-red-500 text-white  font-semibold">Clearance</Link></li>
              </ul>
            </div>
          </div>
        )}
      </nav>

      <PromoSlider />

      {/* Desktop Menu Links */}
      <div className="py-6 border-b border-white hidden md:block">
        <div className="max-w-screen-2xl mx-auto">
          <ul className="flex flex-wrap justify-center text-md gap-6 text-white font-medium">
            <li><Link to="/brandlist" className="hover:text-red-500 text-white  font-semibold">Brands</Link></li>
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
  );
}
