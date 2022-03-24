import React from 'react';
import logo from '../../assets/logo.png';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className='nav-container'>
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <div className="nav-items">
                <a href="#">Home</a>
                <a href="#">Products</a>
                <a href="#">About Us</a>
                <a href="#">Cart</a>
            </div>
        </nav>
    );
};

export default Navbar;