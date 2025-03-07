import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import About from './pages/About.jsx'
import SingleProduct from './pages/SingleProduct.jsx'
import { Login } from './pages/Login.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/about' element={<About />} />
        <Route path='/singleproduct' element={<SingleProduct />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </Router>
  </StrictMode>,
)
