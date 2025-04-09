import React, { useEffect, useState } from 'react'
import { Topbar } from '../components/Topbar'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { API_URL } from '../constants/apiConstant';
import ProductCard from '../components/ProductCard';

function CategoryProducts() {
    const { id } = useParams();
    const [products, setCategoryProducts] = useState([]);
    const navigation = useNavigate();

    useEffect(() => {
        axios.get(`${API_URL}/categoryproducts/${id}`)
            .then((response) => {
                setCategoryProducts(response.data);
            })
    }
    , [id]);

    const handleClick = (id) => {
        navigation(`/product/${id}`);
    }


  return (
    <div>
        <Topbar />
        <Navbar /> 
        <div className='grid grid-cols-4 gap-4 px-20 py-10'>
            {products.map((product) => (
                <ProductCard key={product.id} product={product} onClick={() => handleClick(product.id)} />
            ))}
        </div>
        <Footer /> 
    </div>
  )
}

export default CategoryProducts     