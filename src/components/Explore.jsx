import React from 'react'

const Explore = () => {
  return (
    <>
      <div className='md:flex flex-row justify-between pt-12 mt-20 p-16 bg-gradient-to-t from-[#3a173a] via-[#2A1428] to-[#863e8b]'>
        <div className='flex flex-col text-white gap-6 '>

        <h1 className='font-bold text-3xl pb-4 md:text-5xl '>
          Explore product in new way
          </h1>
          <p className='pb-10'>We specialize in creating visual identities for products and branda in your company.</p>
          </div>
          <div className='flex items-center ' >
          <input type="email" placeholder='Your Email' className='mr-2 bg-gradient-to-t from-[#341D38] to-[#271223] h-12 px-4 outline-none rounded-md' />
          <button className='font-medium h-12 px-8 bg-gradient-to-r from-[#b936f5] to-[#f1006c] rounded text-[15px] hover:bg-gradient-to-l hover:from-[#b936f5] hover:to-[#f1006c] outline-none flex items-center justify-center cursor-pointer;'>Start</button>
          </div>
  
         
      </div>
    </>
  )
}

export default Explore
