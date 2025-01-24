import React from 'react'

function Project() {
  return (
    <div className='w-full py-10 '>
        <div className='w-full px-10 border-b-[1px] border-zinc-700   pb-7'>
            <h1 className=' text-4xl font-sans tracking-tight'>Projects</h1>
           
           </div>
           <div className='px-10'>
           <div className="cards flex gap-5 mt-5">
            
           <div className='cardcontainer relative   w-1/2 h-[80vh]  ' >
             <h1 className='absolute left-full translate-x-1/2 -translate-y-1/2 top-1/2 text-[#CDEA68] leading-none font-sans text-4xl'>
             {"FYDE".split('').map((item,index)=><span className=''>{item}</span>)}
             </h1>
             <div className='w-full h-full  rounded-3xl overflow-hidden  scale-50 '>
                <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt="" />
             </div>
            </div>
            <div className='cardcontainer relative   w-1/2 h-[80vh]  ' >
             <h1 className='absolute right-full translate-x-1/2 -translate-y-1/2 top-1/2 text-[#CDEA68] leading-none font-sans text-4xl'>
               {"VISE".split('').map((item,index)=><span className=''>{item}</span>)}
             </h1>
             <div className='w-full h-full  rounded-3xl overflow-hidden  scale-50 '>
                <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" />
             </div>
            </div>
        </div>
           </div>
    </div>
  )
}

export default Project