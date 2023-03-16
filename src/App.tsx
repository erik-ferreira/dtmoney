import { ThemeProvider } from "styled-components";

import { AppContext } from "./contexts";

import { Transactions } from "./pages/Transactions";

import { GlobalStyle } from "./styles/global";
import { darkTheme } from "./styles/themes/dark";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <AppContext>
        <Transactions />
      </AppContext>

      <GlobalStyle />
    </ThemeProvider>
  );
}

export { App };
