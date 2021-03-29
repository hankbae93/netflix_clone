import React, { useRef, useEffect } from 'react';
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import Slider from "react-slick";
import Video from './Video.js';
import "slick-carousel/slick/slick.css"; 
import './VideoList.css';

function PrevArrow(props) {
    const {className, style, onClick, btnWidth} = props;
    const btnStyle = {
        ...style,
        width: btnWidth
    };
    return (
        <button className={className} style={btnStyle} onClick={onClick}>
            <i><FaAngleLeft/></i>
        </button>
    );
}

function NextArrow(props) {
    const {className, style, onClick, btnWidth} = props;
    const btnStyle = {
        ...style,
        width: btnWidth
    };
    return (
        <button className={className} style={btnStyle} onClick={onClick}>
            <i><FaAngleRight/></i>
        </button>
    );
}

const VideoList = ({ heading, data }) => {              
    const containerRef = useRef();   
    const containerWidthRef = useRef(0);

    useEffect(()=> {        
        containerWidthRef.current = Math.floor(containerRef.current.offsetLeft);        
    },[data]);

    const settings = {
        dots: false,        
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6,  
        prevArrow: <PrevArrow btnWidth={containerWidthRef.current}/>,
        nextArrow: <NextArrow btnWidth={containerWidthRef.current}/>,                   
        afterChange : () => {            
            containerRef.current.classList.add('focus');
        }      
    };    

    return (            
        <div ref={containerRef} className="video-list-container">
            <div className={`video-list`}>
                <div className="list-name">
                    <h3>
                        {heading}
                        <span>모두보기<em>모두보기</em></span>                
                        <b><FaAngleRight/></b>                    
                    </h3>                
                </div>

                <ul className="list">    
                    <Slider {...settings}>
                        {data.map((info,i) => {                        
                            const { id } = info;
                            return <Video key={id} data={{...info}}/>
                        })}                               
                    </Slider> 
                </ul>
            </div>
        </div>
    );
};

export default VideoList;
                    
            