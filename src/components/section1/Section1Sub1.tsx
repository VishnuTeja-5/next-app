import React from 'react';
import Image from 'next/image';

function Section1Sub1() {
  return (
    <div className='w-full py-4 h-full md:col-start-1 col-end-7'>
        <h3 className='w-full p-6 text-secondary text-center text-xl font-semibold md:text-left'>Lorem ipsum dolor sit</h3>
        <h1 className='w-full p-6 text-center md:text-left font-heading font-bold uppercase text-3xl md:text-4xl py-2'>lorem ipsum <br/> dolor sit amet</h1>
        <div className='w-full text-center md:text-left p-6'>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente dicta optio nisi ea eveniet quisquam ad quia, earum nesciunt vel error enim tenetur repellat? Voluptatum alias officiis debitis accusamus aut!</p>
        </div>
        <div className='w-full px-2 py-4'>
            <div className='w-full flex flex-col justify-center sm:grid sm:grid-cols-12'>
                <Image className='w-full p-6 sm:col-start-1 sm:col-end-5' src='/img/section1_img2.png' alt='section1 img2' width={80} height={80} />
                <p className='w-full h-full text-center flex justify-center items-center sm:col-start-5 sm:col-end-13'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae, suscipit recusandae ab ut itaque
                </p>
            </div>
            <div className='w-full flex flex-col justify-center sm:grid sm:grid-cols-12'>
                <Image className='w-full p-6 sm:col-start-1 sm:col-end-5' src='/img/section1_img3.png' alt='section1 img3' width={80} height={80} />
                <p className='w-full h-full text-center flex justify-center items-center sm:col-start-5 sm:col-end-13'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae, suscipit recusandae ab ut itaque
                </p>
            </div>
            <div className='w-full flex flex-col justify-center sm:grid sm:grid-cols-12'>
                <Image className='w-full p-6 sm:col-start-1 sm:col-end-5' src='/img/section1_img4.png' alt='section1 img4' width={80} height={80} />
                <p className='w-full h-full text-center flex justify-center items-center sm:col-start-5 sm:col-end-13'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae, suscipit recusandae ab ut itaque
                </p>
            </div>
        </div>
        <div className='w-full flex flex-wrap justify-center items-center md:justify-start gap-4 px-8 py-4'>
            <button className='w-fit rounded px-4 text-sm font-semibold py-2 bg-primary text-white hover:scale-105 duration-300'>Lorem Ipsum &#8594;</button>
            <div className='flex justify-start items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#2854C5"><path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z"/></svg>
            <span className='text-primary font-semibold'>123456789</span>
            </div>

        </div>
    </div>
  )
}

export default Section1Sub1