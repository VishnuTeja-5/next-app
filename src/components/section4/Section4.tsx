"use client";
import { Transition } from '@/animation';
import { Card } from '@/components'
import React from 'react'

const cardData = [
  {
    title: 'Lorem ipsum dolor sit amet consectetur',
    description: 'Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisi. Nunc montes molestie a vitae vulputate. Phasellus in pulvinar et vitae. Mi eget lectus nec et. Libero iaculis diam nam',
    image:'/img/section4/section41.png',
    alt:'section41',
    link:'',
  },
  {
    title: 'Lorem ipsum dolor sit amet consectetur',
    description: 'Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisi. Nunc montes molestie a vitae vulputate. Phasellus in pulvinar et vitae. Mi eget lectus nec et. Libero iaculis diam nam',
    image:'/img/section4/section42.png',
    alt:'section42',
    link:'',
  },
  {
    title: 'Lorem ipsum dolor sit amet consectetur',
    description: 'Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisi. Nunc montes molestie a vitae vulputate. Phasellus in pulvinar et vitae. Mi eget lectus nec et. Libero iaculis diam nam',
    image:'/img/section4/section43.png',
    alt:'section43',
    link:'',
  },
  {
    title: 'Lorem ipsum dolor sit amet consectetur',
    description: 'Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisi. Nunc montes molestie a vitae vulputate. Phasellus in pulvinar et vitae. Mi eget lectus nec et. Libero iaculis diam nam',
    image:'/img/section4/section44.png',
    alt:'section44',
    link:'',
  },
]
function Section4() {
  const svg = '/svg/Line7.svg';
  const divStyle = {
    backgroundImage: `url(${svg})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    width: '100%',
    height: '100%',
  };
  return (
    <Transition delay={0.5} x={50} stiffness={30}>
      <div style={divStyle}>
        <div className='w-full p-2 pl-20 mr-0 flex flex-col gap-4 '>
            <h3 className='w-full px-4 md:w-[55%] flex justify-center md:justify-start text-secondary text-lg md:text-2xl text-center font-medium font-subheading'>
                Lorem ipsum dolor sit amet
            </h3>
            <h1 className='uppercase w-full px-4 md:w-[55%] md:justify-start text-2xl md:text-4xl text-center flex justify-center items-center font-heading font-bold'>
                lorem ipsum dolor sit
            </h1>
            <p className='w-full px-4 md:w-[60%] text-center md:text-left flex justify-center md:justify-start items-center py-1' >
            Lorem ipsum dolor sit amet consectetur. Amet sodales sociis facilisis donec dui. Mi porttitor ut aliquam mattis maecenas eget integer in nam. Non nisl iaculis at felis aliquet. Hendrerit tellus at purus lectus
            </p>

        </div>
        <div className='w-full p-4 pt-12 mx-auto flex flex-col gap-2 md:grid md:grid-cols-2 md:gap-y-4 md:place-items-center overflow-hidden justify-start items-center md:w-[80%]'>
          {
            cardData.map((card, index) => (
              <Card key={index}
              title= {card.title}
              description={card.description} 
              image={card.image}
              alt={card.alt} 
              link={card.link} />
            ))
          }
            
        </div>
      </div>
    </Transition>

  )
}

export default Section4