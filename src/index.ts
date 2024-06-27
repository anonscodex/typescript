import CurrencyConverter from './CurrencyConverter';

const converter = new CurrencyConverter();

const amount = 100;
const fromCurrency: 'USD' = 'USD';
const toCurrency: 'EUR' = 'EUR';

const convertedAmount = converter.convert(amount, fromCurrency, toCurrency);

console.log(`${amount} ${fromCurrency} is equal to ${convertedAmount.toFixed(2)} ${toCurrency}`);
