import React from 'react';

const MyItemsDetail = ({ item }) => {
    const { name, ratings, supplier, description, quantity, price, img } = item;
    return (
        <div>

            <div className='shadow-sm mb-5 bg-body rounded border product-detail'>

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

            </div>
            <div>

            </div>

        </div>
    )
};

export default MyItemsDetail;