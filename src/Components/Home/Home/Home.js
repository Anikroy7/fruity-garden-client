import React from 'react';
import Banner from '../Banner/Banner';
import BeautyCare from '../BeautyCare/BeautyCare';
import Category from '../Category/Category';
import Footer from '../Footer/Footer';
import FruitsDiscount from '../FruitsDiscount/FruitsDiscount';
import Header from '../Header/Header';
import Products from '../Products/Products';
import Services from '../Services/Services';
import Subscribe from '../Subscribe/Subscribe';

const Home = () => {
    return (
        <div>

            <Banner></Banner>
            <Products></Products>
            <BeautyCare></BeautyCare>
            <Services></Services>
            <FruitsDiscount></FruitsDiscount>
            <Category></Category>
            <Subscribe></Subscribe>

        </div>
    );
};

export default Home;