import React, { useState, useRef, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../../AuthContext';

import './LoginForm.css';


const LoginForm = () => {
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');
    const [loginError, setLoginError] = useState('');
    const idRef = useRef();
    const pwRef = useRef();
    const idErrorRef = useRef();
    const pwErrorRef = useRef();
    const { currentUser, login } = useAuth();
    const history = useHistory();

    const handleId = (e) => {
        if (id.length < 5) {
            idErrorRef.current.classList.add('error');
            e.target.classList.add('error');
        } else {
            idErrorRef.current.classList.remove('error');
            e.target.classList.remove('error');
        }

        if(e.type === 'focus') {            
            idRef.current.classList.add('focus');            
        } else if (e.type === 'blur') {
            if (id.length > 0) {
                return;
            } else {
                idRef.current.classList.remove('focus');
            }            
        } else {            
            setId(e.target.value);
        }        
    };

    const handlePw = (e) => {
        if (pw.length < 5) {
            pwErrorRef.current.classList.add('error');
            e.target.classList.add('error');
        } else {
            pwErrorRef.current.classList.remove('error');
            e.target.classList.remove('error');
        }

        if(e.type === 'focus') {            
            pwRef.current.classList.add('focus');
        } else if (e.type === 'blur') {
            if (pw.length > 0) {
                return;
            } else {
                pwRef.current.classList.remove('focus');
            }            
        } else {            
            setPw(e.target.value);
        }     
    };

    

    const onSubmitForm = async (e) => {
        e.preventDefault();

        try {
            await login(id, pw);
            history.push('/browse');
        } catch {
            setId('');
            setPw('');
            alert('이메일이나 비밀번호가 맞지 않습니다');
        }          
    };


    const idInputManage = {
        onChange : handleId,
        onFocus : handleId,
        onBlur : handleId
    };
    const pwInputManage = {
        onChange : handlePw,
        onFocus : handlePw,
        onBlur : handlePw
    };


    return (
        <div className="login-form">
            <h2>로그인</h2>
            <form onSubmit={onSubmitForm} >
                <label ref={idRef} htmlFor="login-id">
                    <span>이메일 주소 또는 전화번호</span>
                    <input 
                    id="login-id" 
                    type="text"
                    value={id}
                    {...idInputManage}                   
                    />
                    <div ref={idErrorRef} className="login-error">정확한 이메일 주소나 전화번호를 입력하세요.</div>
                </label>

                <label ref={pwRef} htmlFor="login-pw">
                    <span>비밀번호</span>
                    <input 
                    id="login-pw"
                    type="password"
                    value={pw}
                    {...pwInputManage}
                    />
                    <div ref={pwErrorRef} className="login-error">비밀번호는 4 - 60자 사이여야 합니다.</div>
                </label>

                <button type="submit">로그인</button>

                <div className="check-container">
                    <label className="login-check" htmlFor="login-check">
                        <span>로그인 정보 저장</span>
                        <input id="login-check" type="checkbox"/>                                          
                    </label>
                    <a href="#a">도움이 필요하신가요?</a>  
                </div>

                <p><img src="https://assets.nflxext.com/ffe/siteui/login/images/FB-f-Logo__blue_57.png" alt="facebook"/><span>Facebook으로 로그인</span> </p>

                <div className="login-signup">
                    Netflix 회원이 아닌가요?
                    <Link to="/">지금 가입하세요</Link>
                </div>

                <div className="google-check">
                    이 페이지는 Google reCAPTCHA의 보호를 받아 사용자가 로봇이 아님을 확인합니다. 
                    <a href="#a">자세히 알아보기</a>
                </div>
            </form>
        </div>         
    );
}

export default LoginForm; 
