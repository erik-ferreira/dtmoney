import { useContext } from "react";
import { ThemeProvider } from "styled-components";

import { Transactions } from "./pages/Transactions";
import { ThemeContext } from "./contexts/ThemeContext";

import { darkTheme } from "./styles/themes/dark";
import { lightTheme } from "./styles/themes/light";

import { GlobalStyle } from "./styles/global";

export function Routes() {
  const { theme } = useContext(ThemeContext);

  return (
    <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
      <Transactions />
      <GlobalStyle />
    </ThemeProvider>
  );
}
