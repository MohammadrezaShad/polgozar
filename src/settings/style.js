import { css } from 'styled-components';
import { sizes, colors, spacer } from './styleConfig';

export {
  sizes,
  colors,
  radius,
  shadow,
  rgba,
  spacer,
  fontSize,
  fontWeight,
  fonts,
  heights,
  fontType,
} from './styleConfig';

export const maxWinSize = (size) => {
  const windowSize = window.innerWidth;
  return windowSize <= parseInt(sizes[size].replace('px', ''), 10);
};

export const media = Object.keys(sizes).reduce(
  (acc, size) => {
    acc[size] = (...args) => css`
      @media only screen and (max-width: ${sizes[size]}) {
        ${css(...args)}
      }
    `;
    return acc;
  },
  { ...sizes },
);

export const rem = (pixels) => {
  return `${pixels / 16}rem;`;
};

export const snippet = {
  underline: (color = colors.font) => css`
    text-decoration: none;
    display: inline-block;
    position: relative;
    margin-bottom: ${spacer.xl};
    &:before {
      content: '';
      position: absolute;
      width: 90%;
      height: 2px;
      background-color: ${color};
      bottom: -0.15rem;
    }
  `,
};
