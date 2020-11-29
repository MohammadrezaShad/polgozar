import { css, ThemedCssFunction, DefaultTheme } from 'styled-components';
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

export type SizeType = keyof typeof sizes;
export type ColorTypes = keyof typeof colors;

export const maxWinSize = (size: SizeType) => {
  const windowSize = window.innerWidth;
  return windowSize <= parseInt(sizes[size].replace('px', ''), 10);
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
