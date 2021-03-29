import React from 'react';
import './Footer.css';

const Footer = ({ style }) => {
    return (
        <footer style={{
            backgroundColor : style ? style.backgroundColor : null
            }}>
            <div>
                <p className="footer-title">질문이 있으신가요? 문의 전화:  00-308-321-0058</p>
                <ul>
                    <li>자주 묻는 질문</li>
                    <li>고객센터</li>
                    <li>계정</li>
                    <li>미디어 센터</li>
                    <li>투자 정보(IR)</li>
                    <li>입사 정보</li>
                    <li>Netflix 지원 디바이스</li>
                    <li>이용 약관</li>
                    <li>개인정보</li>
                    <li>쿠키 설정</li>
                    <li>회사 정보</li>
                    <li>문의하기</li>
                    <li>속도 테스트</li>
                    <li>법적 고지</li>
                    <li>Netflix 오리지널</li>
                </ul>
                <select>
                    <option value="korean">한국어</option>
                    <option value="English">English</option>
                </select>
                <p className="footer-company">Netflix 대한민국</p>
                <div>넷플릭스서비시스코리아 유한회사 통신판매업신고번호: 제2018-서울종로-0426호 전화번호: 00-308-321-0058</div>
                <div>대표: 레지널드 숀 톰프슨</div>
                <div>이메일 주소: korea@netflix.com</div>
                <div>주소: 대한민국 서울특별시 종로구 우정국로 26, 센트로폴리스 A동 20층 우편번호 03161</div>
                <div>클라우드 호스팅: Amazon Web Services Inc.</div>
                <div style={{color: style ? style.color : null}}>공정거래위원회 웹사이트 링크</div>
            </div>
        </footer>
    );
}

export default Footer;