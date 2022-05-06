import React from 'react';
import fruits from '../../../images/Fruits/fruits.png'
import './FruitsDiscount.css'

const FruitsDiscount = () => {
    return (
        <section className=' justify-content-evenly mt-5 row'>
            <div className='fruits-container col-sm-12 col-md-12 col-lg-4  shadow-lg p-3 mb-5 bg-body rounded' style={{ backgroundImage: `url(${fruits})`, height: '170px', width: '250px', }}>
                <div>
                    <h5>Fresh food</h5>
                    <p>50% off</p>
                </div>
            </div>
            <div className='fruits-container col-sm-12 col-md-6 col-lg-4 shadow-lg p-3 mb-5 bg-body rounded' style={{ backgroundImage: `url(${fruits})`, height: '170px', width: '250px', }}>
                <div>
                    <h5>Healthy vegetable</h5>
                    <p>70% off</p>
                </div>
            </div>
            <div className='fruits-container col-sm-12 col-md-6 col-lg-4 shadow-lg p-3 mb-5 bg-body rounded' style={{ backgroundImage: `url(${fruits})`, height: '170px', width: '250px', }}>
                <div>
                    <h5>Cruncy Snacks</h5>
                    <p>50% off</p>
                </div>
            </div>
        </section>
    );
};

export default FruitsDiscount;