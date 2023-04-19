import React from "react";
import "../../src/App.css";

const SearchBar = ({
  searchQuery,
  setSearchQuery,
  selectedType,
  setSelectedType,
  pokemonTypes,
}) => {
  return (
    <div className="searchbar_block pl-24 flex mb-9 flex-col items-start">
      <p className="title text-black text-5xl font-bold pl-0 pb-0 mb-10 ">
        What pokemon <br></br> are you looking for?
      </p>

      <div className="searchbar_types flex mb-4 gap-4">
        <input
          className="searchbar w-80 rounded-full p-1  "
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search for a Pokemon..."
        />
        <select
          className="rounded-full type-filter  border-transparent p-15"
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
        >
          {pokemonTypes.map((type) => (
            <option value={type} key={type}>
              {type === "" ? "All Types" : type}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default SearchBar;
