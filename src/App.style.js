import styled, { css } from 'styled-components';

const GlobalStyle = styled.div`
  ${({ theme }) => css`
    font-family: ${theme.fonts.primary};
    font-variant-numeric: initial;
    font-weight: 300;
    body,
    a,
    button,
    input,
    p,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-family: ${theme.fonts.primary};
      font-size: inherit;
      margin: 0;
    }
  `}
`;

export default GlobalStyle;
