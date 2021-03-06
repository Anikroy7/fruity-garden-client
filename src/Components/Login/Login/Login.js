import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import loginImage from '../../../images/login/Computer login-bro.svg'
import './Login.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faUser } from '@fortawesome/free-solid-svg-icons'
import { faLock } from '@fortawesome/free-solid-svg-icons'
import SocialLogin from '../SocialLogin/SocialLogin';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { Spinner } from 'react-bootstrap';
import { toast } from 'react-toastify';



const Login = () => {
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(
        auth
    );
    const [token, setToken] = useState('');
    const [loginErrorMessage, setLoginErrorMessage] = useState('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const emailRef = useRef('')
    const navigate = useNavigate()
    const location = useLocation()
    let from = location.state?.from?.pathname || "/";


    useEffect(() => {
        if (error) {
            setLoginErrorMessage(error.message)
            console.log(error);
        }
    }, [error])

    const handelUserLogIn = event => {
        event.preventDefault()
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email, password);
        signInWithEmailAndPassword(email, password)
        fetch('calm-anchorage-95986.herokuapp.com/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email }),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                localStorage.setItem('Token', data.token)
                navigate(from, { replace: true });
            })


    }

    const handelResetPassword = async () => {
        const email = emailRef.current.value;
        await sendPasswordResetEmail(email);
        toast('reset email send')


    }


    return (
        <section className='login-main-container row '>

            <div className='back-btn text-center mb-5'>
                <FontAwesomeIcon className='me-2' icon={faArrowLeft}></FontAwesomeIcon> <Link to={'/'}>Back to home </Link>
            </div>
            <div className='col-sm-12 col-md-6 col-lg-5'>
                <img src={loginImage} alt="" />
            </div>
            <div className=' col-sm-12 col-md-6 col-lg-7 login-container d-flex justify-content-center '>
                <form onSubmit={handelUserLogIn} className='mt-5 w-50 mx-auto '>
                    <div className='text-center'>
                        {

                            loading && <Spinner animation="border" variant="success" />


                        }
                    </div>
                    <h3 className='login-title text-center'>Log In</h3><br />
                    <div className='bg-white px-3 py-2'>
                        <FontAwesomeIcon className='me-3' icon={faUser}></FontAwesomeIcon>
                        <input ref={emailRef} type="text" name="email" id="email" placeholder='Your Email' required />
                    </div>
                    <br />
                    <div className='bg-white px-3 py-2 mb-4'>
                        <FontAwesomeIcon className='me-3' icon={faLock}></FontAwesomeIcon>
                        <input type="password" name="password" id="password" placeholder='Your pasword' required /><br />
                    </div>
                    <div>
                        <p>Forgot Password? <span onClick={handelResetPassword} className='reset-password'>Reset Password</span></p>
                    </div>
                    <div className='text-center  sing-up'>
                        <p>
                            <span className='me-2'>
                                New To Fruity Garden?
                            </span>
                            <Link to={'/signup'}>Create Account</Link>
                        </p>
                    </div>
                    <div>
                        {loginErrorMessage}
                    </div>
                    <div className='text-center'>
                        <input id='login-btn' className='px-4 rounded' type="submit" value="Log in" />
                    </div>
                </form>

            </div>
            <div className='text-center social-container'>
                <span className=''><SocialLogin></SocialLogin></span>
            </div>
        </section>
    );
};

export default Login;