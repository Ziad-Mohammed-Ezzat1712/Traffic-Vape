import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './Components/Home/Home';
import Layout from './Components/Layout/Layout';

import Cart from './Components/Cart/Cart';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import NotFound from './Components/NotFound/NotFound';
import Brands from './Components/Brands/Brands';
import Categories from './Components/Categories/Categories';
import Products from './Components/Products/Products';
import UserContextProvider from './Context/UserContext';
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute';
import ProductDetalis from './Components/ProductDetalis/ProductDetalis';
import CartContextProvider from './Context/CartContext';
import   { Toaster } from 'react-hot-toast';
import Checkout from './Components/Checkout/Checkout';
import Allorders from './Components/Allorders/Allorders';
import ForgetPassword from './Components/ForgetPassword/ForgetPassword';
import WishListContextProvider from './Context/WishListContext';
import Wishlist from './Components/wishlist/wishlist';
import BrandContextProvider from './Context/BrandContext';
import VerifiyCode from './Components/VerifiyCode/VerifiyCode';
import DashboardLayout from './Components/DashboardLayout/DashboardLayout';
import ProductsDashboard from './Components/ProductsDashboard/ProductsDashboard';
import BrandsList from './Components/BrandsList/BrandsList';
import PremiumProducts from './Components/PremiumProducts/PremiumProducts';
import VapingDevices from './Components/VapingDevices/VapingDevices';
import Trending from './Components/Trending/Trending';
import OrderConfirmation from './Components/OrderConfirmation/OrderConfirmation';
import VapeReviewsPage from './Components/VapeReviewsPage/VapeReviewsPage';
import StarterKitsPage from './Components/StarterKitsPage/StarterKitsPage';
import CategoriesELiquidsPage from './Components/CategoriesE-LiquidsPage/CategoriesE-LiquidsPage';
import BrandsELiquids from './Components/BrandsE-Liquids/BrandsE-Liquids';
import ProductsELiquids from './Components/ProductsE-Liquids/ProductsE-Liquids';
import TanksList from './Components/TanksList/TanksList';
import CategoriesAccessoriesList from './Components/CategoriesAccessoriesList/CategoriesAccessoriesList';
import AccessoriesCategory from './Components/AccessoriesCategory/AccessoriesCategory';
import DisposableVapes from './Components/DisposableVapes/DisposableVapes';
import Alternatives from './Components/AlternativesDefinition/AlternativesDefinition';
import Clearance from './Components/Clearance/Clearance';
import NewArrivalsPage from './Components/NewArrivalsPage/NewArrivalsPage';
import { CartProvider } from './Context/CartContext1';
import BestSellersPage from './Components/BestSellersPage/BestSellersPage';







// eslint-disable-next-line no-unused-vars
let x = createBrowserRouter([
  {path : "" , element:<Layout/>,children:[
    {index : true,element:<Home/> },
    {path:"cart",element:<Cart/>},
    {path:"login",element:<Login/>},
    {path:"register",element:<Register/>},
    {path:"forgetpassword",element:<ForgetPassword/>},
    {path:"products",element:<Products/>},
    {path:"*",element:<NotFound/>},
    {path:"premium-products",element:<PremiumProducts/>},
    {path:"vaping-devices",element:<VapingDevices/>},
      { path: '/order-confirmation', element: <OrderConfirmation /> },
    {path:"trending",element:<Trending/>},
    {path:"brands",element:<Brands/>},
    {path:"wishlist",element:<Wishlist/>},
    {path:"verifycode",element:<VerifiyCode/>},
    {path:"checkout",element:<Checkout/>},
    {path:"allorders",element:<Allorders/>},
    {path:"productdetalis/:id/:category",element:<ProductDetalis/>},
    {path:"categories",element:<Categories/>},
    {path:"brandlist",element:<BrandsList/>},
    {path:"reviews",element:<VapeReviewsPage/>},
    {path:"shopstartkits",element:<StarterKitsPage/>},
    {path:"e-liquids",element:<CategoriesELiquidsPage/>},
    {path:"brandseLiquids/:category",element:<BrandsELiquids/>},
    {path:"productseLiquids/:brand",element:<ProductsELiquids/>},
    {path:"tanks",element:<TanksList/>},
    {path:"accessories",element:<CategoriesAccessoriesList/>},
    {path:"/accessories/:category",element:<AccessoriesCategory/>},
    {path:"disposable",element:<DisposableVapes/>},
    {path:"alternatives",element:<Alternatives/>},
    {path:"clearance",element:<Clearance/>},
    {path:"new-arrivals",element:<NewArrivalsPage/>},
    {path:"best-sellers",element:<BestSellersPage/>},


  ]},
{
    path: 'kareem',
    element: <DashboardLayout /> ,
    children: [
      { path: 'products', element: <ProductsDashboard /> }
    ]
  }
]

)

function App() {


  return(
  
  <>
  <CartProvider>
  <UserContextProvider>
    <CartContextProvider>
      <WishListContextProvider>
        <BrandContextProvider>
      <RouterProvider router={x}></RouterProvider>
      </BrandContextProvider>
      </WishListContextProvider>
    <Toaster/>
    </CartContextProvider>
  
  </UserContextProvider>
  </CartProvider>
  </>
  )
}

export default App;
