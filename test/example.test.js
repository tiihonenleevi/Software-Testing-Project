import { expect } from 'chai';
import add from '../src/add.js';

describe('Example Test', () => {
    it('should verify equality', () => {
        expect(add(2, 2)).to.equal(4);
    });
});