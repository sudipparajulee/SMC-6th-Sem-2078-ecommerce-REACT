import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';

function Navbar(){
    return (
        <div className='sticky top-0 z-50'>
            <nav className="flex justify-between items-center px-15 py-2 bg-gray-100 shadow-lg ">
                <img src={logo} alt="logo" className="h-20" />
                <ul className="flex justify-center space-x-4">
                    <li>
                        <NavLink to="/" className={({isActive}) => isActive ? "text-red-500 font-bold" : "text-blue-500"}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className={({isActive}) => isActive ? "text-red-500 font-bold" : "text-blue-500"}>About</NavLink>
                    </li>
                    <li><a href="#" className="text-blue-500">Services</a></li>
                    <li><a href="#" className="text-blue-500">Contact</a></li>
                    <li>
                        <NavLink to="/login" className={({isActive}) => isActive ? "text-red-500 font-bold" : "text-blue-500"}>Login</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;