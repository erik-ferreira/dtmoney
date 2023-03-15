import { TransactionsTableContainer, PriceHighlight } from "./styles";

export interface Transaction {
  id: number;
  description: string;
  type: "income" | "outcome";
  price: number;
  category: string;
  createdAt: string;
}

interface TransactionsTableProps {
  transactions: Transaction[];
}

export function TransactionsTable({ transactions }: TransactionsTableProps) {
  return (
    <TransactionsTableContainer>
      <tbody>
        {transactions.map((transaction) => (
          <tr key={transaction.id}>
            <td>{transaction.description}</td>
            <td>
              <PriceHighlight variant={transaction.type}>
                {transaction.price}
              </PriceHighlight>
            </td>
            <td>{transaction.category}</td>
            <td>{transaction.createdAt}</td>
          </tr>
        ))}
      </tbody>
    </TransactionsTableContainer>
  );
}
