import { type DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  colors: {
    primary: {
      main: "#a6cde4",
      dark: "#78bbe2ff",
      light: "#c7d9e3ff",
      contrastText: "#1d1f23",
    },
    secondary: {
      main: "#83eea8ff",
      dark: "#008080",
      light: "#baebcbff",
      contrastText: "#1d1f23",
    },
    background: "#090a0f",
    text: "#f1f1f1",
    paper: "#1d1f23",
  },
  breakpoints: {
    sm: "480px",
    md: "768px",
    lg: "1024px",
  },
  spacing: (factor) => `${0.5 * factor}rem`,
};
