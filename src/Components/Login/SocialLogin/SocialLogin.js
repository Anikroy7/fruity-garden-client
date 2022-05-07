import React from 'react';
import './SocialLogin.css';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import google from '../../../images/social-login/icons8-google-48.png'
import facebook from '../../../images/social-login/icons8-facebook-48.png'
import github from '../../../images/social-login/icons8-github-64.png'
import twitter from '../../../images/social-login/twitter.png'
import auth from '../../../firebase.init';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    if (user) {
        navigate(from, { replace: true });
    }

    const handelGooleLogIn = () => {
        signInWithGoogle();
    }

    return (

        <div className='social-login mt-5'>
            <p className='row'>
                <span className='col-sm-12 mb-4'>
                    or login with
                </span>
                <span className='col-sm-12 '>
                    <img onClick={handelGooleLogIn} src={google} alt="" />
                    <img src={facebook} alt="" />
                    <img src={github} alt="" />
                    <img src={twitter} alt="" />
                </span>
            </p>
        </div>
    );
};

export default SocialLogin;