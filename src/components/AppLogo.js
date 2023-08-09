import React from 'react';
import { Link } from 'react-router-dom';
import './AppLogo.css';
import AppLogoPNG from '../assets/app_logo.png';

const AppLogo = () => {
  return (
    <div className="app-logo-container">
      <div className="app-logo-img-container">
      <img src={AppLogoPNG} alt="App Logo" className="app-logo-img" />
      </div>
      <p className="app-logo-text">Sky Cast</p>
    </div>
  );
};

export default AppLogo;
