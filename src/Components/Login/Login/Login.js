import React from 'react';
import { Link } from 'react-router-dom';
import loginImage from '../../../images/login/Computer login-bro.svg'
import './Login.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faLock } from '@fortawesome/free-solid-svg-icons'
import google from '../../../images/social-login/icons8-google-48.png'
import facebook from '../../../images/social-login/icons8-facebook-48.png'
import github from '../../../images/social-login/icons8-github-64.png'

const Login = () => {
    return (
        <section className='login-main-container row '>
            <div className=' text-center mb-5'>
                <Link to={'/'}>back to home </Link>
            </div>
            <div className='col-sm-12 col-md-6 col-lg-5'>
                <img src={loginImage} alt="" />
            </div>
            <div className='col-sm-12 col-md-6 col-lg-7 login-container d-flex justify-content-center'>
                <form className='mt-5'>
                    <h3 className='login-title text-center'>Log In</h3><br />
                    <div className='bg-white px-3 py-2'>
                        <FontAwesomeIcon className='me-3' icon={faUser}></FontAwesomeIcon>
                        <input type="text" name="email" id="email" placeholder='Your Email' required />
                    </div>
                    <br />
                    <div className='bg-white px-3 py-2 mb-4'>
                        <FontAwesomeIcon className='me-3' icon={faLock}></FontAwesomeIcon>
                        <input type="password" name="password" id="password" placeholder='Your pasword' required /><br />
                    </div>
                    <div>
                        <p>Forgot Password? Reset Password</p>
                    </div>
                    <div className='text-center'>
                        <input id='login-btn' className='px-4 rounded' type="submit" value="Log in" />
                    </div>

                    <div className='social-login mt-5'>
                        <p>
                            <span>
                                or login with
                            </span>
                            <span>
                                <img src={google} alt="" />
                                <img src={facebook} alt="" />
                                <img src={github} alt="" />
                            </span>
                        </p>
                    </div>

                </form>
            </div>
        </section>
    );
};

export default Login;