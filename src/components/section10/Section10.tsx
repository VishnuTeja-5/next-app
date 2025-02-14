"use client"
import { Transition } from '@/animation'
import React, { useState } from 'react'
import Image from 'next/image'



function Section10() {
    let buttonStates = {
        button1: false,
        button2: false,
        button3: false,
    }
    
    const [buttons, setButtons] = useState(buttonStates);
    
    const handleClick = (buttonName:'button1'|'button2'|'button3') => {
        setButtons({
            ...buttonStates,
            [buttonName]: true,
        });
    };
  return (
    <Transition delay={0.5} x={50} stiffness={30}>
        <div className='w-full min-h-screen flex justify-center items-center p-16'>
            <div className='w-full h-full flex flex-col md:grid md:grid-cols-2 md:gap-4'>
                <div className='w-full h-full flex flex-col gap-4 justify-center items-center'>
                    <h1 className='w-full font-heading text-2xl md:text-4xl font-semibold text-center md:text-left'>Lorem ipsum dolor sit amet</h1>
                    <div className='w-full border-2 rounded-lg border-slate-400 flex justify-around'>
                        <button
                            onClick={() => handleClick('button1')}
                            className={`w-full font-bold text-lg rounded-l-lg py-3 text-center border-2 border-y-0 border-x-0 border-r-2 ${buttons.button1 ? 'bg-slate-200' : ''}`}
                        >
                            Research
                        </button>
                        <button
                            onClick={() => handleClick('button2')}
                            className={`w-full font-bold text-lg py-3 text-center border-2 border-y-0 border-x-0 border-r-2 ${buttons.button2 ? 'bg-slate-200' : ''}`}
                        >
                            Plan
                        </button>
                        <button
                            onClick={() => handleClick('button3')}
                            className={`w-full font-bold text-lg rounded-r-lg py-3 text-center ${buttons.button3 ? 'bg-slate-200' : ''}`}
                        >
                            Design
                        </button>
                    </div>
                    <p className='w-full py-4 text-center md:text-left text-black/70'>Egestas fringilla aliquam leo, habitasse arcu varius lorem elit. Neque pellentesque donec et tellus ac varius tortor, bibendum. Nulla felis ac turpis at amet. Purus malesuada placerat arcu at enim elit in accumsan.</p>
                    <div className='w-full flex flex-wrap justify-center items-center md:justify-start gap-4 px-6 py-2 lg:p-0 lg:py-4'>
                        <button className='w-fit rounded text-sm font-semibold py-2 text-secondary hover:scale-105 duration-300'>Lorem Ipsum &#8594;</button>

                    </div>

                </div>
                <div className='w-full h-full p-8'>
                    <Image className='w-full' src='/img/section10/section10.png' alt='section10' width={900} height={900} quality={100}/>
                </div>
            </div>
        </div>
    </Transition>
  )
}

export default Section10