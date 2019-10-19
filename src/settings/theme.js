import {css} from 'styled-components';
// const css = require('../../node_modules/styled-components').css;

const theme = {};
const sizes = {
  lg: 1200,
  md: 992,
  xs: 767,
  xxs: 576
};

theme.media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label]}px) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});

theme.palette = {
  primary: '#FFB300',
  secondary: '#91C8DE',
};

theme.fonts = {
  primary: 'Montserrat, sans-serif',
  head: 'Montserrat, sans-serif'
};

export default theme;