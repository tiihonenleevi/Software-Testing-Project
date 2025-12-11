import { expect } from 'chai';
import toNumber from '../src/toNumber.js';

describe('Test suite for toNumber.js', () => {
  describe('number input', () => {
    it('should return the same number for positive numbers', () => {
      expect(toNumber(3.2)).to.equal(3.2);
      expect(toNumber(42)).to.equal(42);
    });

    it('should return the same number for negative numbers', () => {
      expect(toNumber(-5)).to.equal(-5);
      expect(toNumber(-3.14)).to.equal(-3.14);
    });

    it('should handle special number values', () => {
      expect(toNumber(0)).to.equal(0);
      expect(toNumber(Number.MIN_VALUE)).to.equal(Number.MIN_VALUE);
      expect(toNumber(Infinity)).to.equal(Infinity);
      expect(toNumber(-Infinity)).to.equal(-Infinity);
      expect(Number.isNaN(toNumber(NaN))).to.be.true;
    });
  });

  describe('string input', () => {
    it('should convert numeric strings to numbers', () => {
      expect(toNumber('3.2')).to.equal(3.2);
      expect(toNumber('42')).to.equal(42);
      expect(toNumber('-5')).to.equal(-5);
    });

    it('should handle strings with leading/trailing whitespace', () => {
      expect(toNumber('  3.2  ')).to.equal(3.2);
      expect(toNumber('\t42\n')).to.equal(42);
    });

    it('should convert empty string to 0', () => {
      expect(toNumber('')).to.equal(0);
    });

    it('should handle binary strings (0b prefix)', () => {
      expect(toNumber('0b1010')).to.equal(10);
      expect(toNumber('0b0')).to.equal(0);
    });

    it('should handle octal strings (0o prefix)', () => {
      expect(toNumber('0o10')).to.equal(8);
      expect(toNumber('0o777')).to.equal(511);
    });

    it('should return NaN for invalid hex strings (bad signed hex)', () => {
      expect(Number.isNaN(toNumber('-0x5'))).to.be.true;
      expect(Number.isNaN(toNumber('+0x5'))).to.be.true;
    });

    it('should return NaN for non-numeric strings', () => {
      expect(Number.isNaN(toNumber('abc'))).to.be.true;
      expect(Number.isNaN(toNumber('12abc'))).to.be.true;
    });

    it('should handle string "Infinity" and "-Infinity"', () => {
      expect(toNumber('Infinity')).to.equal(Infinity);
      expect(toNumber('-Infinity')).to.equal(-Infinity);
    });
  });

  describe('symbol input', () => {
    it('should return NaN for symbols', () => {
      expect(Number.isNaN(toNumber(Symbol('test')))).to.be.true;
    });
  });

  describe('object input', () => {
    it('should call valueOf on objects and convert result', () => {
      const obj = {
        valueOf() {
          return 42;
        }
      };
      expect(toNumber(obj)).to.equal(42);
    });

    it('should convert object to string when valueOf returns an object', () => {
      const obj = {
        valueOf() {
          return {};
        },
        toString() {
          return '99';
        }
      };
      expect(toNumber(obj)).to.equal(99);
    });

    it('should handle plain objects without valueOf', () => {
      const obj = { a: 1 };
      expect(Number.isNaN(toNumber(obj))).to.be.true;
    });

    it('should handle Date objects', () => {
      const date = new Date('2021-01-01');
      expect(toNumber(date)).to.equal(date.getTime());
    });
  });

  describe('boolean input', () => {
    it('should convert true to 1', () => {
      expect(toNumber(true)).to.equal(1);
    });

    it('should convert false to 0', () => {
      expect(toNumber(false)).to.equal(0);
    });
  });

  describe('null and undefined', () => {
    it('should return 0 for null', () => {
      expect(toNumber(null)).to.equal(0);
    });

    it('should return NaN for undefined', () => {
      expect(Number.isNaN(toNumber(undefined))).to.be.true;
    });
  });

  describe('array input', () => {
    it('should convert single-element arrays to their element value', () => {
      expect(toNumber([42])).to.equal(42);
      expect(toNumber(['3.2'])).to.equal(3.2);
    });

    it('should return 0 for empty arrays', () => {
      expect(toNumber([])).to.equal(0);
    });

    it('should return NaN for multi-element arrays', () => {
      expect(Number.isNaN(toNumber([1, 2]))).to.be.true;
    });
  });
});
