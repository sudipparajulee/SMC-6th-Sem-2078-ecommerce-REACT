import React from 'react'

function ProductCard({ product , onClick }) {
  return (
    <div onClick={onClick}>
        <a href='' className='bg-white p-4 rounded-lg shadow-lg block hover:shadow-xl hover:-translate-y-1 transition duration-300'>
            <img src={product.image} alt='product' className='h-64 w-full object-cover' />
            <h2 className='text-lg font-semibold mt-4'>{product.title}</h2>
            <p className='text-sm mt-2 line-clamp-3'>{product.description}</p>
            <p className='text-sm font-semibold mt-2'>${product.price}</p>
        </a>
    </div>
  )
}

export default ProductCard