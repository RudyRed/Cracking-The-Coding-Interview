const expect = require('chai').expect;

describe('Palinrome Permutation', () => {
  const { palinPerm } = require('../../answers/01 Arrays & Strings/1.4 Palindrome Permutation.js');

  it('should return a boolean', () => {
    expect(palinPerm('abcd')).to.be.a('boolean');
    expect(palinPerm('rraacce')).to.be.a('boolean');
  });

  it('should handle empty string', () => {
    expect(palinPerm('')).to.be.true;
  });

  it('should return true for even length possible palindromes', () => {
    expect(palinPerm('abcabc')).to.be.true;
    expect(palinPerm('eekkaallii')).to.be.true;
    expect(palinPerm('aa')).to.be.true;
  });

  it('should return false for even length non-palindromes', () => {
    expect(palinPerm('abcabd')).to.be.false;
    expect(palinPerm('(eekkaallii)')).to.be.false;
  });

  it('should return true for odd length possible palindromes', () => {
    expect(palinPerm('rraacce')).to.be.true;
    expect(palinPerm('tocatac')).to.be.true;
    expect(palinPerm('a')).to.be.true;
  });

  it('should return false for odd length non-palindromes', () => {
    expect(palinPerm('rraac2e')).to.be.false;
    expect(palinPerm('eKkaallii')).to.be.false;
  });

  it('Should handle/ignore spaces', () => {
    expect(palinPerm(' t   o   c a t a c ')).to.be.true;
    expect(palinPerm('  ')).to.be.true;
    expect(palinPerm('abc abc')).to.be.true;
    expect(palinPerm(' a  bc abw')).to.be.false;
    expect(palinPerm('e Kka a ll ii')).to.be.false;
  });

});
