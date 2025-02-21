import React from 'react'
import Header from './Header'
import Hero from "../assets/hero.mp4"
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div className='h-fit min-h-[100vh] w-screen bg-[#161D29] flex flex-col justify-center items-center gap-5'>
<Header/>
    <video muted autoPlay loop className='object-contain w-[90%] mx-auto'>
    <source src={Hero} type="video/mp4" />
</video>


<div className='text-white  w-screen  flex flex-col items-center justify-center'>
<p className=' text-3xl text-center text-gray font-[Inter] font-semibold'>About Us</p>
  <p className='text-center  w-[80%] mx-auto text-gray-300 leading-[2rem] font-medium '>Welcome to our Game, an interactive and engaging financial literacy game designed to help users learn essential money management skills in a fun way!

In today's world, financial knowledge is more important than ever. Whether it's budgeting, saving, investing, or understanding credit, our game provides real-life financial scenarios that allow players to make smart money decisions while having fun.</p>
</div>
    </div>
  )
}

export default Home
