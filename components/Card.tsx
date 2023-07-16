import React from "react";
import styled from "styled-components";
import PokemonTypeColor from "@/utils/colors";

interface SubtitleStyleProps {
  color?: string;
}

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
  background-color: #f7f7f7;
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

const Subtitle = styled.p<SubtitleStyleProps>`
  font-size: 11px;
  padding: 4px 8px;
  margin-right: 8px;
  color: #fff;
  font-family: "Flexo-Medium", arial, sans-serif;
  border-radius: 3px;
  background-color: ${({ color }) => color};
`;

interface ObjetTypes {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

interface CardProps {
  imageUrl: string;
  imageCaption: string;
  title: string;
  pokemonTypes: Array<ObjetTypes>;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({
  imageUrl,
  imageCaption,
  title,
  pokemonTypes,
  onClick,
}) => {
  type PokemonType = keyof typeof PokemonTypeColor;

  const getTypeColor = (nameType: string) => {
    const color = PokemonTypeColor[nameType as PokemonType].medium;
    return color;
  };

  return (
    <CardWrapper onClick={onClick}>
      <Image src={imageUrl} alt={imageCaption} />
      <ImageCaption>{imageCaption}</ImageCaption>
      <Title>{title}</Title>
      <SubtitlesWrapper>
        {pokemonTypes.map((pokemonType, index) => (
          <Subtitle key={index} color={getTypeColor(pokemonType.type.name)}>
            {pokemonType.type.name}
          </Subtitle>
        ))}
      </SubtitlesWrapper>
    </CardWrapper>
  );
};

export default Card;
