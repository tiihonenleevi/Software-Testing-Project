import { expect } from 'chai';
import capitalize from '../src/capitalize.js';

describe('Test suite for capitalize.js', () => {
    it('should capitalize the first character of a lowercase string', () => {
        expect(capitalize('fred')).to.equal('Fred');
    });

    it('should convert an uppercase string to capitalized format', () => {
        expect(capitalize('FRED')).to.equal('Fred');
    });

    it('should handle mixed case strings by capitalizing only the first character', () => {
        expect(capitalize('fReD')).to.equal('Fred');
    });

    it('should handle strings with spaces', () => {
        expect(capitalize('hello world')).to.equal('Hello world');
    });

    it('should handle undefined by returning "Undefined"', () => {
        expect(capitalize(undefined)).to.equal('Undefined');
    });

    it('should handle null by returning "Null"', () => {
        expect(capitalize(null)).to.equal('Null');
    });

    it('should handle missing argument (undefined)', () => {
        expect(capitalize()).to.equal('Undefined');
    });
});