import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from "react";
import { api } from "../lib/axios";

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

const TransactionsContext = createContext({} as TransactionsContextType);

interface TransactionsProviderProps {
  children: ReactNode;
}

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  async function loadTransactions(query?: string) {
    const response = await api.get("/transactions", {
      params: { q: query, _sort: "createdAt", _order: "desc" },
    });

    setTransactions(response.data);
  }

  async function createTransaction(data: CreateTransactionInputs) {
    const { description, type, price, category } = data;

    const response = await api.post<Transaction>("/transactions", {
      description,
      type,
      price,
      category,
      createdAt: new Date(),
    });

    setTransactions((prevState) => [response.data, ...prevState]);
  }

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

export function useTransactions() {
  const context = useContext(TransactionsContext);

  return context;
}
