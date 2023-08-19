import React from 'react';
import './Loading.css';
import appLogo from '../assets/app_logo.png';

function Loading() {
  return (
    <div className="loading-container">
        <div className="loading-img-container">
            <img src={appLogo} alt="" className="loading-img" />
        </div>
        <p className="loading-text">Loading ...</p>
    </div>
  );
}

export default Loading;