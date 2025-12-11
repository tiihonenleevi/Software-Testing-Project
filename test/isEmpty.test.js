import { expect } from 'chai';
import isEmpty from '../src/isEmpty.js';

describe('Test suite for isEmpty.js', () => {
  describe('null and undefined', () => {
    it('should return true for null', () => {
      expect(isEmpty(null)).to.be.true;
    });

    it('should return true for undefined', () => {
      expect(isEmpty(undefined)).to.be.true;
    });
  });

  describe('primitive values', () => {
    it('should return true for booleans', () => {
      expect(isEmpty(true)).to.be.true;
      expect(isEmpty(false)).to.be.true;
    });

    it('should return true for numbers', () => {
      expect(isEmpty(0)).to.be.true;
      expect(isEmpty(42)).to.be.true;
    });
  });

  describe('strings', () => {
    it('should return true for empty string', () => {
      expect(isEmpty('')).to.be.true;
    });

    it('should return false for non-empty string', () => {
      expect(isEmpty('abc')).to.be.false;
    });
  });

  describe('arrays', () => {
    it('should return true for empty array', () => {
      expect(isEmpty([])).to.be.true;
    });

    it('should return false for non-empty array', () => {
      expect(isEmpty([1, 2, 3])).to.be.false;
    });
  });

  describe('objects', () => {
    it('should return true for empty object', () => {
      expect(isEmpty({})).to.be.true;
    });

    it('should return false for object with properties', () => {
      expect(isEmpty({ 'a': 1 })).to.be.false;
    });
  });

  describe('maps and sets', () => {
    it('should return true for empty map', () => {
      expect(isEmpty(new Map())).to.be.true;
    });

    it('should return false for non-empty map', () => {
      const map = new Map();
      map.set('key', 'value');
      expect(isEmpty(map)).to.be.false;
    });

    it('should return true for empty set', () => {
      expect(isEmpty(new Set())).to.be.true;
    });

    it('should return false for non-empty set', () => {
      const set = new Set();
      set.add(1);
      expect(isEmpty(set)).to.be.false;
    });
  });

  describe('typed arrays, buffers and array-like objects', () => {
    it('should return true for empty typed array', () => {
      expect(isEmpty(new Uint8Array(0))).to.be.true;
    });

    it('should return false for non-empty typed array', () => {
      expect(isEmpty(new Uint8Array([1, 2, 3]))).to.be.false;
    });

    it('should return true for empty Buffer and false for non-empty Buffer', () => {
      expect(isEmpty(Buffer.alloc(0))).to.be.true;
      expect(isEmpty(Buffer.from('a'))).to.be.false;
    });

    it('should treat objects with a splice function as array-like (use length)', () => {
      const arrLikeEmpty = { length: 0, splice: function() {} };
      const arrLikeFull = { 0: 'x', length: 1, splice: function() {} };
      expect(isEmpty(arrLikeEmpty)).to.be.true;
      expect(isEmpty(arrLikeFull)).to.be.false;
    });
  });

  describe('arguments and function/symbol cases', () => {
    it('should return true for empty arguments and false for populated arguments', function() {
      function emptyArgs() { return isEmpty(arguments); }
      function someArgs() { return isEmpty(arguments); }
      expect(emptyArgs()).to.be.true;
      expect(someArgs(1,2)).to.be.false;
    });

    it('should return true for functions and symbols', () => {
      expect(isEmpty(function() {})).to.be.true;
      expect(isEmpty(() => {})).to.be.true;
      expect(isEmpty(Symbol('s'))).to.be.true;
    });
  });

  describe('prototype and inheritance edge cases', () => {
    it('should return true for Object.prototype', () => {
      expect(isEmpty(Object.prototype)).to.be.true;
    });

    it('should return false for a constructor prototype with its own enumerable property', () => {
      function Foo() {}
      Foo.prototype.bar = 1;
      expect(isEmpty(Foo.prototype)).to.be.false;
    });

    it('should ignore inherited enumerable properties and still consider object empty', () => {
      const parent = { a: 1 };
      const child = Object.create(parent);
      expect(isEmpty(child)).to.be.true;
    });

    it('should consider object with only non-enumerable properties empty', () => {
      const obj = {};
      Object.defineProperty(obj, 'hidden', { value: 42, enumerable: false });
      expect(isEmpty(obj)).to.be.true;
    });
  });
});
