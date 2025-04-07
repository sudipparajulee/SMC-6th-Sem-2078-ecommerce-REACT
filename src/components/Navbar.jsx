import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Navbar(){
    const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/categories/')
      .then((response) => {
        setCategories(response.data);
      })
  }, []);
    return (
        <div className='sticky top-0 z-50'>
            <nav className="flex justify-between items-center px-15 py-2 bg-gray-100 shadow-lg ">
                <img src={logo} alt="logo" className="h-20" />
                <ul className="flex justify-center space-x-4">
                    <li>
                        <NavLink to="/" className={({isActive}) => isActive ? "text-red-500 font-bold" : "text-blue-500"}>Home</NavLink>
                    </li>
                    
                    {categories.map((category) => (
                        <li key={category.id} className='text-blue-500'>
                            {category.name}
                        </li>
                    ))}
                    
                    <li>
                        <NavLink to="/login" className={({isActive}) => isActive ? "text-red-500 font-bold" : "text-blue-500"}>Login</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;