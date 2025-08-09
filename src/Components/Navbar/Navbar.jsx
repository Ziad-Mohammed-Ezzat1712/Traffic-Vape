import React, { useState, useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import logo from "../../../public/logo.png";
import { UserContext } from '../../Context/UserContext';
import { WishListContext } from '../../Context/WishListContext';
import { useCart } from '../../Context/CartContext1';
import PromoSlider from '../CategoriesSlider/PromoSlider';

export default function Navbar() {
  const { totalItems } = useCart();
  const { userLogin, setuserLogin } = useContext(UserContext);
  const { setNumItem2, NumItem2 } = useContext(WishListContext);

  const navigate = useNavigate();
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

  const navLinkClass = ({ isActive }) =>
    isActive ? "hover:text-red-500 text-red-500 font-semibold" : "hover:text-red-500 text-white font-semibold";

  return (
    <>
      <nav className="text-white top-0 right-0 left-0 bg-black">
        <div className="flex flex-wrap items-center justify-between mx-auto max-w-screen-2xl p-4 gap-y-4">

          <NavLink to='/'>
            <div className="w-full md:w-auto flex justify-center md:justify-start">
              <span className="flex items-center space-x-3 rtl:space-x-reverse">
                <img src={logo} className="h-12 w-auto" alt="Logo" />
              </span>
            </div>
          </NavLink>

          <button
            className="md:hidden text-white text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <i className="fas fa-bars"></i>
          </button>

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

          <div className="hidden md:flex w-full md:w-auto justify-center md:justify-end">
            <ul className="flex gap-4 items-center">
              {userLogin ? (
                <li><span onClick={signout} className="cursor-pointer font-semibold">Signout</span></li>
              ) : (
                <>
                  <li><NavLink to="login" className={navLinkClass}>Login</NavLink></li>
                  <li><NavLink to="register" className={navLinkClass}>Register</NavLink></li>
                </>
              )}
              <NavLink className="text-white relative hover:text-white" to="cart">
                <i className="fa-solid fa-cart-shopping"></i>
                <div className="absolute top-[-13px] right-[-15px] flex items-center justify-center size-5 rounded-full bg-red-600 text-white text-xs font-bold">
                  {totalItems}
                </div>
              </NavLink>
            </ul>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-black text-white text-left px-4 py-3 space-y-4">
            <ul className="space-y-2 text-sm">
              {userLogin ? (
                <li><span onClick={signout} className="cursor-pointer font-semibold block">Signout</span></li>
              ) : (
                <>
                  <li><NavLink to="/login" className={navLinkClass}>Login</NavLink></li>
                  <li><NavLink to="/register" className={navLinkClass}>Register</NavLink></li>
                </>
              )}
              <li>
                <NavLink className="relative inline-block hover:text-red-500 text-white font-semibold" to="/cart">
                  <i className="fa-solid fa-cart-shopping"></i>
                  <span className="ml-2 text-white font-semibold bg-red-600 text-xs px-2 py-1 rounded-full">
                    {totalItems}
                  </span>
                </NavLink>
              </li>
            </ul>

            <div className="border-t border-white pt-3">
              <ul className="flex flex-col gap-2 text-sm font-medium">
                <li><NavLink to="/brandlist" className={navLinkClass}>Brands</NavLink></li>
                <li><NavLink to="/shopstartkits" className={navLinkClass}>Starter Kit</NavLink></li>
                <li><NavLink to="/vaping-devices" className={navLinkClass}>Devices</NavLink></li>
                <li><NavLink to="/tanks" className={navLinkClass}>Tanks</NavLink></li>
                <li><NavLink to="/accessories" className={navLinkClass}>Accessories</NavLink></li>
                <li><NavLink to="/e-liquids" className={navLinkClass}>E-Liquids</NavLink></li>
                <li><NavLink to="/alternatives" className={navLinkClass}>Alternatives</NavLink></li>
                <li><NavLink to="/disposable" className={navLinkClass}>Disposable</NavLink></li>
                <li><NavLink to="/clearance" className={navLinkClass}>Clearance</NavLink></li>
              </ul>
            </div>
          </div>
        )}
      </nav>

      <PromoSlider />

      <div className="py-6 border-b border-white hidden md:block">
        <div className="max-w-screen-2xl mx-auto">
          <ul className="flex flex-wrap justify-center text-md gap-6 text-white font-medium">
            <li><NavLink to="/brandlist" className={navLinkClass}>Brands</NavLink></li>
            <li><NavLink to="/shopstartkits" className={navLinkClass}>Starter Kit</NavLink></li>
            <li><NavLink to="/vaping-devices" className={navLinkClass}>Devices</NavLink></li>
            <li><NavLink to="/tanks" className={navLinkClass}>Tanks</NavLink></li>
            <li><NavLink to="/accessories" className={navLinkClass}>Accessories</NavLink></li>
            <li><NavLink to="/e-liquids" className={navLinkClass}>E-Liquids</NavLink></li>
            <li><NavLink to="/alternatives" className={navLinkClass}>Alternatives</NavLink></li>
            <li><NavLink to="/disposable" className={navLinkClass}>Disposable</NavLink></li>
            <li><NavLink to="/clearance" className={navLinkClass}>Clearance</NavLink></li>
          </ul>
        </div>
      </div>
    </>
  );
}
