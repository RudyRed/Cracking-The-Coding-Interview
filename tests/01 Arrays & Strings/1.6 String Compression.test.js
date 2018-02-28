const expect = require('chai').expect;

describe('String Compression', () => {
  const { strComp } = require('../../answers/01 Arrays & Strings/1.6 String Compression.js');

  it('should return a string', () => {
    expect(strComp('aaabbbccc')).to.be.a('string');
    expect(strComp('abc')).to.be.a('string');
    expect(strComp('')).to.be.a('string');
  });

  it('should handle empty strings', () => {
    expect(strComp('')).to.equal('');
  });

  it('should return compressed string if its shorter than originial', () => {
    expect(strComp('aaaaabbbbb')).to.equal('a5b5');
    expect(strComp('abbbbba')).to.equal('a1b5a1');
    expect(strComp('aabbaaa')).to.equal('a2b2a3');
  });

  it('should return uncompressed string if compressed string is not shorter', () => {
    expect(strComp('aabbccdd')).to.equal('aabbccdd');
    expect(strComp('a')).to.equal('a');
    expect(strComp('aabbccca')).to.equal('aabbccca');
  });

});
