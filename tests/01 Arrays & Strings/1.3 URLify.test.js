const expect = require('chai').expect;

describe('URLify', () => {
  const { URLify } = require('../../answers/01 Arrays & Strings/1.3 URLify.js');

    it('should handle empty string', () => {
      expect(URLify('', 0)).to.equal('');
    });

    it('should return type string', () => {
      expect(URLify('Mr John Smith    ', 13)).to.be.a('string');
      expect(URLify('', 0)).to.be.a('string');
    });

    it('should URLify String', () => {
      expect(URLify('Mr John Smith    ', 13)).to.equal('Mr%20John%20Smith');
      expect(URLify('Toronto Maple Leafs    ' ,19)).to.equal('Toronto%20Maple%20Leafs');
    });

    it('should Handle no spaces', () => {
      expect(URLify('Whoa', 4)).to.equal('Whoa');
      expect(URLify('T' ,1)).to.equal('T');
    });

    it('should handle multiple spaces between words', () => {
      expect(URLify('Whoa  two  spaces  between  words                ', 33)).to.equal('Whoa%20%20two%20%20spaces%20%20between%20%20words');
      expect(URLify('hi    bob        ', 9)).to.equal('hi%20%20%20%20bob');
    });

    it('should handle only spaces', () => {
      expect(URLify('   ', 1)).to.equal('%20');
      expect(URLify('                              ', 10)).to.equal('%20%20%20%20%20%20%20%20%20%20');
    });

});
