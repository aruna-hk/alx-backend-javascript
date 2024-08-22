const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', () => {
  let bigG;

  beforeEach(() => {
    if (!bigG) {
      bigG = sinon.spy(console);
    }
  });

  afterEach(() => {
    bigG.log.resetHistory();
  });

  it('sendPaymentRequestToApi(100, 20) prints "The total is: 120" to the console', () => {
    sendPaymentRequestToApi(100, 20);
    expect(bigG.log.calledWith('The total is: 120')).to.be.true;
    expect(bigG.log.calledOnce).to.be.true;
  });

  it('sendPaymentRequestToApi(10, 10) prints "The total is: 20" to the console', () => {
    sendPaymentRequestToApi(10, 10);
    expect(bigG.log.calledWith('The total is: 20')).to.be.true;
    expect(bigG.log.calledOnce).to.be.true;
  });
});
