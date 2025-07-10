import axios from 'axios';
import { useFormik } from 'formik'
import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import * as yup from "yup"
import { UserContext } from '../../Context/UserContext';



export default function Login() {
  let {userLogin,setuserLogin}=useContext(UserContext)
const [errorMessage, seterrorMessage] = useState("")
const [isLoading, setisLoading] = useState(false)
  let navigate = useNavigate()
async function handleLogin(values) {
 setisLoading(true)
 await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signin`, values)

.then((res)=> {console.log(res)
setisLoading(false)

if (res.data.message == "success") {
  localStorage.setItem("userToken", res.data.token)

  setuserLogin(res.data.token)
  navigate("/")   
}
}
)
.catch((res)=>   {
console.log(res);

  seterrorMessage(res.response.data.message)
setisLoading(false)
})
}

let validationSchema = yup.object().shape({
  email: yup.string().email("email not vaild").required("email is required"),
  password: yup.string().required("password is required").min(6,"password min length is 6"),

});

let formik = useFormik({
  initialValues : {
   
    email : "",
    password: "",
 
  },
  validationSchema,
  onSubmit:handleLogin,
})



  return (
    <>
    <div className='h-[38vh] mt-[130px]'>
    {errorMessage ? <div className='w-1/2 mx-auto text-red-600 font-bold  rounded-lg p-3'>
{errorMessage}
    </div> : null}
    <h1 className='text-neutral-600 font-bold'>Login Now</h1>
    <form onSubmit={formik.handleSubmit} className="max-w-md mx-auto" >

  <div className="relative z-0 w-full mb-5 group">
      <input type="email" name="email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} id="emal" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-neutral-600 peer" placeholder=" " required />
      <label htmlFor="email" className="peer-focus:font-medium left-0 absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-neutral-600 peer-focus:dark:text-neutral-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter Your Email</label>
      {formik.errors.email&& formik.touched.email ? (
<div className="p-4 mb-4 text-red-800 rounded-lg" role="alert">
<span className="font-medium">{formik.errors.email}</span>
</div>
  ) : null }
  </div>
  <div className="relative z-0 w-full mb-5 group">
      <input type="password" name="password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} id="password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-neutral-600 peer" placeholder=" " required />
      <label htmlFor="password" className="peer-focus:font-medium left-0 absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-neutral-600 peer-focus:dark:text-neutral-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter Your Password</label>
      {formik.errors.password&& formik.touched.password ? (
<div className="p-4 mb-4 text-red-800 rounded-lg" role="alert">
<span className="font-medium">{formik.errors.password}</span>
</div>
  ) : null }
  </div>
 
  
 
  <div className='flex items-center gap-4'>
  <button type="submit" className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-neutral-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">{isLoading ? <i className='fas fa-spinner fa-spin'></i> : "Login"}</button>
  
  <Link to={"/register"}>  <span className='text-blue-500 underline'>don't you have account ? register now</span>
  </Link>
  <Link to={"/forgetpassword"}>  <span className='text-blue-500 underline'>Forget password</span>
  </Link>
  </div>
  
  </form>
  </div>
    </>
  )
}
