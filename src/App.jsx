import React from 'react'
import Navbar from './Components/Navbar'
import LandingPage from './Components/LandingPage'
import Marquee from './Components/Marquee'
import About from './Components/About'
import Eyes from './Components/Eyes'
import Project from './Components/Project'
import Cards from './Components/Cards'
import LocomotiveScroll from 'locomotive-scroll';
import Footer from './Components/Footer'
function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
      <div className='w-full min-h-screen bg-zinc-900 text-white'>
         <Navbar />
         <LandingPage />
         <Marquee />
         <About />
         <Eyes />
         <Project />
         <Cards />
         <Footer />
      </div>
  )
}

export default App