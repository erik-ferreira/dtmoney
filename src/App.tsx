import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";

import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <div>
      <Header />
      <Dashboard />
      <GlobalStyle />
    </div>
  );
}

export { App };
