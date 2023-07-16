import { useState, useMemo } from "react";
import Head from "next/head";
import Container from "@/components/Container";
import SearchBar from "@/components/SearchBar";
import Text from "@/components/Text";
import Button from "@/components/Button";
import PokemonGrid from "@/components/PokemonGrid";
import { useInView } from "react-cool-inview";
import useInfiniteQuery from "@/hooks/useInfiniteQuery";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PokemonContainer from "@/components/PokemonContainer";

const App = () => {
  const [infiniteCharge, setInfiniteCharge] = useState(false);
  const { data, next } = useInfiniteQuery();

  const pokemons: any = useMemo(
    () => data?.flatMap((page: any) => page?.results) ?? [],
    [data]
  );

  const { observe } = useInView({
    rootMargin: "300px",
    onEnter: ({ unobserve }) => {
      unobserve();
      next();
    },
  });

  const infiniteChargeHandler = () => {
    setInfiniteCharge(true);
  };

  return (
    <>
      <Head>
        <title>Pokedex</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container
        width="22%"
        height="10px"
        margin="0px 0px 0px 20px"
        paddingTop="10px"
        paddingBottom="20px"
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
      <Container
        backgroundImage="/pokedex/backgroundBlack.png"
        width="100%"
        paddingTop="20px"
        paddingBottom="20px"
      >
        <Container
          backgroundImage="/pokedex/backgroundWhite.png"
          width="80%"
          height="100vh"
          paddingTop="20px"
          paddingBottom="20px"
        >
          <PokemonContainer maxHeight="90%">
            {pokemons?.map((data: any, index: number) => {
              const isLast = index === pokemons.length - 1;
              const { name, url } = data;

              return (
                <li key={name} ref={isLast && infiniteCharge ? observe : null}>
                  <PokemonGrid url={url} index={index + 1} />
                </li>
              );
            })}
          </PokemonContainer>
        </Container>
      </Container>
      {!infiniteCharge && (
        <Container
          width="100%"
          height="50px"
          paddingTop="20px"
          paddingBottom="20px"
        >
          <Button backgroundColor="#1b82b1" onClick={infiniteChargeHandler}>
            Cargar más Pokémon
          </Button>
        </Container>
      )}

      <Footer />
    </>
  );
};

export default App;
