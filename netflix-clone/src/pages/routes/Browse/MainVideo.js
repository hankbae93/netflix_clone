import React, { useContext } from 'react';
import { MovieContext, WATCH } from './Browse';
import { FaInfoCircle, FaPlay } from "react-icons/fa";
import VideoList from './VideoList';
import TopVideoList from './TopVideoList';
import './MainVideo.css';

const MainVideo = () => {      
    const { data, dispatch } = useContext(MovieContext);
    
    const mainWatch = () => {
        dispatch({type: WATCH, title: '그렌라간'})
    };

    return (
        <div className="main-wrap">
            <div className="video-main">
                <div className="main-image"></div>       
                <div className="main-contents">
                    <div className="main-info">
                        <h2><img src="https://occ-0-2794-1360.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABc1-jxN2-RryiaP7u0ktNjQL-CUN5hhV2P-37OFbOJ-RsOx4UQ1-B33CXEYCLhu2dJhy3nQAcL33QQFUL8L41KLS-fjcjILS73tW.webp?r=2eb" alt="천원돌파 그렌라간"/></h2>
                        <p>
                        소년이여, 너의 드릴은 하늘을 뚫을 드릴이다. 우주의 끝까지 도달할 운명을 가진 소년, 시몬. 하지만 그의 이야기가 시작된 곳은 땅 밑의 어느 작은 마을이었다.
                        </p>

                        <div className="main-utils">                            
                            <button onClick={mainWatch} className="btn-play"><FaPlay/>재생</button>                            
                            <button className="btn-info"><FaInfoCircle/>상세정보</button>
                        </div>
                    </div>

                    <div className="main-age">
                        <span>15+</span>                    
                    </div>
                </div>
            </div>
    
            <VideoList heading={"내가 찜한 컨텐츠"} data={data.filter((v) => v.myList)} />          
            <VideoList heading={"Action"} data={data.filter((v) => v.genres.includes("Action"))} />                         
            <TopVideoList data={[...data].filter((v) => v.rating >= 9).splice(0,10)}/>                 
            <VideoList heading={"킬링 타임 짧은 영화"} data={data.filter((v) => v.runtime < 90)} />      
            <VideoList heading={"전체영화"} data={data} />      
            <VideoList heading={"Romance"} data={data.filter((v) => v.genres.includes("Romance"))} />      
               
        </div>
    );
}

export default MainVideo;