import React from 'react'
import logo from '../assets/pnglogo.png' 
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='flex items-center justify-between w-screen h-[13vh]'>
        <div className=''>
            <img src={logo} className=' h-20 w-auto' alt='Eazy Wed Logo'/>
        </div>
        <div className='bg-purple shadow-md  justify-center relative my-10 shadow-black h-36 w-64 mt-[-40px] flex align-text-bottom p-4 rounded-bl-full hover:shadow-purple hover:shadow-lg  transition-all ease-in-out duration-300  rounded-br-full'>
            <h1 className='text-lg mx-auto font-bold  absolute bottom-10  text-white '>Booking Made Simple</h1>
            <h1 className='text-lg mx-auto font-bold  absolute bottom-5  text-white'>&</h1>
            <h1 className='text-lg mx-auto font-bold  absolute bottom-1  text-white'>Easy</h1>


        </div>
        <div className='flex items-center gap-4 p-3 mt-0 bg-purple shadow-lg shadow-black rounded-tl-full sm:w-[35%] sm:h-[50px]'>
<NavLink className='font-bold text-white  cursor-pointer text-xl mx-3 hover:underline hover:text-hvc' to='/'>Home</NavLink>
<NavLink className='font-bold text-white   cursor-pointer text-xl hover:underline hover:text-hvc' to='/about'>About</NavLink>
<NavLink className='font-bold text-purple  bg-lightgray p-0.5 w-36 text-center hover:bg-hvc  shadow-md shadow-black rounded-tl-full rounded-br-full  cursor-pointer text-xl    hover:shadow-white hover:shadow-md transition-all ease-in-out duration-300 hover:scale-105' to='/signin'>Sign In</NavLink>
<NavLink className='font-bold text-purple  bg-lightgray p-0.5 w-36  text-center hover:bg-hvc shadow-md shadow-black  rounded-tl-full rounded-br-full   cursor-pointer text-xl  hover:shadow-white hover:shadow-md   transition-all ease-in-out duration-300 hover:scale-105' to='/login'>Log In</NavLink>


        </div>
    </div>
  )
}

export default Navbar