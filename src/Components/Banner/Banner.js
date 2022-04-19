import React from 'react';
import './Banner.css'
const Banner = () => {
    return (
        <div className='banner'>
            <div className='banner-div-2'>
                <h1 className='banner-title'>I am a Professional Photographer.</h1>
                <h4>I provide various kinds of services. such as wedding photographer, sports photographer, wild photographer.</h4>
            </div>
            
            <div className='banner-div-img'>
                <img className='banner-img' src="/Photo/6906.jpg" alt="" />
            </div>
        </div>
    );
};

export default Banner;