import React, { useContext } from 'react'
import { ContextStore } from '../store/ContextStore'
import { Link, useNavigate } from 'react-router-dom'
import { SiRiotgames } from "react-icons/si";
import { GiProgression } from "react-icons/gi";
import { SiSololearn } from "react-icons/si";
import { FaHome } from "react-icons/fa";
const Header = () => {
  const {token} =useContext(ContextStore);
  const navigate=useNavigate();
  // console.log(token)
  return (
    <div className='w-[100%] h-20 bg-richblack-800 flex justify-around items-center relative border-b-[1px]  border-gray-800 '>
      {/* for the icon section */}
      <div></div>
      {/* for the links section */}
      <div className='flex gap-6 text-gray-400 font-semibold  p-2'>
      <div className='flex gap-2'>
      <FaHome/>
        <Link to="/games" className=' hover:text-gray-200'>Games</Link> 
      </div>
      <div className='flex gap-2'>
      <SiRiotgames/>
        <Link to="/games" className=' hover:text-gray-200'>Games</Link> 
      </div>
      <div className='flex gap-2'>
      <SiSololearn/>
        <Link to="/tutorial" className=' hover:text-gray-200'>Tutorials</Link>
      </div>
      <div className='flex gap-2'>
      <GiProgression />
        <Link to="/progress" className=' hover:text-gray-200'>Your Progress</Link>
      </div>
      </div>

      {/* for the final login and signup section */}
        <div className='flex gap-2 text-gray-400 font-semibold h-full  justify-center items-center'>
        {
          token?
          (<Link to="/logout" 
          onClick={()=>{
            localStorage.removeItem("token")
            localStorage.removeItem("user")
            toast.success("Logged out successfully")
            navigate("/login")
          }}
          className='text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 text-[1.1rem] font-[500]'>Logout</Link>):
          <div className='flex gap-5'>
          <Link to="/login" className='text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 roounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700  text-[1.1rem] font-[500]'>Login</Link>
          <Link to="/signup" className='text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 text-[1.1rem] font-[500]'>Sign Up</Link>
          </div>
        }
            
        </div>

    </div>
  )
}
 
export default Header