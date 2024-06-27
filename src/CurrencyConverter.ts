type Currency = 'USD' | 'EUR' | 'GBP' | 'JPY';

class CurrencyConverter {
  private exchangeRates: { [key in Currency]: { [key in Currency]: number } } = {
    USD: { USD: 1, EUR: 0.85, GBP: 0.75, JPY: 110 },
    EUR: { USD: 1.18, EUR: 1, GBP: 0.88, JPY: 130 },
    GBP: { USD: 1.33, EUR: 1.14, GBP: 1, JPY: 147 },
    JPY: { USD: 0.0091, EUR: 0.0077, GBP: 0.0068, JPY: 1 }
  };

  convert(amount: number, from: Currency, to: Currency): number {
    const rate = this.exchangeRates[from][to];
    return amount * rate;
  }
}

export default CurrencyConverter;
