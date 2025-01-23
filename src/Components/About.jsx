import React from 'react'

function About() {
  return (
    <div className='w-full px-20 py-20 font-sans text-black bg-[#CDEA68] rounded-tl-3xl'>
        <h1 className='text-[4vw] leading-[4.5vw] tracking-tight '>
            Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.</h1>

        <div className='w-full flex gap-2 border-t-[1px] p-20 mt-20 border-[#a1b562]'>
            <div className='w-1/2'>
              <h1 className='text-4xl'>Our Approch</h1>
              <button className='px-4 py-2 mt-5 bg-zinc-900 rounded-full uppercase text-white flex items-center  gap-2'>Read More
                <div className='w-2 h-2 bg-zinc-100 rounded-full flex '></div>
              </button>
            </div>
            <div className='w-1/2 h-[70vh] rounded-3xl bg-[#7d8d44]'></div>
        </div>
    </div>
  )
}

export default About