import React from "react";

<<<<<<< HEAD
function Search({ searchQuery, onSearchChange }) {
=======
function Search({ searchTerm, onSearchChange }) {
>>>>>>> 46f8499 (Fix PlantCard rendering safety and wire up NewPlantForm/Search state)
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
<<<<<<< HEAD
        value={searchQuery}
=======
        value={searchTerm}
>>>>>>> 46f8499 (Fix PlantCard rendering safety and wire up NewPlantForm/Search state)
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  );
}

export default Search;
