import React from 'react';
import './ProductDetail.css';

const Productdetail = ({ product }) => {

    const { name, price, description, img, quantity, supplier } = product;
    return (
        <section className='product'>
            <div>
                <h3>{name}</h3>
                <h6>Quantity: {quantity}</h6>
                <p>$ <span>{price}</span></p>
                <p>{description}</p>
                <p>{supplier}</p>
            </div>
            <div className='image-container'>
                <img src={img} alt="" />
            </div>
            <button>Update</button>
        </section>
    );
};

export default Productdetail;