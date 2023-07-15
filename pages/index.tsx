import { useState, useCallback } from "react";
import Head from "next/head";
import Container from "@/components/Container";
import SearchBar from "@/components/SearchBar";
import Text from "@/components/Text";
import useSWR from "swr";
import { fetcher } from "@/helpers/utils";
import { IPokemonResults } from "@/models/pokeApi";
import HomeScreen from "./Home/HomeScreen";
import Button from "@/components/Button";

const App = () => {
  const [offset, setOffset] = useState(0);

  const {
    data: getAllPokemonData,
    error: getAllPokemonError,
    isLoading: getAllPokemonIsLoading,
  } = useSWR(
    `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=12`,
    fetcher
  );

  const mapPokemonImageUrl = useCallback((pokemons: any) => {
    return pokemons.map((result: any, index: any) => {
      const paddedIndex = ("00" + (index + 1)).slice(-3);
      const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${paddedIndex}.png`;
      return {
        ...result,
        image,
      };
    });
  }, []);

  const paginationHandler = () => {
    setOffset(offset + 12);
  };

  if (getAllPokemonError)
    return <div style={{ display: "none" }}>failed to load</div>;
  if (getAllPokemonIsLoading)
    return <div style={{ display: "none" }}>loading...</div>;

  const pokemons: Array<IPokemonResults> = getAllPokemonData?.results;
  const mappedPokemons = mapPokemonImageUrl(pokemons);

  // const getPokemonImageUrl = (pokemonName: string) => {
  //   const { data, error, isLoading } = useSWR(
  //     `https://pokeapi.co/api/v2/pokemon/1/${pokemonName}`,
  //     fetcher
  //   );
  // };

  return (
    <>
      <Head>
        <title>Pokedex</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container
        backgroundImage="/pokedex/backgroundWhite.png"
        width="80%"
        height="78px"
        margin="70px 0px 0px 200px"
        paddingTop="100"
        paddingBottom="100"
      >
        <Text size="h1" color="#919191">
          Pokédex
        </Text>
      </Container>
      <SearchBar
        title="Nombre o número"
        description="¡Usa la búsqueda avanzada para encontrar Pokémon por su tipo, debilidad, habilidad y demás datos!"
        message="Busca un Pokémon por su nombre o usando su número de la Pokédex Nacional."
        icon="pokedex/searchIcon.png"
      />

      <Container backgroundImage="/pokedex/backgroundBlack.png" width="100%">
        <Container backgroundImage="/pokedex/backgroundWhite.png" width="80%">
          <HomeScreen pokemons={mappedPokemons} />
        </Container>
      </Container>
      <Container
        width="100%"
        height="100px"
        paddingTop="0px"
        paddingBottom="0px"
      >
        <Button backgroundColor="#30a7d7" onClick={paginationHandler}>
          Cargar más Pokemón
        </Button>
      </Container>
    </>
  );
};

export default App;
