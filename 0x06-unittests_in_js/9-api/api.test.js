const chai = require('chai');
const expect = chai.expect;
const request = require('request');

describe('API', () => {
  it('listen on localost:7865', (done) => {
    request('http://localhost:7865', 'GET', (er, rs, bd) => {
      if (er) throw er;
      expect(rs.statusCode).to.equal(200);
      expect(bd).to.equal('Welcome to the payment system');
    });
    done();
  });

  it('cart/4', (done) => {
    request('http://localhost:7865/cart/4', 'GET', (er, rs, bd) => {
      if (er) throw er;
      expect(rs.statusCode).to.equal(200);
      expect(bd).to.equal('Payment methods for cart 4');
    });
    done();
  });

  it('cart/abc invalid', (done) => {
    request('http://localhost:7865/cart/abc', 'GET', (er, rs) => {
      if (er) throw er;
      expect(rs.statusCode).to.equal(404);
    });
    done();
  });

  it('cart no entry', (done) => {
    request('http://localhost:7865/cart', 'GET', (er, rs) => {
      if (er) throw er;
      expect(rs.statusCode).to.equal(404);
    });
    done();
  });
});
