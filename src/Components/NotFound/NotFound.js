import { faAlignRight, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../../images/404-image/not-found.jpg'

const NotFound = () => {
    return (
        <div className='d-flex justify-content-center align-items-center' style={{ backgroundImage: `url(${notFound})`, height: '650px' }}>

            <Link to={'/home'}>
                <button type="button" class="btn btn-success py-2 px-5">
                    <span> <FontAwesomeIcon className='text-white me-3' icon={faArrowLeft}></FontAwesomeIcon></span> Back To Home</button>
            </Link>
        </div>
    );
};

export default NotFound;