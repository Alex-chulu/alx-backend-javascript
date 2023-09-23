// 4-pricing.js

import Currency from './3-currency';
// Import the Currency class from 3-currency.js

export default class Pricing {
  constructor(amount = '', currency) {
    this.amount = amount;
    this.currency = currency;
  }

  displayFullPrice() {
    const code = this.currency.code;
    const name = this.currency.name;
    const money = `${this.amount} ${name} (${code})`;

    return money;
  }

  static convertPrice(amount = 0, conversionRate = 0) {
    if (typeof amount !== 'number') {
      throw new TypeError('amount must always be a number');
    }

    if (typeof conversionRate !== 'number') {
      throw new TypeError('conversionRate must always be a number');
    }

    return amount * conversionRate;
  }

  get amount() {
    return this._amount;
  }

  set amount(newAmount) {
    if (typeof newAmount !== 'number') {
      throw new TypeError('amount must be a number');
    }
    this._amount = newAmount;
  }

  get currency() {
    return this._currency;
  }

  set currency(newCurrency) {
    if (!(newCurrency instanceof Currency)) {
      throw new TypeError('currency must be a Currency');
    }
    this._currency = newCurrency;
  }
}

