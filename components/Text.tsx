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
  color?: string;
  fontFamily?: string;
  fontSize: string;
  fontWeight: number;
};

const TextStyle = styled.span<TextStyleProps>`
  color: ${({ color }) => color};
  font-family: ${({ fontFamily }) => fontFamily};
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ fontWeight }) => fontWeight};
`;

type TextProps = {
  color?: string;
  fontFamily?: string;
  size: keyof typeof fontSizeMap;
  type?: "regular" | "bold";
  children: React.ReactNode;
};

const Text: React.FC<TextProps> = ({
  color = "#000000",
  fontFamily = "Flexo-Regular, xsarial, sans-serif",
  size,
  type = "regular",
  children,
}) => {
  const fontSize = fontSizeMap[size];
  const fontWeight = type === "bold" ? 700 : 400;

  return (
    <TextStyle
      color={color}
      fontFamily={fontFamily}
      fontSize={fontSize}
      fontWeight={fontWeight}
    >
      {children}
    </TextStyle>
  );
};

export default Text;
