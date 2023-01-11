import React, { useState } from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiOutlineClose} from 'react-icons/ai'

const Navbar = () => {

    const [navbar,setNavbar] = useState(false)

    const handleClick = () =>{
        setNavbar(!navbar)
    }

  return (
    <>
     <div className='flex justify-between px-3 items-center text-white h-20 md:px-16'>
        <h1 className='text-3xl pl-2 font-bold tracking-wider cursor-pointer'>LIGHT</h1>
        <ul className='gap-4 items-center hidden md:flex text-xl md:gap-8'>
            <li className='cursor-pointer hover:border-b-2 ease-in-out duration-150 border-[#ab00fa] '>Home</li>
            <li className='cursor-pointer hover:border-b-2 ease-in-out duration-150 border-[#ab00fa] '>Company</li>
            <li className='cursor-pointer hover:border-b-2 ease-in-out duration-150 border-[#ab00fa]'>Feature</li>
            <li className='pr-2'><button className='font-medium h-12 px-8 bg-gradient-to-r from-[#b936f5] to-[#f1006c] rounded text-[15px] hover:bg-gradient-to-l hover:from-[#b936f5] hover:to-[#f1006c] outline-none flex items-center justify-center cursor-pointer;'>Sign Up</button></li>
        </ul>
        <div onClick={handleClick} className='pr-2 block z-50  cursor-pointer  md:hidden'>
            {
                navbar ? <AiOutlineClose size={20} className='z-50'/> : <GiHamburgerMenu size={20}/>
            }
        </div>
        <div className={navbar ? 'fixed top-0 right-0 w-[60%] h-[100%] ease-in-out duration-700 bg-black flex justify-center text-white text-xl' : 'fixed right-[-100%]'}>
            <ul className='flex flex-col gap-8 pt-20 uppercase font-bold'>
            <li className=' ease-in-out duration-150 hover:text-[#ab00fa]  p-4 cursor-pointer'>Home</li>
            <li className=' ease-in-out duration-150 hover:text-[#ab00fa]  p-4 cursor-pointer'>Company</li>
            <li className=' ease-in-out duration-150 hover:text-[#ab00fa] p-4 cursor-pointer'>Feature</li>
            <li className='pr-2 p-4'><button className='font-medium h-12 px-8 bg-gradient-to-r from-[#b936f5] to-[#f1006c] rounded text-[15px] hover:bg-gradient-to-l hover:from-[#b936f5] hover:to-[#f1006c] outline-none flex items-center justify-center cursor-pointer;'>Sign Up</button></li>
            </ul>
        </div>
     </div> 
    </>
  )
}

export default Navbar
