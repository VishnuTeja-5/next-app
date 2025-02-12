"use client"
import React,{useState} from 'react'
import { motion, AnimatePresence } from 'motion/react'

function Aside() {
    const [isVisible, setIsVisible] = useState(false)
  return (
    <div className='w-full p-4 flex items-start justify-between'>
        <div className='px-4 py-2 font-bold text-3xl bg-black/20'>LOGO</div>
        <div className='w-full flex flex-col items-end justify-center'>
        <motion.button 
            className='bg-[#1959AC] rounded-md p-4'
            onClick={()=> setIsVisible(!isVisible)}
            whileTap={{
                rotate:'2deg',
                scale:0.9,
            }}
            whileHover={{
                scale:1.1,
            }}

            layout
            transition={{
            layout:{duration:1}
            }}
            >
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#AAC1F0"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
        </motion.button>
        <AnimatePresence>
            {isVisible &&
                <motion.div 
                className='w-full h-full flex justify-center'
                initial={{
                    opacity:0,
                    height:0
                }}
                animate={{
                    opacity:1,
                    height: 'fit-content'
                }}
                exit={{
                    height:0,
                    opacity:0
                }}
                transition={{
                    duration: 0.5,
                    ease: 'easeInOut',
                }}>
                    <ul className='w-full flex flex-col justify-around items-end'>
                        <li className='w-16 text-right py-2 border-b border-[#1959AC]'> Login </li>
                        <li className='w-16 text-right py-2 border-b border-[#1959AC]'> Signup </li>
                    </ul>
                </motion.div>
            }
        </AnimatePresence>
        </div>
        
    </div>
  )
}

export default Aside