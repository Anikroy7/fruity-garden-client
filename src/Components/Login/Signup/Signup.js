import React, { useEffect, useState } from 'react';
import './Signup.css'
import signup from '../../../images/signup/signup2.webp'
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faUser } from '@fortawesome/free-solid-svg-icons'
import { faLock } from '@fortawesome/free-solid-svg-icons'
import SocialLogin from '../SocialLogin/SocialLogin';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { Spinner } from 'react-bootstrap';


const Signup = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [errorMessage, setErrorMessage] = useState('');

    const navigate = useNavigate()
    if (user) {

        navigate('/home')
    }
    useEffect(() => {
        if (error) {
            console.log("error");
            setErrorMessage(error?.message)
        }
    }, [user])

    const handelCreateUser = event => {
        event.preventDefault()
        const email = event.target.email.value;
        const password = event.target.password.value;
        const cofirmPasssword = event.target.confirmPassword.value;
        console.log(email, password, cofirmPasssword);
        if (password === cofirmPasssword) {
            console.log(email, password);
            createUserWithEmailAndPassword(email, password)
        }

        else {
            setErrorMessage(`Your password doesn't match`)
        }

    }




    return (
        <section style={{ backgroundImage: `url(${signup})`, height: '850px', opacity: '' }}>
            <div className='back-btn text-center mb-2'>
                <FontAwesomeIcon className='mt-5 text-white' icon={faArrowLeft}></FontAwesomeIcon> <Link to={'/'}>Back to home </Link>
            </div>
            <div className='signup-container w-50 mx-auto P-5'>
                <h1 className='text-center signup-title'>Create Account</h1>
                {

                    loading && <Spinner animation="border" variant="success" />


                }
                <form onSubmit={handelCreateUser}>
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
                        <input type="password" name="confirmPassword" id="confirm-password" placeholder='confirm password' />
                    </div>
                    <div>
                        <p>
                            <span>Already have an account? </span>
                            <Link to='/login'>Log in</Link>
                        </p>
                    </div>
                    <p className='text-danger fw-bold'>
                        {errorMessage}
                    </p>
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