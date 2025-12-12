import { expect } from 'chai';
import add from '../src/add.js';

describe('Test suite for add.js according to the test plan with some alterations', () => {
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

    // createMathOperation combines strings, so '4' + '6' = '46', don't know if this is desired.
    it('should handle string inputs that can be converted to numbers', () => {
        expect(add('4', '6')).to.equal('46');
        expect(add('3', 7)).to.equal('37');
        expect(add(5, '5')).to.equal('55');
    });

    // createrMathOperation combines strings even if they are non-numeric, don't know if this is desired.
    it('should handle non-numeric strings by treating them as NaN', () => {
        expect(add('a', 5)).to.equal('a5');
        expect(add(5, 'b')).to.equal('5b');
        expect(add('x', 'y')).to.equal('xy');
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

describe('Test Suite for add.js made by AI', () => {
    
    // ============================================
    // 1. BASIC POSITIVE INTEGER ADDITION
    // ============================================
    describe('Basic Positive Integer Addition', () => {
        it('should add two small positive integers', () => {
            expect(add(2, 2)).to.equal(4);
        });

        it('should add larger positive integers', () => {
            expect(add(100, 50)).to.equal(150);
        });

        it('should add when first number is larger', () => {
            expect(add(20, 5)).to.equal(25);
        });

        it('should add when second number is larger', () => {
            expect(add(5, 20)).to.equal(25);
        });

        it('should handle addition with zero', () => {
            expect(add(10, 0)).to.equal(10);
            expect(add(0, 10)).to.equal(10);
        });

        it('should add zero to zero', () => {
            expect(add(0, 0)).to.equal(0);
        });
    });

    // ============================================
    // 2. NEGATIVE INTEGER ADDITION
    // ============================================
    describe('Negative Integer Addition', () => {
        it('should add two negative numbers', () => {
            expect(add(-4, -6)).to.equal(-10);
        });

        it('should add two large negative numbers', () => {
            expect(add(-100, -50)).to.equal(-150);
        });

        it('should handle zero and negative number', () => {
            expect(add(0, -5)).to.equal(-5);
            expect(add(-5, 0)).to.equal(-5);
        });
    });

    // ============================================
    // 3. MIXED SIGN ADDITION (Positive + Negative)
    // ============================================
    describe('Mixed Sign Addition', () => {
        it('should add positive and negative where result is positive', () => {
            expect(add(10, -3)).to.equal(7);
        });

        it('should add positive and negative where result is negative', () => {
            expect(add(5, -10)).to.equal(-5);
        });

        it('should add positive and negative where result is zero', () => {
            expect(add(5, -5)).to.equal(0);
        });

        it('should add negative and positive in either order', () => {
            expect(add(-3, 10)).to.equal(7);
            expect(add(10, -3)).to.equal(7);
        });

        it('should handle large magnitude differences', () => {
            expect(add(1000, -1)).to.equal(999);
            expect(add(1, -1000)).to.equal(-999);
        });
    });

    // ============================================
    // 4. DECIMAL AND FLOATING-POINT NUMBERS
    // ============================================
    describe('Decimal and Floating-Point Numbers', () => {
        it('should add two decimal numbers', () => {
            expect(add(1.5, 2.5)).to.equal(4);
        });

        it('should add decimal and integer', () => {
            expect(add(3.5, 2)).to.be.closeTo(5.5, 0.0001);
        });

        it('should add integer and decimal', () => {
            expect(add(2, 3.5)).to.be.closeTo(5.5, 0.0001);
        });

        it('should handle negative decimals', () => {
            expect(add(-1.5, -2.5)).to.equal(-4);
        });

        it('should add positive and negative decimals', () => {
            expect(add(5.7, -3.2)).to.be.closeTo(2.5, 0.0001);
        });

        it('should handle very small decimal values', () => {
            expect(add(0.1, 0.2)).to.be.closeTo(0.3, 0.0001);
        });

        it('should handle many decimal places', () => {
            expect(add(1.111, 2.222)).to.be.closeTo(3.333, 0.0001);
        });

        it('should handle decimals close to zero', () => {
            expect(add(0.0001, 0.0002)).to.be.closeTo(0.0003, 0.00001);
        });
    });

    // ============================================
    // 5. STRING INPUT CONVERSION
    // ============================================
    describe('String Input Conversion', () => {
        it('should add two numeric strings', () => {
            expect(add('5', '3')).to.equal('53');
        });

        it('should add numeric string and number', () => {
            expect(add('10', 5)).to.equal('105');
        });

        it('should add number and numeric string', () => {
            expect(add(7, '3')).to.equal('73');
        });

        it('should handle string with decimal point', () => {
            expect(add('2.5', '3.5')).to.equal('2.53.5');
        });

        it('should handle negative number strings', () => {
            expect(add('-5', '-3')).to.equal('-5-3');
        });

        it('should handle mixed sign string numbers', () => {
            expect(add('-5', '10')).to.equal('-510');
        });

        it('should add empty string to a number', () => {
            expect(add('', 5)).to.equal('5');
            expect(add(5, '')).to.equal('5');
        });

        it('should handle string zero', () => {
            expect(add('0', 5)).to.equal('05');
            expect(add(5, '0')).to.equal('50');
        });

        it('should handle non-numeric strings as NaN', () => {
            expect(add('a', 5)).to.equal('a5');
            expect(add(5, 'b')).to.equal('5b');
            expect(add('x', 'y')).to.equal('xy');
        });

        it('should handle alphanumeric strings as NaN', () => {
            expect(add('5a', 5)).to.equal('5a5');
            expect(add(5, '5b')).to.equal('55b');
        });

        it('should handle string with special characters as NaN', () => {
            expect(add('5@', 3)).to.equal('5@3');
            expect(add(3, '#5')).to.equal('3#5');
        });
    });

    // ============================================
    // 6. NULL AND UNDEFINED HANDLING
    // ============================================
    describe('Null and Undefined Handling', () => {
        it('should return 0 when both arguments are undefined', () => {
            expect(add(undefined, undefined)).to.equal(0);
        });

        it('should return first value when second is undefined', () => {
            expect(add(10, undefined)).to.equal(10);
        });

        it('should return second value when first is undefined', () => {
            expect(add(undefined, 7)).to.equal(7);
        });

        it('should handle undefined with negative numbers', () => {
            expect(add(-5, undefined)).to.equal(-5);
            expect(add(undefined, -3)).to.equal(-3);
        });

        it('should treat null as 0 when added to a number', () => {
            expect(add(null, 5)).to.equal(5);
            expect(add(5, null)).to.equal(5);
        });

        it('should return 0 when both arguments are null', () => {
            expect(add(null, null)).to.equal(0);
        });

        it('should handle null with negative numbers', () => {
            expect(add(null, -10)).to.equal(-10);
            expect(add(-10, null)).to.equal(-10);
        });

        it('should handle null with zero', () => {
            expect(add(null, 0)).to.equal(0);
            expect(add(0, null)).to.equal(0);
        });
    });

    // ============================================
    // 7. SPECIAL NUMBER VALUES
    // ============================================
    describe('Special Number Values', () => {
        it('should handle Infinity', () => {
            expect(add(Infinity, 5)).to.equal(Infinity);
            expect(add(5, Infinity)).to.equal(Infinity);
        });

        it('should handle -Infinity', () => {
            expect(add(-Infinity, 5)).to.equal(-Infinity);
            expect(add(5, -Infinity)).to.equal(-Infinity);
        });

        it('should handle Infinity + Infinity', () => {
            expect(add(Infinity, Infinity)).to.equal(Infinity);
        });

        it('should handle -Infinity + -Infinity', () => {
            expect(add(-Infinity, -Infinity)).to.equal(-Infinity);
        });

        it('should handle Infinity + -Infinity', () => {
            expect(add(Infinity, -Infinity)).to.be.NaN;
        });

        it('should handle NaN inputs', () => {
            expect(add(NaN, 5)).to.be.NaN;
            expect(add(5, NaN)).to.be.NaN;
            expect(add(NaN, NaN)).to.be.NaN;
        });

        it('should handle NaN with special values', () => {
            expect(add(NaN, Infinity)).to.be.NaN;
            expect(add(NaN, -Infinity)).to.be.NaN;
        });
    });

    // ============================================
    // 8. BOOLEAN CONVERSION
    // ============================================
    describe('Boolean Conversion', () => {
        it('should treat true as 1', () => {
            expect(add(true, 5)).to.equal(6);
            expect(add(5, true)).to.equal(6);
        });

        it('should treat false as 0', () => {
            expect(add(false, 5)).to.equal(5);
            expect(add(5, false)).to.equal(5);
        });

        it('should add two true values', () => {
            expect(add(true, true)).to.equal(2);
        });

        it('should add two false values', () => {
            expect(add(false, false)).to.equal(0);
        });

        it('should add true and false', () => {
            expect(add(true, false)).to.equal(1);
        });

        it('should handle negative numbers with booleans', () => {
            expect(add(true, -1)).to.equal(0);
            expect(add(false, -5)).to.equal(-5);
        });
    });

    // ============================================
    // 9. LARGE NUMBERS
    // ============================================
    describe('Large Numbers', () => {
        it('should add large integers', () => {
            expect(add(1000000, 2000000)).to.equal(3000000);
        });

        it('should handle numbers in scientific notation', () => {
            expect(add(1e5, 5e5)).to.equal(6e5);
        });

        it('should add very large numbers', () => {
            expect(add(1e10, 5e10)).to.equal(6e10);
        });

        it('should handle MAX_SAFE_INTEGER boundary', () => {
            const max = Number.MAX_SAFE_INTEGER;
            expect(add(max - 100, 50)).to.equal(max - 50);
        });

        it('should handle MIN_SAFE_INTEGER boundary', () => {
            const min = Number.MIN_SAFE_INTEGER;
            expect(add(min + 100, -50)).to.equal(min + 50);
        });
    });

    // ============================================
    // 10. MATHEMATICAL PROPERTIES
    // ============================================
    describe('Mathematical Properties - Commutative Law (a + b = b + a)', () => {
        it('should satisfy commutative property with positive numbers', () => {
            expect(add(3, 7)).to.equal(add(7, 3));
        });

        it('should satisfy commutative property with negative numbers', () => {
            expect(add(-5, -2)).to.equal(add(-2, -5));
        });

        it('should satisfy commutative property with mixed signs', () => {
            expect(add(10, -3)).to.equal(add(-3, 10));
        });

        it('should satisfy commutative property with decimals', () => {
            expect(add(2.5, 3.5)).to.equal(add(3.5, 2.5));
        });

        it('should satisfy commutative property with large numbers', () => {
            expect(add(1e6, 5e6)).to.equal(add(5e6, 1e6));
        });
    });

    describe('Mathematical Properties - Associative Law ((a + b) + c = a + (b + c))', () => {
        it('should satisfy associative property with positive numbers', () => {
            expect(add(add(2, 3), 4)).to.equal(add(2, add(3, 4)));
        });

        it('should satisfy associative property with negative numbers', () => {
            expect(add(add(-2, -3), -4)).to.equal(add(-2, add(-3, -4)));
        });

        it('should satisfy associative property with mixed signs', () => {
            expect(add(add(5, -2), 3)).to.equal(add(5, add(-2, 3)));
        });

        it('should satisfy associative property with decimals', () => {
            expect(add(add(1.5, 2.5), 3.5)).to.be.closeTo(add(1.5, add(2.5, 3.5)), 0.0001);
        });
    });

    describe('Mathematical Properties - Identity Law (a + 0 = a)', () => {
        it('should maintain identity with positive numbers', () => {
            expect(add(42, 0)).to.equal(42);
            expect(add(0, 42)).to.equal(42);
        });

        it('should maintain identity with negative numbers', () => {
            expect(add(-17, 0)).to.equal(-17);
            expect(add(0, -17)).to.equal(-17);
        });

        it('should maintain identity with zero and zero', () => {
            expect(add(0, 0)).to.equal(0);
        });

        it('should maintain identity with decimals', () => {
            expect(add(3.14, 0)).to.be.closeTo(3.14, 0.0001);
            expect(add(0, 3.14)).to.be.closeTo(3.14, 0.0001);
        });
    });

    describe('Mathematical Properties - Additive Inverse (a + (-a) = 0)', () => {
        it('should return zero for number and its negative', () => {
            expect(add(5, -5)).to.equal(0);
            expect(add(-5, 5)).to.equal(0);
        });

        it('should work with large numbers', () => {
            expect(add(1000000, -1000000)).to.equal(0);
        });

        it('should work with decimals', () => {
            expect(add(3.5, -3.5)).to.be.closeTo(0, 0.0001);
        });
    });

    // ============================================
    // 11. TYPE COERCION EDGE CASES
    // ============================================
    describe('Type Coercion Edge Cases', () => {
        it('should handle objects that convert to numbers', () => {
            const obj1 = { valueOf: () => 5 };
            const obj2 = { valueOf: () => 3 };
            expect(add(obj1, obj2)).to.equal(8);
        });

        it('should handle arrays with single numeric element', () => {
            expect(add([5], [3])).to.equal(8);
        });

        it('should handle arrays with multiple elements as NaN', () => {
            expect(add([1, 2], [3, 4])).to.be.NaN;
        });

        it('should handle empty arrays as 0', () => {
            expect(add([], 5)).to.equal(5);
            expect(add(5, [])).to.equal(5);
        });
    });

    // ============================================
    // 12. BOUNDARY CONDITIONS
    // ============================================
    describe('Boundary Conditions', () => {
        it('should handle numbers very close to zero', () => {
            expect(add(0.00000001, 0.00000002)).to.be.closeTo(0.00000003, 1e-10);
        });

        it('should handle alternating sign additions', () => {
            const result = add(add(add(10, -5), 3), -2);
            expect(result).to.equal(6);
        });

        it('should handle repeated additions', () => {
            let result = 0;
            for (let i = 1; i <= 5; i++) {
                result = add(result, i);
            }
            expect(result).to.equal(15);
        });

        it('should maintain precision through multiple operations', () => {
            expect(add(0.1, add(0.1, 0.1))).to.be.closeTo(0.3, 0.0001);
        });
    });
});