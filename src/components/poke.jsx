const filteredPokemonList = pokemonList
  .filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchQuery.toLowerCase())
  )
  .filter((pokemon) =>
    selectedType === "" ? true : pokemon.types.includes(selectedType)
  );

export default filteredPokemonList;
