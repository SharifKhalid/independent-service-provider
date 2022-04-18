import React from 'react';
import CustomLink from '../CustomLink/CustomLink';


import './Header.css'
const Header = () => {
    return (
        
        <div className='header-div'>
            <nav className='navbar'>
            <CustomLink to="/">Home</CustomLink>
            <CustomLink to="/checkout">Checkout</CustomLink>
            <CustomLink to="/blog">Blogs</CustomLink>
            <CustomLink to="/about">About Me</CustomLink>
            <CustomLink to="/login">Login</CustomLink>
            <CustomLink to="/registration">Registration</CustomLink>
            </nav>
        </div>
        
    );
};

export default Header;