import { expect } from 'chai';
import camelCase from '../src/camelCase.js';

describe('Test suite for camelCase.js', () => {
	it("should convert 'Foo Bar' to 'fooBar'", () => {
		expect(camelCase('Foo Bar')).to.equal('fooBar');
	});

	it("should convert '--foo-bar--' to 'fooBar'", () => {
		expect(camelCase('--foo-bar--')).to.equal('fooBar');
	});

	it("should convert '__FOO_BAR__' to 'fooBar'", () => {
		expect(camelCase('__FOO_BAR__')).to.equal('fooBar');
	});

	it('should remove apostrophes and preserve case for following words', () => {
		expect(camelCase("don't stop")).to.equal('dontStop');
	});

	it('should handle numeric input by coercing to string', () => {
		expect(camelCase(123)).to.equal('123');
	});
});

