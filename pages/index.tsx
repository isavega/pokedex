import Head from "next/head";
import Container from "@/components/Container";
import Grid from "@/components/Grid";
import Card from "@/components/Card";
import SearchBar from "@/components/SearchBar";
import Text from "@/components/Text";
import { useRouter } from "next/router";

const dummyObject = [
  {
    imageUrl: "/pokedex/pikachu.png",
    imageCaption: "N.° 0001",
    title: "Título del Card",
    greenSubtitle: "Subtítulo verde",
    purpleSubtitle: "Subtítulo morado",
  },
  {
    imageUrl: "/pokedex/pikachu.png",
    imageCaption: "N.° 0002",
    title: "Título del Card",
    greenSubtitle: "Subtítulo verde",
    purpleSubtitle: "Subtítulo morado",
  },
  {
    imageUrl: "/pokedex/pikachu.png",
    imageCaption: "N.° 0003",
    title: "Título del Card",
    greenSubtitle: "Subtítulo verde",
    purpleSubtitle: "Subtítulo morado",
  },
  {
    imageUrl: "/pokedex/pikachu.png",
    imageCaption: "N.° 0004",
    title: "Título del Card",
    greenSubtitle: "Subtítulo verde",
    purpleSubtitle: "Subtítulo morado",
  },
  {
    imageUrl: "/pokedex/pikachu.png",
    imageCaption: "N.° 0001",
    title: "Título del Card",
    greenSubtitle: "Subtítulo verde",
    purpleSubtitle: "Subtítulo morado",
  },
  {
    imageUrl: "/pokedex/pikachu.png",
    imageCaption: "N.° 0002",
    title: "Título del Card",
    greenSubtitle: "Subtítulo verde",
    purpleSubtitle: "Subtítulo morado",
  },
  {
    imageUrl: "/pokedex/pikachu.png",
    imageCaption: "N.° 0003",
    title: "Título del Card",
    greenSubtitle: "Subtítulo verde",
    purpleSubtitle: "Subtítulo morado",
  },
  {
    imageUrl: "/pokedex/pikachu.png",
    imageCaption: "N.° 0004",
    title: "Título del Card",
    greenSubtitle: "Subtítulo verde",
    purpleSubtitle: "Subtítulo morado",
  },
  {
    imageUrl: "/pokedex/pikachu.png",
    imageCaption: "N.° 0001",
    title: "Título del Card",
    greenSubtitle: "Subtítulo verde",
    purpleSubtitle: "Subtítulo morado",
  },
  {
    imageUrl: "/pokedex/pikachu.png",
    imageCaption: "N.° 0002",
    title: "Título del Card",
    greenSubtitle: "Subtítulo verde",
    purpleSubtitle: "Subtítulo morado",
  },
  {
    imageUrl: "/pokedex/pikachu.png",
    imageCaption: "N.° 0003",
    title: "Título del Card",
    greenSubtitle: "Subtítulo verde",
    purpleSubtitle: "Subtítulo morado",
  },
  {
    imageUrl: "/pokedex/pikachu.png",
    imageCaption: "N.° 0004",
    title: "Título del Card",
    greenSubtitle: "Subtítulo verde",
    purpleSubtitle: "Subtítulo morado",
  },
];

export default function Home() {
  const router = useRouter();

  const onClickHandler = () => {
    router.push("/pokemon/1");
  };

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
          <Grid>
            {dummyObject.map((item) => (
              <Card
                key={item.title}
                imageUrl={item.imageUrl}
                imageCaption={item.imageCaption}
                title={item.title}
                leftSubtitle={item.greenSubtitle}
                rightSubtitle={item.purpleSubtitle}
                onClick={onClickHandler}
              />
            ))}
          </Grid>
        </Container>
      </Container>
    </>
  );
}
