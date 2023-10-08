const Utils = require('./utils');

function sendPaymentRequestToAPI(total) {
  const calculatedTotal = Utils.calculateNumber('SUM', 100, 20);
  console.log(`The total is: ${calculatedTotal}`);
}

module.exports = sendPaymentRequestToAPI;

