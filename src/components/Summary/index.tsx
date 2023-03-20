import { ArrowCircleUp, ArrowCircleDown, CurrencyDollar } from "phosphor-react";

import { useSummary } from "../../hooks/useSummary";

import { formatMoneyBRL } from "../../utils/format";

import { SummaryContainer, SummaryCard } from "./styles";

export function Summary() {
  const summary = useSummary();

  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Entradas</span>

          <ArrowCircleUp size={32} color="#00B37E" />
        </header>

        <strong>{formatMoneyBRL(summary.income)}</strong>
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>Saídas</span>

          <ArrowCircleDown size={32} color="#f75a68" />
        </header>

        <strong>{formatMoneyBRL(summary.outcome)}</strong>
      </SummaryCard>

      <SummaryCard variant="secondary">
        <header>
          <span>Total</span>

          <CurrencyDollar size={32} color="#fff" />
        </header>

        <strong>{formatMoneyBRL(summary.total)}</strong>
      </SummaryCard>
    </SummaryContainer>
  );
}
