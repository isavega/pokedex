import React from "react";
import styled from "styled-components";
import Image from "./Image";

const Header = styled.header`
  height: 60px;
  background-color: #f2f2f2;
  padding: 10px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`;

const Footer = styled.footer`
  height: 234px;
  background-color: #f2f2f2;
  padding: 10px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
`;

const Content = styled.main`
  margin-top: 80px;
  margin-bottom: 80px;
  padding: 20px;
`;

const LayoutWrapper = styled.div`
  min-height: 100vh;
`;

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <LayoutWrapper>
      <Header>
        <Image src="pokedex/header.png" alt="header" width="100%" />
      </Header>
      <Content>{children}</Content>
      <Footer>
        <Image src="pokedex/footer.png" alt="footer" width="100%" />
      </Footer>
    </LayoutWrapper>
  );
};

export default Layout;
