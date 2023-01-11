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
            <SwiperSlide className='mx-1  md:mx-0 bg-gradient-to-t from-[#130613] via-[#2A1428] to-[#331A35] rounded-lg '>
            <div className='flex flex-col gap-3  item-center  p-5'>
          
                <div>
                <p>{item.message}</p>
            </div>
                <div>
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
