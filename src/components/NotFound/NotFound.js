import React from 'react';
import './NotFount.css';

const NotFound = () => {
    return (
        <div className='container not-found-main'>
            <h1 className='not-found-sad-char'>\(^Д^)/</h1>
            <h1 className='not-found-text'>404 <br /> Page not found!</h1>
        </div>
    );
};

export default NotFound;