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

import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import parse from 'autosuggest-highlight/parse';
import { debounce } from '@mui/material/utils';

const GOOGLE_MAPS_API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

function loadScript(src, position, id) {
    if (!position) {
        return;
    }

    const script = document.createElement('script');
    script.setAttribute('async', '');
    script.setAttribute('id', id);
    script.src = src;
    position.appendChild(script);
}

const autocompleteService = { current: null };

export default function GoogleMaps({ onSearch }) {
    const [value, setValue] = React.useState(null);
    const [inputValue, setInputValue] = React.useState('');
    const [options, setOptions] = React.useState([]);
    const loaded = React.useRef(false);

    const [searchTerm, setSearchTerm] = React.useState('');

    if (typeof window !== 'undefined' && !loaded.current) {
        if (!document.querySelector('#google-maps')) {
            loadScript(
                `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&libraries=places`,
                document.querySelector('head'),
                'google-maps',
            );
        }

        loaded.current = true;
    }

    const fetch = React.useMemo(
        () =>
            debounce((request, callback) => {
                autocompleteService.current.getPlacePredictions(request, callback);
            }, 400),
        [],
    );

    React.useEffect(() => {
        let active = true;

        if (!autocompleteService.current && window.google) {
            autocompleteService.current =
                new window.google.maps.places.AutocompleteService();
        }
        if (!autocompleteService.current) {
            return undefined;
        }

        if (inputValue === '') {
            setOptions(value ? [value] : []);
            return undefined;
        }

        fetch({ input: inputValue }, (results) => {
            if (active) {
                let newOptions = [];

                if (value) {
                    newOptions = [value];
                }

                if (results) {
                    newOptions = [...newOptions, ...results];
                }

                setOptions(newOptions);
            }
        });

        return () => {
            active = false;
        };
    }, [value, inputValue, fetch]);

    React.useEffect(() => {
        console.log("---------");
        if (value !== null) {
            // console.log(value);
            setSearchTerm(value);
            onSearch(searchTerm);
        }
    }, [value]);

    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            onSearch(searchTerm);
        }
    };

    React.useEffect(() => {
        console.log("========");
        console.log(searchTerm);
    }, [searchTerm]);

    return (
        <Autocomplete
            id="google-map-demo"
            sx={{ width: 500 }}
            getOptionLabel={(option) =>
                typeof option === 'string' ? option : option.description
            }
            filterOptions={(x) => x}
            options={options}
            autoComplete
            includeInputInList
            filterSelectedOptions
            value={value}
            noOptionsText="No locations"
            onChange={(event, newValue) => {
                setOptions(newValue ? [newValue, ...options] : options);
                setValue(newValue);
            }}
            onInputChange={(event, newInputValue) => {
                setInputValue(newInputValue);
                setSearchTerm(newInputValue);
            }}
            onKeyDown={handleKeyPress}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label="Enter a location here."
                    fullWidth
                    sx={{
                        "& .MuiInputLabel-root": { color: 'grey', fontSize: 20, paddingLeft: 1 },
                        "& .MuiOutlinedInput-root": {
                            "& > fieldset": {
                                borderColor: "darkgrey",
                                borderWidth: 3,
                                borderRadius: 10
                            },
                        },
                        "& .MuiOutlinedInput-root.Mui-focused": {
                            "& > fieldset": {
                                borderColor: "black",
                                borderWidth: 3,
                                borderTopLeftRadius: 15,
                                fontSize: 20
                            }
                        },
                        "& .MuiOutlinedInput-root:hover": {
                            "& > fieldset": {
                                borderColor: "grey"
                            }
                        }
                    }}

                />
            )}
            renderOption={(props, option) => {
                const matches =
                    option.structured_formatting.main_text_matched_substrings || [];

                const parts = parse(
                    option.structured_formatting.main_text,
                    matches.map((match) => [match.offset, match.offset + match.length]),
                );

                return (
                    <li {...props}>
                        <Grid container alignItems="center">
                            <Grid item sx={{ display: 'flex', width: 44 }}>
                                <LocationOnIcon sx={{ color: 'text.secondary' }} />
                            </Grid>
                            <Grid item sx={{ width: 'calc(100% - 44px)', wordWrap: 'break-word' }}>
                                {parts.map((part, index) => (
                                    <Box
                                        key={index}
                                        component="span"
                                        sx={{
                                            fontWeight: part.highlight ? 'bold' : 'regular'
                                        }}
                                    >
                                        {part.text}
                                    </Box>
                                ))}
                                <Typography variant="body2" color="text.secondary">
                                    {option.structured_formatting.secondary_text}
                                </Typography>
                            </Grid>
                        </Grid>
                    </li>
                );
            }}
        />
    );
}
