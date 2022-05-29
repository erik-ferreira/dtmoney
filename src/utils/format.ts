export function formatMoneyBRL(value: number) {
  const valueFormatted = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);

  return valueFormatted;
}

export function formatDateBRL(date: Date) {
  const dateFormatted = new Intl.DateTimeFormat("pt-BR").format(date);

  return dateFormatted;
}
