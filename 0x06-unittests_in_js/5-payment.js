function sendPaymentRequestToAPI(total, callback) {
  console.log(`Sending payment of ${total}`);
  callback(total);
}

module.exports = sendPaymentRequestToAPI;

