import Head from "next/head";
import Container from "@/components/Container";
import Text from "@/components/Text";

export default function Home() {
  return (
    <>
      <Head>
        <title>Pokedex</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Text size="h1">Hello world</Text>
      </Container>
    </>
  );
}
