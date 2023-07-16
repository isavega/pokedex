import { IMG_URL } from "@/utils/image";
import { normalizePokemonLite } from "@/utils/normalizePokemon";
import { FC, useMemo } from "react";
import fetcher from "@/utils/fetcher";
import useSWRImmutable from "swr/immutable";
import Card from "@/components/Card";

interface Props {
  url: string;
  index: number;
}

const PokemonGrid: FC<Props> = ({ url, index }) => {
  const { data, error } = useSWRImmutable(url, fetcher);

  const pokemon = useMemo(() => {
    if (!data) return null;

    return normalizePokemonLite({ pokemon: data });
  }, [data]);

  if (error) return null;
  if (!pokemon) return null;

  const { name, id, types } = pokemon;

  const getImageCaption = (pokemonId: number) => {
    const number = ("000" + pokemonId).slice(-4);
    return `N.° ${number}`;
  };

  return (
    <Card
      key={index}
      imageUrl={`${IMG_URL + id}.png`}
      imageCaption={getImageCaption(id)}
      title={name}
      pokemonTypes={types}
    />
  );
};

export default PokemonGrid;
