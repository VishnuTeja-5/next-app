import React from 'react'
import Image from 'next/image'

function Section1Sub2() {
  return (
    <div className='w-full h-full hidden py-8 px-4 md:block md:col-start-7 col-end-13'>
        <Image className='h-full w-full' src='/img/section1_img5.png' alt='section1 img5' width={100} height={100} />
    </div>
  )
}

export default Section1Sub2