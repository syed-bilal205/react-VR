import React from 'react'
import Experience1 from '../assets/exp-img1.png'
import Experience2 from '../assets/exp-img2.png'

const Experience = () => {
  return (
    <>
      <div className='text-white flex flex-col p-5 h-100 w-full md:flex-row justify-between'>
        <div className='flex gap-3 md:w-[60%] justify-center'>
        <div>
                <img  src={Experience1} alt="" />
        </div>
            <div className='pt-7 md:pt-20'>
                <img  src={Experience2} alt="" />
            </div>
        </div>
        <div className='flex flex-col gap-6 pt-2 text-left md:w-[40%] justify-center md:gap-10'>
            <h1 className='font-bold text-4xl md:text-5xl'>
            New Experience In <br />Playing Game
            </h1>
            <p className='text-gray-500 md:w-[60%]'>You can try playing the game with a
            new style and of course a more real
            feel, like you are the main character
            in your game and adventure in this
            new digital world.</p>
            <button className='self-start font-medium h-12 px-8 bg-gradient-to-r from-[#b936f5] to-[#f1006c] rounded text-[15px] hover:bg-gradient-to-l hover:from-[#b936f5] hover:to-[#f1006c] outline-none flex items-center justify-center cursor-pointer;'>Get it Now</button>
        </div>
      </div>
    </>
  )
}

export default Experience
