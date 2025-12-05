import { expect } from 'chai'
import ceil from '../src/ceil.js'

describe('ceil', () => {
    it('should round up to nearest integer when precision is not provided', () => {
        expect(ceil(4.006)).to.equal(5)
        expect(ceil(4.1)).to.equal(5)
        expect(ceil(4.001)).to.equal(5)
    })

    it('should round up to specified decimal precision', () => {
        expect(ceil(6.004, 2)).to.equal(6.01)
        expect(ceil(6.009, 2)).to.equal(6.01)
        expect(ceil(6.001, 1)).to.equal(6.1)
    })

    it('should round up with negative precision', () => {
        expect(ceil(6040, -2)).to.equal(6100)
        expect(ceil(1234, -2)).to.equal(1300)
        expect(ceil(1234, -3)).to.equal(2000)
    })

    it('should handle whole numbers', () => {
        expect(ceil(5)).to.equal(5)
        expect(ceil(100, 2)).to.equal(100)
    })

    it('should handle zero', () => {
        expect(ceil(0)).to.equal(0)
        expect(ceil(0, 2)).to.equal(0)
    })

    it('should handle negative numbers', () => {
        expect(ceil(-4.006)).to.equal(-4)
        expect(ceil(-4.5)).to.equal(-4)
        expect(ceil(-6.004, 2)).to.equal(-6)
    })

    it('should handle precision of 0', () => {
        expect(ceil(4.5, 0)).to.equal(5)
    })

    it('Trying to round with string precision should be the same as precision 0', () => {
        expect(ceil(4.006, 'string')).to.equal(5)
    })

    it('should handle large precision values', () => {
        expect(ceil(1.23456789, 8)).to.equal(1.23456789)
        expect(ceil(1.2345678912345, 12)).to.equal(1.234567891235)
    })

    it('should handle number as string', () => {
        expect(ceil('4.006')).to.equal(5)
        expect(ceil('6.004', 2)).to.equal(6.01)
        expect(ceil('6040', -2)).to.equal(6100)
    })
})
