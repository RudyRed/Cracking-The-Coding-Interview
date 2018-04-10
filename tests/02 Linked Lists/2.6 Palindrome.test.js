const { expect } = require('chai');

  describe('Palindrome', () => {
    const { isPalindrome } = require('../../answers/02 Linked Lists/2.6 Palindrome.js');
    const { arrayToLinkedList, linkedListToArray } = require('./Helpers.js');

    describe('ch2-q6: Palindrome', () => {

    [
      [1, 2, 1],
      [1, 1],
      [2, 1, 3, 3, 1, 2],
      [2, 1, 3, 8, 9, 16, 16, 9, 8, 3, 1, 2],
      [2, 1, 3, 8, 9, 16, 11, 16, 9, 8, 3, 1, 2]
    ].forEach(arg => {

      it(`returns true for list ${arg}`, function() {
        let list = arrayToLinkedList(arg);
        expect(isPalindrome(list)).to.be.true;
        // verify list is umodified
        expect(linkedListToArray(list)).to.eql(arg);
      });

    });

    [
      [1, 2, 2],
      [2, 1],
      [2, 1, 5, 4, 3, 2]
    ].forEach(arg => {

      it(`returns false for list ${arg}`, function() {
        let list = arrayToLinkedList(arg);
        expect(isPalindrome(list)).to.be.false;
        // verify list is umodified
        expect(linkedListToArray(list)).to.eql(arg);
      });

    });

  });

});
