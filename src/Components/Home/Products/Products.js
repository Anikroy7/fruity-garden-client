import React, { useEffect, useState } from 'react';
import Productdetail from '../ProductDetail/Productdetail';
import './Products.css'

const Products = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://calm-anchorage-95986.herokuapp.com/product')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (

        <section className='mt-5'>
            <h1 className='text-center'>Our Products </h1>
            <div className="products-container">

                {
                    products.map(product => <Productdetail

                        key={product._id}
                        product={product}

                    ></Productdetail>)
                }
            </div>
        </section>
    )
};

export default Products;