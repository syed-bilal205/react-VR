import React from 'react'
import VideoImg from '../assets/video-bg.png'

const Video = () => {
  return (
    <>
        <div className='text-white mt-5 p-5 flex flex-col items-center gap-8 bg-[#6a57b8] w-full md:flex-row  md:items-center'>
            <div className='md:w-[50%]'>
                <h2 className='text-4xl font-semibold md:text-5xl md:pl-10'>Awesome experiences <br /> with virtual reality world</h2>
            </div>
            <div className='md:w-[50%]'>
                <img src={VideoImg} alt="" />
            </div>
        </div>
    </>
  )
}

export default Video
