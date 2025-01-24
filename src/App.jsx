import React from 'react'
import Navbar from './Components/Navbar'
import LandingPage from './Components/LandingPage'
import Marquee from './Components/Marquee'
import About from './Components/About'
import Eyes from './Components/Eyes'
import Project from './Components/Project'
function App() {
  return (
      <div className='w-full min-h-screen bg-zinc-900 text-white'>
         <Navbar />
         <LandingPage />
         <Marquee />
         <About />
         <Eyes />
         <Project />
      </div>
  )
}

export default App