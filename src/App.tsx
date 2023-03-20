import { useState } from "react";
import { ThemeProvider } from "styled-components";

import { AppContext } from "./contexts";

import { Transactions } from "./pages/Transactions";

import { GlobalStyle } from "./styles/global";
import { darkTheme } from "./styles/themes/dark";
import { lightTheme } from "./styles/themes/light";

function App() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  function handleToggleTheme() {
    setTheme((prevState) => {
      if (prevState === "light") {
        return "dark";
      }

      return "light";
    });
  }

  return (
    <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
      <AppContext>
        <Transactions />
        <button type="button" onClick={handleToggleTheme}>
          Change Theme = {theme}
        </button>
      </AppContext>

      <GlobalStyle />
    </ThemeProvider>
  );
}

export { App };
