"use client"
import React from 'react';
import { motion } from 'motion/react'

function Navbar() {
  return (
    <div className='w-full px-12 py-3 flex items-center justify-between'>
        <div className='px-4 py-2 font-bold text-3xl bg-black/20'>LOGO</div>
        <div className='font-subheading'>
          <ul className='flex gap-4'>
            <li className=' text-primary font-semibold'><a href=''>Lorem Ipsum</a></li>
            <li className=' text-primary font-semibold'><a href=''>Lorem Ipsum</a></li>
            <li className=' text-primary font-semibold'><a href=''>Lorem Ipsum</a></li>
            {/* <li className=' text-primary font-semibold'>Lorem Ipsum &#8744;</li>
            <li className=' text-primary font-semibold'>Lorem Ipsum &#8744;</li> */}
          </ul>
        </div>
        <div className='w-32'>
          <motion.button 
            className=' px-6 py-2 rounded bg-white font-semibold text-sm shadow-custom-shadow'
            whileTap={{
              scale:0.95
            }}
            whileHover={{
              scale:1.04
            }}
            transition={{
              duration:0.4
            }}>
              Sign in
          </motion.button>
        </div>
        
    </div>
  )
}

export default Navbar