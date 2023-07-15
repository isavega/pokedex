import React from "react";
import styled from "styled-components";

const SearchBarContainer = styled.div`
  background-color: #313131;
  display: flex;
  flex-direction: column;
  align-items: left;
  padding-top: 90px;
  padding-bottom: 90px;
  padding-left: 300px;
`;

const Title = styled.p`
  font-size: 26.8px;
  font-weight: Extra Light;
  margin-bottom: 8px;
  color: #fff;
  font-family: "Flexo-Regular", arial, sans-serif;
`;

const SearchBarWrapper = styled.div`
  display: flex;
  align-items: left;
  width: 999px;
`;

const InputWrapper = styled.div`
  margin-top: 6px;
  display: flex;
  align-items: center;
  border: 3px solid #616161;
  border-radius: 4px;
  width: 30%;
  height: 44px;
  background-color: #fff;
`;

const Input = styled.input`
  flex: 1;
  border: none;
  outline: none;
  padding: 4px;
  color: #000;
`;

const IconWrapper = styled.div`
  margin-left: 15px;
`;

const Icon = styled.img`
  margin-top: 1px;
  width: 74px;
  height: 62px;
`;

const Message = styled.p`
  margin-top: -40px;
  margin-left: 60px;
  font-size: 20px;
  width: 40%;
  height: 60px;
  color: #fff;
  font-family: "Flexo-Medium", arial, sans-serif;
  background-color: #4dad5b;
  border-radius: 5px;
  padding: 12px;
`;

const Description = styled.p`
  width: 38%;
  margin: 8px 0 0;
  color: #fff;
  font-family: "Roboto", arial, sans-serif;
`;

type SearchBarProps = {
  title: string;
  description: string;
  message?: string;
  icon: string;
};

const SearchBar: React.FC<SearchBarProps> = ({
  title,
  description,
  message,
  icon,
}) => {
  return (
    <SearchBarContainer>
      <Title>{title}</Title>
      <SearchBarWrapper>
        <InputWrapper>
          <Input type="text" placeholder="Buscar..." />
        </InputWrapper>
        <IconWrapper>
          <Icon src={icon} alt="Icono de búsqueda" />
        </IconWrapper>
        <Message>{message}</Message>
      </SearchBarWrapper>
      <Description>{description}</Description>
    </SearchBarContainer>
  );
};

export default SearchBar;
