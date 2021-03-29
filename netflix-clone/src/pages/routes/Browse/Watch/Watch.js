import React, {useState, useRef, useEffect, useContext} from 'react';
import { MovieContext, WATCH_OFF } from '../Browse';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaPause, FaPlay, FaBackward, FaForward , FaVolumeUp, FaVolumeMute, FaInfoCircle, FaStepForward, FaRegClone, FaRegClosedCaptioning} from "react-icons/fa";
import { BiFullscreen } from "react-icons/bi";
import './Watch.css';

function Watch() {    
    const { dispatch, isWatch } = useContext(MovieContext);
    
    const [play, setPlay] = useState(false);
    const [volume, setVolume] = useState(0);    
    const [mute, setMute] = useState(false);
    
    const videoBoxRef = useRef();
    const videoRef = useRef();
    const playTimeRef = useRef();
    const playBarRef = useRef();
    const volumeRef = useRef();
    
    useEffect(() => {        
        if (videoRef.current && playBarRef.current) {
            videoRef.current.volume = 0;
            videoRef.current.addEventListener('timeupdate', changeProgress);       
            playBarRef.current.addEventListener('click',scrub);
        }        
        return () => {
            if (videoBoxRef.current) {
                videoBoxRef.current.removeEventListener('click',handlePlay);
            }            
        } 
    },[play]);

    const changeProgress = (e) => {
        const video = e.currentTarget;
        const runTime = video.duration;
        const playTime = video.currentTime;       
        if (playTimeRef.current) {
            playTimeRef.current.style.width =  `${(playTime / runTime) * 100}%`;
        } else {
            return;
        }
        
    };

    const handlePlay = () => {
        if(play) {
            videoRef.current.play();
        } else {
            videoRef.current.pause();
        }
        setPlay(!play);
    };
    
    const handlePlayTime = (e) => {
        const btnType = e.currentTarget.className;        
        if (btnType === 'backward') { // 10초전
            if (videoRef.current.currentTime - 10 < 0) return; 
            videoRef.current.currentTime -= 10;
        } else if (btnType === 'forward') { // 10초 뒤
            videoRef.current.currentTime += 10;
        }
    };

    const scrub = (e) => {
        const scrubTime = (e.offsetX / playBarRef.current.offsetWidth) * videoRef.current.duration;        
        videoRef.current.currentTime = scrubTime;
    };

    const handleVideoScreen = () => {
        videoRef.current.requestFullscreen();
    };

    const handleVolume = (e) => {
        setVolume(e.target.value);        
        videoRef.current.volume = e.target.value;
        if (videoRef.current.volume === 0) {
            setMute(false);
        } else {
            setMute(true);
        }
    };

    return (
        <div className="watch" ref={videoBoxRef}>
            <div className="watch-video">
                <video ref={videoRef} autoPlay>
                    <source src="./video/watch-1.mp4"/>
                </video>
            </div>
            <div className="watch-controls">
                <div className="back">
                    <Link to="/browse" onClick={() => {dispatch({type: WATCH_OFF})}}>
                        <FaArrowLeft/>
                    </Link>
                </div>

                <div className="controls">
                    <div className="progress" ref={playBarRef}>
                        <div ref={playTimeRef} className="play-time">
                            <span></span>
                        </div>
                    </div>

                    <div className="watch-btns">
                        <div className="btn-basic">
                            <button onClick={handlePlay} title="재생"><span>{play ? <FaPlay/> : <FaPause/>}</span></button>
                            <button className="backward" onClick={handlePlayTime} title="10초 전으로 감기"><span><FaBackward/></span></button>
                            <button className="forward" onClick={handlePlayTime} title="10초 앞으로 감기"><span><FaForward/></span></button>
                            <button className="volume" ref={volumeRef}>
                                <div className="volume-bar">
                                    <input type="range" name="volume" className="volume-gage" min="0" max="1" step="0.05" value={volume} onChange={handleVolume} />
                                </div>
                                <span>{mute ? <FaVolumeUp/> : <FaVolumeMute/>}</span>
                            </button>
                        </div>

                        <h1>{isWatch}</h1>

                        <div className="btn-util">
                            <button><span><FaInfoCircle/></span></button>
                            <button><span><FaStepForward/></span></button>
                            <button><span><FaRegClone/></span></button>
                            <button><span><FaRegClosedCaptioning/></span></button>                        
                            <button onClick={handleVideoScreen}><span><BiFullscreen/></span></button>               
                        </div>
                    </div>
                </div>                
            </div>
        </div>
    );
}

export default Watch;
                        
                        