// test/example.test.js
import { expect } from 'chai'
const add = require('./math'); // Adjust the path to your function file

describe('add function', function() {
  it('should return the sum of two numbers', function() {
    const result = add(2, 3);
    expect(result).to.equal(5);
  });

  it('should return a number', function() {
    const result = add(2, 3);
    expect(result).to.be.a('number');
  });

  it('should handle negative numbers', function() {
    const result = add(-2, -3);
    expect(result).to.equal(-5);
  });
});

