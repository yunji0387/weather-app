import React from 'react';
import './Header.css';
import Navbar from '../components/Navbar';
import AppLogo from '../components/AppLogo';

const Header = () => {
  return (
    <div className="header">
      <AppLogo />
      <Navbar />
    </div>
  );
};

export default Header;
