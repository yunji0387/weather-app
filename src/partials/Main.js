import React, { useState, useEffect } from 'react'; import './Main.css';
import SearchBar from '../components/SearchBar';
import Headline from '../components/HeadlineCard';
import SublineSection from '../components/SublineSection';
import Loading from '../components/Loading';

const Main = () => {
    const handleSearch = (query) => {
        console.log('Search query:', query);
    };

    const [weatherInfo, setWeatherInfo] = useState({});
    const [loading, setLoading] = useState(true);

    const fetchWeatherData = async () => {
        fetch(`https://sky-cast-backend-b4e180440fb6.herokuapp.com/`)
            .then((response) => response.json())
            .then((jsonData) => {
                setWeatherInfo(jsonData);
                setLoading(false);
            })
            .then(() => console.log(weatherInfo))
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    };

    useEffect(() => {
        fetchWeatherData();
    }, []);

    if (loading){
        return (
            <><Loading /></>
        );
    }

    return (
        <div className="main">
            <div className="main-container">
                <SearchBar onSearch={handleSearch} />
                <Headline weatherData={weatherInfo.curr} />
                <SublineSection weatherData={weatherInfo.forecast}/>
            </div>
        </div>
    );
};


export default Main;
