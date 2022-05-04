import React from 'react';
import './Banner.css'
import { Button, Carousel, Form, FormControl } from 'react-bootstrap';
import banner1 from '../../../images/banner/banner1.jpeg'

const Banner = () => {
    return (

        <section className='d-flex' style={{ backgroundImage: `url(${banner1})`, height: '500px' }}>
            <div className='p-5 banner-title'>
                <h5>ALL NATURAL PRODUCTS</h5>
                <h1>Fresh And Healthy</h1>
                <h1>Veggies <span className='organic-title'> Organic </span></h1>
                <h1><span className='organic-title'> Market </span></h1>
                <p>Organic foods is food producted by methods that <br></br>comply with the standard of farming</p>
                <button>Shop Now</button>
            </div>
            {/* <div className='mt-5'>
                <Form className="d-flex  w-100 mx-auto">
                    <FormControl
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>

                </Form>
            </div> */}
        </section >

    );
};

export default Banner;