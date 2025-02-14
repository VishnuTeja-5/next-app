"use client";
import { Transition } from '@/animation'
import React from 'react'
import { Section1Sub1, Section1Sub2 } from '@/components'

function Section1() {
  return (
    <>
    <div className='w-full min-h-screen flex flex-col p-12 pr-0 md:grid'>
        
        <Transition delay={0.3} x={50} stiffness={30}>
            <div className='w-full h-full shadow-2xl pr-4 md:grid md:grid-cols-12'>
                <Section1Sub1 />
                <Section1Sub2 />
                <div className='w-full h-4 md:col-start-1 col-end-13 bg-gradient-to-r from-blue-900 to-violet-950 via-green-700'></div>
            </div>  
        </Transition>
        
        
    </div>
    </>
  )
}

export default Section1