import React from "react";
import styled from "styled-components";

interface ButtonProps {
  backgroundColor: string;
  onClick: () => void;
  children: React.ReactNode;
}

const ButtonContainer = styled.button<ButtonProps>`
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: #fff;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 196px;
  height: 42px;
  font-size: 16px;
  font-family: "Flexo-Demi", sans-serif;
`;

const Button: React.FC<ButtonProps> = ({
  backgroundColor,
  onClick,
  children,
}) => {
  return (
    <ButtonContainer backgroundColor={backgroundColor} onClick={onClick}>
      {children}
    </ButtonContainer>
  );
};

export default Button;
