const CURRENCY_FORMATTER = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "EUR",
});

const currencyFormat = (number: number) => {
  return CURRENCY_FORMATTER.format(number);
};

export default currencyFormat;
