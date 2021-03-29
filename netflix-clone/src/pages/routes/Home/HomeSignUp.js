import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './HomeSignUp.css';

const HomeSignUp = () => {
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [accept, setAccept] = useState(false);
    const labelRef = useRef();
    const [linkRef, setLinkRef] = useState('/');

    useEffect(() => {
        if (accept) {
            setLinkRef({
                pathname: '/signup',
                state: {
                    email
                }
            });
        } else {
            setLinkRef('/');
        }
        
    },[email]);

    const handleEmail = (e) => {
        const emailRule = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;        

        if (emailRule.test(e.target.value)) {
            setEmailError('');
            setAccept(true);
        } else if(e.target.value.length < 5){
            setEmailError('이메일 주소를 입력해 주세요.');
            setAccept(false);
        } else {
            setEmailError('정확한 이메일 주소를 입력하세요.');
            setAccept(false);
        }
        setEmail(e.target.value);
    };

    const handleLabel = (e) => {
        if (e.target.value !== '') return
        labelRef.current.classList.toggle('focus');
    }    

    return (
        <div className="home-signup">                        
            <div className="home-email-container">
                <div className="home-email-form">
                    <div className="email-form">
                        <label ref={labelRef} htmlFor="email_input">이메일 주소</label>
                        <input                             
                        id="email_input"                
                        value={email} 
                        onChange={handleEmail}
                        onFocus={handleLabel}
                        onBlur={handleLabel}
                        />                
                    </div>
                    <Link to={linkRef} className="email-submit">30일 무료이용</Link>                              
                </div>                
                <div className="email-error">{emailError}</div>                                
            </div>          
        </div>
    );
};

export default HomeSignUp;
            