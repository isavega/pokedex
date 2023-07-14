import styled from "styled-components";

const fontSizeMap = {
  h1: "2rem",
  h2: "1.5rem",
  h3: "1.25rem",
  h4: "1.1rem",
  h5: "1rem",
  h6: "0.9rem",
};

type TextStyleProps = {
  fontSize: string;
  fontWeight: number;
};

const TextStyle = styled.span<TextStyleProps>`
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ fontWeight }) => fontWeight};
  font-family: "Roboto", sans-serif;
`;

type TextProps = {
  size: keyof typeof fontSizeMap;
  type?: "regular" | "bold";
  children: React.ReactNode;
};

const Text: React.FC<TextProps> = ({ size, type = "regular", children }) => {
  const fontSize = fontSizeMap[size];
  const fontWeight = type === "bold" ? 700 : 400;

  return (
    <TextStyle fontSize={fontSize} fontWeight={fontWeight}>
      {children}
    </TextStyle>
  );
};

export default Text;
