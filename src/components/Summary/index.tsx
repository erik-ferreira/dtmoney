import { useTransactions } from "../../hooks/useTransactions";

import TotalImg from "../../assets/total.svg";
import IncomeImg from "../../assets/income.svg";
import OutcomeImg from "../../assets/outcome.svg";

import { formatMoneyBRL } from "../../utils/format";

import { Container } from "./styles";

export function Summary() {
  const { transactions } = useTransactions();

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === "deposit") {
        acc.deposits += transaction.amount;
        acc.total += transaction.amount;
      } else {
        acc.withdrawals += transaction.amount;
        acc.total -= transaction.amount;
      }

      return acc;
    },
    {
      deposits: 0,
      withdrawals: 0,
      total: 0,
    }
  );

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>

          <img src={IncomeImg} alt="Entradas" />
        </header>

        <strong>{formatMoneyBRL(summary.deposits)}</strong>
      </div>

      <div>
        <header>
          <p>Saídas</p>

          <img src={OutcomeImg} alt="Saídas" />
        </header>

        <strong> - {formatMoneyBRL(summary.withdrawals)} </strong>
      </div>

      <div className="highlight-background">
        <header>
          <p>Total</p>

          <img src={TotalImg} alt="Total" />
        </header>

        <strong>{formatMoneyBRL(summary.total)}</strong>
      </div>
    </Container>
  );
}
