import React from 'react';
import './Banner.css'
import banner1 from '../../../images/banner/banner1.jpeg'

const Banner = () => {
    return (

        <section className='d-flex' style={{ backgroundImage: `url(${banner1})`, height: '520px' }}>
            <div className='p-5 banner-title'>
                <h6>ALL NATURAL PRODUCTS</h6>
                <h1>Fresh And Healthy</h1>
                <h1>Veggies <span className='organic-title'> Organic </span></h1>
                <h1><span className='organic-title'> Market </span></h1>
                <p>Organic foods is food producted by methods that <br></br>comply with the standard of farming</p>
                <button className='shop-button'>Shop Now</button>
            </div>

        </section >

    );
};

export default Banner;