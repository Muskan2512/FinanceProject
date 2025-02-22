import React, { useContext } from 'react'
import { ContextStore } from '../store/ContextStore'
import { Link, useNavigate } from 'react-router-dom'
import { SiRiotgames } from "react-icons/si";
import { GiProgression } from "react-icons/gi";
import { SiSololearn } from "react-icons/si";
import { FaHome } from "react-icons/fa";
import logo from "../assets/logo.jpeg";
import toast from 'react-hot-toast'
const Header = () => {
  const {token,setToken,setUser} =useContext(ContextStore);
  const navigate=useNavigate();

   const handleLogout=()=>{
    setToken(null);
    setUser(null);
    toast.success("Logout Successful");
    localStorage.clear()
    console.log("Inside logout function")
    navigate("/");
  }


  // console.log(token)
  return (
    <div className='w-[100%] h-20 bg-[#161D29] flex justify-around items-center relative border-b-[1px]  border-gray-800 navbar-color'>
      {/* for the icon section */}
      <Link to="/" >
      <img src={logo} height={20} width={20} className="rounded-full wid"/>
      </Link>
      {/* for the links section */}
      <div className='flex gap-6 text-gray-400 font-semibold  p-2'>
      <div className='flex gap-2 justify-center items-center'>
      <FaHome/>
        <Link to="/" className=' hover:text-gray-200'>Home</Link> 
      </div>
      <div className='flex gap-2 justify-center items-center'>
      <SiRiotgames/>
        <Link to="/games" className=' hover:text-gray-200'>Games</Link> 
      </div>
      <div className='flex gap-2 justify-center items-center'>
      <SiSololearn/>
        <Link to="/tutorial" className=' hover:text-gray-200'>Tutorials</Link>
      </div>
      <div className='flex gap-2 justify-center items-center'>
      <GiProgression />
        <Link to="/progress" className=' hover:text-gray-200'>Your Progress</Link>
      </div>
      </div>

      {/* for the final login and signup section */}
        <div className='flex gap-2 text-gray-400 font-semibold h-full  justify-center items-center'>
        {
          token?
          (<button  
          onClick={()=>{handleLogout()}}
          className='text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 text-[1.1rem] font-[500] pad'>Logout</button>):
          <div className='flex gap-5'>
          <Link to="/login" className='text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 roounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700  text-[1.1rem] font-[500] pad'>Login</Link>
          <Link to="/signup" className='text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 text-[1.1rem] font-[500] pad'>Sign Up</Link>
          </div>
        }
            
        </div>

    </div>
  )
}
 
export default Header