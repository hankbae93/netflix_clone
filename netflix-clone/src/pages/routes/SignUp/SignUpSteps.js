import React, { useState, useEffect } from 'react';
import SignUpOne from './SignUpOne';
import SignUpTwo from './SignUpTwo';
import SignUpThree from './SignUpThree';
import './SignUpSteps.css';

const renderSignUp = (step, userData, setUserData, EMAIL) => {
    if (step === 'first') {
        return <SignUpOne EMAIL={EMAIL} setUserData={setUserData} />
    } else if (step === 'second') {
        return <SignUpTwo userData={userData} setUserData={setUserData} />
    } else {
        return <SignUpThree setUserData={setUserData} />
    }  
};

const SignUpSteps = ({ EMAIL }) => {
    const [step, setStep] = useState('first');
    const [userData, setUserData] = useState({});

    useEffect(() => {        
        if (userData.price) {
            setStep('third');
        } else if (userData.email) {
            setStep('second');
        }
    },[userData, step]);
    

    return (
        <section className="signup-step">
            {renderSignUp(step, userData, setUserData , EMAIL)};
        </section>
    );
}

export default SignUpSteps;