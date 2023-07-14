import React from "react";
import styled from "styled-components";

const Header = styled.header`
  height: 60px;
  background-color: #f2f2f2;
  padding: 10px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`;

const Content = styled.main`
  margin-top: 80px;
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
      <Header>{/* Contenido del encabezado */}</Header>
      <Content>{children}</Content>
    </LayoutWrapper>
  );
};

export default Layout;
