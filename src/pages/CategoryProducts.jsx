import React, { useEffect, useState } from 'react'
import { Topbar } from '../components/Topbar'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { API_URL } from '../constants/apiConstant';
import ProductCard from '../components/ProductCard';

function CategoryProducts() {
    const { id } = useParams();
    const [products, setCategoryProducts] = useState([]);

    useEffect(() => {
        axios.get(`${API_URL}/categoryproducts/${id}`)
            .then((response) => {
                setCategoryProducts(response.data);
            })
    }
    , [id]);

    const handleClick = (product) => {
        navigation(`/product/${product.id}`, { state: { product } });
    }


  return (
    <div>
        <Topbar />
        <Navbar /> 
        <div className='grid grid-cols-4 gap-4 px-20 py-10'>
            {products.map((product) => (
                <ProductCard key={product.id} product={product} onClick={() => handleClick(product)} />
            ))}
        </div>
        <Footer /> 
    </div>
  )
}

export default CategoryProducts     