import { useContextSelector } from "use-context-selector";

import { TransactionsContext } from "../../contexts/TransactionsContext";

import { formatMoneyBRL, formatDateBRL } from "../../utils/format";

import {
  TransactionsTableContainer,
  TransactionsTableContent,
  PriceHighlight,
} from "./styles";

export function TransactionsTable() {
  const transactions = useContextSelector(
    TransactionsContext,
    (context) => context.transactions
  );

  return (
    <TransactionsTableContainer>
      <TransactionsTableContent>
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
      </TransactionsTableContent>
    </TransactionsTableContainer>
  );
}
