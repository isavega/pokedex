export const GET_ALL_POKEMONS_URL = "https://pokeapi.co/api/v2/pokemon";

export const fetcher = (...args) => fetch(...args).then((res) => res.json());
