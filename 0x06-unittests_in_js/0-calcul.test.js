const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('whole numbers', () => {
    assert.strictEqual(calculateNumber(1, 2), 3);
  });

  it('floating point numbers', () => {
    assert.strictEqual(calculateNumber(1.0, 2.4), 3);
  });

  it('return 3', () => {
    assert.strictEqual(calculateNumber(1.4, 2.4), 3);
  });

  it('return 3', () => {
    assert.strictEqual(calculateNumber(1.4, 2.0), 3);
  });
  it ('return not a number', () => {
    assert.strictEqual(calculateNumber("jk", "y"), NaN);
  });
});
