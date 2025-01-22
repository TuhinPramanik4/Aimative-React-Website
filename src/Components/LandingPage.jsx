import React from 'react';

function LandingPage() {
  return (
    <div className='w-full h-screen bg-zinc-900 pt-1'>
      <div className="textstructure mt-40 px-20">
        {["We Create", "Eye Opening", "Presentation"].map((item, index) => {
          return (
            <div key={index} className="masker">
              <h1 className='text-[7.5vw] leading-[6vw] tracking-tighter font-medium font-mono'>
                {item}
              </h1>
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
      </div>
    </div>
  );
}

export default LandingPage;
