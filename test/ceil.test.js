import { expect } from 'chai';
import ceil from '../src/ceil.js';

describe('Test suite for ceil.js according to the test plan with some alterations', () => {
    it('should round up to nearest integer when precision is not provided', () => {
        expect(ceil(4.006)).to.equal(5);
        expect(ceil(4.1)).to.equal(5);
        expect(ceil(4.001)).to.equal(5);
    });

    it('should round up to specified decimal precision', () => {
        expect(ceil(6.004, 2)).to.equal(6.01);
        expect(ceil(6.009, 2)).to.equal(6.01);
        expect(ceil(6.001, 1)).to.equal(6.1);
    });

    it('should round up with negative precision', () => {
        expect(ceil(6040, -2)).to.equal(6100);
        expect(ceil(1234, -2)).to.equal(1300);
        expect(ceil(1234, -3)).to.equal(2000);
    });
     
    it('should handle whole numbers', () => {
        expect(ceil(5)).to.equal(5);
        expect(ceil(100, 2)).to.equal(100);
    });
    
    it('should handle zero', () => {
        expect(ceil(0)).to.equal(0);
        expect(ceil(0, 2)).to.equal(0);
    });

    it('should handle negative numbers', () => {
        expect(ceil(-4.006)).to.equal(-4);
        expect(ceil(-4.5)).to.equal(-4);
        expect(ceil(-6.004, 2)).to.equal(-6);
    });
    
    it('should handle precision of 0', () => {
        expect(ceil(4.5, 0)).to.equal(5);
    });
    
    it('Trying to round with string precision should be the same as precision 0', () => {
        expect(ceil(4.006, 'string')).to.equal(5);
    });
    
    it('should handle large precision values', () => {
        expect(ceil(1.23456789, 8)).to.equal(1.23456789);
        expect(ceil(1.2345678912345, 12)).to.equal(1.234567891235);
    });
    
    it('should handle number as string', () => {
        expect(ceil('4.006')).to.equal(5);
        expect(ceil('6.004', 2)).to.equal(6.01);
        expect(ceil('6040', -2)).to.equal(6100);
    });
    
    it('should return NaN for non-numeric inputs', () => {
        expect(ceil('abc')).to.be.NaN;
        expect(ceil(NaN)).to.be.NaN;
        expect(ceil(undefined)).to.be.NaN;
    });
});

describe('Test Suite for ceil.js made by AI', () => {

    // ============================================
    // BASIC CEILING OPERATIONS (NO PRECISION)
    // ============================================
    describe('Basic Ceiling Operations (Default Precision)', () => {
        it('rounds up 4.006 to 5', () => {
            expect(ceil(4.006)).to.equal(5);
        });

        it('rounds up 4.1 to 5', () => {
            expect(ceil(4.1)).to.equal(5);
        });

        it('rounds up 4.001 to 5', () => {
            expect(ceil(4.001)).to.equal(5);
        });

        it('rounds up small positive decimals', () => {
            expect(ceil(0.1)).to.equal(1);
            expect(ceil(0.01)).to.equal(1);
            expect(ceil(0.001)).to.equal(1);
        });

        it('rounds up large numbers with decimals', () => {
            expect(ceil(100.1)).to.equal(101);
            expect(ceil(1000.01)).to.equal(1001);
        });

        it('returns same integer for whole numbers', () => {
            expect(ceil(5)).to.equal(5);
            expect(ceil(100)).to.equal(100);
            expect(ceil(999)).to.equal(999);
        });

        it('handles zero', () => {
            expect(ceil(0)).to.equal(0);
        });

        it('rounds up negative decimals toward zero', () => {
            expect(ceil(-4.006)).to.equal(-4);
            expect(ceil(-4.1)).to.equal(-4);
            expect(ceil(-4.5)).to.equal(-4);
            expect(ceil(-0.1)).to.equal(0);
            expect(ceil(-0.001)).to.equal(0);
        });

        it('returns same negative integer for whole negative numbers', () => {
            expect(ceil(-5)).to.equal(-5);
            expect(ceil(-100)).to.equal(-100);
        });
    });

    // ============================================
    // POSITIVE PRECISION (DECIMAL PLACES)
    // ============================================
    describe('Positive Precision (Decimal Places)', () => {
        it('rounds up to 1 decimal place', () => {
            expect(ceil(6.001, 1)).to.equal(6.1);
            expect(ceil(6.05, 1)).to.equal(6.1);
            expect(ceil(6.09, 1)).to.equal(6.1);
        });

        it('rounds up to 2 decimal places', () => {
            expect(ceil(6.004, 2)).to.equal(6.01);
            expect(ceil(6.009, 2)).to.equal(6.01);
            expect(ceil(6.001, 2)).to.equal(6.01);
        });

        it('rounds up to 3 decimal places', () => {
            expect(ceil(1.1234, 3)).to.equal(1.124);
            expect(ceil(1.0001, 3)).to.equal(1.001);
        });

        it('handles precision equal to or greater than decimals', () => {
            expect(ceil(1.23, 2)).to.equal(1.23);
            expect(ceil(1.2, 2)).to.equal(1.2);
            expect(ceil(1.1, 5)).to.equal(1.1);
        });

        it('handles negative numbers with positive precision', () => {
            expect(ceil(-6.004, 2)).to.equal(-6);
            expect(ceil(-6.001, 1)).to.equal(-6);
            expect(ceil(-1.234, 2)).to.equal(-1.23);
        });

        it('handles precision of 0 (same as no precision)', () => {
            expect(ceil(4.5, 0)).to.equal(5);
            expect(ceil(4.1, 0)).to.equal(5);
            expect(ceil(-4.1, 0)).to.equal(-4);
        });

        it('handles large precision values', () => {
            expect(ceil(1.23456789, 8)).to.equal(1.23456789);
            expect(ceil(1.2345678912345, 12)).to.equal(1.234567891235);
        });

        it('handles very small decimals with precision', () => {
            expect(ceil(0.00001, 4)).to.equal(0.0001);
            expect(ceil(0.00001, 5)).to.equal(0.00001);
        });
    });

    // ============================================
    // NEGATIVE PRECISION (ROUNDING TO TENS, HUNDREDS, ETC)
    // ============================================
    describe('Negative Precision (Rounding to Powers of 10)', () => {
        it('rounds up to nearest 10 with precision -1', () => {
            expect(ceil(6040, -1)).to.equal(6040);
            expect(ceil(6041, -1)).to.equal(6050);
            expect(ceil(1234, -1)).to.equal(1240);
        });

        it('rounds up to nearest 100 with precision -2', () => {
            expect(ceil(6040, -2)).to.equal(6100);
            expect(ceil(1234, -2)).to.equal(1300);
            expect(ceil(1000, -2)).to.equal(1000);
        });

        it('rounds up to nearest 1000 with precision -3', () => {
            expect(ceil(1234, -3)).to.equal(2000);
            expect(ceil(1000, -3)).to.equal(1000);
            expect(ceil(5001, -3)).to.equal(6000);
        });

        it('handles large negative precision', () => {
            expect(ceil(123456, -4)).to.equal(130000);
            expect(ceil(123456, -5)).to.equal(200000);
        });

        it('handles negative numbers with negative precision', () => {
            expect(ceil(-1234, -2)).to.equal(-1200);
            expect(ceil(-1234, -1)).to.equal(-1230);
            expect(ceil(-6040, -2)).to.equal(-6000);
        });

        it('handles numbers already aligned to precision', () => {
            expect(ceil(1000, -3)).to.equal(1000);
            expect(ceil(5000, -2)).to.equal(5000);
        });
    });

    // ============================================
    // STRING INPUT CONVERSION
    // ============================================
    describe('String Input Conversion', () => {
        it('converts numeric string to number and rounds up', () => {
            expect(ceil('4.006')).to.equal(5);
            expect(ceil('4.1')).to.equal(5);
        });

        it('converts numeric string with precision argument', () => {
            expect(ceil('6.004', 2)).to.equal(6.01);
            expect(ceil('6.009', 2)).to.equal(6.01);
        });

        it('converts numeric string with negative precision', () => {
            expect(ceil('6040', -2)).to.equal(6100);
            expect(ceil('1234', -2)).to.equal(1300);
        });

        it('handles string with leading/trailing whitespace', () => {
            expect(ceil('  4.006  ')).to.equal(5);
        });

        it('handles negative number strings', () => {
            expect(ceil('-4.006')).to.equal(-4);
            expect(ceil('-4.5')).to.equal(-4);
        });

        it('handles string zero', () => {
            expect(ceil('0')).to.equal(0);
            expect(ceil('0.0', 2)).to.equal(0);
        });

        it('returns NaN for non-numeric strings', () => {
            expect(ceil('abc')).to.be.NaN;
            expect(ceil('12.34.56')).to.be.NaN;
            expect(ceil('xyz', 2)).to.be.NaN;
        });

        it('handles strings with decimal point but no digits', () => {
            expect(ceil('.')).to.be.NaN;
        });
    });

    // ============================================
    // SPECIAL NUMBER VALUES
    // ============================================
    describe('Special Number Values', () => {
        it('handles NaN', () => {
            expect(ceil(NaN)).to.be.NaN;
            expect(ceil(NaN, 2)).to.be.NaN;
        });

        it('handles very large numbers', () => {
            expect(ceil(1e10 + 0.1)).to.equal(1e10 + 1);
            expect(ceil(Number.MAX_VALUE, -100)).to.equal(Number.MAX_VALUE);
        });

        it('handles very small positive numbers', () => {
            expect(ceil(1e-10)).to.equal(1);
            expect(ceil(Number.MIN_VALUE)).to.equal(1);
        });
    });

    // ============================================
    // NULL AND UNDEFINED BEHAVIOR
    // ============================================
    describe('Null and Undefined Behavior', () => {
        it('returns NaN for undefined', () => {
            expect(ceil(undefined)).to.be.NaN;
            expect(ceil(undefined, 2)).to.be.NaN;
        });

        it('treats null as 0', () => {
            expect(ceil(null)).to.equal(0);
            expect(ceil(3.5, null)).to.equal(4);
        });

        it('treats undefined precision as 0', () => {
            expect(ceil(4.5, undefined)).to.equal(5);
        });
    });

    // ============================================
    // PRECISION PARAMETER EDGE CASES
    // ============================================
    describe('Precision Parameter Edge Cases', () => {
        it('handles string precision parameter', () => {
            expect(ceil(4.006, 'string')).to.equal(5);
            expect(ceil(4.006, 'abc')).to.equal(5);
        });

        it('handles null precision parameter', () => {
            expect(ceil(4.5, null)).to.equal(5);
        });

        it('handles negative string precision', () => {
            expect(ceil(1234, '-2')).to.equal(1300);
        });

        it('handles very large precision values', () => {
            expect(ceil(1.123456789, 100)).to.equal(1.123456789);
        });

        it('handles very small negative precision', () => {
            expect(ceil(1, -10)).to.equal(10000000000);
        });
    });

    // ============================================
    // NEGATIVE NUMBER BEHAVIOR
    // ============================================
    describe('Negative Number Behavior', () => {
        it('rounds negative decimals toward zero', () => {
            expect(ceil(-4.006)).to.equal(-4);
            expect(ceil(-4.1)).to.equal(-4);
            expect(ceil(-0.5)).to.equal(0);
            expect(ceil(-0.001)).to.equal(0);
        });

        it('rounds negative numbers with positive precision', () => {
            expect(ceil(-6.004, 2)).to.equal(-6);
            expect(ceil(-6.001, 1)).to.equal(-6);
            expect(ceil(-1.234, 2)).to.equal(-1.23);
        });

        it('rounds negative numbers with negative precision', () => {
            expect(ceil(-1234, -2)).to.equal(-1200);
            expect(ceil(-1234, -1)).to.equal(-1230);
            expect(ceil(-6040, -2)).to.equal(-6000);
        });

        it('handles negative zero', () => {
            expect(ceil(-0)).to.equal(0);
            expect(ceil(-0, 2)).to.equal(0);
        });
    });

    // ============================================
    // BOUNDARY AND EDGE CASES
    // ============================================
    describe('Boundary and Edge Cases', () => {
        it('handles numbers just below integer boundary', () => {
            expect(ceil(4.9999999)).to.equal(5);
            expect(ceil(99.0000001)).to.equal(100);
        });

        it('handles numbers just above integer', () => {
            expect(ceil(5.0000001)).to.equal(6);
        });

        it('handles maximum safe integer', () => {
            const max = Number.MAX_SAFE_INTEGER;
            expect(ceil(max)).to.equal(max);
        });

        it('handles minimum safe integer', () => {
            const min = Number.MIN_SAFE_INTEGER;
            expect(ceil(min)).to.equal(min);
        });

        it('handles zero boundary cases', () => {
            expect(ceil(0.0)).to.equal(0);
            expect(ceil(-0.0)).to.equal(0);
        });
    });

    // ============================================
    // SEQUENTIAL AND CHAINED OPERATIONS
    // ============================================
    describe('Sequential and Chained Operations', () => {
        it('performs sequential ceiling operations', () => {
            const step1 = ceil(4.5);
            const step2 = ceil(step1 + 0.1);
            expect(step2).to.equal(6);
        });

        it('chains ceiling operations with different precisions', () => {
            const step1 = ceil(6.004, 2);
            const step2 = ceil(step1, 1);
            expect(step2).to.equal(6.1);
        });

        it('handles mixed positive and negative operations', () => {
            const step1 = ceil(4.5);
            const step2 = ceil(-step1);
            expect(step2).to.equal(-5);
        });
    });

    // ============================================
    // MATHEMATICAL PROPERTIES
    // ============================================
    describe('Mathematical Properties', () => {
        it('idempotent property: ceil(ceil(x)) = ceil(x)', () => {
            expect(ceil(ceil(4.5))).to.equal(ceil(4.5));
            expect(ceil(ceil(6.004, 2), 2)).to.equal(ceil(6.004, 2));
        });

        it('monotonic property: if x <= y then ceil(x) <= ceil(y)', () => {
            expect(ceil(3.1)).to.be.lte(ceil(4.1));
            expect(ceil(4.001, 2)).to.be.lte(ceil(4.009, 2));
        });

        it('preserves order for integers', () => {
            expect(ceil(5)).to.equal(5);
            expect(ceil(100)).to.equal(100);
            expect(5).to.be.lte(100);
        });

        it('ceil(x) >= x for all x', () => {
            expect(ceil(4.1)).to.be.gte(4.1);
            expect(ceil(0.001)).to.be.gte(0.001);
            expect(ceil(-4.9)).to.be.gte(-4.9);
        });

        it('ceil(x) - x is less than 1', () => {
            const diff1 = ceil(4.1) - 4.1;
            const diff2 = ceil(0.001) - 0.001;
            expect(diff1).to.be.lte(1);
            expect(diff2).to.be.lte(1);
        });
    });

    // ============================================
    // TYPE COERCION
    // ============================================
    describe('Type Coercion', () => {
        it('handles boolean true as 1', () => {
            expect(ceil(true)).to.equal(1);
        });

        it('handles boolean false as 0', () => {
            expect(ceil(false)).to.equal(0);
        });

        it('handles objects with valueOf method', () => {
            const obj = { valueOf: () => 4.5 };
            expect(ceil(obj)).to.equal(5);
        });

        it('handles arrays with single numeric element', () => {
            expect(ceil([4.5])).to.equal(5);
            expect(ceil([6.004], 2)).to.equal(6.01);
        });
    });

    // ============================================
    // PRECISION CONSISTENCY
    // ============================================
    describe('Precision Consistency', () => {
        it('maintains consistent rounding behavior across ranges', () => {
            expect(ceil(1.01, 1)).to.equal(1.1);
            expect(ceil(10.01, 1)).to.equal(10.1);
            expect(ceil(100.01, 1)).to.equal(100.1);
        });

        it('maintains precision across magnitude changes', () => {
            expect(ceil(0.001, 2)).to.equal(0.01);
            expect(ceil(0.01, 2)).to.equal(0.01);
            expect(ceil(0.1, 2)).to.equal(0.1);
        });

        it('handles alternating positive and negative precision', () => {
            const result1 = ceil(1234.5, -2);
            const result2 = ceil(result1, 1);
            expect(result1).to.equal(1300);
            expect(result2).to.equal(1300);
        });
    });

    // ============================================
    // DECIMAL PRECISION EDGE CASES
    // ============================================
    describe('Decimal Precision Edge Cases', () => {
        it('handles trailing zeros in decimals', () => {
            expect(ceil(1.5000, 2)).to.equal(1.5);
            expect(ceil(6.0000, 2)).to.equal(6);
        });

        it('handles very long decimal representations', () => {
            expect(ceil(1.123456789123456, 10)).to.equal(1.1234567892);
        });

        it('handles precision higher than decimal places', () => {
            expect(ceil(1.2, 5)).to.equal(1.2);
            expect(ceil(5, 3)).to.equal(5);
        });
    });
});
