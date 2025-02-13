import { Transition } from '@/animation'
import Image from 'next/image'
import React from 'react'

function Section6() {
  return (
    <div className='relative w-full min-h-screen gap-4 flex flex-col-reverse md:grid md:grid-cols-12 justify-center items-center'>
        <div className='w-full h-full flex flex-col gap-4 md:col-start-1 md:col-end-7'>
            <Transition delay={0.5} x={-50} stiffness={30}>
                <h3 className='w-full px-8 py-2 flex justify-center md:justify-start items-center text-center md:text-left text-secondary font-semibold text-2xl'>Lorem Ipsum</h3>
                <h1 className='w-full px-8 py-2 flex justify-center md:justify-start items-center text-center md:text-left font-bold text-4xl'>Lorem ipsum dolor sit amet</h1>
                <p className='w-full px-8 py-2 flex justify-center md:justify-start items-center text-center md:text-left font-medium'>Lorem ipsum dolor sit amet consectetur. Vulputate amet aliquet morbi suspendisse convallis. Urna a urna lectus donec felis risus duis pellentesque. Pellentesque ultricies ipsum.</p>
                <div className='w-full px-8 md:py-4 flex justify-center md:justify-start items-center gap-4 flex-wrap'>
                <Image className='w-32' src='/img/section6/section61.png' alt='section61' width={100} height={100} />
                <Image className='w-32' src='/img/section6/section62.png' alt='section62' width={100} height={100} />
                </div>
            </Transition>
        </div>
        <div className='w-full overflow-hidden md:col-start-7 md:col-end-13 md:place-items-center'>
            <Transition delay={0.5} x={50} stiffness={30}>
            <img className='scale-150 w-full flex justify-center items-center' src='/img/section6/section63.png' alt='section63' width={100} height={100} />
            </Transition>
        </div>
    </div>
  )
}

export default Section6