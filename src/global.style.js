import { createGlobalStyle } from "styled-components";
import { fonts, colors, spacer, fontSize, rgba, radius } from "settings/style";

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
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
    color: ${colors.font};
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
    border: 1px solid gray;
  }

  /* Some defaults for one-liner buttons */
  button {
    padding: 0.75em 1em;
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
    margin-bottom: 1em;
    margin-top: 1em;
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

  /* ant design overwrite styles */
  /* MODAL */
  .ant-modal-mask{
    backdrop-filter: blur(15px);
    background-color: rgba(255, 255, 255, 0.15) !important;
  }
  .ant-modal-content, .ant-modal-header {
    transition: all 0.2s;
    background-color: ${rgba(colors.gray600, 0.9)} !important;
    p,h1,h2,span{
      color: white;
    }
    .ant-modal-header{
      background-color: ${rgba(colors.gray600, 0.9)} !important;
      border-bottom: 1px solid ${rgba(colors.gray500, 0.5)};
      padding: ${spacer.lg} ${spacer.xl};
      .ant-modal-title{
        font-size: ${fontSize.md}
      }
    }
    
    .ant-modal-title{
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
`;

export default GlobalStyle;
