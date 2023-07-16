import React from "react";
import styled from "styled-components";
import Image from "./Image";
import { useRouter } from "next/router";

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
  margin-bottom: 80px;
  padding: 20px;
`;
const ImageWrapper = styled.div`
  position: fixed;
  top: 185px;
  left: 172px;
`;

const LayoutWrapper = styled.div`
  min-height: 100vh;
`;

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const router = useRouter();

  const onClickHandler = () => {
    router.push("/");
  };

  return (
    <LayoutWrapper onClick={onClickHandler}>
      <Header>
        <Image src="pokedex/header.png" alt="header" width="100%" />
      </Header>
      <ImageWrapper>
        <Image src="pokedex/avatarIcon.png" alt="header" width="59px" />
      </ImageWrapper>
      <Content>{children}</Content>
    </LayoutWrapper>
  );
};

export default Layout;
