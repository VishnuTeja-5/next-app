import { Transition } from '@/animation'
import React from 'react'

function Footer() {
  return (
    <Transition delay={0.5} y={50} stiffness={30}>
      <div className='w-full min-h-[80vh] p-10 px-20 grid grid-cols-5 bg-gray-800 bottom-0 relative'>
        <div className="w-40 h-14 px-4 py-2 font-bold text-3xl flex justify-center items-center bg-gray-300">LOGO</div>
        <div className='w-full flex flex-col gap-16 justify-start items-center pt-20'>
          <h3 className='w-full text-left font-semibold text-white'>Lorem Ipsum</h3>
          <div className='w-full flex flex-col justify-start items-center gap-4'>
            <p className='w-full text-left text-white/80'>Lorem Ipsum</p>
            <p className='w-full text-left text-white/80'>Lorem Ipsum</p>
            <p className='w-full text-left text-white/80'>Lorem Ipsum</p>
            <p className='w-full text-left text-white/80'>Lorem Ipsum</p>

          </div>
        </div>
        <div className='w-full flex flex-col gap-16 justify-start items-center pt-20'>
          <h3 className='w-full text-left font-semibold text-white'>Lorem Ipsum</h3>
          <div className='w-full flex flex-col justify-center items-center gap-4'>
            <p className='w-full text-left text-white/80'>Lorem Ipsum</p>
            <p className='w-full text-left text-white/80'>Lorem Ipsum</p>
            <p className='w-full text-left text-white/80'>Lorem Ipsum</p>
            <p className='w-full text-left text-white/80'>Lorem Ipsum</p>

          </div>
        </div>
        <div className='w-full flex flex-col gap-16 justify-start items-center pt-20'>
          <h3 className='w-full text-left font-semibold text-white'>Lorem Ipsum</h3>
          <div className='w-full flex flex-col justify-center items-center gap-4'>
            <p className='w-full text-left text-white/80'>Lorem Ipsum</p>
            <p className='w-full text-left text-white/80'>Lorem Ipsum</p>
            <p className='w-full text-left text-white/80'>Lorem Ipsum</p>

          </div>
        </div>
        <div className='w-full flex flex-col gap-16 justify-start items-center pt-20'>
          <h3 className='w-full text-left font-semibold text-white'>Lorem Ipsum</h3>
          <div className='w-full flex flex-col justify-center items-center gap-4'>
            <p className='w-full text-left text-white/80'>Lorem Ipsum</p>
            <p className='w-full text-left text-white/80'>Lorem Ipsum</p>

          </div>
        </div>
      </div>
    </Transition>
  )
}

export default Footer