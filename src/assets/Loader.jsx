import React from 'react';
import './loader.css'
const Loader = () => (
    <div className="loader-main d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
        <div className="main-container">
            <div class="loader">
                <div class="bar"></div>
                <div class="bar"></div>
                <div class="bar"></div>
                <div class="bar"></div>
            </div>
            <p className='lead loader-text'>From Darkness To Bright</p>
        </div>
    </div>
);

export default Loader;
