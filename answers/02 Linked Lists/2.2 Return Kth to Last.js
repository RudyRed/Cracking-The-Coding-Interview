// Return Kth to Last: Implement an algorithm to find the kth to last
// element of a singly linked list.

// k of 0 is the last node of list.

const kToLast = function (list, k) {
  if (!list) throw Error('invalid list');
  let count = 0;
  let curr = list;

  while (curr) {
    count++;
    curr = curr.next;
  }

  if (count <= k) throw Error('list is not long enough');

  curr = list;

  for (let i = 0; i < count - 1 - k; i++) curr = curr.next;

  return curr.val;
};

module.exports = {
  kToLast,
};
