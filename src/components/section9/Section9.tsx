import { Transition } from '@/animation';
// import { Carousel } from '@/components'
import { AppleCardsCarouselDemo } from './AppleCardsCarouselDemo';
import React from 'react'

function Section9() {
  return (
    <Transition delay={0.5} x={50} stiffness={30}>
    <div className='w-full min-h-screen bg-secondary'>
        <div className='w-full py-4 md:pl-12 mx-auto flex flex-col md:flex-row justify-around items-center'>
            <div className='w-full flex flex-col gap-2'>
                <h3 className='px-4 text-white font-semibold text-center md:text-left'>Join other Sun harvesters</h3>
                <h1 className='px-4 uppercase font-heading text-white text-center text-2xl md:text-4xl font-semibold md:text-left'>Lorem ipsum dolor sit amet</h1>
                <p className='w-full p-4 text-white font-medium text-center md:text-left'>Dui euismod iaculis libero, aliquet vitae et elementum porttitor. Eleifend mi tristique condimentum congue fusce nunc, donec magnis commodo.</p>
            </div>
            <div className='w-full flex justify-center items-center'>
                <button className='bg-white/90 hover:scale-105 duration-300 px-16 py-2 rounded-md font-semibold shadow-xl'>Lorem Ipsum</button>
            </div>
        </div>
        {/* <Carousel /> */}
        <AppleCardsCarouselDemo />
    </div>
    </Transition>
  )
}

export default Section9