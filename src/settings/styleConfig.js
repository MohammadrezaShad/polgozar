/* eslint-disable @typescript-eslint/no-var-requires */
const { rgba } = require('polished');

const breakpoints = {
  xs: 480,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1500,
};

const colors = {
  primary: '#91c8de',
  accent: '#FFB300',
  accent100: rgba(248, 200, 88, 0.65),
  errorColor: '#FFB300',

  primary100: '#D9ECF4',
  primary200: '#CEE1E9',
  primary300: '#A2BFCC',
  primary400: '#6b8490',
  primary500: '#0B3B50',
  primary700: '#d5e4ea',
  font: '#546E7A',

  white: '#fff',
  white100: '#f5f5f5',
  white200: '#daeef5',
  white300: '#ecf4f7',
  white400: '#e1edf2',
  white500: '#d3d3d3',
  black: '#000',

  gray100: '#f7fafc',
  gray200: '#edf2f7',
  gray300: '#e2e8f0',
  gray400: '#cbd5e0',
  gray500: '#a0aec0',
  gray600: '#5B5B5F',
  gray700: '#4a5568',
  gray800: '#2d3748',
  gray900: '#212529',
  gray1000: ' #435760',
  gray1100: '#e6e6e6',
  gray1200: '#dddddd',
  gray1300: '#989898',
  gray1400: '#7c7c7c',
  gray1500: '#b7b7b7',
  gray1600: '#bfbfbf',
  gray1700: '#EEEEEE',
  // '#5c5c5c'
  // '#02192b'
  cream100: '#FFF2D4',

  red100: '#ffd6dd',
  danger: '#FA7575',
  red300: '#fc4a73',
  red400: '#ff0031',
  transparent: 'transparent',

  success: '#06C049',
};

const fonts = {
  primary: 'Montserrat, sans-serif',
  secondary: 'Montserrat, sans-serif',
};

const fontWeight = {
  light: '300',
  normal: '400',
  bold: '600',
  bolder: '700',
  heavy: '800',
};

const fontSize = {
  xs: '.75rem', // 12px
  sm: '.875rem', // 14 px
  base: '1rem', // 16px
  md: '1.125rem', // 18px
  lg: '1.25rem', // 20 px
  xl: '1.5rem', // 24 px
  xxl: '1.75rem',
};

const fontType = {
  sm: { 'font-size': fontSize.sm, 'font-weight': fontWeight.light },
  md: { 'font-size': fontSize.md, 'font-weight': fontWeight.bold },
  lg: { 'font-size': fontSize.lg, 'font-weight': fontWeight.bolder },
  xl: { 'font-size': fontSize.xl, 'font-weight': fontWeight.heavy },
  boldTitle: { 'font-size': fontSize.xl, 'font-weight': fontWeight.normal },
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
  sm: `0 .125rem .25rem ${rgba(colors.black, 0.075)}`,
  md: `0 .5rem 1rem ${rgba(colors.black, 0.15)}`,
  lg: `0 1rem 3rem ${rgba(colors.black, 0.3)}`,
  insent: `inset 0 1px 2px ${rgba(colors.black, 0.075)}`,
};

const radius = {
  sm: '.2rem',
  md: '.25rem',
  mlg: '0.625rem',
  lg: '1rem',
  xl: '2rem',
  alt: '1.1875rem',
  alt2: '1.5rem',
};

const heights = {
  sm: '1.5rem',
  md: '2rem',
  lg: '2.5rem',
};

module.exports = {
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
};
