import React from 'react';
import { Link } from 'react-router-dom';
import './SocialIcon.css';

const SocialIcon = (props) => {
  return (
    <li className="social-icon__item">
      <Link to={props.href}>
        <img src={props.src} alt={props.alt} className="social-icon-img-size" />
      </Link>
    </li>
  );
};

export default SocialIcon;
