import React from 'react';
import './SublineSection.css';
import SublineCard from './SublineCard';

const SublineSection = (props) => {
    if (!props.weatherData) return ( <></> );

    return (
        <div className="subline-section-container">
            <div className="subline-section">
                <SublineCard forecast={props.weatherData.forecasts[0]} />
                <SublineCard forecast={props.weatherData.forecasts[1]} />
                <SublineCard forecast={props.weatherData.forecasts[2]} />
                <SublineCard forecast={props.weatherData.forecasts[3]} />
                <SublineCard forecast={props.weatherData.forecasts[4]} />
            </div>
        </div>
    );
};

export default SublineSection;
