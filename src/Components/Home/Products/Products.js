import React, { useEffect, useState } from 'react';
import Productdetail from '../ProductDetail/Productdetail';
import './Products.css'

const Products = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/product')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    const neededProducts = products.slice(0, 6)
    return (

        <section className='mt-5'>
            <h1 className='products-title'>Top Saver Today !!</h1>
            <div className="products-container ">

                {
                    neededProducts.map(product => <Productdetail

                        key={product._id}
                        product={product}

                    ></Productdetail>)
                }
            </div>
        </section>
    )
};

export default Products;