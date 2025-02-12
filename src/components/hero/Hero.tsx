"use client"
import React from 'react'
import Image from "next/image";
import { Transition } from "@/animation/index"

function Hero() {
  return (
    <Transition delay={0.3} y={-50} stiffness={30} >
    <div className='relative flex flex-col md:mt-16 lg:mt-0 md:pl-12 w-full min-h-screen h-full md:grid md:grid-cols-12 place-content-between bg-white'>
        <div className='w-full min-h-screen h-full flex flex-col gap-2 justify-center col-start-1 col-end-7'>
            <h1 className='w-full text-center md:text-left text-6xl font-bold font-heading'>Lorem ipsum dolor sit amet</h1>
            <p className='w-full text-center md:text-left font-subheading'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam aliquam itaque quidem voluptate doloribus commodi vitae voluptates rerum veniam dolore distinctio nam quaerat, voluptatum error adipisci odio consequuntur repudiandae tempore.</p>
            <div className='w-full flex flex-col justify-center md:justify-start items-center sm:flex-row gap-4 md:pt-12'>
                <input type='text' className='rounded px-4 py-2 w-60 md:w-72 border border-gray-300' />
                <button className='w-fit rounded px-4 text-sm font-semibold py-2 bg-primary text-white'>Submit &#8594;</button>
            </div>
            <div className='w-full flex justify-center md:justify-start items-center gap-2'>
                <span className='w-8 p-1 text-center rounded-full bg-secondary text-white'>&#10003;</span>
                <p className='font-medium text-sm'>No credit card required</p>
            </div>
        </div>
        
        <div className='p-4 md:p-0 md:col-start-7 md:col-end-13 items-center justify-center'>
            <Image className='w-full h-full object-contain' width={100} height={100} src="/img/hero-a.png" alt='Hero Image' loading='lazy'/> 
        </div>
    </div>
    </Transition>
  )
}

export default Hero;
