import React, { useState } from 'react'
import { Topbar } from '../components/Topbar'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Ri24HoursFill, RiBankCard2Fill, RiShoppingCart2Fill, RiStarFill, RiTruckFill, RiVerifiedBadgeFill } from 'react-icons/ri'

function SingleProduct() {
    const [qty, setQty] = useState(1)
    const increment = () => {
        setQty(qty + 1)
    }
    const decrement = () => {
        if(qty > 1)
        setQty(qty - 1)
    }
  return (
    <div>
        <Topbar />
        <Navbar />
        <div className='grid grid-cols-4 gap-4 md:px-32 px-20 py-10'>
            <div>
                <img src='https://picsum.photos/500' alt='product' />
            </div>
            <div className='col-span-2'>
                <h1 className='text-2xl font-bold'>Outdoor Jacket For Men</h1>
                <div className='flex items-center py-2'>
                    <RiStarFill className='text-yellow-500' />
                    <RiStarFill className='text-yellow-500' />
                    <RiStarFill className='text-yellow-500' />
                    <RiStarFill className='text-yellow-500' />
                    <RiStarFill className='text-yellow-500' />
                    <p>(200)</p>
                </div>
                <p className='text-lg font-bold'>$100</p>
                <p className='text-sm text-gray-600'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium nihil reprehenderit corporis obcaecati similique debitis? Quis, vel. A asperiores quam, porro tempore consequuntur dicta minus impedit maxime corrupti ea non!
                </p>
                <div className='flex items-center py-2'>
                    <button onClick={decrement} className='bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded'>-</button>
                    <p className='px-4'>{qty}</p>
                    <button onClick={increment} className='bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded'>+</button>
                </div>
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center gap-2'><RiShoppingCart2Fill/> Add to Cart</button>
            </div>
            <div className='border-l border-gray-200 pl-2 text-gray-700'>
                <p className='flex items-center gap-2'><RiTruckFill /> Free Delivery </p>
                <p className='flex items-center gap-2'><Ri24HoursFill /> 24/7 Support </p>
                <p className='flex items-center gap-2'><RiVerifiedBadgeFill /> 100% Original </p>
                <p className='flex items-center gap-2'><RiBankCard2Fill /> Secure Payments </p>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default SingleProduct