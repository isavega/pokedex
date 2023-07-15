const getAllPokemons = async () => {
  const response = await fetch("https://pokeapi.co/api/v2/pokedex/");
  const data = await response.json();
  return data;
};

export default getAllPokemons;
