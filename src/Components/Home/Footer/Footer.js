import React from 'react';
import './Footer.css'
import googlePlay from '../../../images/play-store/goolellll.png'
import applePlay from '../../../images/play-store/25-253876_app-store-and-google-play-with-your-own.png'
import facebook from '../../../images/play-store/facebook.png'
import twitter from '../../../images/play-store/instagram.png'
import instagram from '../../../images/play-store/twitter.png'
import footerIcon from '../../../images/footer-icon/footer.jpg'

const Footer = () => {
    return (
        <section>
            <hr className='mb-5 ' />
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
                    </div>
                </section>
            </section>


            <section className='mt-5 row me-5 p-5'>
                <div className='col-sm-12 col-md-6 col-lg-5 copyright-container'>

                    <span className='ms-3'>Terms of service</span>
                    <span className='ms-3'>Privacy</span>
                    <span className='ms-3'>Cookies</span>
                    <p className='ms-5 mt-2'>
                        &copy; Fruity Garden 2022
                    </p>

                </div>
                <div className='social-login-container col-sm-12 col-md-6 col-lg-7 text-end '>
                    <img id='apple-img' className=' ms-2' src={applePlay} alt="" />
                    <img id='google-img' src={googlePlay} alt="" />
                    <span className='social-login-icon ms-4 '>
                        <img src={facebook} alt="" />
                        <img src={twitter} alt="" />
                        <img src={instagram} alt="" />
                    </span>
                </div>

            </section>
        </section>
    );
};

export default Footer;