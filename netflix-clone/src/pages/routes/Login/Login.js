import React from 'react';
import { Link } from 'react-router-dom';
import LoginForm from './LoginForm';
import Footer from '../../components/Footer';
import './Login.css';

const Login = () => {
    return (
        <div className="login">
        <header>
            <Link to="/">
                {/* <HeaderLogo/> */}
            </Link>                
        </header>
        <div className="login-bg">
            <img src="./images/KR-ko-20210222-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt="로그인" />
            <div className="home-background-shadow"></div>
        </div>
        <LoginForm />
        <Footer />
        </div>
    );
}

export default Login;