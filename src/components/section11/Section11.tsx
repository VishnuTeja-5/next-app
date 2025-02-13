import { Transition } from '@/animation'
import React from 'react'

function Section11() {
  return (
    <div className='w-full min-h-screen max-h-fit py-24'>
    <Transition delay={0.5} x={50} stiffness={30}>
        <div className='w-full min-h-screen'>
            <div className='relative w-full md:h-screen py-8 px-4 flex flex-col gap-4 justify-center items-center md:grid md:grid-cols-2 md:gap-4 bg-slate-100 overflow-visible'>
                <div className='relative w-full p-4 flex flex-col gap-4 justify-center md:items-start items-center overflow-visible'>
                    <h1 className='w-full p-4 text-center text-primary font-bold font-heading text-2xl md:text-left md:text-4xl uppercase'>Lorem ipsum dolor sit amet consectetur. Dignissim tellus</h1>
                    <p className='w-full p-4 text-center md:text-left'>Lorem ipsum dolor sit amet consectetur. In malesuada morbi mi blandit laoreet urna sapien quam pulvinar. Dolor aliquet est tortor tincidunt ultricies feugiat mauris. Aliquam platea turpis porta nisl felis. Massa in facilisis semper libero eget eu quisque bibendum platea. Tortor fames</p>
                    <div className='w-full flex flex-wrap justify-center items-center md:justify-start gap-4 px-6 py-2 md:p-6'>
                        <button className='w-fit rounded px-4 text-sm font-semibold py-2 bg-primary text-white hover:scale-105 duration-300'>Lorem Ipsum &#8594;</button>

                    </div>
                    <div className='md:ml-4 bg-white w-full max-w-[27rem] shadow-lg md:-translate-y-6 z-20'>
                        <h3 className='w-full p-4 font-semibold'>Lorem ipsum dolor sit</h3>
                        <div className='w-full p-4 flex flex-col gap-4'>
                            <p>Lorem ipsum dolor sit amet consectetur. Habitant vestibulum vitae amet habitasse semper.</p>
                            <p>Lorem ipsum dolor sit amet consectetur. Egestas congue mattis ut placerat vitae amet suspendisse fermentum velit. Nibh dolor nunc id tristique sit.</p>
                            <p>Lorem ipsum dolor sit amet consectetur. Hac netus consectetur amet quisque scelerisque facilisi. Ultrices lectus viverra pharetra commodo.</p>
                        </div>
                    </div>
                </div>
                <div className='w-full flex justify-center items-center md:items-start mx-auto h-full p-4'>
                    <img className='w-full max-w-[80%] md:-translate-y-32 md:translate-x-20' src='/img/section11/section11.png' alt='' />
                </div>
                <div className='absolute bottom-0 left-0 w-[95%] h-4 bg-gradient-to-r from-blue-800 to-violet-950 via-green-600'></div>
            </div>
        </div>
    </Transition>
    </div>
  )
}

export default Section11