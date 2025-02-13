import { Transition } from '@/animation'
import React from 'react'

function Section3() {
  return (
    <Transition delay={0.5} x={-50} stiffness={30}>

    <div className='w-full mx-auto min-h-screen py-8 flex flex-col gap-2 justify-around items-center'>
        <h1 className='w-[55%] uppercase text-xl  md:text-4xl font-bold font-heading flex justify-center items-center text-center'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate 
        </h1>
        <Transition delay={0.5} x={-50} stiffness={30}>
        <div className='w-[65%] flex flex-row gap-x-24 gap-y-8 justify-around items-center flex-wrap'>
            <img className='w-24 ' src='/img/section3/section31.png' alt='section31' width={100} height={100}/>
            <img className='w-24 ' src='/img/section3/section32.png' alt='section32' width={100} height={100}/>
            <img className='w-24 ' src='/img/section3/section33.png' alt='section33' width={100} height={100}/>
            <img className='w-24 ' src='/img/section3/section34.png' alt='section34' width={100} height={100}/>
        </div>
        </Transition>
        <Transition delay={0.5} x={50} stiffness={30}>
        <div className='w-[75%] flex flex-row gap-x-24 gap-y-8 justify-around items-center flex-wrap'>
            <img className='w-24 ' src='/img/section3/section35.png' alt='section35' width={100} height={100}/>
            <img className='w-24 ' src='/img/section3/section36.png' alt='section36' width={100} height={100}/>
            <img className='w-24 ' src='/img/section3/section37.png' alt='section37' width={100} height={100}/>
            <img className='w-24 ' src='/img/section3/section38.png' alt='section38' width={100} height={100}/>
        </div>
        </Transition>
        <Transition delay={0.5} x={-50} stiffness={30}>
        <div className='w-[65%] flex flex-row gap-x-24 gap-y-8 justify-around items-center flex-wrap'>
        
            <img className='w-24 ' src='/img/section3/section39.png' alt='section39' width={100} height={100}/>
            <img className='w-24 ' src='/img/section3/section310.png' alt='section310' width={100} height={100}/>
            <img className='w-24 ' src='/img/section3/section311.png' alt='section311' width={100} height={100}/>
            <img className='w-24 ' src='/img/section3/section312.png' alt='section312' width={100} height={100}/>
            
        </div>
        </Transition>
    </div>
    </Transition>
  )
}

export default Section3