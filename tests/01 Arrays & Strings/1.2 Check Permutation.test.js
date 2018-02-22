const expect = require('chai').expect;

describe('Check Permutation', () => {
  const { checkIfPermutation } = require('../../answers/01 Arrays & Strings/1.2 Check Permutation.js');

    it('should return true for empty strings', () => {
      expect(checkIfPermutation('', '')).to.be.true;
    });

    it('should return type boolean', () => {
      expect(checkIfPermutation('', '')).to.be.a('boolean');
      expect(checkIfPermutation('a', '')).to.be.a('boolean');
    });

    it('should return true for permutations', () => {
      expect(checkIfPermutation('abcdefghi', 'ihgfedcba')).to.be.true;
      expect(checkIfPermutation('12345', '52413')).to.be.true;
      expect(checkIfPermutation('()[]{}\/', '([\{}/])')).to.be.true;
    });

    it('should return false for non-permutations', () => {
      expect(checkIfPermutation('123', '21')).to.be.false;
      expect(checkIfPermutation('abcdefg', 'gfedccba')).to.be.false;
      expect(checkIfPermutation('', '()[]{}\$/.,;!@#$%^&*-_=+~')).to.be.false;
      expect(checkIfPermutation('(((())))', '((())))')).to.be.false;
    });

});
