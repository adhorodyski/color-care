export const formatCurrencyString = (currency: string, amount: number) =>
    new Intl.NumberFormat(["pl"], {
        currency,
        style: "currency",
        currencyDisplay: "symbol",
    }).format(amount / 100);
