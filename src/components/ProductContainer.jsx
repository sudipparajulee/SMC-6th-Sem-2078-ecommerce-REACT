import React from 'react'
import ProductCard from './ProductCard'

function ProductContainer() {
  return (
    <div>
        <div className='grid grid-cols-4 gap-4 px-20 py-10'>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </div>
    </div>
  )
}

export default ProductContainer