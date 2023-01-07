import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { slider } from '../data';

const TestimonialSlider = () => {
  return (
    <>
 <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 18,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      }}
    >
    
        {
            slider.map((item)=>(
            <SwiperSlide className='mt-10 bg-gradient-to-t from-[#130613] via-[#2A1428] to-[#331A35] rounded-lg min-h-[240px]'>
            <div className='flex flex-col item-center p-5'>
          
                <div>
                <p className='w-[80%]'>{item.message}</p>
            </div>
                <div className='pt-2 w-14'>
                <img src={item.image} alt="images"/>
                <h6 className='font-medium text-xl'>{item.name}</h6>
                <span className='font-medium text-rose-600'>{item.email}</span>
                </div>
            </div>
      </SwiperSlide>
            ))
        }    

    </Swiper>
    </>
  )
}

export default TestimonialSlider
