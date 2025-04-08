import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import { API_URL } from '../constants/apiConstant';

function ProductContainer() {
  const navigation = useNavigate();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get(`${API_URL}/latestproduct`)
      .then((response) => {
        setProducts(response.data);
      })
  }, []);

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