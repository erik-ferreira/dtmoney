import { ReactNode } from "react";

import { ThemeProvider } from "./ThemeContext";
import { TransactionsProvider } from "./TransactionsContext";

interface AppContextProps {
  children: ReactNode;
}

export function AppContext({ children }: AppContextProps) {
  return (
    <ThemeProvider>
      <TransactionsProvider>{children}</TransactionsProvider>
    </ThemeProvider>
  );
}
