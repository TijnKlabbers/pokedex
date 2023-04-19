import React from "react";

const PokemonCardContainer = ({ filteredPokemonList }) => {
  return (
    <div className="card-container  flex flex-wrap justify-center gap-4 h-screen">
      {filteredPokemonList.map((pokemon) => (
        <div
          key={pokemon.id}
          className={`card flex items-center rounded-lg border border-gray-300 overflow-hidden w-72 h-48 text-center relative ${pokemon.types
            .map((type) => `${type}-type`)
            .join(" ")}`}
          onClick={() => (window.location.href = `/evolutions/${pokemon.name}`)}
        >
          <div className="pokemon_info flex justify-center flex-col h-full pl-7">
            <div>
              <h2 className="pokemon_name mb-5 text-3xl font-bold text-white text-25 font-semibold">
                {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
              </h2>
            </div>
            <div
              id={`pokemon-${pokemon.id.toString().padStart(3, "0")}`}
              className={`position absolute  right-17 text-3xl font-bold  ${pokemon.types
                .map((type) => `${type}-color`)
                .join(" ")}`}
            >
              #{pokemon.id.toString().padStart(3, "0")}
            </div>
            <div className="buttons flex flex-col gap-3 h-1/2">
              {pokemon.types.map((type) => (
                <p key={type} className="type w-24 p-1 text-white rounded-full">
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </p>
              ))}
            </div>
          </div>
          <div className="pokemon_afbeelding_block z-2">
            <img src={pokemon.sprite} alt={pokemon.name} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default PokemonCardContainer;
