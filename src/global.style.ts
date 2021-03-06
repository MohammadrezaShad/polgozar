import { createGlobalStyle } from 'styled-components';
import { fonts, colors, spacer, fontSize, rgba } from 'settings/style';

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    scroll-behavior:smooth;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  /****************************
   Generic Margins and Paddings
   ****************************/
  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  ul,
  ol,
  li,
  p,
  pre,
  blockquote,
  figure,
  hr,
  a, 
  input, 
  button {
    margin: 0;
    padding: 0;
    font-family: ${fonts.primary};
    font-size: inherit;
    margin: 0;
  }

  /*******************
   Lists
   *******************/
  ul {
    list-style: none;
  }

  /*******************
   Forms and buttons
   *******************/
  input,
  textarea,
  select,
  button {
    color: ${colors.font};
    font: inherit;
    letter-spacing: inherit;
  }

  /* I usually expand input and textarea to full-width */
  input[type="text"],
  textarea {
    width: 100%;
  }

  /* More friendly border */
  input,
  textarea,
  button {
    border: none;
  }

  /* Some defaults for one-liner buttons */
  button {
    padding:0 ;
    border-radius: 0;
    line-height: 1;
    background-color: transparent;
  }

  button * {
    pointer-events: none;
  }

  /***********************************
   Easy responsive for media elements
   ***********************************/
  img,
  svg,
  iframe,
  video,
  object,
  embed {
    display: block;
    max-width: 100%;
  }

  /*******************
   Useful table styles
   *******************/
  table {
    table-layout: fixed;
    width: 100%;
  }

  /*******************
   The hidden attribute
   *******************/
  [hidden] {
    display: none !important;
  }

  /*******************
   Noscript
   *******************/
  noscript {
    display: block;
    margin-bottom: 1rem;
    margin-top: 1rem;
  }

  /*******************
   Tabindex
   *******************/
  [tabindex="-1"] {
    outline: none !important;
  }

  font-family: ${fonts.primary};
  font-variant-numeric: initial;
  font-weight: 300;
  color: ${colors.font};

  a{
    text-decoration: none;
    display: inline-block;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover,
  textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
    transition: background-color 5000s;
    -webkit-text-fill-color: #fff !important;
  }

  /* ant design overwrite styles */
  /* MODAL */
  .ant-modal-mask, .ant-drawer-mask{
    backdrop-filter: blur(15px);
    background-color: rgba(255, 255, 255, 0.15) !important;
  }
  .ant-modal-content, .ant-modal-header, .ant-drawer-wrapper-body {
    transition: all 0.2s;
    background-color: ${rgba(colors.gray600, 0.9)} !important;
    p,h1,h2,span{
      color: white;
    }
    .ant-modal-header, .ant-drawer-header{
      background-color: ${rgba(colors.gray600, 0.9)} !important;
      border-bottom: 1px solid ${rgba(colors.gray500, 0.5)};
      padding: ${spacer.lg} ${spacer.xl};
      .ant-modal-title{
        font-size: ${fontSize.md}
      }
    }
    
    .ant-modal-title, .ant-drawer-title{
      color: ${colors.accent}
    }
    .ant-modal-body{
      padding: ${spacer.xl}
    }
    .ant-modal-close {
      color: ${colors.gray700};
      &:hover{
        color: ${colors.gray700};
        opacity: 0.7;
      }
    }
  }
  .ant-message-error .anticon{
    color: ${colors.danger}
  }
`;

export default GlobalStyle;
