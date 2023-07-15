import styled from "styled-components";

type ContainerStyleProps = {
  backgroundImage: string;
  width: string;
  height: string;
  margin: string;
  paddingTop: string;
  paddingBottom: string;
};

const ContainerWrapper = styled.div<ContainerStyleProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: ${({ margin }) => margin};
  padding-top: ${({ paddingTop }) => paddingTop};
  padding-bottom: ${({ paddingBottom }) => paddingBottom};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  background-image: url(${({ backgroundImage }) => backgroundImage});
`;

type ContainerProps = {
  backgroundImage?: string;
  width: string;
  height?: string;
  margin?: string;
  paddingTop?: string;
  paddingBottom?: string;
  children: React.ReactNode;
};

const Container: React.FC<ContainerProps> = ({
  backgroundImage = "transparent",
  width,
  height = "100vh",
  margin = "0 auto",
  paddingTop = "300px",
  paddingBottom = "350px",
  children,
}) => {
  return (
    <ContainerWrapper
      backgroundImage={backgroundImage}
      width={width}
      height={height}
      margin={margin}
      paddingTop={paddingTop}
      paddingBottom={paddingBottom}
    >
      {children}
    </ContainerWrapper>
  );
};

export default Container;
