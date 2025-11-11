import "styled-components";

interface Colors {
  main: string;
  light: string;
  dark: string;
  contrastText: string;
}

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: Colors;
      secondary: Colors;
      background: string;
      paper: string;
      text: string;
    };
    breakpoints: {
      sm: string;
      md: string;
      lg: string;
    };
    spacing: (number) => string;
  }
}
