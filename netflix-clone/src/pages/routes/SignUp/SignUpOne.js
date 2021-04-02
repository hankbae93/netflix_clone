import React, { useState, useRef } from "react";
import { useAuth } from '../../../contexts/AuthContext';

const SignUpOneIntro = ({ setNextStep }) => {
  return (
    <div className="step-intro">
      <img src="./images/Devices.png" alt="디바이스 종류" />
      <p className="step-current">1/3단계</p>
      <h2>계정 설정을 마무리하세요.</h2>
      <div className="step-intro-text">
        맞춤형 콘텐츠 서비스, 넷플릭스!
        <br /> 비밀번호를 설정해 다양한
        <br /> 디바이스에서 Netflix를 시청하세요.
      </div>
      <button onClick={() => {setNextStep(true);}}>      
        다음
      </button>
    </div>
  );
};

const SignUpOneInPut = ({ EMAIL, setUserData }) => {
  const { signup } = useAuth();
  const [email, setEmail] = useState(String(EMAIL));
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");  
  const Email = useRef();
  const Password = useRef();
  const checkError = useRef();  

  const handleEmail = (e) => {
    const emailRule = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (e.type === "focus") {
      if (emailRule.test(e.target.value)) {
        setEmailError("");
      } else if (e.target.value.length < 5) {
        setEmailError("이메일 주소를 입력해 주세요.");
      } else {
        setEmailError("정확한 이메일 주소를 입력하세요.");
      }
      Email.current.classList.add("focus");
    } else if (e.type === "blur") {
      if (e.target.value === "") {
        setEmailError("");
        Email.current.classList.remove("focus");
      }
    } else {
      if (emailRule.test(e.target.value)) {
        setEmailError("");
      } else if (e.target.value.length < 5) {
        setEmailError("이메일 주소를 입력해 주세요.");
      } else {
        setEmailError("정확한 이메일 주소를 입력하세요.");
      }
      setEmail(e.target.value);
    }
  };

  const handlePassword = (e) => {
    if (e.type === "focus") {
      if (e.target.value.length < 4) {
        setPasswordError("비밀번호는 4~50자 사이여야 합니다.");
      } else {
        setPasswordError("");
      }

      Password.current.classList.add("focus");
    } else if (e.type === "blur") {
      if (e.target.value === "") {
        setPasswordError("");
        Password.current.classList.remove("focus");
      }
    } else {
      if (e.target.value.length < 4) {
        setPasswordError("비밀번호는 4~50자 사이여야 합니다.");
      } else {
        setPasswordError("");
      }
      setPassword(e.target.value);
    }
  };

  const handleCheck = (e) => {
    if (e.target.checked === false) {
      checkError.current.innerText = "모든 약관에 동의하셔야 합니다.";
    } else {
      checkError.current.innerText = "";
    }
  };

  
  const onSubmitForm = async (e) => {
    e.preventDefault();
    if (checkError.current.textContent !== "" && emailError !== "" && passwordError !== "") {
      return;
    }
    
    try {
      setUserData({
        email,
        password,
      });
      await signup(email, password);
    } catch {
      alert('중복된 아이디 입니다');
    }    
  };

  
  return (
    <div className="step-intro sign-up-input">
      <div className="step-intro-tip">
        첫 한 달 동안 마음껏&nbsp;
        <strong>무료로 이용하세요. </strong>
      </div>
      <p className="step-current">1/3단계</p>
      <h2>비밀번호를 설정하고 한 달 무료 이용을 시작해 보세요.</h2>
      <div className="sign-up-tip">
        몇 단계만 더 거치면 Netflix 가입 완료!
        <br />
        복잡한 단계는 모두 없앴습니다.
      </div>
      <form onSubmit={onSubmitForm}>

        <div>
          <label ref={Email} className="focus" htmlFor="step-email">
            <span>이메일 주소</span>
            <input
              id="step-email"
              max="50"
              value={email}
              onChange={handleEmail}
              onFocus={handleEmail}
              onBlur={handleEmail}
            ></input>
          </label>
          <div className="step-email-error">{emailError}</div>
        </div>

        <div>
          <label ref={Password} htmlFor="step-password">
            <span>비밀번호를 추가하세요</span>
            <input
              id="step-password"
              type="password"
              min="8"
              max="50"
              value={password}
              onChange={handlePassword}
              onFocus={handlePassword}
              onBlur={handlePassword}
            ></input>
          </label>
          <div className="step-email-error">{passwordError}</div>
        </div>

        <div className="step-check">
          <label>
            <input onClick={handleCheck} type="checkbox" />
            <div>
              예, 저는{" "}
              <a href="/">
                개인정보 처리방침
              </a>
              에 따른 개인정보 수집 및 활용에 동의합니다.
              <div ref={checkError} className="step-check-error"></div>
            </div>
          </label>

          <label>
            <input type="checkbox" />
            <div>예, 넷플릭스 특별 할인 알림 이메일을 보내주세요. (선택 사항)</div>
          </label>
        </div>
        <button type="submit">다음</button>
      </form>
    </div>
  );
};

const SignUpOne = ({ EMAIL, setUserData }) => {
  const [nextStep, setNextStep] = useState(false);
  
  return (
    <div className="step">
      {!nextStep ? (
        <SignUpOneIntro nextStep={nextStep} setNextStep={setNextStep} />
      ) : (
        <SignUpOneInPut EMAIL={EMAIL} setUserData={setUserData} />
      )}
    </div>
  );
};

export default SignUpOne;

    
     

      
