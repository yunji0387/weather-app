import React from 'react';
import './SublineSection.css';
import SublineCard from './SublineCard';

const SublineSection = (props) => {
    if (!props.weatherData) return ( <></> );

    return (
        <div className="subline-section-container">
            <div className="subline-section">
                <SublineCard iconURL={props.weatherData.forecasts[0].iconURL} temp={props.weatherData.forecasts[0].temp} />
                <SublineCard iconURL={props.weatherData.forecasts[1].iconURL} temp={props.weatherData.forecasts[1].temp} />
                <SublineCard iconURL={props.weatherData.forecasts[2].iconURL} temp={props.weatherData.forecasts[2].temp} />
                <SublineCard iconURL={props.weatherData.forecasts[3].iconURL} temp={props.weatherData.forecasts[3].temp} />
                <SublineCard iconURL={props.weatherData.forecasts[4].iconURL} temp={props.weatherData.forecasts[4].temp} />
            </div>
        </div>
    );
};

export default SublineSection;
