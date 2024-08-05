// src/components/SearchFilter.js

import React, { useState } from 'react';

function SearchFilter() {
  const [searchTerm, setSearchTerm] = useState('');
  const items = [
    'Apple',
    'Banana',
    'Orange',
    'Mango',
    'Pineapple',
    'Grapes',
    'Strawberry',
    'Watermelon',
    'Blueberry',
    'Peach'
  ];

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div id="search-container">
      <h1 id="search-title">Search Filter</h1>
      <input
        id="search-input"
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleChange}
      />
      <ul id="search-list">
        {filteredItems.map((item, index) => (
          <li key={index} id={`item-${index}`}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default SearchFilter;
