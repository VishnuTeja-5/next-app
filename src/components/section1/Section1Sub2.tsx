"use client"
import Image from 'next/image'
import React from 'react'

function Section1Sub2() {
  return (
    <div className='w-full h-full hidden py-8 px-4 md:block md:col-start-7 col-end-13'>
        <Image className='h-full w-full' src='/img/section1_img5.png' alt='section1 img5' width={900} height={900} quality={100}/>
    </div>
  )
}

export default Section1Sub2