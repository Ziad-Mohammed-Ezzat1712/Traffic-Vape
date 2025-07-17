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
    {path:"brands",element:<Brands/>},
    {path:"wishlist",element:<ProtectedRoute><Wishlist/></ProtectedRoute>},
    {path:"verifycode",element:<VerifiyCode/>},
    {path:"checkout",element:<ProtectedRoute><Checkout/></ProtectedRoute>},
    {path:"allorders",element:<ProtectedRoute><Allorders/></ProtectedRoute>},
    {path:"productdetalis/:id/:category",element:<ProtectedRoute><ProductDetalis/></ProtectedRoute>},
    {path:"categories",element:<ProtectedRoute><Categories/></ProtectedRoute>},
    {path:"brandlist",element:<ProtectedRoute><BrandsList/></ProtectedRoute>},

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
  </>
  )
}

export default App;
