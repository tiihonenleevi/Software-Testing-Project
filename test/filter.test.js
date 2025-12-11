import { expect } from 'chai';
import filter from '../src/filter.js';

describe('Test suite for filter', () => {
  describe('basic filtering', () => {
    it('should return an array of elements that match the predicate', () => {
      const array = [1, 2, 3, 4, 5];
      const result = filter(array, (value) => value > 2);
      expect(result).to.deep.equal([3, 4, 5]);
    });

    it('should return empty array when no elements match', () => {
      const array = [1, 2, 3];
      const result = filter(array, (value) => value > 10);
      expect(result).to.deep.equal([[]]);
    });

    it('should return the entire array when all elements match', () => {
      const array = [1, 2, 3];
      const result = filter(array, (value) => value > 0);
      expect(result).to.deep.equal([1, 2, 3]);
    });
  });

  describe('object filtering', () => {
    it('should filter objects by property', () => {
      const users = [
        { 'user': 'barney', 'active': true },
        { 'user': 'fred', 'active': false }
      ];
      const result = filter(users, ({ active }) => active);
      expect(result).to.deep.equal([{ 'user': 'barney', 'active': true }]);
    });

    it('should filter objects by multiple criteria', () => {
      const products = [
        { name: 'Apple', price: 100, inStock: true },
        { name: 'Banana', price: 50, inStock: false },
        { name: 'Cherry', price: 150, inStock: true }
      ];
      const result = filter(products, (p) => p.inStock && p.price > 75);
      expect(result).to.deep.equal([
        { name: 'Apple', price: 100, inStock: true },
        { name: 'Cherry', price: 150, inStock: true }
      ]);
    });
  });

  describe('predicate arguments', () => {
    it('should pass value, index, and array to predicate', () => {
      const array = ['a', 'b', 'c'];
      const values = [];
      const indices = [];
      const arrays = [];

      filter(array, (value, index, arr) => {
        values.push(value);
        indices.push(index);
        arrays.push(arr);
        return true;
      });

      expect(values).to.deep.equal(['a', 'b', 'c']);
      expect(indices).to.deep.equal([0, 1, 2]);
      expect(arrays).to.deep.equal([array, array, array]);
    });

    it('should use index to filter elements', () => {
      const array = [10, 20, 30, 40];
      const result = filter(array, (value, index) => index % 2 === 0);
      expect(result).to.deep.equal([10, 30]);
    });
  });

  describe('edge cases', () => {
    it('should handle empty array', () => {
      const result = filter([], (value) => value > 0);
      expect(result).to.deep.equal([[]]);
    });

    it('should handle null array', () => {
      const result = filter(null, (value) => value > 0);
      expect(result).to.deep.equal([[]]);
    });

    it('should handle undefined array', () => {
      const result = filter(undefined, (value) => value > 0);
      expect(result).to.deep.equal([[]]);
    });

    it('should preserve original array', () => {
      const array = [1, 2, 3];
      const originalArray = [...array];
      filter(array, (value) => value > 1);
      expect(array).to.deep.equal(originalArray);
    });
  });

  describe('various data types', () => {
    it('should filter strings', () => {
      const array = ['apple', 'apricot', 'banana', 'avocado'];
      const result = filter(array, (value) => value.startsWith('a'));
      expect(result).to.deep.equal(['apple', 'apricot', 'avocado']);
    });

    it('should filter booleans', () => {
      const array = [true, false, true, false, true];
      const result = filter(array, (value) => value === true);
      expect(result).to.deep.equal([true, true, true]);
    });

    it('should filter mixed types', () => {
      const array = [0, 1, '', 'text', false, true, null, undefined];
      const result = filter(array, (value) => Boolean(value));
      expect(result).to.deep.equal([1, 'text', true]);
    });

    it('should filter arrays', () => {
      const array = [[1, 2], [3], [], [4, 5, 6]];
      const result = filter(array, (value) => value.length > 1);
      expect(result).to.deep.equal([[1, 2], [4, 5, 6]]);
    });
  });
});
