// Remove Dups: Write code to remove duplicates from an unsorted linked list.
// FOLLOW UP
// How would you solve this problem if a temporary buffer is not allowed?


const rmDups = function (list) { // with tempBuffer without would be O(n^2) time
  const obj = {};
  let prev = null;
  let curr = list;

  while (curr) {

    if (obj[curr.val]) {
        prev.next = curr.next;
    } else {
      obj[curr.val] = 1;
      prev = curr;
    }

    curr = curr.next;
  }

  return list;
};

module.exports = {
  rmDups,
};
