import React, { useState, useEffect } from 'react';
import './HeadlineCard.css';

const HeadlineCard = (props) => {

    if (!props.weatherData) {
        return (
            <div className="headline-container">
                <div className="headline-content-error">
                <p className="headline-content-error-heading"> Error...</p>
                    <p className="headline-content-error-text">Please refresh or try again later. </p>
                </div>
            </div>
        );
    }

    return (
        <div className="headline-container">
            <div className="headline-content">
                <div className="headline-content-left-container">
                    <div className="headline-weather-location-container">
                        <p className="headline-weather-location-text">{props.weatherData.cityName}</p>
                    </div>
                    <div className="headline-weather-img-container">
                        <img src={props.weatherData.iconURL} alt="test" className="headline-weather-img" />
                    </div>
                </div>
                <div className="headline-content-right-container">
                    <div className="headline-weather-degree-container">
                        <p className="headline-weather-degree-text">{props.weatherData.temp} &deg;</p>
                    </div>
                    <div className="headline-weather-description-container">
                        <p className="headline-weather-description-text">{props.weatherData.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeadlineCard;
