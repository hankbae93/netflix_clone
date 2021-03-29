import React from 'react';
import { Link } from 'react-router-dom';

const SignUpThree = () => {
    return (
        <div className="step-last">
            <img src="./images/Lock.png" alt="등록"/>
            <p className="step-current">3/3단계</p>
            <h2>결제 정보 등록</h2>
            <h3>
                2021년 4월 4일 (일) 전에<br/> 멤버십을 해지하시면 요금이<br/> 청구되지 않습니다.
            </h3>
            <div className="warn">
                <b>무료 이용 종료 3일 전에</b> 알림<br/> 이메일을 보내드립니다.
            </div>
            <div>
                <b>약정은 없습니다.</b>
                <b>해지는 언제든지 온라인으로.</b>
            </div>
            <Link to="/browse">시청하기~</Link>
        </div>
    );
}

export default SignUpThree;