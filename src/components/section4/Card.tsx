"use client";
import React from 'react';
import { Transition } from '@/animation';

type CardProps = {
    title: string;
    description: string;
    image: string;
    alt:string;
    link : string;
}

function Card({title, description, image, alt, link}: CardProps) {
  return (
    <Transition delay={0.6} y={-50} stiffness={30}>

    <div className='relative w-full max-w-[75%] sm:max-w-[60%] md:max-w-[75%] rounded-md border shadow-lg'>
      <img className='w-full h-full rounded-md' src={image} alt={alt} width={100} height={100}/>
      <div className='absolute flex flex-col gap-3 md:gap-6 p-4 bottom-0 w-full max-h-[60%] md:h-[70%] overflow-y-scroll md:overflow-hidden inset-x-0 bg-white rounded-b-md'>
        <h3 className='text-center md:text-left text-xl font-medium font-subheading'>{title}</h3>
        <p className='text-center md:text-left text-base font-normal'>{description}</p>
        <a href={link} className='text-center md:text-left text-primary underline text-base font-medium'>Learn more</a>
      </div>
    </div>
    </Transition>
  )
}

export default Card