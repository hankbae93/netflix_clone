import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import HomeStory from './HomeStory';
import HomeSignUp from './HomeSignUp';
import Questions from './Questions';
import './Home.css';

const Home = () => {
    return (
        <div className="home">
            <Header/>
            <section className="home-intro">
                <div className="home-intro-content">
                    <h2>영화, TV 프로그램을<br/> 무제한으로.</h2>
                    <h3>다양한 디바이스에서 시청하세요. 언제든 해지하실 수 있습니다.</h3>              
                    <p className="home-email-tip">시청할 준비가 되셨나요? 멤버십을 등록하거나 재시작하려면 이메일 주소를 입력하세요.</p>                          
                    <HomeSignUp/>
                </div>
                <div className="home-background">
                    <img src="https://assets.nflxext.com/ffe/siteui/vlv3/92bb3a0b-7e91-40a0-b27b-f2c3ac9ef6e4/180ca992-4d7b-4274-99be-cf8169176af2/KR-ko-20210322-popsignuptwoweeks-perspective_alpha_website_small.jpg" srcSet="https://assets.nflxext.com/ffe/siteui/vlv3/92bb3a0b-7e91-40a0-b27b-f2c3ac9ef6e4/180ca992-4d7b-4274-99be-cf8169176af2/KR-ko-20210322-popsignuptwoweeks-perspective_alpha_website_small.jpg 1000w, https://assets.nflxext.com/ffe/siteui/vlv3/92bb3a0b-7e91-40a0-b27b-f2c3ac9ef6e4/180ca992-4d7b-4274-99be-cf8169176af2/KR-ko-20210322-popsignuptwoweeks-perspective_alpha_website_medium.jpg 1500w, https://assets.nflxext.com/ffe/siteui/vlv3/92bb3a0b-7e91-40a0-b27b-f2c3ac9ef6e4/180ca992-4d7b-4274-99be-cf8169176af2/KR-ko-20210322-popsignuptwoweeks-perspective_alpha_website_large.jpg 1800w" alt="home 소개글"/>
                    <div className="home-background-shadow"></div>
                </div>          
            </section>            
            <HomeStory/>
            <Questions/>
            <Footer style={{ backgroundColor : '#000'}}/>
        </div>
    );
};

export default Home;