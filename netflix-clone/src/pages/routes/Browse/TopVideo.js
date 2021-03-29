import React, {useState, useRef, useEffect} from 'react';
import VideoInfo from './VideoInfo';
import './Video.css';

const TopVideo = ({ rank,data,setShow }) => {    
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
    },[fadeInfo.current]);   
   

    return (
        <li 
        className="video top-video" 
        ref={videoRef}         
        onMouseEnter={hoverShowInfo}         
        >
            <div className="video-container">
                <div className="top-poster">
                    <div className="top-rank">
                        <span>{rank + 1}</span>                        
                    </div>
                    <img src={data.large_cover_image} alt={data.title}/>                             
                </div>            
              {focus && <VideoInfo 
              setShow={setShow}
              data={data} 
              focus={focus}      
              hoverFadeInfo={hoverFadeInfo}            
              />}
            </div>
        </li>
    );
}

export default TopVideo;
              
                