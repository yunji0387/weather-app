import React from 'react';
import './SublineCard.css';

const SublineCard = (props) => {

    if (!props.forecast) {
        return (<></>);
    }

    const dateFormat = { year: "numeric", month: "numeric", day: "numeric" };
    const timeFormat = { hour: "numeric", minute: "numeric" };

    const lastUpdate = new Date(props.forecast.dt * 1000);

    // Format the date part
    const datePart = lastUpdate.toLocaleDateString("en-US", dateFormat);

    // Format the time part
    const timePart = lastUpdate.toLocaleTimeString("en-US", timeFormat);

    return (
        <div className="subline-card-container">

            <div className="subline-content">
                <div className="subline-content-degree-container">
                    <p className="subline-content-degree-text">{props.forecast.temp}&deg;</p>
                </div>
                <div className="subline-content-img-container">
                    <img src={props.forecast.iconURL} alt="" className="subline-content-img" />
                </div>
                <div className="subline-content-main-container">
                    <p className="subline-content-main-text">{props.forecast.weather[0].main}</p>
                </div>
                <div className="subline-content-date-container">
                    <p className="subline-content-date-text">{datePart}</p>
                    <p className="subline-content-date-text">{timePart}</p>
                </div>
            </div>
        </div>
    );
};

export default SublineCard;
