const { css } = require("styled-components");
const { rgba } = require("polished");

const sizes = {
  xs: "480px",
  sm: "576px",
  md: "768px",
  lg: "992px",
  xl: "1200px",
  xxl: "1500px",
};

const media = Object.keys(sizes).reduce(
  (acc, size) => {
    acc[size] = (...args) => css`
      @media only screen and (max-width: ${sizes[size]}) {
        ${css(...args)}
      }
    `;
    return acc;
  },
  { ...sizes }
);

const colors = {
  primary: "#91c8de",
  accent: "#FFB300",

  errorColor: "#FFB300",

  primary100: "#D9ECF4",
  primary200: "#CEE1E9",
  primary300: "#A2BFCC",
  primary400: "#6b8490",
  primary500: "#0B3B50",

  font: "#546E7A",

  white: "#fff",
  black: "#000",

  gray100: "#f7fafc",
  gray200: "#edf2f7",
  gray300: "#e2e8f0",
  gray400: "#cbd5e0",
  gray500: "#a0aec0",
  gray600: "#5B5B5F",
  gray700: "#4a5568",
  gray800: "#2d3748",
  gray900: "#212529",

  // '#5c5c5c'

  cream100: "#FFF2D4",

  red100: "#ffd6dd",
  danger: "#FA7575",
  red300: "#fc4a73",
  red400: "#ff0031",
  transparent: "transparent",
  // red: "#ff7b99",
};

const fonts = {
  primary: "Montserrat, sans-serif",
  secondary: "Montserrat, sans-serif",
};

const fontWeight = {
  light: "300",
  normal: "400",
  bold: "500",
  bolder: "800",
};

const fontSize = {
  xs: ".75rem", // 12px
  sm: ".875rem", // 14 px
  base: "1rem", // 16px
  md: "1.125", // 18px
  lg: "1.25rem", // 20 px
  xl: "1.5rem", // 24 px
  xxl: "1.75rem",
};

const baseSpace = 1;

const spacer = {
  none: `${0}rem`,
  xs: `${baseSpace / 4}rem`,
  sm: `${baseSpace / 2}rem`,
  md: `${baseSpace / 1.33}rem`,
  lg: `${baseSpace}rem`,
  xl: `${baseSpace * 1.5}rem`,
};

const shadow = {
  sm: `0 .5rem 1rem ${rgba(colors.black, 0.15)}`,
  md: `0 .125rem .25rem ${rgba(colors.black, 0.075)}`,
  lg: `0 1rem 3rem ${rgba(colors.black, 0.175)}`,
  insent: `inset 0 1px 2px ${rgba(colors.black, 0.075)}`,
};

const radius = {
  sm: ".2rem",
  md: ".25rem",
  lg: "1rem",
  xl: "2rem",
};

const heights = {
  sm: "1.5rem",
  md: "2rem",
  lg: "2.5rem",
};

const rem = (pixels) => {
  return `${pixels / 16}rem;`;
};

// { rgba } from "polished";
module.exports = {
  sizes,
  colors,
  radius,
  shadow,
  media,
  rgba,
  spacer,
  fontSize,
  fontWeight,
  fonts,
  rem,
  heights,
};
