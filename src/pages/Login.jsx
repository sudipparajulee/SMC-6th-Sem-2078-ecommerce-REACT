import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { Topbar } from '../components/Topbar'
import { RiEyeLine, RiEyeOffFill } from 'react-icons/ri'
import axios from 'axios'
import { API_URL } from '../constants/apiConstant'

export const Login = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }
  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    // Handle login logic here
    const res = await axios.post(`${API_URL}/login`, {
      email: email,
      password: password
    })
    if (res.status === 200) {
      // Handle successful login
      localStorage.setItem('token', res.data.token)
      localStorage.setItem('user', JSON.stringify(res.data.user))
      location.href = '/'
    } else {
      // Handle login error
      console.error('Login failed')
    }
  }

  const handleShowPassword = () => {
    setShowPassword(!showPassword)
  }
  return (
    <div>
        <Topbar />
        <Navbar />
        <div className='flex justify-center items-center py-20'>
            <div className='bg-gray-100 shadow w-1/3 p-10 rounded-lg'>
                <h1 className='text-2xl font-bold mb-5'>Login</h1>
                <form className='flex flex-col gap-5' onSubmit={handleSubmit}>
                    <input type='text' placeholder='Email' className='p-2 rounded-md bg-white' value={email} onChange={handleEmailChange} />
                    <div className='relative'>
                      <input type={showPassword ? "text" : "password"} placeholder='Password' className='p-2 rounded-md bg-white w-full' value={password} onChange={handlePasswordChange} />
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
