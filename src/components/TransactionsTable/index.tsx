import { useTransactions } from "../../contexts/TransactionsContext";

import { formatMoneyBRL, formatDateBRL } from "../../utils/format";

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
                {transaction.type === "outcome" && "- "}
                {formatMoneyBRL(transaction.price)}
              </PriceHighlight>
            </td>
            <td>{transaction.category}</td>
            <td>{formatDateBRL(new Date(transaction.createdAt))}</td>
          </tr>
        ))}
      </tbody>
    </TransactionsTableContainer>
  );
}
