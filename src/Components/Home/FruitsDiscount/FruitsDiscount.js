import React from 'react';
import fruits1 from '../../../images/Fruits/food-fruits_IZBN5G7AAB.png'
import './FruitsDiscount.css'
import fruits2 from '../../../images/Fruits/JMXYT7O7YF.png'
import fruits3 from '../../../images/Fruits/strawberry-food_0QOZU6MW8Q.png'
import './FruitsDiscount.css'

const FruitsDiscount = () => {
    return (
        <section className=' justify-content-evenly mt-5 row'>
            <div className='fruits-container col-sm-12 col-md-12 col-lg-4  shadow-lg p-3 mb-5 rounded' style={{ backgroundImage: `url(${fruits1})`, height: '170px', width: '250px', backgroundColor: "green" }}>
                <div>
                    <h5>Fresh food</h5>
                    <p>50% off</p>
                </div>
            </div>
            <div className='fruits-container col-sm-12 col-md-6 col-lg-4 shadow-lg p-3 mb-5 bg-body rounded' style={{ backgroundImage: `url(${fruits2})`, height: '170px', width: '250px', }}>
                <div>
                    <h5>Healthy vegetable</h5>
                    <p>70% off</p>
                </div>
            </div>
            <div className='fruits-container col-sm-12 col-md-6 col-lg-4 shadow-lg p-3 mb-5 bg-body rounded' style={{ backgroundImage: `url(${fruits3})`, height: '170px', width: '250px', }}>
                <div>
                    <h5>Red Stobary</h5>
                    <p>50% off</p>
                </div>
            </div>
        </section>
    );
};

export default FruitsDiscount;