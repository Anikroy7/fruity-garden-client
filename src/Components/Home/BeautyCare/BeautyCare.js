import React from 'react';
import beautyCare from '../../../images/beauti-care/beauti-care.png'

const BeautyCare = () => {
    return (
        <div className='mt-5 m-3 pb-5' style={{ backgroundImage: `url(${beautyCare})`, height: '250px', }}>
            <div className=' p-5'>
                <h5 > ALL TESTED PRODUCTS</h5 >
                <h1>Beauty & Personal Care</h1>
                <h1 className='organic-title'>Up To 70% Off</h1>
                <button className='shop-button mt-0'>Shop Now</button>
            </div >
        </div >
    );
};

export default BeautyCare;