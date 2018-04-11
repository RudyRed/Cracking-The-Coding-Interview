const { expect } = require('chai');

describe('Loop Detection', () => {
  const { findStartOfLoop } = require('../../answers/02 Linked Lists/2.8 Loop Detection.js');
  const { createLinkedList, push } = require('./Helpers.js');

  beforeEach(() => {
      this.list = createLinkedList();
    });

    it('returns null with empty list', () => {
      expect(findStartOfLoop(this.list.head)).to.be.null;
    });

    it('returns null when there is no loop', () => {
      push(this.list, 1, 2, 3, 4, 5, 6);
      expect(findStartOfLoop(this.list.head)).to.be.null;
    });

    it('returns node when there is a loop 1', () => {
      push(this.list, 1, 2, 3, 4, 5, 6);
      let node = this.list.head;
      this.list.tail.next = node;
      expect(findStartOfLoop(this.list.head)).to.equal(node);
    });

    it('returns node when there is a loop 2', () => {
      push(this.list, 1, 2, 3, 4, 5, 6);
      let node = this.list.head.next.next.next;
      this.list.tail.next = node;
      expect(findStartOfLoop(this.list.head)).to.equal(node);
    });

    it('returns node when there is a loop 3', () => {
      push(this.list, 1, 2, 3, 4, 5, 6);
      let node = this.list.tail;
      this.list.tail.next = node;
      expect(findStartOfLoop(this.list.head)).to.equal(node);
    });

});
