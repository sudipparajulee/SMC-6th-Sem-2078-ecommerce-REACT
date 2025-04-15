import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import About from './pages/About.jsx'
import SingleProduct from './pages/SingleProduct.jsx'
import { Login } from './pages/Login.jsx'
import CategoryProducts from './pages/CategoryProducts.jsx'
import MyCart from './pages/MyCart.jsx'
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ToastContainer  
    autoClose = {2000}
    />
    <Router>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/about' element={<About />} />
        <Route path='/product/:id' element={<SingleProduct />} />
        <Route path='/login' element={<Login />} />
        <Route path='/categoryproducts/:id' element={<CategoryProducts />} />
        <Route path='/mycart' element={<MyCart />} />
      </Routes>
    </Router>
  </StrictMode>,
)
