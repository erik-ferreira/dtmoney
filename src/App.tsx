import { useState } from "react";
import Modal from "react-modal";
import { ThemeProvider } from "styled-components";

import { TransactionsProvider } from "./hooks/useTransactions";

import { Transactions } from "./pages/Transactions";

import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";
import { NewTransactionModal } from "./components/NewTransactionModal";

import { GlobalStyle } from "./styles/global";
import { darkTheme } from "./styles/themes/dark";

Modal.setAppElement("#root");

function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <ThemeProvider theme={darkTheme}>
      {/* <TransactionsProvider>
        <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
        <Dashboard />
        <NewTransactionModal
          isOpen={isNewTransactionModalOpen}
          onRequestClose={handleCloseNewTransactionModal}
        />

      </TransactionsProvider> */}

      <Transactions />

      <GlobalStyle />
    </ThemeProvider>
  );
}

export { App };
