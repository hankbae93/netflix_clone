import React, { useState, useRef, useEffect } from 'react';
import VideoInfo from './VideoInfo';
import './Video.css';

const Video = ({ data }) => {            
    const [focus, setFocus] = useState(false);
    const videoRef = useRef();
    const fadeInfo = useRef();    

    const hoverShowInfo = () => {
        setFocus(true)        
    };

    const hoverFadeInfo = () => {
        fadeInfo.current = setTimeout(() => {
            setFocus(false);           
        }, 1000);             
    };

    useEffect(() => {       
        return () => {
            clearTimeout(fadeInfo.current);
        };
    },[data]);    

    return (
        <li 
        className="video" 
        ref={videoRef}         
        onMouseEnter={hoverShowInfo}         
        >
            <div className="video-container">
                <div className="video-thumb">
                    <img src={data.large_cover_image} alt={data.title}/>                            
                </div>            
                {focus && <VideoInfo               
                data={data} 
                focus={focus} 
                hoverFadeInfo={hoverFadeInfo}                            
                />}
            </div>
        </li>
    );
}

export default Video;
              
                