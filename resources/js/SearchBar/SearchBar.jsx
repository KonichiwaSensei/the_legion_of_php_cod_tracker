import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../css/SearchBar.scss';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(`/tracker/${encodeURIComponent(searchQuery)}`);
  };

  return (
    <div className="search_bar">
      <input
        type="text"
        className='search_input'
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button className="search_button" onClick={handleSearch}>Search Weapons</button>
    </div>
  );
};

export default SearchBar;
