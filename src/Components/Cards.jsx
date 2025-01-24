import React from 'react'

function Cards() {
  return (
    <div className='w-full h-screen flex items-center gap-2 top-1/2 p-32 bg-zinc-100'>
        <div className='cardcontainers  h-[50vh] w-1/2 '>
           <div className='card w-full h-full bg-[#004D43]'>

           </div>
        </div>
        <div className='cardcontainers flex gap-2 h-[50vh] w-1/2 '>
        <div className='card w-1/2 h-full bg-zinc-800'></div>
        <div className='card w-1/2 h-full bg-zinc-800'></div>
        </div>

    </div>
  )
}

export default Cards