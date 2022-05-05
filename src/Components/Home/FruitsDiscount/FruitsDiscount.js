import React from 'react';
import fruits from '../../../images/Fruits/fruits.png'
import './FruitsDiscount.css'

const FruitsDiscount = () => {
    return (
        <section className=' d-flex justify-content-evenly mt-5'>
            <div className='fruits-container shadow-lg p-3 mb-5 bg-body rounded' style={{ backgroundImage: `url(${fruits})`, height: '100px', width: '250px', }}>
                <div>
                    <h5>healty food</h5>
                    <p>50% off</p>
                </div>
            </div>
            <div className='fruits-container shadow-lg p-3 mb-5 bg-body rounded' style={{ backgroundImage: `url(${fruits})`, height: '100px', width: '250px', }}>
                <div>
                    <h5>healty food</h5>
                    <p>50% off</p>
                </div>
            </div>
            <div className='fruits-container shadow-lg p-3 mb-5 bg-body rounded' style={{ backgroundImage: `url(${fruits})`, height: '100px', width: '250px', }}>
                <div>
                    <h5>healty food</h5>
                    <p>50% off</p>
                </div>
            </div>
        </section>
    );
};

export default FruitsDiscount;