const { expect } = require('chai');

describe('Sum Lists', () => {
  const { strRotation } = require('../../answers/02 Linked Lists/2.5 Sum Lists.js');
  const { arrayToLinkedList, linkedListToArray } = require('./Helpers.js');

  describe('ch2-q5: Sum Lists', function() {

    [
      {
        one: [1],
        two: [1],
        expected: [2]
      },
      {
        one: [1, 1],
        two: [4, 4],
        expected: [5, 5]
      },
      {
        one: [4, 4],
        two: [4, 8],
        expected: [8, 2, 1]
      },
      {
        one: [4, 5, 3],
        two: [8],
        expected: [2, 6, 3]
      },
      {
        one: [4, 9, 3],
        two: [8],
        expected: [2, 0, 4]
      },
      {
        one: [2, 9],
        two: [4, 9, 9, 9, 9, 9],
        expected: [6, 8, 0, 0, 0, 0, 1]
      },
      {
        one: [0],
        two: [9, 8, 7, 6, 5, 4, 3, 2, 1],
        expected: [9, 8, 7, 6, 5, 4, 3, 2, 1]
      }
    ].forEach(context => {

      it(`correctly adds ${context.one} and ${context.two}`, function() {
        let result = strRotation(arrayToLinkedList(context.one),
          arrayToLinkedList(context.two));
        expect(linkedListToArray(result)).to.eql(context.expected);
      });

    });

  });

});
