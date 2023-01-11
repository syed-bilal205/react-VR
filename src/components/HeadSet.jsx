import React from 'react'
import { HeadSetData } from '../data'

const HeadSet = () => {
  return (
    <>
    <section className='p-5 text-white pt-10'>
            <h2 className='font-bold text-3xl pb-5 md:pl-14'>Mixed Reality Headsets</h2>
      <div className='flex flex-col gap-3 items-center  md:flex-row flex-wrap justify-evenly'>
            {
              HeadSetData.map((item)=>(
            <div className='relative ' key={item.Id} >
                <img src={item.image} alt="" />
            <div className='backdrop-blur-md absolute bottom-1 py-2 px-3'>
                    <h4 className=' font-bolder text-2xl md:text-4xl font-black py-2'>{item.name}</h4>
                    <p >{item.para}</p>
            </div>
            </div>
              ))
            }
        </div>
        </section>
    </>
  )
}

export default HeadSet
