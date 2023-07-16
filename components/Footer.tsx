import React from "react";
import styled from "styled-components";
import Image from "./Image";

const FooterStyle = styled.footer`
  background-color: #f2f2f2;
  position: sticky;
  bottom: 0;
  z-index: 1;
`;

const Footer: React.FC = () => {
  return (
    <FooterStyle>
      <Image src="pokedex/footer.png" alt="footer" width="100%" />
    </FooterStyle>
  );
};

export default Footer;
