const linkedListToArray = function (list) {
  let arr = [],
    node = list;

  while (node !== null) {
    arr.push(node.val);
    node = node.next;
  }

  return arr;
}

const createNode =  function (val, next) {
  return {
    val: val,
    next: next || null
  };
}

const arrayToLinkedList = function (arr) {
  if (arr.length === 0) {
    return null;
  }

  let list = null;
  for (let i = arr.length - 1; i >= 0; --i) {
    list = createNode(arr[i], list);
  }

  return list;
}

const getLength = function (list) {
  let length = 0;
  while (list) {
    list = list.next;
    ++length;
  }
  return length;
}

const createLinkedList = function () {
  return {
    head: null,
    tail: null
  };
}

const pushSingle = function (list, value) {
  let node = createNode(value);
  if (list.head) {
    list.tail.next = node;
    list.tail = node;
  }
  else {
    list.head = node;
    list.tail = node;
  }
}

const push = function (list) {
  for (let i = 1; i < arguments.length; ++i) {
    pushSingle(list, arguments[i]);
  }
}

module.exports = {
  linkedListToArray,
  createNode,
  arrayToLinkedList,
  getLength,
  createLinkedList,
  pushSingle,
  push,
};
