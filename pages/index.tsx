import Head from "next/head";
import Container from "@/components/Container";
import Text from "@/components/Text";
import Grid from "@/components/Grid";

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
            <Text size="h1">Hello world</Text>
            <Text size="h1">Hello world</Text>
            <Text size="h1">Hello world</Text>
            <Text size="h1">Hello world</Text>
            <Text size="h1">Hello world</Text>
          </Grid>
        </Container>
      </Container>
    </>
  );
}
