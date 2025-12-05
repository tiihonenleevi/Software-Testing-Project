import { expect } from 'chai';
import clamp from '../src/clamp.js';

describe('clamp', () => {
    it('should clamp a number within bounds', () => {
        expect(clamp(10, -5, 5)).to.equal(5);
    });

    it('should return lower bound when number is below range', () => {
        expect(clamp(-10, -5, 5)).to.equal(-5);
    });

    it('should return the number when within bounds', () => {
        expect(clamp(0, -5, 5)).to.equal(0);
    });

    it('should handle equal lower and upper bounds', () => {
        expect(clamp(10, 5, 5)).to.equal(5);
    });

    it('should handle negative numbers', () => {
        expect(clamp(-3, -10, -1)).to.equal(-3);
    });

    it('should convert string numbers to numbers', () => {
        expect(clamp('10', -5, 5)).to.equal(5);
    });

    it('should handle NaN values', () => {
        expect(isNaN(clamp(NaN, -5, 5))).to.be.true;
    });

    it('should default bounds to 0 when NaN', () => {
        expect(clamp(5, NaN, NaN)).to.equal(0);
    });

    it('should clamp at upper bound when number equals upper', () => {
        expect(clamp(5, -5, 5)).to.equal(5);
    });

    it('should clamp at lower bound when number equals lower', () => {
        expect(clamp(-5, -5, 5)).to.equal(-5);
    });

    it('should handle when number is lower than both bounds', () => {
        expect(clamp(-10, -5, 0)).to.equal(-5);
    });

    it('returns lower when number is above lower but below upper', () => {
        expect(clamp(2, 0, 5)).to.equal(2);
    });
    
    it('should return the number unchanged when lower > upper and number between them', () => {
        // number (5) is between upper (2) and lower (10) -> both comparisons keep the number
        expect(clamp(5, 10, 2)).to.equal(5);
    });

    it('should set to upper when number < upper and upper < lower', () => {
        // number (1) < upper (2) so it's set to upper, then upper <= lower so it remains
        expect(clamp(1, 10, 2)).to.equal(2);
    });

});