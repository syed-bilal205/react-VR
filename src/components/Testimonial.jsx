import React from 'react'
import TestimonialSlider from './TestimonialSlider'
// import {AiFillStar} from 'react-icons/ai'

const Testimonial = () => {
  return (
    <>
    
    <div className='text-white bg-blue-300 w-[90%] mx-auto rounded-xl bg-purple-400/10'>
        <div className='flex flex-col items-center gap-6 pt-8 p-5'>
        <h1 className='font-bold text-3xl'>What our clients say</h1>
        <p className='w-[80%]'>See what our customer say about us. It really matter for us. How good or bad
        we will make ir for evaluation to make EhyalLive better.</p>
        </div>
        <TestimonialSlider/>
        
    </div>
    </>
  )
}

export default Testimonial
