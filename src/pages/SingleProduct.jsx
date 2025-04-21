import React, { useEffect, useState } from 'react'
import { Topbar } from '../components/Topbar'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Ri24HoursFill, RiBankCard2Fill, RiShoppingCart2Fill, RiStarFill, RiTruckFill, RiVerifiedBadgeFill } from 'react-icons/ri'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { API_URL, API_URL_PRODUCT } from '../constants/apiConstant'
import { toast } from 'react-toastify'
import ProductCard from '../components/ProductCard'
import Chart from '../components/Chart'

function SingleProduct() {
    const { id } = useParams();
    const [product, setProduct] = useState([])
    const [relatedproducts, setRelatedProducts] = useState([])
    const navigation = useNavigate();

    const [qty, setQty] = useState(1)
    const increment = () => {
        setQty(qty + 1)
    }
    const decrement = () => {
        if(qty > 1)
        setQty(qty - 1)
    }

    useEffect(() => {
        axios.get(`${API_URL}/viewproduct/${id}`)
            .then((response) => {
                setProduct(response.data.product);
                setRelatedProducts(response.data.relatedproducts);
            })
    }
    , [id]);
    
    const handleAddToCart = () => {
        const token = localStorage.getItem('token')
        if (!token) {
            alert('Please login to add items to cart')
            return
        }
        axios.post(`${API_URL}/cart/store`, {
            product_id: id,
            qty: qty
        }, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then((response) => {
            if(response.status === 200) {
                toast.success(response.data.message)
            }
            else {
                toast.error('Error: ' + response.data.message)
            }
        })
    }

    const handleClick = (id) => {
        navigation(`/product/${id}`);
    }
  return (
    <div>
        <Topbar />
        <Navbar />
        <div className='grid grid-cols-4 gap-4 md:px-32 px-20 py-10'>
            <div>
                <img src={API_URL_PRODUCT + product.photopath} alt='product' className='w-full'/>
            </div>
            <div className='col-span-2'>
                <h1 className='text-2xl font-bold'>{product.name}</h1>
                <div className='flex items-center py-2'>
                    <RiStarFill className='text-yellow-500' />
                    <RiStarFill className='text-yellow-500' />
                    <RiStarFill className='text-yellow-500' />
                    <RiStarFill className='text-yellow-500' />
                    <RiStarFill className='text-yellow-500' />
                    <p>(200)</p>
                </div>
                <p className='text-lg font-bold'>Rs. {product.price}</p>
                <p className='text-sm text-gray-600'>
                    {product.description}
                </p>
                <div className='flex items-center py-2'>
                    <button onClick={decrement} className='bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded'>-</button>
                    <p className='px-4'>{qty}</p>
                    <button onClick={increment} className='bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded'>+</button>
                </div>
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center gap-2 cursor-pointer' onClick={handleAddToCart}><RiShoppingCart2Fill/> Add to Cart</button>
            </div>
            <div className='border-l border-gray-200 pl-2 text-gray-700'>
                <p className='flex items-center gap-2'><RiTruckFill /> Free Delivery </p>
                <p className='flex items-center gap-2'><Ri24HoursFill /> 24/7 Support </p>
                <p className='flex items-center gap-2'><RiVerifiedBadgeFill /> 100% Original </p>
                <p className='flex items-center gap-2'><RiBankCard2Fill /> Secure Payments </p>
            </div>
        </div>

        <div className='px-24 py-10'>
            <h1 className='font-bold text-xl'>Related Products</h1>
            <div className='grid grid-cols-4 gap-4 px-20 py-10'>
            {relatedproducts.map((product) => (
                <ProductCard key={product.id} product={product} onClick={() => handleClick(product.id)} />
            ))}
        </div>
        </div>

        <Chart />
    </div>
  )
}

export default SingleProduct