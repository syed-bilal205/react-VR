import React from 'react'
import { HeadSetData } from '../data'

const HeadSet = () => {
  return (
    <>
    <section className='p-5 text-white pt-10'>
            <h2 className='font-bold text-3xl pb-5 md:pl-14'>Mixed Reality Headsets</h2>
      <div className='flex flex-col items-center h-100 md:flex-row flex-wrap justify-evenly'>
            {
              HeadSetData.map((item)=>(
            <div className='relative pb-4' key={item.Id} >
                <img src={item.image} alt="" />
            <div className='backdrop-blur-md pl-2 absolute bottom-4 w-[300px] min-h-[160px]'>
                    <h4 className='pt-6 font-bold text-xl '>{item.name}</h4>
                    <p className='pt-2'>{item.para}</p>
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
