import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import PokemonCard from "./PokemonCard";
import BaseStats from "./components/baseStats";

function PokemonCardPage({ type }) {
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
    <div className={`pokemon-card-page ${type}`}>
      <BaseStats pokemon={pokemon} />
    </div>
  );
}

export default PokemonCardPage;
