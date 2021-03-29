import React from 'react';
import { Link } from 'react-router-dom';
import SignUpSteps from './SignUpSteps';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './SignUp.css';

const SIGN_UP_FOOTER = {
    backgroundColor: '#f3f3f3',
    color: '#0071eb',
};

const SignUp = ({ history, location }) => {
    const EMAIL = location.state.email;    
    return (
        <div className="sign-up">
            <header>
                <Link to="/">
                    <img src="./images/Netflix_Logo_PMS2.png" alt="Home으로 가기"/>
                </Link>
                <Link className="login" to="/login">로그인</Link>                
            </header>

            <div className="sign-up-steps">
                <SignUpSteps EMAIL={EMAIL}/>
            </div>
            <Footer style={SIGN_UP_FOOTER} />
        </div>
    );
};

export default SignUp;