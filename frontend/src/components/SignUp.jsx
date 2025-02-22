import React, { useState,useContext } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { ContextStore } from '../store/ContextStore'
import toast from 'react-hot-toast'
import Header from "./Header"
const SignUp = () => {

  const {setToken,setUser}=useContext(ContextStore)
  const navigate=useNavigate()
  const [signupForm,setSignUpForm]=useState({
    userName:"",
    email:"",
    password:"",
    confirmPassword:"",
  })
  const handleChange=(e)=>{
    setSignUpForm({
      ...signupForm,
      [e.target.name]:e.target.value,
    })
  }
  async function handleSubmit(e){
    e.preventDefault();
    const url='http://localhost:3000/api/v1/auth/signup'
    const data=signupForm;
    try{
      // console.log(signupForm)
      const response=await axios.post(url,data);
      if(!response.data.success){
        throw new Error(response.data.message)
      }
        toast.success("Account Created Successfully");  
        navigate("/login")
      
    }catch(err){
      if(err.response.data.message==="User already exist"){
        toast.error("User already registered")
        setSignUpForm({userName:"",
    email:"",
    password:"",
    confirmPassword:"",})
      }else{
        toast.error("Account not created")
      }
      console.log("Error is:",err);
    }
  }

  
  return (
      <div className='w-11/12 pad navbar-color flex flex-col justify-start md:gap-[10%] gap-[2rem] items-center h-[100vh] '>
      <Header/>
    <div className='lg:w-[50%] w-[60%] items-center flex flex-col  justify-center gap-1 lg:mt-0 mt-5 '>
    <p className='font-bold text-4xl'>SignUp</p>

    <form onSubmit={handleSubmit} className='w-[100%]  flex justify-center '>
      <div className='flex gap-2 flex-col  py-4  md:w-[90%] w-[100%]'>
        <label htmlFor="userName" className='text-white'>Enter userName<sup className='text-[#f84d4dfd]'>{" "}*</sup></label>
        
    
        <input type="text" name="userName" id="userName" placeholder='Enter userName' required 
            className='w-[100%] px-4 py-3 text-[1rem] bg-white rounded-md  text_black outline-none border-none pad'
            value={signupForm.userName}
            onChange={(e)=>{handleChange(e)}}
        />
      
        <label htmlFor="email" className='text-white'>Enter Email Address<sup className='text-[#f84d4dfd]'>{" "}*</sup></label>
        
    
        <input type="email" name="email" id="email" placeholder='Enter Email Address' required 
            className='w-[100%] px-4 py-3 text-[1rem] bg-white rounded-md  text_black  outline-none border-none pad'
            value={signupForm.email}
            onChange={(e)=>{handleChange(e)}}
        />
        <label htmlFor="password" className='text-white'>Enter Password<sup className='text-[#f84d4dfd]'>{" "}*</sup></label>
        
        <div className='w-[100%]'>

        <input type="password" name="password" id="password" placeholder='Enter password' required 
             className='w-[100%] px-4 py-3 text-[1rem] bg-white rounded-md  text_black outline-none border-none pad'
             value={signupForm.password}
        
             onChange={(e)=>{handleChange(e)}}
        />
        
        </div>
        <label htmlFor="confirmPassword" className='text-white'>Confirm Password<sup className='text-[#f84d4dfd]'>{" "}*</sup> </label>
        
        <div className='w-[100%]'>

        <input type="password" name="confirmPassword" id="confirmPassword" placeholder='Enter confirm password' required 
             className='w-[100%] px-4 py-3 text-[1rem] bg-white rounded-md  text_black outline-none border-none pad'
             value={signupForm.confirmPassword}
        
             onChange={(e)=>{handleChange(e)}}
        />
        
        </div>
        <button className='bg-gray-400 py-2 text_black w-[100%] rounded-md pad' >
    {"Sign Up"}
        
    </button>
      </div>
      </form>

    
    </div>
  
    </div>
  )
}

export default SignUp
