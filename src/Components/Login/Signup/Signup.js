import React from 'react';
import './Signup.css'
import signup from '../../../images/signup/signup2.webp'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faLeftRight, faUser } from '@fortawesome/free-solid-svg-icons'
import { faLock } from '@fortawesome/free-solid-svg-icons'
import SocialLogin from '../SocialLogin/SocialLogin';
const Signup = () => {
    return (
        <section style={{ backgroundImage: `url(${signup})`, height: '850px', opacity: '' }}>
            <div className='back-btn text-center mb-2'>
                <FontAwesomeIcon className='mt-5 text-white' icon={faArrowLeft}></FontAwesomeIcon> <Link to={'/'}>back to home </Link>
            </div>
            <div className='signup-container w-50 mx-auto P-5'>
                <h1 className='text-center signup-title'>Create Account</h1>
                <form action="">
                    <div className='bg-white mb-3' >
                        <FontAwesomeIcon className='me-3' icon={faUser}></FontAwesomeIcon>
                        <input type="text" name='name' placeholder='Your name' required />
                    </div>
                    <div className='bg-white mb-3' >
                        <FontAwesomeIcon className='me-3' icon={faUser}></FontAwesomeIcon>
                        <input type="email" name='email' placeholder='Your email' required />
                    </div>
                    <div className='bg-white mb-3' >
                        <FontAwesomeIcon className='me-3' icon={faLock}></FontAwesomeIcon>
                        <input type="password" name="password" id="password" placeholder='password' />
                    </div>
                    <div className='bg-white mb-3' >
                        <FontAwesomeIcon className='me-3' icon={faLock}></FontAwesomeIcon>
                        <input type="password" name="confirm-password" id="confirm-password" placeholder='confirm password' />
                    </div>
                    <div>
                        <p>
                            <span>Already have an account? </span>
                            <Link to='/login'>Log in</Link>
                        </p>
                    </div>
                    <div id='signup-btn'>
                        <input type="submit" value="Sign Up" />
                    </div>
                    <SocialLogin></SocialLogin>
                </form>
            </div>

        </section >
    );
};

export default Signup;