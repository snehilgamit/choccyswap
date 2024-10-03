'use client'
import About from '@/components/Home/About'
import React from 'react'
import Home from '@/components/Home/Home'
import Swap from '@/components/Home/Swap'
import RoadMap from '@/components/Home/RoadMap'
import Menubar from '@/components/Menubar'
import { useRef } from 'react'
import "animate.css"
const home = () => {
  const swapRef = useRef(null)
  const scrollToSwap = () => {
    if (swapRef.current) {
      swapRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }
  return (
    <div className='animate__animated animate__fadeIn'>
    <Menubar/>
      <Home scrollToSwap={scrollToSwap} />
      <About />
      <div ref={swapRef}>
        <Swap />
      </div>
      <RoadMap />
    </div>
  )
}

export default home
