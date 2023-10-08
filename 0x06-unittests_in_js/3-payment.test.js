const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');
const sinon = require('sinon');
const { expect } = require('chai');

describe('sendPaymentRequestToApi', () => {
  let consoleSpy;
  let calculateNumberSpy;

  beforeEach(() => {
    // Create a spy for console.log
    consoleSpy = sinon.spy(console, 'log');

    // Create a spy for Utils.calculateNumber
    calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');
  });

  afterEach(() => {
    // Restore the spies after each test
    consoleSpy.restore();
    calculateNumberSpy.restore();
  });

  it('should call Utils.calculateNumber with correct arguments and log the total', () => {
    // Call the function to be tested
    sendPaymentRequestToApi(100, 20);

    // Verify that calculateNumberSpy was called with the correct arguments
    expect(calculateNumberSpy.calledWith('SUM', 100, 20)).to.be.true;

    // Verify that console.log was called with the correct message
    expect(consoleSpy.calledWith('The total is: 120')).to.be.true;
  });
});

