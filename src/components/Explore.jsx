import React from 'react'

const Explore = () => {
  return (
    <>
<div className='flex flex-col gap-6 items-center justify-center md:flex-row md:justify-around  px-4 py-4 mt-6  bg-gradient-to-t from-[#3a173a] via-[#2A1428] to-[#863e8b]'>
        <div >

        <h1 className='font-bold text-white text-4xl pb-4 md:text-5xl '>
          Explore product in new way
          </h1>
          <p className='text-white'>We specialize in creating visual identities for products and branda in your company.</p>
          </div>
          <div className='flex items-center justify-center py-5' >
          <input type="email" placeholder='Your Email' className='text-white bg-gradient-to-t from-[#341D38] to-[#271223] py-3 px-3 outline-none rounded-md' />
          <button className='text-white font-medium py-3 px-6 bg-gradient-to-r from-[#b936f5] to-[#f1006c] rounded text-[15px] hover:bg-gradient-to-l hover:from-[#b936f5] hover:to-[#f1006c] outline-none  cursor-pointer;'>Start</button>
          </div>
  
         
      </div>
    </>
  )
}

export default Explore
