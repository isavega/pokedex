import Head from "next/head";
import Container from "@/components/Container";
import Grid from "@/components/Grid";
import Card from "@/components/Card";

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
  return (
    <>
      <Head>
        <title>Pokedex</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
              />
            ))}
          </Grid>
        </Container>
      </Container>
    </>
  );
}
