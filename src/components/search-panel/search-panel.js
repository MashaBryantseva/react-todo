import React from 'react';

import './search-panel.css';

const SearchPanel = ({ searchValue, onSearch }) => (
  <input
    className="search-panel form-control"
    placeholder="Type here to search"
    value={searchValue}
    onChange={(event) => onSearch(event.target.value)}
  />
);

export default SearchPanel;
