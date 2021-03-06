import { expect } from 'chai';
import { multiply } from '../../src/functions/multiply.js';

describe('Multiply', () => {
  it('number, number', () => {
    expect(multiply(10, 2)).to.be.equal(20);
    expect(multiply(0.1, 0.2)).to.be.equal(0.1 * 0.2);
  });

  it('array, number', () => {
    expect(multiply([10, 20, 30, 40], 10)).to.be.eql([100, 200, 300, 400]);
  });

  it('number, array', () => {
    expect(multiply(10, [1, 2, 5, 10])).to.be.eql([10, 20, 50, 100]);
  });

  it('array, array', () => {
    expect(multiply([11, 48, 60, 72], [1, 2, 3, 4])).to.be.eql([11, 96, 180, 288]);
  });

  it('array length mismatch', () => {
    expect(() => multiply([1, 2], [3])).to.throw();
  });
});
