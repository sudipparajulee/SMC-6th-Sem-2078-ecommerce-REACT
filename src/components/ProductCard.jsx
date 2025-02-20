import React from 'react'

function ProductCard() {
  return (
    <div>
        <a href='' className='bg-white p-4 rounded-lg shadow-lg block hover:shadow-xl hover:-translate-y-1 transition duration-300'>
            <img src='https://picsum.photos/500' alt='product' className='h-40 w-full object-cover' />
            <h2 className='text-lg font-semibold mt-4'>Product Name</h2>
            <p className='text-sm mt-2'>Product Description</p>
            <p className='text-sm font-semibold mt-2'>$100</p>
        </a>
    </div>
  )
}

export default ProductCard