import { useMemo } from "react";
import Head from "next/head";
import Container from "@/components/Container";
import SearchBar from "@/components/SearchBar";
import Text from "@/components/Text";
import Grid from "@/components/Grid";
import PokemonGrid from "@/components/PokemonGrid";
import { useInView } from "react-cool-inview";
import useInfiniteQuery from "@/hooks/useInfiniteQuery";

const App = () => {
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
      <Grid>
        {pokemons?.map((data: any, index: number) => {
          const isLast = index === pokemons.length - 1;
          const { name, url } = data;

          return (
            <li
              key={name}
              ref={isLast ? observe : null}
              className="h-80 w-full"
            >
              <PokemonGrid url={url} index={++index} />
            </li>
          );
        })}
      </Grid>
    </>
  );
};

export default App;
