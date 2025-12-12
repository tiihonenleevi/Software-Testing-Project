import { expect } from 'chai';
import words from '../src/words.js';

describe('Test suite for words.js', () => {
  describe('default pattern (ASCII words)', () => {
    it('should split simple ASCII words separated by spaces', () => {
      const result = words('hello world');
      expect(result).to.deep.equal(['hello', 'world']);
    });

    it('should split words separated by punctuation and spaces', () => {
      const result = words('fred, barney, & pebbles');
      expect(result).to.deep.equal(['fred', 'barney', 'pebbles']);
    });

    it('should handle single word', () => {
      const result = words('hello');
      expect(result).to.deep.equal(['hello']);
    });

    it('should return empty array for empty string', () => {
      const result = words('');
      expect(result).to.deep.equal([]);
    });

    it('should return empty array for string with only non-word characters', () => {
      const result = words('   !!!');
      expect(result).to.deep.equal([]);
    });

    it('should handle strings with numbers at the end of words', () => {
      const result = words('test123 hello456');
      expect(result).to.deep.equal(['test123', 'hello456']);
    });

    it('should handle strings with numbers in the middle of words', () => {
      const result2 = words('test123test hello456hello');
      expect(result2).to.deep.equal(['test123test', 'hello456hello']);
    });

    it('should handle camelCase strings', () => {
      const result = words('camelCaseString');
      expect(result).to.deep.equal(['camel', 'Case', 'String']);
    });

    it('should handle PascalCase strings', () => {
      const result = words('PascalCaseString');
      expect(result).to.deep.equal(['Pascal', 'Case', 'String']);
    });

    it('should handle snake_case strings', () => {
      const result = words('snake_case_string');
      expect(result).to.deep.equal(['snake', 'case', 'string']);
    });

    it('should handle mixed case with special characters', () => {
      const result = words('hello-world_test@email');
      expect(result).to.deep.equal(['hello', 'world', 'test', 'email']);
    });
  });

  describe('custom pattern', () => {
    it('should use custom pattern to match words', () => {
      const result = words('fred, barney, & pebbles', /[^, ]+/g);
      expect(result).to.deep.equal(['fred', 'barney', '&', 'pebbles']);
    });

    it('should match words with custom regex', () => {
      const result = words('hello123world456', /\d+/g);
      expect(result).to.deep.equal(['123', '456']);
    });

    it('should return empty array when pattern matches nothing', () => {
      const result = words('abc def', /\d+/g);
      expect(result).to.deep.equal([]);
    });

    it('should handle pattern as string (no g flag equivalent)', () => {
      const result = words('hello world test', /\w+/g);
      expect(result).to.deep.equal(['hello', 'world', 'test']);
    });
  });

  describe('edge cases', () => {
    it('should handle strings with only spaces', () => {
      const result = words('     ');
      expect(result).to.deep.equal([]);
    });

    it('should handle strings with multiple consecutive delimiters', () => {
      const result = words('hello;;;world');
      expect(result).to.deep.equal(['hello', 'world']);
    });

    it('should preserve word order', () => {
      const result = words('zebra apple banana');
      expect(result).to.deep.equal(['zebra', 'apple', 'banana']);
    });

    it('should handle single character words', () => {
      const result = words('a b c');
      expect(result).to.deep.equal(['a', 'b', 'c']);
    });

    it('should handle mixed numbers and letters', () => {
      const result = words('a1b2c3');
      expect(result).to.deep.equal(['a', '1', 'b', '2', 'c', '3']);
    });
  });
});
