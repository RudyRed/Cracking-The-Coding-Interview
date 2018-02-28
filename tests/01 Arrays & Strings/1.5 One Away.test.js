const expect = require('chai').expect;

describe('One Away', () => {
  const { oneAway } = require('../../answers/01 Arrays & Strings/1.5 One Away.js');

  it('should return a boolean', () => {
    expect(oneAway('abcd', 'asdf')).to.be.a('boolean');
    expect(oneAway('pale', 'ple')).to.be.a('boolean');
  });

  it('should handle empty strings', () => {
    expect(oneAway('', '')).to.be.true;
    expect(oneAway('a', '')).to.be.true;
    expect(oneAway('', '$')).to.be.true;
    expect(oneAway('2w', '')).to.be.false;
    expect(oneAway('', '$0')).to.be.false;
  });

  it('should return true one away insertions/deletion', () => {
    expect(oneAway('pale', 'ple')).to.be.true;
    expect(oneAway('hello', 'ello')).to.be.true;
    expect(oneAway('las', 'last')).to.be.true;
  });

  it('should return true one away replacement', () => {
    expect(oneAway('ple', 'pale')).to.be.true;
    expect(oneAway('hello', 'jello')).to.be.true;
    expect(oneAway('last', 'lase')).to.be.true;
    expect(oneAway('last', 'las')).to.be.true;
    expect(oneAway('ast', 'last')).to.be.true;
  });

  it('should return true for same strings', () => {
    expect(oneAway('pale', 'pale')).to.be.true;
    expect(oneAway('hello', 'hello')).to.be.true;
    expect(oneAway('last', 'last')).to.be.true;
  });

  it('should return false more than one away', () => {
    expect(oneAway('pale', 'bake')).to.be.false;
    expect(oneAway('hello', 'ellor')).to.be.false;
    expect(oneAway('alast', 'las')).to.be.false;
    expect(oneAway('ple', 'pswe')).to.be.false;
    expect(oneAway('pale', 'elap')).to.be.false;
  });

});
