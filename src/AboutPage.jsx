import PokemonCard from "./PokemonCard";
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";

function AboutPage() {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((response) => response.json())
      .then((data) => setPokemon(data));
  }, [id]);

  if (!pokemon) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <PokemonCard pokemon={pokemon} />
    </div>
  );
}
export default AboutPage;
