const sinon = require('sinon');
const Utils = require('./utils');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  it('sendPaymentRequestToApi', () => {
    const opt = sinonspy(Utils);

    sendPaymentRequestToApi(100, 20);
    expect(opt.calculateNumber.calledWith('SUM', 100, 20)).to.be.true;
    expect(opt.calculateNumber.callCount).to.be.equal(1);
    opt.calculateNumber.restore();
  });
});
