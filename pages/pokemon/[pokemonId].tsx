import Container from "@/components/Container";
import Text from "@/components/Text";

const DetailScreen = () => {
  return (
    <Container
      backgroundImage="/pokedex/backgroundWhite.png"
      width="80%"
      margin="70px 0px 0px 200px"
      paddingTop="100"
      paddingBottom="100"
    >
      <Text size="h1" color="#919191">
        Detalle del Pokemon
      </Text>
    </Container>
  );
};

export default DetailScreen;
