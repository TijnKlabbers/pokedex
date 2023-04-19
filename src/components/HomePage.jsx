import React, { useState, useEffect } from "react";
import PokemonCard from "./PokemonCard";

const PokemonList = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState("");

  useEffect(() => {
    //fetch in use effect -> maak een functie
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
      .then((response) => response.json())
      .then((data) => {
        const promises = data.results.map((result) =>
          fetch(result.url).then((response) => response.json())
        );

        Promise.all(promises).then((pokemonData) => {
          setPokemonList(
            pokemonData.map((data) => ({
              id: data.id,
              name: data.name,
              types: data.types.map((type) => type.type.name),
              category: data.species.name,
              sprite: data.sprites.other["official-artwork"].front_default,
            }))
          );
        });
      });
  }, []);

  const filteredPokemonList = pokemonList
    .filter((pokemon) =>
      pokemon.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .filter((pokemon) =>
      selectedType === "" ? true : pokemon.types.includes(selectedType)
    );

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleTypeFilter = (type) => {
    // iets met data doen
    setSelectedType(type);
  };

  return (
    <div>
      <h1>Pokemon List</h1>
      <input
        type="text"
        placeholder="Search by name"
        value={searchQuery}
        onChange={(e) => handleSearch(e.target.value)}
      />
      <select
        value={selectedType}
        onChange={(e) => setSelectedType(e.target.value)}
      >
        {pokemonTypes.map((type) => (
          <option key={type} value={type}>
            {type || "All Types"}
          </option>
        ))}
      </select>
      <div>
        {filteredPokemonList.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
};

export default PokemonList;
