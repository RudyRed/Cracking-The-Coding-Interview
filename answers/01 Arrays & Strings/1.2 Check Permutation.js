// Given two strings, write a method to decide if one is a permutation of the other.

const checkIfPermutation = function (s1, s2) {
  let obj = {};

  for (let letter of s1) {
    if (obj[letter]) {
      obj[letter]++;
    } else {
      obj[letter] = 1;
    }
  }

  for (let letter of s2) {
    if (!obj[letter]) return false;
    obj[letter]--;
  }

  for (let key in obj) {
    if (obj[key]) return false;
  }

  return true;
};

module.exports = {
  checkIfPermutation,
};
