import styled from "styled-components";

type ContainerStyleProps = {
  backgroundImage: string;
  width: string;
};

const ContainerWrapper = styled.div<ContainerStyleProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  height: 100vh;
  width: ${({ width }) => width};
  background-image: url(${({ backgroundImage }) => backgroundImage});
`;

type ContainerProps = {
  backgroundImage: string;
  width: string;
  children: React.ReactNode;
};

const Container: React.FC<ContainerProps> = ({
  backgroundImage,
  width,
  children,
}) => {
  return (
    <ContainerWrapper backgroundImage={backgroundImage} width={width}>
      {children}
    </ContainerWrapper>
  );
};

export default Container;
