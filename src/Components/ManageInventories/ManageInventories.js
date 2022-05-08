import React, { useEffect, useState } from 'react';
import AllInventoriesDetail from '../AllInvetoriesDetail/AllInventoriesDetail';
import useProducts from '../hooks/useProducts';

const ManageInventories = () => {
    const [products, setProducts] = useProducts();
    // useEffect(() => {
    //     fetch('https://calm-anchorage-95986.herokuapp.com/product')
    //         .then(res => res.json())
    //         .then(data => setProducts(data))
    // }, [])
    // console.log(products);

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
        </section>
    );
};

export default ManageInventories;