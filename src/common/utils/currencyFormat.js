export const curencyFormat = (locale, value,currency) =>
  new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency
  }).format(value);