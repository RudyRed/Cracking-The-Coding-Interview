// Sort Stack: Write a program to sort a stack such that the smallest items are on
// the top. You can use an additional temporary stack, but you may not copy the
// elements into any other data structure (such as an array). The stack supports
// the following operations: push, pop, peek, and isEmpty.

const sortStack = function (stack) {

};

const peek = function (stack) {
  return stack[stack.length - 1];
}

const isEmpty = function (stack) {
  return stack.length === 0;
}

module.exports = {
  sortStack,
};
