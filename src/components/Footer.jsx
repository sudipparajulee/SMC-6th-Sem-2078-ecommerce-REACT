import React from 'react'
import { RiPhoneFill, RiUser2Fill } from 'react-icons/ri'

function Footer() {
  return (
    <div>
        <div className='grid grid-cols-3 gap-4 bg-blue-600 text-white py-10 px-24'>
            <div>
                <h1 className='text-2xl font-bold'>About Us</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, magnam?</p>
            </div>
            <div>
                <h1 className='text-2xl font-bold'>Services</h1>
                <ul>
                    <li>Service A</li>
                    <li>Service B</li>
                    <li>Service C</li>
                    <li>Service D</li>
                </ul>
            </div>
            <div>
                <h1 className='text-2xl font-bold'>Contact Us</h1>
                <p><RiPhoneFill className='inline' /> 123-456-7890</p>
                <p><RiUser2Fill className='inline' /> 123-456-7890</p>
                <p> 123-456-7890</p>
            </div>

        </div>
        <div className='bg-blue-900 text-white text-center p-4'>
            <p>&copy; 2025 Company Name</p>
        </div>
    </div>
  )
}

export default Footer