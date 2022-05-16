import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProductDetail.css';



const Productdetail = ({ product }) => {

    const { name, price, description, ratings, img, quantity, supplier, discount, _id } = product;
    const navigate = useNavigate()
    const handelStockManage = id => {
        navigate(`/inventory/${id}`)
        console.log(id);
    }

    return (
        <section className='product'>
            <div className='shadow-sm mb-5 bg-body rounded border product-detail'>
                <button className='px-3 mb-2 rounded'>{discount}% off</button>
                <h5 className='ms-3 mt-2'>{name}</h5>
                <p className='ratings ms-3 text-success'>
                    {ratings}
                </p>
                <p className='ms-3 mt-2'>{description}</p>
                <h5 className='ms-3 mb-2'>Supplier: {supplier}</h5>
                <div className='image-container'>
                    <h5 className='ms-3 mt-2'>Quantity: {quantity}</h5>
                    <p className='ms-3 mb-0'>$<span className='price'>{price}</span></p>

                    <img src={img} alt="" />
                </div>
                <button onClick={() => handelStockManage(_id)} className='update-button rounded'>

                    Stock Manage<FontAwesomeIcon className='ms-2' icon={faShoppingCart}></FontAwesomeIcon></button>
            </div>
        </section>
    );
};

export default Productdetail;