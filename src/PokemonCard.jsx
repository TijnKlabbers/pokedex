import "./PokemonCard.css";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

const PokemonCard = ({ pokemon }) => {
  const [species, setSpecies] = useState(null);

  useEffect(() => {
    const fetchSpecies = async () => {
      try {
        const response = await fetch(pokemon.species.url);
        const data = await response.json();
        setSpecies(data);
      } catch (error) {
        console.error("Failed to fetch species:", error);
      }
    };
    fetchSpecies();
  }, [pokemon.species.url]);

  const weightInKg = pokemon.weight / 10; // Bereken het gewicht in kg
  const heightInM = pokemon.height / 10; // Bereken de hoogte in m

  return (
    <div
      key={pokemon.id}
      className={`background ${pokemon.types
        .map((type) => `${type.type.name}-type`)
        .join(" ")}`}
    >
      <div className="specific_pokemon_top">
        <div
          className="px-12 w-4 arrow_left cursor-pointer"
          onClick={() => (window.location.href = `/`)}
        >
          {" "}
          {`\u2190`}
        </div>
        <div className="flex items-center justify-between px-12">
          <div>
            <h2 className="mb-5 text-5xl font-bold text-white">
              {pokemon.name}
            </h2>
          </div>
          <div
            key={pokemon.id}
            id={`pokemon-${pokemon.id.toString().padStart(3, "0")}`}
            className={`text-5xl text-white font-semibold ${pokemon.types
              .map((type) => `${type}-color`)
              .join(" ")}`}
          >
            #{pokemon.id.toString().padStart(3, "0")}
          </div>
        </div>
        <ul className="gap-2 px-12 specific_buttons flex text-white">
          {pokemon.types.map((type, index) => (
            <li className="px-5 py-2 specific_button" key={index}>
              {type.type.name}
            </li>
          ))}
        </ul>
        <img
          className="specific_pokemon_img"
          src={pokemon.sprites.other["official-artwork"].front_default}
          alt={pokemon.name}
        />
      </div>
      <div className="specific_pokemon_bottom flex flex-col">
        <div className="flex w-full justify-center">
          <ul className="flex w-1/2 justify-evenly mt-16 border-b border-gray-300 h-12">
            <li className="w-1/2 font-bold text-black flex justify-center border-b-4 border-indigo-500">
              About
            </li>
            <Link
              className="w-1/2 flex justify-center text-gray-400"
              to={`/pokemon/${pokemon.id}/base-stats`}
            >
              Base Stats
            </Link>
          </ul>
        </div>
        <div className="flex h-full p-14 justify-evenly">
          <div className="w-1/2 h-full max-w-xs ">
            {species && (
              <div>
                <p className="font-bold">Background story:</p>
                <p>
                  {" "}
                  {species &&
                    species.flavor_text_entries
                      .find((entry) => entry.language.name === "en")
                      .flavor_text.replace(/[^a-zA-Z0-9éÉ ]/g, " ")
                      .toLowerCase()}
                </p>
              </div>
            )}
          </div>
          <div className="w-1/2 h-full bg-red max-w-xs">
            {species && (
              <div>
                <p className="font-bold">
                  Height: {heightInM} m <br />
                  Weight: {weightInKg} kg <br />
                  Species:{" "}
                  {
                    species.genera.find((genus) => genus.language.name === "en")
                      .genus
                  }
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
