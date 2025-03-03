import React from 'react'
import { RiFacebookBoxLine, RiFacebookCircleLine, RiFacebookLine, RiInstagramFill, RiInstagramLine, RiMapPin2Line, RiPhoneFill, RiPinterestLine, RiTwitterLine } from 'react-icons/ri'

export const Topbar = () => {
  return (
    <div>
        <div className='bg-blue-600 flex items-center justify-between py-2 px-20'>
            <div className='flex gap-3'>
                <RiInstagramLine className='text-white text-sm' />
                <RiFacebookCircleLine className='text-white text-sm' />
                <RiTwitterLine className='text-white text-sm' />
                <RiPinterestLine className='text-white text-sm' />
            </div>
            <div className='flex gap-3'>
                <div className='flex gap-1 items-center'>
                    <RiPhoneFill className='text-white text-sm' />
                    <p className='text-white text-sm'>123-456-7890</p>
                </div>
                <div className='flex gap-1 items-center'>
                    <RiMapPin2Line className='text-white text-sm' />
                    <p className='text-white text-sm'>Chitwan</p>
                </div>
            </div>
        </div>
    </div>
  )
}
