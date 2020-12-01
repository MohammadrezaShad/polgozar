import styled, { css } from 'styled-components';
import { media } from 'settings/style';

interface HeroImgProps {
  overlay?: boolean;
  filter?: string;
  img: string;
  parallex?: boolean;
  height?: string;
}

// prettier-ignore
const HeroImg = styled.div<HeroImgProps>`
  ${({ overlay, filter, img, parallex, height = "100vh" }) => css`
    background-image: ${overlay
        ? `linear-gradient( ${
            filter || "rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)"
          } ), `
        : ""}url(${img});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    width: 100%;
    height: ${height};
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    
    ${parallex &&
    css`
      background-attachment: fixed;
    `}

    ${media.md`
     background-attachment: scroll;
  `}

  `}
`;

export default HeroImg;
