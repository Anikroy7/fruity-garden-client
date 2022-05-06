import React from 'react';
import './Services.css'
import truck from '../../..//images/icons/delivery-truck.png';
import badge from '../../..//images/icons/badge.png';
import phoneCall from '../../..//images/icons/phone-call.png';
import assurance from '../../..//images/icons/quality-assurance.png';


const Services = () => {
    return (
        <section className='row justify-content-evenly mt-5'>
            <div className='services text-center col-sm-12 col-md-6 col-lg-3' >
                <img src={truck} alt="" />
                <h6>Fastest Delivery</h6>
                <p>Delivery at your door step</p>
            </div>
            <div className='services text-center col-sm-12 col-md-6 col-lg-3' >
                <img src={phoneCall} alt="" />
                <h6>24×7 Services </h6>
                <p>Reach us when nedded</p>
            </div>
            <div className='services text-center col-sm-12 col-md-6 col-lg-3' >
                <img src={badge} alt="" />
                <h6>Varify Brands</h6>
                <p>Granteed Products</p>
            </div>
            <div className='services text-center col-sm-12 col-md-6 col-lg-3' >
                <img src={assurance} alt="" />
                <h6 className=''>100% Assuarance</h6>
                <p>We provided 100% assuarance </p>
            </div>
        </section>
    );
};

export default Services;