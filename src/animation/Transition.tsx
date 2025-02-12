"use client"
import { useRef, useEffect } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

type TransitionProps = {
    children: React.ReactNode;
    delay?: number;
    x?: number;
    y?: number;
    stiffness?: number;
    duration?: number;
}

const Transition = ({children, delay = 0, x = 0, y = 0, stiffness = 100, duration= 0.8 }: TransitionProps) => {
    const ref = useRef(null);
    const isInview = useInView(ref, { once: true });
    const controls = useAnimation();

    useEffect(() => {
        if (isInview) {
          controls.start("visible");
        }
      }, [isInview]);
  return (
    <motion.div 
        ref={ref}
        variants={{
        hidden: { opacity: 0, translateX: x, translateY: y },
        visible: { opacity: 1, translateX: 0, translateY: 0 },
        }}
        transition={{
        type: "spring",
        duration: duration,
        damping: 8,
        delay: delay,
        stiffness: stiffness,
        ease : "easeIn",
      }}
        initial="hidden"
        
        animate={controls}
        className='w-full h-full flex flex-col gap-1 justify-center items-center'
    >
    {children}
    </motion.div>

    
  )
}

export default Transition;