import React from 'react'
import Navbar from './components/Navbar'
import { Topbar } from './components/Topbar'
import Footer from './components/Footer'

function About() {
  return (
    <div>
        <Topbar />
        <Navbar />
        <div className='flex justify-center items-center h-64'>
            <div>
            <h1 className='text-3xl'>About Page</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad nostrum at, libero in adipisci explicabo consequuntur inventore vero? Harum.</p>
            </div>
        </div>

        <Footer />
    </div>
  )
}

export default About