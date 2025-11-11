import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    border: 0;
  }
  html, body {
    overflow-x: hidden;
    overscroll-behavior-y: contain;
    -webkit-overflow-scrolling: touch;
    height: 100%;
    min-height: 100vh;
    background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
    font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
    color: ${({ theme }) => theme.colors.text};
    padding-bottom: 50px;
  }
  body {
    line-height: 1.5;
    font-weight: 400;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  ul, ol {
    list-style: none;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  button {
    font-family: inherit;
    cursor: pointer;
  }
`;
