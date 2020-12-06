import { css, ThemedCssFunction, DefaultTheme } from 'styled-components';
import { breakpoints, colors, spacer } from './styleConfig';

export {
  breakpoints,
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

export type SizeType = keyof typeof breakpoints;
export type ColorTypes = keyof typeof colors;

export const sizes = Object.keys(breakpoints).reduce(
  (acc, key) => ({ ...acc, [key]: `${breakpoints[key as SizeType]}px` }),
  {},
) as { [size in SizeType]: string };

export const maxWinSize = (size: SizeType) => {
  const windowSize = window.innerWidth;
  return windowSize <= breakpoints[size];
};

export const media = Object.keys(sizes).reduce(
  (acc, size) => ({
    ...acc,
    [size]: (prop: any) => css`
      @media only screen and (max-width: ${sizes[size as SizeType]}) {
        ${css(prop)}
      }
    `,
  }),
  {},
) as { [size in SizeType]: ThemedCssFunction<DefaultTheme> };

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
