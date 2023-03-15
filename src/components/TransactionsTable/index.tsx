import { useTransactions } from "../../contexts/TransactionsContext";

import { TransactionsTableContainer, PriceHighlight } from "./styles";

export function TransactionsTable() {
  const { transactions } = useTransactions();

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
