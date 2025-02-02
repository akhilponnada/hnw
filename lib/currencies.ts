export type Currency = {
  code: string
  symbol: string
  rate: number // Exchange rate from INR
  flag: string
  name: string
}

export const currencies: { [key: string]: Currency } = {
  IN: {
    code: "INR",
    symbol: "₹",
    rate: 1,
    flag: "🇮🇳",
    name: "India",
  },
  US: {
    code: "USD",
    symbol: "$",
    rate: 0.012,
    flag: "🇺🇸",
    name: "United States",
  },
  GB: {
    code: "GBP",
    symbol: "£",
    rate: 0.0095,
    flag: "🇬🇧",
    name: "United Kingdom",
  },
  EU: {
    code: "EUR",
    symbol: "€",
    rate: 0.011,
    flag: "🇪🇺",
    name: "European Union",
  },
  AE: {
    code: "AED",
    symbol: "د.إ",
    rate: 0.044,
    flag: "🇦🇪",
    name: "UAE",
  },
  SG: {
    code: "SGD",
    symbol: "S$",
    rate: 0.016,
    flag: "🇸🇬",
    name: "Singapore",
  },
}

export function formatPrice(amount: number, currency: Currency): string {
  const convertedAmount = amount * currency.rate
  return `${currency.symbol}${convertedAmount.toFixed(2)}`
}

