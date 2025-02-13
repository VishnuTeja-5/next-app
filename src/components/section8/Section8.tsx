import { Transition } from '@/animation'
import React from 'react'

function Section8() {
  return (
    <Transition delay={0.5} x={-50} stiffness={30}>

    <div className=' w-full min-h-screen pl-0 md:p-16 md:pl-0 '>
        <div className='relative w-full min-h-screen bg-slate-100 py-2 pl-1 pr-8'>
            <div className='w-full h-full flex flex-col p-4 md:grid md:grid-cols-2'>
                <div className='w-full p-4 mx-auto md:m-0'>
                    <img className=' w-[90%] mx-auto md:-translate-x-16 md:-translate-y-20' src='/img/section8/section81.png' alt='section81' />
                </div>
                <div className='w-full h-full flex flex-col gap-4'>
                    <h3 className='w-full text-lg flex justify-center md:justify-start md:pl-6 items-center text-center text-secondary font-semibold md:text-left'>Lorem Ipsum</h3>
                    <h1 className='uppercase w-full text-xl md:text-4xl text-center md:text-left md:pl-6 md:justify-start font-bold font-heading'><span className='font-heading text-primary'>LOREM</span> ipsum dolor sit amet consectetur. Enim donec.</h1>
                    <p className='w-full text-center md:text-left md:pl-6'>Lorem ipsum dolor sit amet consectetur. Vel pellentesque odio enim amet non.</p>
                    <div className='w-full h-full grid grid-cols-2 p-4 place-content-center gap-8'>
                        <h4 className='w-full font-subheading font-semibold pl-2'>Lorem Ipsum</h4>
                        <h4 className='w-full font-subheading font-semibold pl-2'>Lorem Ipsum</h4>
                        <h4 className='w-full font-subheading font-semibold pl-2'>Lorem Ipsum</h4>
                        <h4 className='w-full font-subheading font-semibold pl-2'>Lorem Ipsum</h4>
                        <h4 className='w-full font-subheading font-semibold pl-2'>Lorem Ipsum</h4>
                        <h4 className='w-full font-subheading font-semibold pl-2'>Lorem Ipsum</h4>

                    </div>
                    <div className='w-full flex flex-wrap justify-center items-center md:justify-start gap-4 px-6 py-2 lg:p-6'>
                        <button className='w-fit rounded px-4 text-sm font-semibold py-2 bg-primary text-white hover:scale-105 duration-300'>Lorem Ipsum &#8594;</button>

                    </div>
                </div>
            </div>
            <div className='absolute bottom-0 w-[95%] h-4 bg-gradient-to-r from-blue-800 to-violet-950 via-green-600'></div>
        </div>
    </div>
    </Transition>
  )
}

export default Section8