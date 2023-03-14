import { ArrowCircleUp, ArrowCircleDown, CurrencyDollar } from "phosphor-react";

import { useTransactions } from "../../hooks/useTransactions";

import TotalImg from "../../assets/total.svg";
import IncomeImg from "../../assets/income.svg";
import OutcomeImg from "../../assets/outcome.svg";

import { formatMoneyBRL } from "../../utils/format";

import { SummaryContainer, SummaryCard } from "./styles";

export function Summary() {
  // const { transactions } = useTransactions();

  // const summary = transactions.reduce(
  //   (acc, transaction) => {
  //     if (transaction.type === "deposit") {
  //       acc.deposits += transaction.amount;
  //       acc.total += transaction.amount;
  //     } else {
  //       acc.withdrawals += transaction.amount;
  //       acc.total -= transaction.amount;
  //     }

  //     return acc;
  //   },
  //   {
  //     deposits: 0,
  //     withdrawals: 0,
  //     total: 0,
  //   }
  // );

  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Entradas</span>

          <ArrowCircleUp size={32} color="#00B37E" />
        </header>

        <strong>R$ 17.400,00</strong>
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>Saídas</span>

          <ArrowCircleDown size={32} color="#f75a68" />
        </header>

        <strong>R$ 17.400,00</strong>
      </SummaryCard>

      <SummaryCard variant="green">
        <header>
          <span>Total</span>

          <CurrencyDollar size={32} color="#fff" />
        </header>

        <strong>R$ 17.400,00</strong>
      </SummaryCard>
    </SummaryContainer>
  );
}
