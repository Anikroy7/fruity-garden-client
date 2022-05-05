import React from 'react';
import Banner from '../Banner/Banner';
import BeautyCare from '../BeautyCare/BeautyCare';
import Category from '../Category/Category';
import FruitsDiscount from '../FruitsDiscount/FruitsDiscount';
import Header from '../Header/Header';
import Products from '../Products/Products';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Products></Products>
            <BeautyCare></BeautyCare>
            <Services></Services>
            <FruitsDiscount></FruitsDiscount>
            <Category></Category>
        </div>
    );
};

export default Home;