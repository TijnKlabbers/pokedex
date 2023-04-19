import { useState, useEffect } from "react";
import "./App.css";
import CardContainer from "./components/PokemonCardContainer";
import SearchBar from "./components/SearchBar";
import Navbar from "./components/Navbar";

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState("");

  useEffect(() => {
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
              category: data.species.name, // Add category to the Pokemon object
              sprite: data.sprites.other["official-artwork"].front_default,
              // sprite: data.sprites.front_default,
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

  const pokemonTypes = [
    "",
    "normal",
    "fighting",
    "flying",
    "poison",
    "ground",
    "rock",
    "bug",
    "ghost",
    "steel",
    "fire",
    "water",
    "grass",
    "electric",
    "psychic",
    "ice",
    "dragon",
    "dark",
    "fairy",
  ];

  return (
    <div className=" h-screen w-screen">
      <Navbar />
      <SearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedType={selectedType}
        setSelectedType={setSelectedType}
        pokemonTypes={pokemonTypes}
      />
      <CardContainer filteredPokemonList={filteredPokemonList} />
    </div>
  );
}

export default App;
