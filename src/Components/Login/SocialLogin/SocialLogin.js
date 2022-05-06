import React from 'react';
import './SocialLogin.css'
import google from '../../../images/social-login/icons8-google-48.png'
import facebook from '../../../images/social-login/icons8-facebook-48.png'
import github from '../../../images/social-login/icons8-github-64.png'

const SocialLogin = () => {
    return (

        <div className='social-login mt-5'>
            <p className='row'>
                <span className='col-sm-12 mb-4'>
                    or login with
                </span>
                <span className='col-sm-12 '>
                    <img src={google} alt="" />
                    <img src={facebook} alt="" />
                    <img src={github} alt="" />
                </span>
            </p>
        </div>
    );
};

export default SocialLogin;