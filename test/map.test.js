import { expect } from 'chai';
import map from '../src/map.js';

describe('map', () => {
  describe('basic mapping', () => {
    it('should apply iteratee to each element', () => {
      const array = [4, 8];
      const result = map(array, (n) => n * n);
      expect(result).to.deep.equal([16, 64]);
    });

    it('should return new array with same length', () => {
      const array = [1, 2, 3];
      const result = map(array, (n) => n);
      expect(result).to.have.lengthOf(3);
    });

    it('should handle empty array', () => {
      const result = map([], (n) => n * 2);
      expect(result).to.deep.equal([]);
    });
  });

  describe('iteratee arguments', () => {
    it('should pass value, index, and array to iteratee', () => {
      const array = ['a', 'b', 'c'];
      const values = [];
      const indices = [];

      map(array, (value, index) => {
        values.push(value);
        indices.push(index);
        return value;
      });

      expect(values).to.deep.equal(['a', 'b', 'c']);
      expect(indices).to.deep.equal([0, 1, 2]);
    });

    it('should use index in mapping', () => {
      const array = [10, 20, 30];
      const result = map(array, (value, index) => value + index);
      expect(result).to.deep.equal([10, 21, 32]);
    });
  });

  describe('different data types', () => {
    it('should map numbers to strings', () => {
      const array = [1, 2, 3];
      const result = map(array, (n) => String(n));
      expect(result).to.deep.equal(['1', '2', '3']);
    });

    it('should map strings to numbers', () => {
      const array = ['1', '2', '3'];
      const result = map(array, (n) => parseInt(n));
      expect(result).to.deep.equal([1, 2, 3]);
    });

    it('should map objects to extracted property', () => {
      const users = [
        { 'user': 'barney', 'age': 36 },
        { 'user': 'fred', 'age': 40 }
      ];
      const result = map(users, (o) => o.user);
      expect(result).to.deep.equal(['barney', 'fred']);
    });

    it('should map objects to computed values', () => {
      const items = [
        { name: 'Apple', price: 100 },
        { name: 'Banana', price: 50 }
      ];
      const result = map(items, (item) => item.price * 2);
      expect(result).to.deep.equal([200, 100]);
    });
  });

  describe('null and undefined handling', () => {
    it('should return empty array for null input', () => {
      const result = map(null, (n) => n * 2);
      expect(result).to.deep.equal([]);
    });

    it('should return empty array for undefined input', () => {
      const result = map(undefined, (n) => n * 2);
      expect(result).to.deep.equal([]);
    });
  });

  describe('preserving original array', () => {
    it('should not modify original array', () => {
      const array = [1, 2, 3];
      const originalArray = [...array];
      map(array, (n) => n * 2);
      expect(array).to.deep.equal(originalArray);
    });
  });

  describe('complex transformations', () => {
    it('should handle nested object mapping', () => {
      const array = [
        { id: 1, data: { value: 10 } },
        { id: 2, data: { value: 20 } }
      ];
      const result = map(array, (item) => item.data.value);
      expect(result).to.deep.equal([10, 20]);
    });

    it('should handle conditional transformations', () => {
      const array = [1, 2, 3, 4, 5];
      const result = map(array, (n) => n % 2 === 0 ? 'even' : 'odd');
      expect(result).to.deep.equal(['odd', 'even', 'odd', 'even', 'odd']);
    });

    it('should handle array transformations', () => {
      const array = [[1, 2], [3, 4], [5, 6]];
      const result = map(array, (arr) => arr.join('-'));
      expect(result).to.deep.equal(['1-2', '3-4', '5-6']);
    });
  });
});
