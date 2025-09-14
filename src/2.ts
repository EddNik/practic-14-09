interface CurrencyParams {
  amount: number;
  currency: Currency;
}

type Currency = "USD" | "EUR" | "UAH";

function convertCurrency({ amount, currency }: CurrencyParams): void {
  console.log(`Converting ${amount} to ${currency}`);
}

convertCurrency({ amount: 1, currency: "EUR" });
