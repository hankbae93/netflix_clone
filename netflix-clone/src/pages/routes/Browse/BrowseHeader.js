import React, { useState, useRef, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FaSearch, FaGift, FaBell } from "react-icons/fa";
import { useAuth } from '../../../contexts/AuthContext';
import './BrowseHeader.css';

const SearchVideo = () => {
    const [search, setSearch] = useState('');
    const [searchSw, setSearchSw] = useState(false);    
    const searchBtnRef = useRef();     

    const handleInput = e => setSearch(e.target.value);

    const showInput = () => {
        searchBtnRef.current.classList.add('focus');
        setSearchSw(true);
    };

    const deleteSearch = () => setSearch('');
    
    const onBlurInput = e => {
        if (search === '') {
            searchBtnRef.current.classList.remove('focus');
            setSearchSw(false);
        }        
    };    
    

    return (
        <>
           <div className="search-video">
               <div 
               ref={searchBtnRef} 
               onClick={showInput} 
               className="before-search">
                   <FaSearch/>
                </div>
               
                <div className={`search ${searchSw ? 'focus' : ''}`} onBlur={onBlurInput}>
                    <label htmlFor="search">
                        <span className="hide">제목, 사람, 장르 검색</span>
                        <div className="search-mark"><FaSearch/></div>
                        <input 
                        id="search" 
                        placeholder="제목, 사람, 장르" 
                        value={search}
                        onChange={handleInput}
                        onBlur={onBlurInput}
                        />
                        {search.length > 0 && (
                            <div className="search-close" onClick={deleteSearch}>
                                <span></span>
                                <span></span>
                            </div>
                        )}                        
                    </label>
                </div>
              
           </div>
        </>
    );
};

const Profile = () => {    
    const { logout } = useAuth();
    const history = useHistory();
    const handleLogOut = async (e) => {
        e.preventDefault();
       try {
           await logout();
           history.push('/');
       } catch(err){
            alert('Failed to log out');
            console.log(err)
       }
    };

    return (
        <div className="profile">            
            <div>
                <a href="#a">
                    <img src="./images/kids_profile.jpg" alt="어린이"/>
                    키즈
                </a>    
                <a href="#a">프로필 관리</a>            
            </div>            
            <div>
                <a href="#a">계정</a>
                <a href="#a">고객센터</a>
                <a href="#a" onClick={handleLogOut}>Raflix에서 로그아웃</a>
            </div>            
        </div>
    );
};

const BrowseHeader = () => {
    const [profile, setProfile] = useState(false);
    const [scroll, setScroll] = useState(false);
    
    const afterScrollNav = e => {        
        if (window.scrollY > 100) {
            setScroll(true);
        } else {
            setScroll(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll',afterScrollNav);
        return () => {
            window.removeEventListener('scroll', afterScrollNav);
        };
    },[scroll]);

    

    return (
        <header className={scroll ? 'scroll' : ''}>
            <div>                
                <h1>
                    <Link to="/browse">
                        <img src="./images/Netflix_Logo_PMS2.png" alt="넷플릭스"/>
                    </Link>
                </h1>               

                <ul className="contents-nav">                    
                    <li><a href="#a">홈</a></li>
                    <li><a href="#a">Tv프로그램</a></li>
                    <li><a href="#a">영화</a></li>
                    <li><a href="#a">NEW! 요즘 대세 콘텐츠</a></li>
                    <li><a href="#a">내가 찜한 콘텐츠</a></li>
                </ul>
            </div>

            <ul className="user-nav">                
                <li><SearchVideo/></li>
                <li><a href="#a">키즈</a></li>
                <li><a href="#a"><span className="hide">선물</span><FaGift/></a></li>
                <li><a href="#a"><span className="hide">알림</span><FaBell/></a></li>
                <li 
                className="user-profile" 
                onMouseEnter={() => setProfile(true)} 
                onMouseLeave={() => setProfile(false)}
                >
                    <a href="#a">
                    <span className="hide">내 프로필</span>
                    <img src="./images/profile.png" alt="프로필"/>
                    </a>
                    {profile && <Profile />}                        
                </li>
            </ul>
        </header>
    );
};

export default BrowseHeader;
                    
                    
                    
                    
                    
                    
                    
                    
                    