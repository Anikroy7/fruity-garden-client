import React from 'react';
import { Link } from 'react-router-dom';
import loginImage from '../../../images/login/Computer login-bro.svg'
import './Login.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faUser } from '@fortawesome/free-solid-svg-icons'
import { faLock } from '@fortawesome/free-solid-svg-icons'
import SocialLogin from '../SocialLogin/SocialLogin';


const Login = () => {
    return (
        <section className='login-main-container row '>
            <div className='back-btn text-center mb-5'>
                <FontAwesomeIcon className='me-2' icon={faArrowLeft}></FontAwesomeIcon> <Link to={'/'}>back to home </Link>
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
                    <div className='text-center  sing-up'>
                        <p>
                            <span className='me-2'>
                                New To Fruity Garden?
                            </span>
                            <Link to={'/signup'}>Create Account</Link>
                        </p>
                    </div>

                    <div className='text-center'>
                        <input id='login-btn' className='px-4 rounded' type="submit" value="Log in" />
                    </div>
                    <SocialLogin></SocialLogin>
                </form>
            </div>

        </section>
    );
};

export default Login;