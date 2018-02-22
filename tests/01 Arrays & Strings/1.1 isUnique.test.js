const expect = require('chai').expect;

describe('Is Unique', () => {
  const { isUnique } = require('../../answers/01 Arrays & Strings/1.1 isUnique.js');

    it('should return true for empty string', () => {
      expect(isUnique('')).to.equal(true);
    });

    it('should return type boolean', () => {
      expect(isUnique('')).to.be.a('boolean');
      expect(isUnique('aa')).to.be.a('boolean');
    });

    it('should return true for unique string', () => {
      expect(isUnique('abcdefghijklmnopqrstuvwxyz'), 'abcdefghijklmnopqrstuvwxyz').to.be.true;
      expect(isUnique(' '), ' ').to.be.true;
      expect(isUnique('()[]{}\/.,;!@#$%^&*-_=+~'), '()[]{}\/.,;!@#$%^&*-_=+~').to.be.true;
      expect(isUnique('1234567890abcdefghijk()[]{}\/.,;!@#$%^&*-_=+~'), '1234567890abcdefghijk()[]{}\/.,;!@#$%^&*-_=+~').to.be.true;
    });

    it('should return false for strigns with duplicates', () => {
      expect(isUnique('abcdefghijklmnopqrstuvwexyz'), 'abcdefghijklmnopqrstuvwexyz').to.be.false;
      expect(isUnique('  '), '  ').to.be.false;
      expect(isUnique('()[]{}\$/.,;!@#$%^&*-_=+~'), '()[]{}\$/.,;!@#$%^&*-_=+~').to.be.false;
      expect(isUnique('(((())))'), '(((())))').to.be.false;
    });

});
