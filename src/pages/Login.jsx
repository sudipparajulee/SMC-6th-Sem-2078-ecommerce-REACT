import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { Topbar } from '../components/Topbar'
import { RiEyeLine, RiEyeOffFill } from 'react-icons/ri'

export const Login = () => {
  const [showPassword, setShowPassword] = useState(false)
  const handleShowPassword = () => {
    setShowPassword(!showPassword)
  }
  return (
    <div>
        <Topbar />
        <Navbar />
        <div className='flex justify-center items-center h-screen'>
            <div className='bg-gray-100 shadow w-1/3 p-10 rounded-lg'>
                <h1 className='text-2xl font-bold mb-5'>Login</h1>
                <form className='flex flex-col gap-5'>
                    <input type='text' placeholder='Username' className='p-2 rounded-md bg-white' />
                    <div className='relative'>
                      <input type={showPassword ? "text" : "password"} placeholder='Password' className='p-2 rounded-md bg-white w-full' />
                      <div onClick={handleShowPassword}>
                        {showPassword ?
                        <RiEyeOffFill className='absolute top-3 right-3 text-gray-500 cursor-pointer '/> : <RiEyeLine className='absolute top-3 right-3 text-gray-500 cursor-pointer' />
                      
                      }
                      </div>
                    </div>
                    <button className='bg-blue-600 text-white p-2 rounded-md'>Login</button>
                </form>
            </div>
        </div>
    </div>
  )
}
