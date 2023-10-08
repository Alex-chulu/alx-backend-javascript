const sendPaymentRequestToAPI = require('./5-payment');
const { expect } = require('chai');
const sinon = require('sinon');

describe('sendPaymentRequestToAPI', () => {
  let consoleSpy;

  beforeEach(() => {
    consoleSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    consoleSpy.restore();
  });

  it('should log the correct total when sending payment', () => {
    sendPaymentRequestToAPI(100, (total) => {
      expect(consoleSpy.calledWith('Sending payment of 100')).to.be.true;
      expect(consoleSpy.calledWith(`The total is: ${total}`)).to.be.true;
    });
  });

  it('should log the correct total when sending payment', () => {
    sendPaymentRequestToAPI(10, (total) => {
      expect(consoleSpy.calledWith('Sending payment of 10')).to.be.true;
      expect(consoleSpy.calledWith(`The total is: ${total}`)).to.be.true;
    });
  });
});

