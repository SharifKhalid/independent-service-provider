import React, { useEffect, useState } from 'react';
import './Products.css'
const Products = () => {
    const [products, setProducts] =useState([]);

    useEffect(()=>{
        fetch('Product.json')
        .then(res => res.json())
        .then(data => setProducts(data));
    },[])


    return (
        <div>
            <h1>{products.length}</h1>
        </div>
    );
};

export default Products;