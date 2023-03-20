import {
  ReactNode,
  useState,
  useEffect,
  useCallback,
  createContext,
} from "react";

type ThemeType = "dark" | "light";

interface ThemeContextType {
  theme: ThemeType;
  toggleTheme: () => void;
}

export const ThemeContext = createContext({} as ThemeContextType);

interface ThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<ThemeType>("dark");

  function toggleTheme() {
    setTheme((prevState) => {
      if (prevState === "light") {
        return "dark";
      }

      return "light";
    });
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
