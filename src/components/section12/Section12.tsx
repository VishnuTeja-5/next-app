"use client"
import React from 'react'
import { Transition } from '@/animation';
import { Question } from '@/components'


function Section12() {
  return (
    <Transition delay={0.5} y={50} stiffness={30}>
        <div className='w-full min-h-screen bg-slate-100 px-20 py-8'>
            <h1 className='w-full py-8 text-2xl md:text-4xl font-bold font-heading'>FREQUENTLY ASKED QUESTIONS (FAQs)</h1>
            <Question />
            <Question />
            <Question />
            <Question />
        </div>
    </Transition>
  )
}

export default Section12