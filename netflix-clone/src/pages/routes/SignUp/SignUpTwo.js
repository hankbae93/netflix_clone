import React, { useState } from 'react';
import { FaCheck } from "react-icons/fa";

const StepPriceOne = ({ setNextStep }) => {    
    const handleClick = () => {
        setNextStep(true);
    };
    return (
        <div className="step-price-guide">
            <img src="./images/Checkmark.png" alt="멤버쉽 안내사항"></img>
            <p className="step-current">2/3단계</p>
            <h2>원하는 멤버십을 선택하세요.</h2>
            <ul className="step-check-tip">
                <li>
                    <div className="check-tip"><img src="./images/check.gif" alt="안내사항1"/></div>
                    <span>무료 이용이 종료되기 전까지는<br/> 요금이 청구되지 않습니다.</span>
                </li>
                <li>
                    <div className="check-tip"><img src="./images/check.gif" alt="안내사항2"/></div>
                    <span>무료 이용 종료 3일 전에 알림<br/> 이메일을 보내드립니다.</span>
                </li>
                <li>
                    <div className="check-tip"><img src="./images/check.gif" alt="안내사항3"/></div>
                    <span>無약정, 無위약금. 해지도 쿨하게<br/> 언제든지.</span>
                </li>
            </ul>
            <button onClick={handleClick}>멤버쉽 요금제 보기</button>
        </div>
    )
};

const priceData = [
    ["베이식", "스탠다드", "프리미엄",],
    ["한 달 무료 이용 종료(2021년 4월 4일 (일)) 후 ⁠월⁠ ⁠요⁠금", "9,500원", "12,000원", "14,500원"],
    ["영상 화질 ", "좋음", "매우 좋음", "가장 좋음"],
    ["해상도", "480p", "1080p", "4K+HDR"],
    ["TV, 컴퓨터, 스마트폰, 태블릿으로 시청",<FaCheck/>,<FaCheck/>,<FaCheck/>],
];

const priceDataComponent = (data, className, state, setState) => {
    const onClickPrice = (e) => {
        const target = e.target;
        const priceCol = target.dataset.col; // 같은 열
        let data = [...state];                           

        data.forEach((click, i) => {
            click.forEach((cli, i) => click[i] = '');
            click[priceCol] = 'click';
        });        
        setState(data);          
    };

    return (
        <>
            {data.map((v, i) => {
                const dataClass = className[i];
                if (v.length === 3) {
                    return (
                        <div key={i} className="price-tag">                   
                            <span onClick={onClickPrice} data-col="0" className={dataClass[0]}>{v[0]}</span>
                            <span onClick={onClickPrice} data-col="1" className={dataClass[1]}>{v[1]}</span>
                            <span onClick={onClickPrice} data-col="2" className={dataClass[2]}>{v[2]}</span>
                        </div>
                    );
                } else {
                    return (
                        <div key={i} className="price-info">                   
                            <span>{v[0]}</span>
                            <span onClick={onClickPrice} data-col="0"  className={dataClass[0]}>{v[1]}</span>
                            <span onClick={onClickPrice} data-col="1"  className={dataClass[1]}>{v[2]}</span>
                            <span onClick={onClickPrice} data-col="2"  className={dataClass[2]}>{v[3]}</span>
                        </div>
                    )
                }
                
            })}
        </>
    )
};

const StepPriceTwo = ({ userData, setUserData }) => {
    // const [price, setPrice] = useState('9500원');
    const [priceSelect, setPriceSelect] = useState([
        ['click', '', ''],
        ['click', '', '' ],
        ['click', '', '' ],
        ['click', '', '' ],
        ['click', '', '' ],
    ]);

    const handleClick = () => {
        const dataNumber = priceSelect[0].indexOf('click');
        setUserData({
            ...userData,
            price: priceData[1][dataNumber + 1]
        });
    };
    return (
        <div className="step-priceinfo">
            <p className="step-current">2/3단계</p>
            <h2>원하는 멤버십을 선택하세요.</h2>
            <ul className="step-check-tip">
                <li>
                    <div className="check-tip"><img src="./images/check.gif" alt="안내사항1"/></div>
                    <span>첫 달 요금은 0원입니다.</span>
                </li>
                <li>
                    <div className="check-tip"><img src="./images/check.gif" alt="안내사항2"/></div>
                    <span>광고 없이 무제한으로 시청.</span>
                </li>
                <li>
                    <div className="check-tip"><img src="./images/check.gif" alt="안내사항3"/></div>
                    <span>멤버십은 언제든지 변경 또는 해지할 수 있습니다.</span>
                </li>
            </ul>
            <div className="price-select">
                {priceDataComponent(priceData, priceSelect, priceSelect, setPriceSelect)}                
                <p>풀 HD(1080p), UHD(4K), HDR 화질 제공 여부는 사용하는 인터넷 서비스와 디바이스의 성능에 따라 달라질 수 있습니다. 모든 콘텐츠가 HD, 풀 HD, UHD 또는 HDR 화질로 제공되지는 않습니다. 자세한 내용은 이용 약관을 확인하세요.<br/><br/>한집에 사는 사람들만 계정을 함께 이용할 수 있습니다. 프리미엄 멤버십은 동시접속 4명, 스탠다드 멤버십은 2명, 베이식 멤버십은 1명까지 가능합니다.            
                </p>
            </div>
            <button onClick={handleClick}>다음</button>
        </div>
    )
}

const SignUpTwo = ({ userData, setUserData }) => {
    const [nextStep, setNextStep] = useState(false);
    return (
        <div className="">
            {!nextStep 
            ? <StepPriceOne setNextStep={setNextStep}/>
            : <StepPriceTwo userData={userData} setUserData={setUserData}/>
            }
        </div>
    );
}

export default SignUpTwo;