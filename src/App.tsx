import { useState } from "react";
import { ThemeProvider } from "styled-components";

import { AppContext } from "./contexts";

import { Transactions } from "./pages/Transactions";

import { GlobalStyle } from "./styles/global";
import { darkTheme } from "./styles/themes/dark";

function App() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

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
