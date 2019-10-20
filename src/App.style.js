import styled, { css } from 'styled-components';

const AppStyle = styled.div`
  ${({ theme }) => css`
    font-family: ${theme.fonts.primary};
    font-variant-numeric: initial;
    font-weight: 300;
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
    .innercontentwidth: {
      margin: auto;
      max-width: 1300px;
    }
  `}
`;

export default AppStyle;
