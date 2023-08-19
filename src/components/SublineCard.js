import React from 'react';
import './SublineCard.css';

const SublineCard = (props) => {

    return (
        <div className="subline-card-container">
            <div className="subline-content">
                <div className="subline-content-img-container">
                    <img src={props.iconURL} alt="" className="subline-content-img" />
                </div>
                <div className="subline-content-degree-container">
                    <p className="subline-content-degree-text">{props.temp}</p>
                </div>
            </div>
        </div>
    );
};

export default SublineCard;
