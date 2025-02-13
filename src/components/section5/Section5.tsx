import React from 'react';
import { Transition } from '@/animation';

function Section2() {
  return (
    <Transition delay={0.5} x={50} stiffness={30}>
    <div className='relative w-full min-h-screen h-full py-8'>
        <img className='absolute w-full h-full' src='/img/section5/section51.png' alt='Section51' width={100} height={100} />
        <div className='absolute bg-black/30 w-full mx-auto min-h-screen flex flex-col gap-3 md:gap-6 justify-center items-center'>
            <h2 className='w-[56%] uppercase text-xl md:text-4xl text-white font-semibold font-heading flex justify-center items-center text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur omnis quos non</h2>
        </div>
    </div>
    </Transition>
  )
}

export default Section2