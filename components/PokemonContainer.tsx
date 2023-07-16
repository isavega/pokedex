import React, { ReactNode } from "react";
import styled from "styled-components";

type StyledContainerProps = {
  maxHeight: string;
};

const StyledContainer = styled.div<StyledContainerProps>`
  max-height: ${({ maxHeight }) => maxHeight};
  overflow: auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  background-color: "#fff";
`;

type ContainerProps = {
  maxHeight: string;
  children: ReactNode;
};

const PokemonContainer: React.FC<ContainerProps> = ({
  maxHeight,
  children,
}) => {
  return <StyledContainer maxHeight={maxHeight}>{children}</StyledContainer>;
};

export default PokemonContainer;
