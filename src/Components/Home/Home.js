import React from 'react';
import { Navigate } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import './Home.css'
const Home = () => {
    const handlerBtn = ()=>{
        <Navigate to='/checkout'> checkout</Navigate>
        
    }

    return (
        <div>
            <Banner></Banner>
            <h2 className='home-h2'>My Services</h2>
            <div className='my-service'>
            <div className='div-1'>
                <img className='img' src="/Photo/nathanael-desmeules-QSPQH_B9Ops-unsplash (1).jpg" alt="" />
                <h3>Sports Photography</h3>
                <button onClick={handlerBtn }>Checkout</button>
            </div>
            
            <div className='div-1'>
                <img className='img' src="/Photo/rayyu-maldives-uYEcQSsXaYQ-unsplash.jpg" alt="" />
                <h3>Wedding Photography</h3>
                <button>Checkout</button>
            </div>
            
            <div className='div-1'>
                <img className='img' src="/Photo/jon-flobrant--8JIKbCNy0g-unsplash.jpg" alt="" />
                <h3>Wild Photography</h3>
                <button>Checkout</button>
            </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;