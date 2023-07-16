import React from "react";
import styled from "styled-components";
import Image from "./Image";

const HeaderStyle = styled.header`
  background-color: #f2f2f2;
  position: sticky;
  top: 0;
  z-index: 1;
`;

const Header: React.FC = () => {
  return (
    <HeaderStyle>
      <Image src="pokedex/header.png" alt="header" width="100%" />
    </HeaderStyle>
  );
};

export default Header;
