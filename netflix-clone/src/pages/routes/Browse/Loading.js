import React from 'react';

const LOADING_STYLE = {
    postion: 'absolute',
    width: '100vw',
    height: '100vh',
    background: '#2b2b2b',
    color:'#fff',
    fontSize: '5vw',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
};

const Loading = () => {
    return (
        <div className="loading" style={LOADING_STYLE}>
            <h1>Loading...</h1>
        </div>
    );
};

export default Loading;