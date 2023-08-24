import React, { useState } from "react";
import './SearchBar.css';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
    // onSearch(event.target.value);
  };

  const handleKeyPress = (event) => {
    if(event.key === "Enter") {
      onSearch(searchTerm);
    }
  };

  return (
    <div className="search-bar-container">
      <input
        type="text"
        placeholder="Search a city name here..."
        value={searchTerm}
        onChange={handleInputChange}
        onKeyDown={handleKeyPress}
      />
    </div>
  );
};

export default SearchBar;
