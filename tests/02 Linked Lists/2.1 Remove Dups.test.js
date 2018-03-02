const expect = require('chai').expect;
const helpers = require('./Helpers.js')

describe('Remove Dups', () => {
  const { rmDups } = require('../../answers/02 Linked Lists/2.1 Remove Dups.js');

  it('returns input if falsy', function() {
    expect(rmDups(null)).to.be.null;
    expect(rmDups(undefined)).to.be.undefined;
  });

  [
    {
      list: [5],
      expected: [5]
    },
    {
      list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      expected: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    },
    {
      list: [5, 5, 5, 5, 5],
      expected: [5]
    },
    {
      list: [2, 4, 5, 4, 5, 4, 6, 7, 6, 8],
      expected: [2, 4, 5, 6, 7, 8]
    },
    {
      list: [8, 6, 8, 6],
      expected: [8, 6]
    },
    {
      list: [8, 8, 9, 9, 9, 6, 6, 4, 4, 6, 6, 4, 4, 6, 9, 4, 8, 2, 3, 1],
      expected: [8, 9, 6, 4, 2, 3, 1]
    }
  ].forEach(context => {

    it(`list ${context.list} correctly updated to ${context.expected}`, function() {
      let list = helpers.arrayToLinkedList(context.list);
      rmDups(list);
      expect(helpers.linkedListToArray(list)).to.eql(context.expected);
    });

  });

});
