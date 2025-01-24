import React from 'react'
import {motion} from 'framer-motion'
function Marquee() {
  return (
    <div className='w-full py-10 rounded-tl-3xl rounded-tr-3xl bg-[#004D43]'> {/* Reduced py-20 to py-10 */}
    <div className='text flex  overflow-hidden whitespace-nowrap border-t border-b border-zinc-300'> {/* Reduced gap and borders */}
        <motion.h1 initial={{x:0}} animate={{x: "-100%"}} transition={{ease:"linear",repeat: Infinity , duration: 5}} className='text-[10vw] leading-none pt-2 mb-8 uppercase font-semibold font-sans pr-10'> We are Orchi</motion.h1> {/* Adjusted font size, padding, and margin */}
        <motion.h1 initial={{x:0}} animate={{x: "-100%"}} transition={{ease:"linear",repeat: Infinity , duration: 5}} className='text-[10vw] leading-none pt-2 mb-8 uppercase font-semibold font-sans pr-10'> We are Orchi</motion.h1> {/* Same adjustments */}
        <motion.h1 initial={{x:0}} animate={{x: "-100%"}} transition={{ease:"linear",repeat: Infinity , duration: 5}} className='text-[10vw] leading-none pt-2 mb-8 uppercase font-semibold font-sans pr-10'> We are Orchi</motion.h1> 
        <motion.h1 initial={{x:0}} animate={{x: "-100%"}} transition={{ease:"linear",repeat: Infinity , duration: 5}} className='text-[10vw] leading-none pt-2 mb-8 uppercase font-semibold font-sans pr-10'> We are Orchi</motion.h1>
        <motion.h1 initial={{x:0}} animate={{x: "-100%"}} transition={{ease:"linear",repeat: Infinity , duration: 5}} className='text-[10vw] leading-none pt-2 mb-8 uppercase font-semibold font-sans pr-10'> We are Orchi</motion.h1>
        <motion.h1 initial={{x:0}} animate={{x: "-100%"}} transition={{ease:"linear",repeat: Infinity , duration: 5}} className='text-[10vw] leading-none pt-2 mb-8 uppercase font-semibold font-sans pr-10'> We are Orchi</motion.h1>
        <motion.h1 initial={{x:0}} animate={{x: "-100%"}} transition={{ease:"linear",repeat: Infinity , duration: 5}} className='text-[10vw] leading-none pt-2 mb-8 uppercase font-semibold font-sans pr-10'> We are Orchi</motion.h1>
        <motion.h1 initial={{x:0}} animate={{x: "-100%"}} transition={{ease:"linear",repeat: Infinity , duration: 5}} className='text-[10vw] leading-none pt-2 mb-8 uppercase font-semibold font-sans pr-10'> We are Orchi</motion.h1>
    </div>
</div>

  )
}

export default Marquee