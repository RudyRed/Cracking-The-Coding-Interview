const expect = require('chai').expect;

describe('URLify', () => {
  const { URLify } = require('../../answers/01 Arrays & Strings/1.3 URLify.js');

  it('should return an Array of Strings', () => {
    expect(URLify('Mr John Smith    '.split``, 13)).to.be.a('array');
    expect(URLify('A'.split``, 1)[0]).to.be.a('string');
  });

    it('should handle empty Array', () => {
      expect(URLify([], 0)).to.eql([]);
    });

    it('should URLify Array/StringArray', () => {
      expect(URLify('Mr John Smith    '.split``, 13)).to.eql('Mr%20John%20Smith'.split``);
      expect(URLify('Toronto Maple Leafs    '.split``, 19)).to.eql('Toronto%20Maple%20Leafs'.split``);
    });

    it('should Handle no spaces', () => {
      expect(URLify('Whoa'.split``, 4)).to.eql('Whoa'.split``);
      expect(URLify('T'.split``, 1)).to.eql('T'.split``);
    });

    it('should handle multiple spaces between words', () => {
      expect(URLify('Whoa  two  spaces  between  words                '.split``, 33)).to.eql('Whoa%20%20two%20%20spaces%20%20between%20%20words'.split``);
      expect(URLify('hi    bob        '.split``, 9)).to.eql('hi%20%20%20%20bob'.split``);
    });

    it('should handle only spaces', () => {
      expect(URLify('   '.split``, 1)).to.eql('%20'.split``);
      expect(URLify('                              '.split``, 10)).to.eql('%20%20%20%20%20%20%20%20%20%20'.split``);
    });

});
