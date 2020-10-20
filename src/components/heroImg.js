import styled, { css } from "styled-components";
import {
  colors,
  fontWeight,
  spacer,
  radius,
  rgba,
  media,
} from "settings/style";

// prettier-ignore
const HeroImg = styled.div`
  ${({ overlay, filter, img, parallex, height = "100vh" }) => css`
    background-image: ${overlay
        ? `linear-gradient( ${
            filter ? filter : "rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)"
          } ), `
        : ""}url(${img});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    width: 100%;
    height: ${height};
    position: relative;

    ${parallex &&
    css`
      background-attachment: fixed;
    `}

    .heroTxt {
      position: absolute;
      top: 35%;
      left: 12%;
      text-align: left;
      width: 470px;
      h1,
      h2,
      h3 {
        color: #fff;
      }
      h2 {
        font-weight: 500;
      }
    }

    ${media.md`
     background-attachment: scroll;
  `}

    ${media.xs`
    .heroTxt {
      width: auto !important;
        left: 0;
        padding: 0 2em;
    }
  `}
  `}
`;

export default HeroImg;
