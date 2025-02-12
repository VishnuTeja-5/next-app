import React from 'react';
import { Navbar,Aside } from '@/components/index';
import Transition from '@/animation/Transition';

function Header() {
  return (
    <>
    <div className='absolute top-0 left-0 right-0 bg-transparent w-full px-2 py-2 z-50 hidden md:block'>
      <Transition delay={0.3} y={-50} stiffness={30}>
        <Navbar />
      </Transition >
      </div>
    <div className='md:hidden px-2'>
      <Transition delay={0.3} y={-50} stiffness={30}>
        <Aside />
      </Transition >
    </div>
    </>
  )
}

export default Header