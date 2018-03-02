const expect = require('chai').expect;
const helpers = require('./Helpers.js')

describe('Return Kth to Last', () => {
  const { kToLast } = require('../../answers/02 Linked Lists/2.2 Return Kth to Last.js');

  it('throws an error if list is falsy', function() {
    expect(() => kToLast(null)).to.throw('invalid list');
    expect(() => kToLast(undefined)).to.throw('invalid list');
  });

  it('throws an error if list is shorter than k', function() {
    expect(() => kToLast(helpers.arrayToLinkedList([1]), 1)).to.throw('list is not long enough');
    expect(() => kToLast(helpers.arrayToLinkedList([1, 2, 3]), 3)).to.throw('list is not long enough');
    expect(() => kToLast(helpers.arrayToLinkedList([1, 2, 3]), 4)).to.throw('list is not long enough');
  });

  [
    {
      list: [5],
      k: 0
    },
    {
      list: [8, 5, 1],
      k: 0
    },
    {
      list: [8, 5, 1],
      k: 1
    },
    {
      list: [8, 5, 1],
      k: 2
    },
    {
      list: [8, 8, 9, 9, 9, 6, 6, 4, 4, 6, 6, 4, 4, 6, 9, 4, 8, 2, 3, 1],
      k: 8
    },
    {
      list: [8, 8, 9, 9, 9, 6, 6, 4, 4, 6, 6, 4, 4, 6, 9, 4, 8, 2, 3, 1],
      k: 16
    }
  ].forEach(context => {

    it(`can get the ${context.k}th to last element in ${context.list}`, function() {
      let list = helpers.arrayToLinkedList(context.list),
        expected = context.list[context.list.length - 1 - context.k];
      expect(kToLast(list, context.k)).to.eql(expected);
    });

  });

});
