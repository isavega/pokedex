import styled from "styled-components";

type ImageProps = {
  src: string;
  width?: string;
  height?: string;
};

const ImageElement = styled.img<ImageProps>`
  width: ${({ width }) => width || "auto"};
  height: ${({ height }) => height || "auto"};
`;

const Image: React.FC<ImageProps> = ({ src, width, height, ...rest }) => {
  return <ImageElement src={src} width={width} height={height} {...rest} />;
};

export default Image;
