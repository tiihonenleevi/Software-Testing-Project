import { expect } from 'chai';
import capitalize from '../src/capitalize.js';

describe('capitalize', () => {
    // Basic functionality tests
    it('should capitalize the first character of a lowercase string', () => {
        expect(capitalize('fred')).to.equal('Fred');
    });

    it('should convert an uppercase string to capitalized format', () => {
        expect(capitalize('FRED')).to.equal('Fred');
    });

    it('should handle mixed case strings by capitalizing only the first character', () => {
        expect(capitalize('fReD')).to.equal('Fred');
    });

    it('should handle a single character lowercase string', () => {
        expect(capitalize('a')).to.equal('A');
    });

    it('should handle a single character uppercase string', () => {
        expect(capitalize('A')).to.equal('A');
    });

    it('should handle empty string', () => {
        expect(capitalize('')).to.equal('');
    });

    // String with spaces and special characters
    it('should handle strings with spaces', () => {
        expect(capitalize('hello world')).to.equal('Hello world');
    });

    it('should handle strings starting with a space', () => {
        expect(capitalize(' hello')).to.equal(' hello');
    });

    it('should handle strings with numbers', () => {
        expect(capitalize('123abc')).to.equal('123abc');
    });

    it('should capitalize after numbers', () => {
        expect(capitalize('1st place')).to.equal('1st place');
    });

    it('should handle special characters at the start', () => {
        expect(capitalize('!hello')).to.equal('!hello');
    });

    it('should handle strings with punctuation', () => {
        expect(capitalize('hello, world!')).to.equal('Hello, world!');
    });

    // Edge cases with undefined and null
    it('should handle undefined by returning empty string', () => {
        expect(capitalize(undefined)).to.equal('');
    });

    it('should handle null by returning empty string', () => {
        expect(capitalize(null)).to.equal('');
    });

    // Type coercion tests
    it('should handle numeric input by converting to string', () => {
        expect(capitalize(123)).to.equal('123');
    });

    it('should handle boolean true by converting to string', () => {
        expect(capitalize(true)).to.equal('True');
    });

    it('should handle boolean false by converting to string', () => {
        expect(capitalize(false)).to.equal('False');
    });

    // Array and object conversion
    it('should handle array input by converting to string', () => {
        expect(capitalize([1, 2, 3])).to.equal('1,2,3');
    });

    it('should handle object input', () => {
        const result = capitalize({});
        expect(result).to.be.a('string');
    });

    // Already capitalized strings
    it('should handle already capitalized strings', () => {
        expect(capitalize('Hello')).to.equal('Hello');
    });

    it('should handle already capitalized multiple word strings', () => {
        expect(capitalize('Hello World')).to.equal('Hello world');
    });

    // Case sensitivity tests
    it('should handle all uppercase strings', () => {
        expect(capitalize('HELLO')).to.equal('Hello');
    });

    it('should handle all lowercase strings', () => {
        expect(capitalize('hello')).to.equal('Hello');
    });

    // Multi-word capitalization behavior
    it('should only capitalize first character of multi-word strings', () => {
        expect(capitalize('hello WORLD foo')).to.equal('Hello world foo');
    });

    // Whitespace and special cases
    it('should preserve internal whitespace', () => {
        expect(capitalize('hello   world')).to.equal('Hello   world');
    });

    it('should handle tabs and newlines', () => {
        expect(capitalize('\thello')).to.equal('\thello');
        expect(capitalize('hello\nworld')).to.equal('Hello\nworld');
    });

    // Unicode and extended characters
    it('should handle unicode characters', () => {
        expect(capitalize('café')).to.equal('Café');
    });

    it('should handle strings with emojis', () => {
        const result = capitalize('😀hello');
        expect(result).to.be.a('string');
    });

    // Double call should be idempotent
    it('should be idempotent when called twice', () => {
        const input = 'hello';
        const once = capitalize(input);
        const twice = capitalize(once);
        expect(once).to.equal(twice);
    });

    // No default parameter value test
    it('should handle missing argument (undefined)', () => {
        expect(capitalize()).to.equal('');
    });

    // Long strings
    it('should handle very long strings', () => {
        const longString = 'a'.repeat(1000);
        expect(capitalize(longString)).to.equal('A' + 'a'.repeat(999));
    });

    // String with only special characters
    it('should handle strings with only special characters', () => {
        expect(capitalize('!@#$%')).to.equal('!@#$%');
    });

    // Numbers represented as strings
    it('should handle string numbers', () => {
        expect(capitalize('123')).to.equal('123');
    });

    it('should handle string with leading zero', () => {
        expect(capitalize('0hello')).to.equal('0hello');
    });

    it('should handle string with trailing spaces', () => {
        expect(capitalize('hello   ')).to.equal('Hello   ');
    });
});