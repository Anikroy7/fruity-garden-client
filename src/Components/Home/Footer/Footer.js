import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <section className=' footer-main-container'>
            <section className='row p-5'>
                <div className='col-sm-6 col-md-4 col-lg-3 footer-detail-container'>
                    <h6>Vegetables & Fruits</h6>
                    <p>Fresh Vegetables</p>
                    <p>Fresh Fruits</p>
                    <p>Herbs</p>
                    <p>Seasonings</p>
                    <p>Exotic Fruits</p>
                    <p>Exotic Veggeis</p>
                </div>
                <div className='col-sm-6 col-md-4 col-lg-3'>
                    <h6>Premium Fruits</h6>
                    <p>Avacado, Peach,Plum</p>
                    <p>Cherries</p>
                    <p>Organics</p>
                    <p>Apples</p>
                    <p>Dates</p>
                    <p>Seasonal</p>
                </div>
                <div className='col-sm-6 col-md-4 col-lg-3'>
                    <h6>Beverages</h6>
                    <p>Tea</p>
                    <p>Coffee</p>
                    <p>Fruite jucies</p>
                    <p>Energy Drinks</p>
                    <p>Health Suppliment</p>
                    <p>Soda water</p>
                </div>
                <div className='col-sm-6 col-md-4 col-lg-3'>
                    <h6>Home Care</h6>
                    <p>Detegent</p>
                    <p>Dishwash</p>
                    <p>All cleaners</p>
                    <p>Fresheners</p>
                    <p>Shoe Care</p>
                    <p>Pet Supplies</p>
                </div></section>
        </section>
    );
};

export default Footer;