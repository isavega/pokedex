import Container from "@/components/Container";
import Grid from "@/components/Grid";
import Card from "@/components/Card";
import { useRouter } from "next/router";
import useSWR from "swr";
import { fetcher, GET_ALL_POKEMONS_URL } from "@/helpers/utils";
import { IPokemonResults } from "@/models/pokeApi";

interface IProps {
  pokemons: Array<IPokemonResults>;
}

const HomeScreen = ({ pokemons }: IProps) => {
  const router = useRouter();

  const onClickHandler = () => {
    router.push("/pokemon/1");
  };

  //   const { data, error, isLoading } = useSWR(
  //     `https://pokeapi.co/api/v2/pokemon/1/${pokemonName}`,
  //     fetcher
  //   );

  return (
    <>
      <Grid>
        {pokemons?.map((pokemon, index) => (
          <Card
            key={index}
            imageUrl={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
              index + 1
            }.png`}
            imageCaption={`N.° 000${index + 1}`}
            title={pokemon.name}
            leftSubtitle="Agua"
            rightSubtitle="Fuego"
            onClick={onClickHandler}
          />
        ))}
      </Grid>
    </>
  );
};

export default HomeScreen;
