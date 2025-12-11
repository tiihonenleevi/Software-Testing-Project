import { expect } from 'chai';
import camelCase from '../src/camelCase.js';

describe('Test suite for camelCase.js', () => {
	it("should convert 'Camel Case' to 'camelCase'", () => {
		expect(camelCase('Camel Case')).to.equal(' camelCase');
	});

	it("should convert '--camel-case--' to 'camelCase'", () => {
		expect(camelCase('--camel-case--')).to.equal(' camelCase');
	});

	it("should convert '__CAMEL_CASE__' to 'camelCase'", () => {
		expect(camelCase('__CAMEL_CASE__')).to.equal(' camelCase');
	});

	it('should remove apostrophes and preserve case for following words', () => {
		expect(camelCase("don't stop")).to.equal(' dontStop');
	});

	it('should handle numeric input by coercing to string', () => {
		expect(camelCase(123)).to.equal(' 123');
	});
});

