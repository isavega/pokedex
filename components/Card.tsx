import React from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
  border-radius: 4px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: #fff;
`;

const Image = styled.img`
  width: 205px;
  height: 205px;
  margin-bottom: 8px;
`;

const ImageCaption = styled.p`
  color: gray;
  font-size: 14px;
  margin-bottom: 8px;
  font-family: "Roboto", arial, sans-serif;
`;

const Title = styled.h2`
  margin-bottom: 8px;
  font-family: "Flexo-Demi", arial, sans-serif;
`;

const SubtitlesWrapper = styled.div`
  display: flex;
`;

const Subtitle = styled.p`
  font-size: 11px;
  padding: 4px 8px;
  margin-right: 8px;
  color: #fff;
  font-family: "Flexo-Medium", arial, sans-serif;
`;

const LeftSubtitle = styled(Subtitle)`
  background-color: #9bcc50;
  border-radius: 3px;
`;

const RightSubtitle = styled(Subtitle)`
  background-color: #b97fc9;
  border-radius: 3px;
`;

type CardProps = {
  imageUrl: string;
  imageCaption: string;
  title: string;
  leftSubtitle: string;
  rightSubtitle: string;
  onClick?: () => void;
};

const Card: React.FC<CardProps> = ({
  imageUrl,
  imageCaption,
  title,
  leftSubtitle,
  rightSubtitle,
  onClick,
}) => {
  return (
    <CardWrapper onClick={onClick}>
      <Image src={imageUrl} alt={imageCaption} />
      <ImageCaption>{imageCaption}</ImageCaption>
      <Title>{title}</Title>
      <SubtitlesWrapper>
        <LeftSubtitle>{leftSubtitle}</LeftSubtitle>
        <RightSubtitle>{rightSubtitle}</RightSubtitle>
      </SubtitlesWrapper>
    </CardWrapper>
  );
};

export default Card;
