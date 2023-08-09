import React from 'react';
import './Footer.css';
import SocialIcon from '../components/SocialIcon';
import facebookIcon from '../assets/images/facebook.png';
import twitterIcon from '../assets/images/twitter.png';
import instagramIcon from '../assets/images/instagram.png';
import linkedinIcon from '../assets/images/linkedin.png';

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="social-icon-container">
          <div className="social-icon">
          <ul>
            <SocialIcon href="https://www.facebook.com" src={facebookIcon} alt="Facebook Icon" />
            <SocialIcon href="https://twitter.com/" src={twitterIcon} alt="Twitter Icon" />
            <SocialIcon href="https://www.linkedin.com/" src={linkedinIcon} alt="LinkedIn Icon" />
            <SocialIcon href="https://www.instagram.com/" src={instagramIcon} alt="Instagram Icon" />
          </ul>
          </div>
        </div>
        <p className="footer-text">&copy; {new Date().getFullYear()} Mini Games Web. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;