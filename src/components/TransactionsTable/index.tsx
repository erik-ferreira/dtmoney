import { TransactionsTableContainer, PriceHighlight } from "./styles";

export function TransactionsTable() {
  return (
    <TransactionsTableContainer>
      <tbody>
        <tr>
          <td>Desenvolvimento de site</td>
          <td>
            <PriceHighlight variant="income">R$ 12.000,00</PriceHighlight>
          </td>
          <td>Venda</td>
          <td>14/03/2023</td>
        </tr>

        <tr>
          <td>Compras de supermercado</td>
          <td>
            <PriceHighlight variant="outcome">- R$ 6.000,00</PriceHighlight>
          </td>
          <td>Alimentação</td>
          <td>25/03/2023</td>
        </tr>
      </tbody>
    </TransactionsTableContainer>
  );
}
