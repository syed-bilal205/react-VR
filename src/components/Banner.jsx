import React from 'react'
import Avatar1 from '../assets/avt1.png'
import Avatar2 from '../assets/avt2.png'
import Avatar3 from '../assets/avt3.png'
import Avatar4 from '../assets/avt4.png'
import BannerImg from '../assets/banner.png'

const Banner = () => {
  return (
    <>
      <div className='text-white flex flex-col p-10 w-full md:flex-row'>
       <div className='flex flex-col items-center gap-5 w-full h-100 md:w-[50%]'>
            <h1 className='font-bold text-5xl md:text-6xl'>Lets Explore <br /> Three-Diemsional <br /> Visually..</h1>
            <p className='text-gray-500 md:w-[75%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione autem soluta aspernatur aliquid neque mollitia laborum cupiditate repellat iste debitis.</p>
            <div className='flex items-center gap-8'> 
            <button className='font-medium h-12 px-8 bg-gradient-to-r from-[#b936f5] to-[#f1006c] rounded text-[15px] hover:bg-gradient-to-l hover:from-[#b936f5] hover:to-[#f1006c] outline-none flex items-center justify-center cursor-pointer;'>Get it now</button>
            <button>Explore Device</button>
            </div>
            <div className='flex items-center pt-10'>
                <img src={Avatar1} alt=""  className='w-12'/>
                <img src={Avatar2} alt=""  className='w-12 -ml-2'/>
                <img src={Avatar3} alt=""  className='w-12 -ml-2'/>
                <img src={Avatar4} alt=""  className='w-12 -ml-2'/>
            </div>
                <div className='flex items-center gap-1 '>
                <div className='h-3 w-3 bg-green-500 rounded-2xl'></div>
                <span>400K people Online</span>
                </div>

            
        </div>
        <div>
            <img src={BannerImg} alt="" />
        </div>
      </div>
    </>
  )
}

export default Banner
