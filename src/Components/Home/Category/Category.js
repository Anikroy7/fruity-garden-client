import React from 'react';
import './Category.css'
import fruits from '../../../images/category/fruits.png'
import grain from '../../../images/category/grain.png'
import milk from '../../../images/category/milk.png'
import mop from '../../../images/category/mop.png'
import paste from '../../../images/category/tooth-paste.png'

const Category = () => {
    return (
        <section className='ms-5 m-5 me-0'>
            <h1 className='category-title mt-5 mb-5'>Browse by Category</h1>
            <div className='row g-2'>
                <div className='category-container col-sm-2 col-md-4 col-lg-2 '>
                    <img className='mb-5' src={fruits} alt="" />
                    <h6>Fruits &</h6>
                    <h6> vegitable</h6>
                </div>
                <div className='category-container col-sm-2 col-md-4 col-lg-2'>
                    <img className='mb-5' src={milk} alt="" />
                    <h6>Milk &</h6>
                    <h6> Daries</h6>
                </div>
                <div className='category-container col-sm-2 col-md-4 col-lg-2'>
                    <img className='mb-5' src={grain} alt="" />
                    <h6>Foods &</h6>
                    <h6> Grains</h6>
                </div>
                <div className='category-container col-sm-2 col-md-4 col-lg-2'>
                    <img className='mb-5' src={paste} alt="" />
                    <h6>Beauty &</h6>
                    <h6> Heigenie</h6>
                </div>
                <div className='category-container col-sm-2 col-md-4 col-lg-2'>
                    <img className='mb-5' src={mop} alt="" />
                    <h6>Cleaning &</h6>
                    <h6>Household</h6>
                </div>
                <div className='category-container col-sm-2 col-md-4 col-lg-2'>
                    <img className='mb-5' src={fruits} alt="" />
                    <h6>Fruits &</h6>
                    <h6> vegitable</h6>
                </div>
                <div className='category-container col-sm-2 col-md-4 col-lg-2'>
                    <img className='mb-5' src={fruits} alt="" />
                    <h6>Fruits &</h6>
                    <h6> vegitable</h6>
                </div>
                <div className='category-container col-sm-2 col-md-4 col-lg-2'>
                    <img className='mb-5' src={fruits} alt="" />
                    <h6>Fruits &</h6>
                    <h6> vegitable</h6>
                </div>
                <div className='category-container col-sm-2 col-md-4 col-lg-2'>
                    <img className='mb-5' src={fruits} alt="" />
                    <h6>Fruits &</h6>
                    <h6> vegitable</h6>
                </div>
                <div className='category-container col-sm-2 col-md-4 col-lg-2'>
                    <img className='mb-5' src={fruits} alt="" />
                    <h6>Fruits &</h6>
                    <h6> vegitable</h6>
                </div>
            </div>

        </section>
    );
};

export default Category;