import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <header>
            <h1>
                <span className="hide">Raflix</span>                
                <img src="../images/Netflix_Logo_PMS2.png" />               
            </h1>    
            <div className="login">
                <Link to='/login'>로그인</Link>   
            </div>          
        </header>
    );
};

export default Header;