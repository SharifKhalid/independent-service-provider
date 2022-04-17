import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';


import './Header.css'
const Header = () => {
    return (
        <div className='header-div'>
            <nav className='navbar'>
            <CustomLink to="/">Home</CustomLink>
            <CustomLink to="/checkou">Checkout</CustomLink>
            <CustomLink to="/blog">Blogs</CustomLink>
            <CustomLink to="/about">About Me</CustomLink>
            </nav>
        </div>
    );
};

export default Header;