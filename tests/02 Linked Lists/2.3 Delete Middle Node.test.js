const expect = require('chai').expect;
const helpers = require('./Helpers.js')

describe('Delete Middle Node', () => {
  const { delMidNode } = require('../../answers/02 Linked Lists/2.3 Delete Middle Node.js');

  it('throws an error if node is invalid', function() {
    expect(() => delMidNode(null)).to.throw('invalid node');
    expect(() => delMidNode(undefined)).to.throw('invalid node');
    expect(() => delMidNode(helpers.arrayToLinkedList([11]))).to.throw('invalid node');
  });

  it('can delete multiple in long list', function() {
    let list = helpers.arrayToLinkedList([8, 6, 4, 2, 1]);
    delMidNode(list);
    delMidNode(list);
    delMidNode(list);
    delMidNode(list);
    expect(list.val).to.equal(1);
    expect(list.next).to.be.null;
  });

  [
    {
      list: [5, 8],
      node: 0,
      expected: [8]
    },
    {
      list: [5, 8, 3, 2, 7, 1, 4, 9, 15, 30],
      node: 8,
      expected: [5, 8, 3, 2, 7, 1, 4, 9, 30]
    },
    {
      list: [5, 8, 3, 2, 7, 1, 4, 9, 15, 30],
      node: 4,
      expected: [5, 8, 3, 2, 1, 4, 9, 15, 30]
    },
    {
      list: [5, 8, 3, 2, 7, 1, 4, 9, 15, 30],
      node: 1,
      expected: [5, 3, 2, 7, 1, 4, 9, 15, 30]
    },
    {
      list: [5, 8, 3, 2, 7, 1, 4, 9, 15, 30],
      node: 2,
      expected: [5, 8, 2, 7, 1, 4, 9, 15, 30]
    }
  ].forEach(context => {

    it(`removing node ${context.node} from list ${context.list}`, function() {
      let list = helpers.arrayToLinkedList(context.list),
        node = list;
      for (let i = 0; i < context.node; ++i) {
        node = node.next;
      }
      delMidNode(node);
      expect(helpers.linkedListToArray(list)).to.eql(context.expected);
    });

  });

});
