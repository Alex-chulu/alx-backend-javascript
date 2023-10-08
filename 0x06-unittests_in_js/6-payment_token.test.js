const getPaymentTokenFromAPI = require('./6-payment_token');
const { expect } = require('chai');

describe('getPaymentTokenFromAPI', () => {
  it('should resolve with the expected data when success is true', (done) => {
    getPaymentTokenFromAPI(true)
      .then((result) => {
        expect(result).to.deep.equal({ data: 'Successful response from the API' });
        done(); // Call done to signal that the async test is complete
      })
      .catch((error) => done(error)); // Call done with error if the promise is rejected
  });

  it('should reject with an error when success is false', (done) => {
    getPaymentTokenFromAPI(false)
      .then(() => done(new Error('Expected promise to be rejected')))
      .catch((error) => {
        expect(error.message).to.equal('API request failed');
        done();
      });
  });
});

