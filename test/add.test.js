import { expect } from 'chai';
import add from '../src/add.js';

describe('Test Suite for add.js', () => {
    it('should add two positive numbers correctly', () => {
        expect(add(2, 2)).to.equal(4);
    });

    it('should add a positive and a negative number correctly', () => {
        expect(add(5, -3)).to.equal(2);
    });

    it('should return the other number when one argument is undefined', () => {
        expect(add(undefined, 7)).to.equal(7);
        expect(add(10, undefined)).to.equal(10);
    });

    it('should return default value (0) when both arguments are undefined', () => {
        expect(add(undefined, undefined)).to.equal(0);
    });

    // createMathOperation yhdistää merkkijonot eli '4' + '6' = '46'. En tiedä onko haluttu toiminnallisuus.
    it('should handle string inputs that can be converted to numbers', () => {
        expect(add('4', '6')).to.equal(10);
        expect(add('3', 7)).to.equal(10);
        expect(add(5, '5')).to.equal(10);
    });

    it('should handle non-numeric strings by treating them as NaN', () => {
        expect(add('a', 5)).to.be.NaN;
        expect(add(5, 'b')).to.be.NaN;
        expect(add('x', 'y')).to.be.NaN;
    });

    it('should handle null values as 0', () => {
        expect(add(null, 5)).to.equal(5);
        expect(add(5, null)).to.equal(5);
        expect(add(null, null)).to.equal(0);
    });

    it('should add two negative numbers correctly', () => {
        expect(add(-4, -6)).to.equal(-10);
    });
});