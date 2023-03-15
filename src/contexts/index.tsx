import { ReactNode } from "react";

import { TransactionsProvider } from "./TransactionsContext";

interface AppContextProps {
  children: ReactNode;
}

export function AppContext({ children }: AppContextProps) {
  return <TransactionsProvider>{children}</TransactionsProvider>;
}
