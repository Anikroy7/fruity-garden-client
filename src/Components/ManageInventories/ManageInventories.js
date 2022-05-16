import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AllInventoriesDetail from '../AllInvetoriesDetail/AllInventoriesDetail';
import useProducts from '../hooks/useProducts';

const ManageInventories = () => {
    const [products] = useProducts();
    const navigate = useNavigate();
    const hadelAddProduct = () => {
        navigate('/additem')
    }

    return (
        <section className='mt-5'>
            <h1 className='products-title text-center'>Our All Products !!</h1>
            <div className="products-container ">

                {
                    products.map(product => <AllInventoriesDetail

                        key={product._id}
                        product={product}
                    ></AllInventoriesDetail>)
                }
            </div>
            <div className='w-100 text-center'>

                <button onClick={hadelAddProduct} className='bg-success border-0 p-2'>Add To Stock</button>
            </div>
        </section>
    );
};

export default ManageInventories;