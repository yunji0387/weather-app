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

    // const options = { year: "numeric", month: "long", day: "numeric", hour: "numeric", minute: "numeric", second: "numeric" };
    const dateFormat = { hour: "numeric", minute: "numeric" };
    const lastUpdate = new Date(props.weatherData.lastUpdate);
    const convertedLastUpdate = lastUpdate.toLocaleDateString("en-US", dateFormat);

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
                    <div className="headline-weather-main-container">
                        <p className="headline-weather-main-text">{props.weatherData.weather[0].main}</p>
                    </div>
                </div>
                <div className="headline-content-right-container">
                    <div className="headline-weather-wind-container">
                        <p className="headline-weather-wind-text">wind: {props.weatherData.wind.deg}&deg; in {props.weatherData.wind.speed} m/s</p>
                    </div>
                    <div className="headline-weather-feelslike-container">
                        <p className="headline-weather-feelslike-text">feels like: {props.weatherData.main.feels_like}&deg;</p>
                    </div>
                    <div className="headline-weather-degree-container">
                        <p className="headline-weather-degree-text">{props.weatherData.main.temp}&deg;</p>
                    </div>
                    <div className="headline-weather-description-container">
                        <p className="headline-weather-description-text">{props.weatherData.weather[0].description}</p>
                    </div>
                    <div className="headline-weather-lastupdate-container">
                        <p className="headline-weather-lastupdate-header">Last update: </p>
                        <p className="headline-weather-lastupdate-text">{convertedLastUpdate}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeadlineCard;
