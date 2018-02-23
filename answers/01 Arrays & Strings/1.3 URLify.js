// URLify: Write a method to replace all spaces in a string with '%20'. You may assume
// that the string has sufficient space at the end to hold the additional characters,
// and that you are given the "true" length of the string. (Note: If implementing
//   in Java, please use a character array so that you can perform this operation in place.)
// EXAMPLE
// Input: "Mr John Smith " J 13 Output: "Mr%20John%20Smith"

const URLify = function (strArr, length) {
  //  array is required becuase in Javascript strings are immutable
  let nextInsertIndex = strArr.length - 1;
  let i = length;

  while (--i < nextInsertIndex) {
    if (strArr[i] === ' ') {
      strArr[nextInsertIndex--] = '0';
      strArr[nextInsertIndex--] = '2';
      strArr[nextInsertIndex--] = '%';
    } else {
      strArr[nextInsertIndex--] = strArr[i];
    }
  }

  return strArr;
};

module.exports = {
  URLify,
};
