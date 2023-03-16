import { api } from "../lib/axios";
import { useContext, ReactNode, useState, useEffect, useCallback } from "react";
import { createContext, useContextSelector } from "use-context-selector";

interface Transaction {
  id: number;
  description: string;
  type: "income" | "outcome";
  price: number;
  category: string;
  createdAt: string;
}

interface CreateTransactionInputs {
  description: string;
  type: "income" | "outcome";
  price: number;
  category: string;
}

interface TransactionsContextType {
  transactions: Transaction[];

  loadTransactions: (query?: string) => Promise<void>;
  createTransaction: (data: CreateTransactionInputs) => Promise<void>;
}

export const TransactionsContext = createContext({} as TransactionsContextType);

interface TransactionsProviderProps {
  children: ReactNode;
}

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const loadTransactions = useCallback(async (query?: string) => {
    const response = await api.get("/transactions", {
      params: { q: query, _sort: "createdAt", _order: "desc" },
    });

    setTransactions(response.data);
  }, []);

  const createTransaction = useCallback(
    async (data: CreateTransactionInputs) => {
      const { description, type, price, category } = data;

      const response = await api.post<Transaction>("/transactions", {
        description,
        type,
        price,
        category,
        createdAt: new Date(),
      });

      setTransactions((prevState) => [response.data, ...prevState]);
    },
    []
  );

  useEffect(() => {
    loadTransactions();
  }, []);

  return (
    <TransactionsContext.Provider
      value={{ transactions, loadTransactions, createTransaction }}
    >
      {children}
    </TransactionsContext.Provider>
  );
}
