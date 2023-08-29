// import React, { useEffect, useState } from "react";
// import './SearchBar.css';

// const SearchBar = ({ onSearch }) => {
//   const [searchTerm, setSearchTerm] = useState('');

//   const handleInputChange = (event) => {
//     setSearchTerm(event.target.value);
//     console.log(searchTerm);
//     // onSearch(event.target.value);
//   };

//   const handleKeyPress = (event) => {
//     if(event.key === "Enter") {
//       onSearch(searchTerm);
//       console.log("---------");
//       console.log(searchTerm);
//     }
//   };

//   return (
//     <div className="search-bar-container">
//       <input
//         type="text"
//         placeholder="Search a city name here..."
//         value={searchTerm}
//         onChange={handleInputChange}
//         onKeyDown={handleKeyPress}
//       />
//     </div>
//   );
// };

// export default SearchBar;

import React, { useState, useEffect } from 'react';
import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng,
} from 'react-places-autocomplete';
import useScript from 'react-script-hook';
import './SearchBar.css';

const GOOGLE_MAPS_API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

export default function SearchBar({ onSearch }) {
    const [address, setAddress] = useState("");
    const [coordinates, setCoordinates] = useState({
        lat: null,
        lng: null
    });

    const [loading, error] = useScript({ src: "https://maps.googleapis.com/maps/api/js?key=" + GOOGLE_MAPS_API_KEY + "&libraries=places" });

    if (loading) return <h3>Loading Stripe API...</h3>;
    if (error) return <h3>Failed to load Stripe API: {error.message}</h3>;

    const handleSelect = async value => {
        const result = await geocodeByAddress(value);
        const latLon = await getLatLng(result[0]);
        console.log(latLon)
        setAddress(value);
        setCoordinates(latLon);
        onSearch(latLon);
    }

    return (
        <div className="search-bar">
            <PlacesAutocomplete
                value={address}
                onChange={setAddress}
                onSelect={handleSelect}
                // onSearch={onSearch}
            >
                {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                    <div className='search-bar-container'>
                        <input
                            {...getInputProps({
                                placeholder: 'Search Location Here ...',
                                className: 'location-search-input', // Apply input styles here
                            })}
                        />
                        <div className="autocomplete-dropdown-container">
                            {loading && <div>Loading...</div>}
                            {suggestions.map((suggestion, index) => {
                                const className = suggestion.active
                                    ? 'suggestion-item--active' // Apply active suggestion styles here
                                    : 'suggestion-item'; // Apply suggestion item styles here
                                return (
                                    <div
                                        key={index}
                                        {...getSuggestionItemProps(suggestion, {
                                            className, // Use the class name here
                                        })}
                                    >
                                        <span>{suggestion.description}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}
            </PlacesAutocomplete>
        </div>
    );
}