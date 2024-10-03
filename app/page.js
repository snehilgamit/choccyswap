import About from '@/components/Home/About'
import React from 'react'
import Home from '@/components/Home/Home'
import Swap from '@/components/Home/Swap'
import RoadMap from '@/components/Home/RoadMap'
import "animate.css"
const home = () => {
  return (
    <div className='animate__animated animate__fadeIn'>
      <Home />
      <About />
      <Swap />
      <RoadMap />
    </div>
  )
}

export default home
