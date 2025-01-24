import { motion } from 'framer-motion';
import React from 'react';
import { FaLongArrowAltUp } from "react-icons/fa";
function LandingPage() {
  return (
    <div  className='w-full h-screen bg-zinc-900 pt-1'>
      <div className="textstructure mt-40 px-20">
        {["We Create", "Eye Opening", "Presentation"].map((item, index) => {
          return (
            <div key={index} className="masker">
              <div className='w-fit flex '>
                         {index===1 && (<motion.div initial={{width:0}} animate={{width:"9vw"}} transition={{ease: [0.76,0,0.24,1],duration:1}} className='w-[9vw] h-[5vw] bg-red-500 relative top-[1vw] '></motion.div>)}
              <h1 className='text-[7.5vw] leading-[6vw] tracking-tighter font-medium font-mono'>
                {item}
              </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className='border-t-[1px] border-zinc-500 mt-12 flex justify-between items-center py-5 px-20'>
        {["For Public and Private Companies", "From the first pitch to IPO"].map((item, index) => (
          <p key={index} className='text-md font-light tracking-tighter leading-none'>
            {item}
          </p>
        ))}
        <div className='px-5 py-2 border-[2px] font-light font-xs rounded-full uppercase border-zinc-500'>Start The Project</div>
        <div className='w-8 h-8 border-[2px] flex items-center justify-center border-zinc-500 rounded-full'><span className='rotate-[45deg]'>
          <FaLongArrowAltUp />
          </span>
          </div>
      </div>
    </div>
  );
}

export default LandingPage;
