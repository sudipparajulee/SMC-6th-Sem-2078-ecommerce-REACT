import React from 'react'
import ProductCard from './ProductCard'
import { useNavigate } from 'react-router-dom'

function ProductContainer() {
  const navigation = useNavigate();
  const products = [
    {
      id: 1,
      productname: "Product A",
      description: "this is description",
      price:100,
      image: 'https://picsum.photos/500'
    },
    {
      id: 2,
      productname: "Product 2",
      description: "this is description",
      price:200,
      image: 'https://picsum.photos/600'
    },
    {
      id: 3,
      productname: "Product 3",
      description: "this is description",
      price:300,
      image: 'https://picsum.photos/700'
    },
    {
      id: 4,
      productname: "Product 4",
      description: "this is description",
      price:400,
      image: 'https://picsum.photos/800'
    },
    {
      id: 5,
      productname: "Product 5",
      description: "this is description",
      price:500,
      image: 'https://picsum.photos/900'
    }
  ]

  const handleClick = (product) => {
    navigation(`/product/${product.id}`, { state: { product } });
  }

  return (
    <div>
        <div className='grid grid-cols-4 gap-4 px-20 py-10'>
            {products.map((product) => (
                // <ProductCard key={product.id} productname={product.productname} price={product.price} description={product.description} />
                <ProductCard key={product.id} product={product} onClick={() => handleClick(product)} />
            ))}
        </div>
    </div>
  )
}

export default ProductContainer