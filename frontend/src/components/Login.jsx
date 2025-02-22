import React, { useContext, useState } from 'react'
import axios from 'axios'
import { ContextStore } from '../store/ContextStore'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

import Header from "./Header"
const Login = () => {

  const {setToken,setUser}=useContext(ContextStore)
  const navigate=useNavigate()

  const [LoginForm,setLoginForm]=useState({
    email:"",
    password:""
  })
  function handleChange(e){
    setLoginForm(
      {
      ...LoginForm,
      [e.target.name]:e.target.value,
    }
  )
  }
  async function handleSubmit(e){
    e.preventDefault();
    const url='http://localhost:3000/api/v1/auth/login'
    const data=LoginForm;
    try{
      console.log(LoginForm)
      const response=await axios.post(url,data);
      if(!response?.data?.success){
        toast.error(response.data.message)
        throw new Error("Error Occurred");
      }
      toast.success(response.data.message)
      setToken(response.data.token)
      setUser(response.data.existUser)
      localStorage.setItem("token",JSON.stringify(response.data.token))
      localStorage.setItem("user",JSON.stringify(response.data.existUser))      
      navigate("/games")     
      console.log(response)
    }catch(err){
      toast.error(err.response.data.message)
      console.log(err);
    }
  }


  return (

 <div className='w-11/12  h-fit min-h-[100vh] flex flex-col justify-start md:gap-[10%] gap-[4rem] items-center '>
 <Header/>
    
    <div className='lg:w-[50%] w-[60%] items-center flex flex-col  justify-center gap-1 lg:mt-0 mt-5 '>
    <p className='font-bold text-4xl navbar-color'>Login</p>
    {/* onSubmit={handleSubmit} */}
    <form onSubmit={handleSubmit}  className='w-[100%]   flex justify-center '>
      <div className='flex gap-2 flex-col  py-4  md:w-[90%] w-[100%]'>
        <label htmlFor="email" className='navbar-color'>Enter Email<sup className='text-[#f84d4dfd]'>{" "}*</sup></label>
        
    
        <input type="email" name="email" id="email" placeholder='Enter email' required 
            className='w-[100%] p-[14px] text-[1rem] bg-white rounded-md text-black outline-none border-none input'
            onChange={(e)=>{handleChange(e)}}
        />
        <label htmlFor="password" className='navbar-color'>Enter Password<sup className='text-[#f84d4dfd]'>{" "}*</sup></label>
        
        <div className='w-[100%]'>

        <input type="password" name="password" id="password" placeholder='Enter password' required 
             className='w-[100%] px-4 py-3 text-[1rem] bg-white text-black rounded-md  outline-none border-none  input'
        
             onChange={(e)=>{handleChange(e)}}
        />
        </div>
        <button className='bg-gray-400 py-2 text-black w-[100%] rounded-md cursor-pointer pad' >
    {"Sign In"}
        
    </button>
      </div>
      </form>

    
    </div>
   
    </div>
     
    
  )
}

export default Login
