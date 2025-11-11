import { ThemeProvider } from "styled-components";
import Routes from "./routes";
import { theme } from "@/styles/theme";
import { GlobalStyle } from "@/styles/GlobalStyle";
import { SWRConfig } from "swr";
import { localStorageProvider } from "./swrLocalStorageProvider";

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <SWRConfig
      value={{
        provider: () => localStorageProvider({
          allowedPrefixes: ["viewed_characters"],
        })
      }}
    >
      <Routes />
    </SWRConfig>
  </ThemeProvider>
);

export default App;
