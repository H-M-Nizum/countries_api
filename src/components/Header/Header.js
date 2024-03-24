import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div className='headder'>
            <h1>Display country details from outer folder, This the way of folder structure.</h1>
            <div className='menu'>
                <a href="/home">Home</a>
                <a href="/about">About</a>
                <a href="/contact">Contact us</a>
                <a href="/blog">Blog</a>
            </div>
        </div>
    );
};

export default Header;