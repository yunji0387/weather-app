import React, { useState } from 'react';
import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng,
} from 'react-places-autocomplete';
import useScript from 'react-script-hook';
import './SearchBar.css';

const GOOGLE_MAPS_API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

export default function SearchBar({ onSearch }) {
    const [address, setAddress] = useState("");
    const [loading, error] = useScript({ src: "https://maps.googleapis.com/maps/api/js?key=" + GOOGLE_MAPS_API_KEY + "&libraries=places" });

    if (loading) return <h3>Loading Stripe API...</h3>;
    if (error) return <h3>Failed to load Stripe API: {error.message}</h3>;

    const handleSelect = async (value, placeId) => {
        if(!placeId){
            return; //prevent further process as no valid address found
        }
        const result = await geocodeByAddress(value);
        const latLon = await getLatLng(result[0]);
        setAddress(value);
        onSearch({ ...latLon, value });
    }

    const onError = (status, clearSuggestions) => {
        console.log('Google Maps API returned error with status: ', status);
        clearSuggestions();
        alert("Please enter valid location");
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            alert("Please select one of the suggested locations. If no suggestions appear, please double-check the entered address.");
        }
    }

    return (
        <div className="search-bar">
            <PlacesAutocomplete
                value={address}
                onChange={setAddress}
                onSelect={handleSelect}
                onError={onError}
            >
                {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                    <div className='search-bar-container'>
                        <input
                            {...getInputProps({
                                placeholder: 'Search Location Here ...',
                                className: 'location-search-input', // Apply input styles
                                onKeyDown: handleKeyDown, // Prevent Enter key press
                            })}
                        />
                        <div className="autocomplete-dropdown-container">
                            {loading && <div className='suggestion-item'>Loading...</div>}
                            {suggestions.map((suggestion, index) => {
                                const className = suggestion.active
                                    ? 'suggestion-item--active' // Apply active suggestion styles here
                                    : 'suggestion-item'; // Apply suggestion item styles here
                                return (
                                    <div
                                        key={index}
                                        {...getSuggestionItemProps(suggestion, {
                                            className, // Use the class name
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