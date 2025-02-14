"use client"
import { Transition } from '@/animation'
import React from 'react'
import Image from 'next/image'

function Section14() {
  return (
    <Transition delay={0.5} x={50} stiffness={30}>
    <div className='relative w-full min-h-screen'>
        <div className='w-full h-full py-8 px-4 md:px-0 md:pl-20 flex flex-col md:grid md:grid-cols-12'>
            <div className='w-full h-full flex flex-col gap-4 md:col-start-1 col-end-8'>
                <h3 className='w-full text-secondary font-semibold text-left text-lg'>Lorem ipsum dolor sit amet </h3>
                <h1 className='w-[70%] uppercase font-bold font-heading text-2xl md:text-4xl'>Lorem ipsum dolor sit amet consectetur. Eu elit.</h1>
                <p className='w-[90%]'>Lorem ipsum dolor sit amet consectetur. Mauris ullamcorper etiam leo eleifend condimentum in vitae faucibus. </p>
                <div className='w-full h-full flex flex-col gap-4 p-4'>
                    <div className='w-full flex gap-2'>
                        <Image className='w-8 h-8 p-1' src="/img/section14/section142.png" alt="section142" width={900} height={900} quality={100}/>
                        <div className='w-full flex flex-col gap-4'>
                            <h3 className='w-full font-semibold'>Lorem ipsum dolor sit amet consectetur. Volutpat hac morbi egestas.</h3>
                            <p>Lorem ipsum dolor sit amet consectetur. Eros egestas et arcu eu non viverra. Risus quam mattis senectus vitae interdum odio ornare gravida vestibulum. Donec turpis nulla felis mauris eu donec. Ipsum sit ut tortor.</p>
                        </div>
                    </div>
                    <div className='w-full flex gap-2'>
                        <Image className='w-8 h-8 p-1' src="/img/section14/section142.png" alt="section142" width={900} height={900} quality={100}/>
                        <div className='w-full flex flex-col gap-4'>
                            <h3 className='w-full font-semibold'>Lorem ipsum dolor sit amet consectetur. Volutpat hac morbi egestas.</h3>
                            <p>Lorem ipsum dolor sit amet consectetur. Eros egestas et arcu eu non viverra. Risus quam mattis senectus vitae interdum odio ornare gravida vestibulum. Donec turpis nulla felis mauris eu donec. Ipsum sit ut tortor.</p>
                        </div>
                    </div>
                    <div className='w-full flex gap-2'>
                        <Image className='w-8 h-8 p-1' src="/img/section14/section142.png" alt="section142" width={900} height={900} quality={100}/>
                        <div className='w-full flex flex-col gap-4'>
                            <h3 className='w-full font-semibold'>Lorem ipsum dolor sit amet consectetur. Volutpat hac morbi egestas.</h3>
                            <p>Lorem ipsum dolor sit amet consectetur. Eros egestas et arcu eu non viverra. Risus quam mattis senectus vitae interdum odio ornare gravida vestibulum. Donec turpis nulla felis mauris eu donec. Ipsum sit ut tortor.</p>
                        </div>
                    </div>

                </div>
            </div>
            <div className='w-full h-full md:col-start-8 md:col-end-13'>
                <div className='w-full h-full flex justify-center md:justify-end items-center'>
                <Image className='w-[80%] sm:w-[70%]' src='/img/section14/section141.png' alt='section141' width={900} height={900} quality={100}/>
                </div>
            </div>

        </div>
        <div className='absolute bottom-0 right-0 left-24 w-full h-4  bg-gradient-to-r from-blue-900 to-violet-950 via-green-700'></div>
    </div>
    </Transition>
  )
}

export default Section14