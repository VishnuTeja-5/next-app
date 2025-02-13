"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
function Question() {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className="w-full flex gap-2 border-t border-black/50 items-center">
      <div className="w-full px-10 py-8">
        <h3 className="w-full font-semibold">
          Lorem ipsum dolor sit amet consectetur?
        </h3>
        <AnimatePresence>
        {isVisible &&
          <motion.p
          className='w-full h-full'
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
            Lorem ipsum dolor sit amet consectetur. Vulputate amet aliquet morbi
            suspendisse convallis. Urna a urna lectus donec felis risus duis
            pellentesque. Pellentesque ultricies ipsum.
          </motion.p>
        }   
        </AnimatePresence>
      </div>
      <div className="w-20 h-20 flex justify-center items-center">
        <motion.button
          className="w-full h-full p-4 text-2xl font-semibold"
          onClick={() => setIsVisible(!isVisible)}
          whileTap={{
            rotate: "2deg",
            scale: 0.9,
          }}
          whileHover={{
            scale: 1.1,
          }}
          layout
          transition={{
            layout: { duration: 1 },
          }}
        >
         {
            isVisible ? '-': '+'
         }
        </motion.button>
      </div>
    </div>
  );
}

export default Question;
