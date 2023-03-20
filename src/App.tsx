import { AppContext } from "./contexts";

import { Routes } from "./Routes";

function App() {
  return (
    <AppContext>
      <Routes />
    </AppContext>
  );
}

export { App };
