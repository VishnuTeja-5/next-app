import Image from 'next/image'
import React from 'react'

function Section7() {
  return (
    <div className='relative w-full px-8 py-4 min-h-screen bg-slate-100 md:gap-4 md:grid md:grid-rows-12 md:grid-cols-12'>
        <div className='md:absolute h-full md:bg-transparent w-full flex flex-col md:row-start-1 md:row-end-8 md:col-start-1 md:col-end-6 '>
            <h3 className='w-full px-6 py-2 lg:p-6 text-black/70 text-center text-xl font-semibold md:text-left'>NO LIMITS</h3>
            <h1 className='w-full px-6 lg:p-6 text-center md:text-left font-heading font-bold uppercase text-3xl md:text-4xl py-2 '>lorem ipsum dolor sit</h1>
            <div className='w-full text-center md:text-left px-6 py-1 lg:p-6'>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente dicta optio nisi ea eveniet quisquam ad quia, earum nesciunt vel error enim tenetur repellat?</p>
            </div>
            <div className='w-full flex flex-wrap justify-center items-center md:justify-start gap-4 px-6 py-2 lg:p-6'>
                <button className='w-fit rounded px-4 text-sm font-semibold py-2 bg-primary text-white hover:scale-105 duration-300'>Lorem Ipsum &#8594;</button>
                <div className='flex justify-start items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#2854C5"><path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z"/></svg>
                <span className='text-primary font-semibold'>123456789</span>
                </div>

            </div>
        </div>
        <img className='w-full p-4 md:hidden' src='/img/section7/section73.png' alt='section73' />
        <div className='hidden md:block w-full h-full row-start-5 row-end-8 col-start-6 col-end-7'>
            <img className='w-full h-full' src='/img/section7/section72.png' alt='section72' />
        </div>
        <div className='hidden md:block w-full h-full row-start-3 row-end-6 col-start-7 col-end-8'>
            <img className='w-full h-full' src='/img/section7/section78.png' alt='section78' />
        </div>
        <div className='hidden md:block w-full h-full row-start-2 row-end-6 col-start-8  col-end-12'>
            <img className='w-full h-full' src='/img/section7/section71.png' alt='section71' />
        </div>
        <div className='hidden md:block w-full h-full row-start-6 row-end-9 col-start-7 col-end-12'>
            <img className='w-full h-full' src='/img/section7/section73.png' alt='section73' />
        </div>
        <div className='hidden md:block w-full h-full row-start-9 row-end-11 col-start-1 col-end-3'>
            <img className='w-full h-full' src='/img/section7/section74.png' alt='section74' />
        </div>
        <div className='hidden md:block w-full h-full row-start-8 row-end-11 col-start-3 col-end-7'>
            <img className='w-full h-full' src='/img/section7/section75.png' alt='section75' />
        </div>
        <div className='hidden md:block w-full h-full row-start-9 row-end-11 col-start-7 col-end-8'>
            <img className='w-full h-full' src='/img/section7/section77.png' alt='section77' />
        </div>
        <div className='hidden md:block w-full h-full row-start-9 row-end-11 col-start-8 col-end-12'>
            <img className='w-full h-full' src='/img/section7/section76.png' alt='section76' />
        </div>
    </div>
  )
}

export default Section7