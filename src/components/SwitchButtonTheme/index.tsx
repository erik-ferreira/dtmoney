import { Sun, Moon } from "phosphor-react";
import { useContext } from "react";

import { ThemeContext } from "../../contexts/ThemeContext";

import { SwitchButtonThemeContainer } from "./styles";

export function SwitchButtonTheme() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <SwitchButtonThemeContainer
      type="button"
      onClick={toggleTheme}
      isThemeLight={theme === "light"}
    >
      {theme === "dark" ? <Sun size={24} /> : <Moon size={24} />}
    </SwitchButtonThemeContainer>
  );
}
