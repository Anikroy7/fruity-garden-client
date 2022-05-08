import { Button } from 'bootstrap';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';
import Productdetail from '../ProductDetail/Productdetail';
import './Products.css'

const Products = () => {

    const [products, setProducts] = useProducts();
    const navigate = useNavigate();


    const neededProducts = products.slice(0, 6);

    const hadelAllInventory = () => {
        navigate('/inventories')
    }

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
            <div className='w-100 text-center'>

                <button onClick={hadelAllInventory} className='bg-success border-0 p-2'>Manage All</button>
            </div>

        </section>
    )
};

export default Products;