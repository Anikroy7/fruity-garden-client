import React from 'react';
import './Subscribe.css'
import { Button, Form, FormControl } from 'react-bootstrap';

const Subscribe = () => {
    return (
        <section className='subscribe-main-container d-flex justify-content-evenly align-items-center  shadow-md p-3 mb-5 rounded'>

            <div>
                <h1>Subscribe To Our Newsletter </h1>
                <p className='mb-0'>And get offer and update your favourite </p>
                <p className='mt-0'>brands or products</p>
            </div>
            <div>
                <Form className="d-flex w-100">
                    <FormControl
                        type="search"
                        placeholder="Enter your email"
                        className="me-2"
                        aria-label="Search"
                    />
                    <Button variant="outline-success">Subscribe</Button>
                </Form>
                <hr />
            </div>
            <hr className='mt-5' />
        </section>
    );
};

export default Subscribe;