import { useContext } from "react";

import { TransactionsContext } from "../../TransactionsContext";

import { formatDateBRL, formatMoneyBRL } from "../../utils/format";

import { Container } from "./styles";

export function TransactionsTable() {
  const { transactions } = useContext(TransactionsContext);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td className={transaction.type}>
                {formatMoneyBRL(transaction.amount)}
              </td>
              <td>{transaction.category}</td>
              <td>{formatDateBRL(new Date(transaction.createdAt))}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}
