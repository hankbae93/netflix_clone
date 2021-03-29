import React, { useRef, useContext } from 'react';
import { MovieContext, CLICK_LIKE, CLICK_DISLIKE, ADD_MYLIST, WATCH } from './Browse';
import { AiOutlineDislike, AiOutlineLike, AiFillDislike, AiFillLike, AiOutlineMenuUnfold } from "react-icons/ai";
import { FaPlus, FaPlay, FaCheck } from "react-icons/fa";
import './VideoInfo.css';

const VideoInfo = ({ data, hoverFadeInfo }) => {    
    const { dispatch } = useContext(MovieContext);   
    const { title, genres, rating, large_cover_image, id, myList, liked, disLiked } = data;    
    
    const videoInfoRef = useRef();

    const clickAddList = () => {        
        dispatch({ 
            type: ADD_MYLIST, 
            id,
            myList: !data.myList
        });    
    };

    const clickLike = () => {        
        dispatch({ 
            type: CLICK_LIKE, 
            id,
            liked: !data.liked
        });        
    };

    const clickDisLike = () => {        
        dispatch({ 
            type: CLICK_DISLIKE, 
            id,
            disLiked: !data.disLiked
        }); 
    };

    const clickWatch = () => {
        dispatch({
            type: WATCH,
            title
        });
    };

    const animation = () => {        
        // videoInfoRef.current.style.transform = 'scale(1.6)';
        videoInfoRef.current.style.opacity = '1';
    };

    const disAnimation = () => {
        // videoInfoRef.current.style.transform = 'scale(1)';
        videoInfoRef.current.style.opacity = '0';
        hoverFadeInfo();
    };


    return (
        <>        
        <div ref={videoInfoRef} className="video-info" onMouseEnter={animation} onMouseLeave={disAnimation}>
            <img src={large_cover_image} alt={title}/>
            <div className="video-utils">
                <div className="video-btns">
                    <div className="btns-user">        
                        
                        <button onClick={clickWatch}  className="btns-play">                                
                            <span className="hide">재생</span><FaPlay/>                                
                        </button>
                        
                        <button onClick={clickAddList} className="btns-add">
                            <div className="text">
                                <span>내가 찜한 콘텐츠에서 추가<b></b></span>
                            </div>
                            {myList ? <FaCheck/> : <FaPlus/>}                            
                        </button>
                        <button onClick={clickLike} className="btns-like">
                            <div className="text">
                                <span>좋아요<b></b></span>
                            </div>
                            {liked ? <AiFillLike/> : <AiOutlineLike/>}
                            
                        </button>
                        <button onClick={clickDisLike} className="btns-dislike">
                            <div className="text">
                                <span>맘에 안들어요<b></b></span>
                            </div>             
                            {disLiked ? <AiFillDislike/> : <AiOutlineDislike/>}   
                            
                        </button>
                    </div>
                    <div>
                        <button>
                            <div className="text">
                                <span>회차 및 상세정보<b></b></span>
                            </div>                            
                            <AiOutlineMenuUnfold/>
                        </button>
                    </div>
                </div>

                <div className="video-detail">
                    <b>{rating * 10}% 일치</b>
                    <span className="age">15+</span>
                    <span>시즌 1개</span>
                </div>

                <p className="video-genres">
                    {genres.map((v, i) => <span key={i}>{v}</span>)}                    
                </p>
            </div>              
        </div>
        
        </>
    );
}

export default VideoInfo;
            