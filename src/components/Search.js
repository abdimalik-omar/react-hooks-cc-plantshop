import React, { useState } from "react";

function Search({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSearchChange = (event) => {
    const searchQuery = event.target.value;
    setQuery(searchQuery);
    onSearch(searchQuery); // Pass the search query to PlantPage
  };

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={query} // Set the input value to the query state
        onChange={handleSearchChange} // Call handleSearchChange when the input changes
      />
    </div>
  );
}

export default Search;
