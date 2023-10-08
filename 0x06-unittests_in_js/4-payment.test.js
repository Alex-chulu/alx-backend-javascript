const sendPaymentRequestToAPI = require('./4-payment');
const Utils = require('./utils');
const { expect } = require('chai');
const sinon = require('sinon');

describe('sendPaymentRequestToAPI', () => {
  let consoleSpy;
  let calculateNumberStub;

  beforeEach(() => {
    consoleSpy = sinon.spy(console, 'log');
    calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);
  });

  afterEach(() => {
    consoleSpy.restore();
    calculateNumberStub.restore();
  });

  it('should log the correct total when sending payment', () => {
    sendPaymentRequestToAPI(100);
    expect(calculateNumberStub.calledWith('SUM', 100, 20)).to.be.true;
    expect(consoleSpy.calledWith('The total is: 10')).to.be.true;
  });

  it('should log the correct total when sending payment', () => {
    sendPaymentRequestToAPI(10);
    expect(calculateNumberStub.calledWith('SUM', 100, 20)).to.be.true;
    expect(consoleSpy.calledWith('The total is: 10')).to.be.true;
  });
});

