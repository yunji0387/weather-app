import React from 'react';
import './SublineCard.css';

const SublineCard = (props) => {

    return (
        <div className="subline-card-container">
            <div className="subline-content">
                <div className="subline-content-img-container">
                    <img src={props.forecast.iconURL} alt="" className="subline-content-img" />
                </div>
                <div className="subline-content-degree-container">
                    <p className="subline-content-degree-text">{props.forecast.temp} &deg;</p>
                </div>
                <div className="subline-content-degree-container">
                    <p className="subline-content-degree-text">{props.forecast.weather[0].main}</p>
                </div>
                <div className="subline-content-date-container">
                    <p className="subline-content-date-text">{props.forecast.dt_txt}</p>
                </div>
            </div>
        </div>
    );
};

export default SublineCard;
