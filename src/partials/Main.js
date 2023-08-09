import React from 'react';
import './Main.css';
import SearchBar from '../components/SearchBar';

const Main = () => {
    const handleSearch = (query) => {
        console.log('Search query:', query);
    };

    return (
        <div className="main">
            <div className="main-container">
                <SearchBar onSearch={handleSearch} />
                <div className="main-headline-container">
                    <div className="main-headline">

                    </div>
                </div>
                <div className="main-subline-container">
                    <div className="main-subline">

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
