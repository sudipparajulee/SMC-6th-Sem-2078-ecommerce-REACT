import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { API_URL, API_URL_PRODUCT } from '../constants/apiConstant'
import { Topbar } from '../components/Topbar'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function MyCart() {
    const token = localStorage.getItem('token')
    const [carts, setCarts] = useState([])
    if (!token) {
        location.href = '/login'
    }

    useEffect(() => {
        axios.get(`${API_URL}/cart`,{
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }
        )
        .then((response) => {
            setCarts(response.data.carts);
            console.log(response.data.carts);
        })
    }
    , []);

    const handleRemoveCart = (cartId) => {
      axios.get(`${API_URL}/cart/destroy/${cartId}`, {
          headers: {
              Authorization: `Bearer ${token}`
          }
      })
      .then((response) => {
          setCarts(carts.filter(cart => cart.id !== cartId));
      })
      .catch((error) => {
          console.error('Error removing cart:', error);
      });
  }

  return (
    <div>
        <Topbar />
        <Navbar />
      <div className='grid grid-cols-2 gap-4 md:px-32 px-20 py-10'>
        {carts.map((cart) => (
          <div key={cart.id} className='bg-gray-100 shadow p-5 rounded-lg flex justify-between'>
            <img src={API_URL_PRODUCT + cart.product.photopath} alt='product' className='w-52 h-52 object-cover'/>
            <div>
            <h1 className='text-xl font-bold'>{cart.product.name}</h1>
            <p className='text-sm'>Price: {cart.product.price}</p>
            <p className='text-sm'>Qty: {cart.qty}</p>
            <p className='text-sm'>Total: {cart.product.price * cart.qty}</p>
            <div className='flex flex-col items-end'>
                <div>
                <button className='bg-red-500 text-white px-4 py-2 rounded mt-2 cursor-pointer' onClick={()=> handleRemoveCart(cart.id)}>Remove</button>
                </div>
                <div>
                <button className='bg-green-500 text-white px-4 py-2 rounded mt-2'>Checkout</button>
                </div>
            </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  )
}

export default MyCart