import { useEffect, useState } from "react";

import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import {
  TransactionsTable,
  Transaction,
} from "../../components/TransactionsTable";

import { TransactionsContainer } from "./styles";

export function Transactions() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  async function loadTransactions() {
    const response = await fetch("http://localhost:3333/transactions");
    const data = await response.json();

    setTransactions(data);
  }

  useEffect(() => {
    loadTransactions();
  }, []);

  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />
        <TransactionsTable transactions={transactions} />
      </TransactionsContainer>
    </div>
  );
}
