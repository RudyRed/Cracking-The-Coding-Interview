// Palinrome Permutation: Given a string, write a function to check if it is a
// permutation of a palin- drome. A palindrome is a word or phrase that is the
// same forwards and backwards. A permutation is a rearrangement of letters. The
// palindrome does not need to be limited to just dictionary words.
//
// EXAMPLE
// Input: Tact Coa
// Output: True (permutations: "taco cat". "atco cta". etc.)


const palinPerm = function (str) {
  const letterCount = {};

  for (let i = 0; i < str.length; i++) {
    const letter = str[i];
    if (letterCount[letter]) {
      letterCount[letter]++;
    } else {
      letterCount[letter] = 1;
    }
  }

  let oddValFlag = true; // if the string can handle an odd frequency letter

  if (str.length % 2 === 0) { // even length can not handle an odd frequency letter
    oddValFlag = false;
  }

  for (let letter in letterCount) {
    const frequency = letterCount[letter];

    if (frequency % 2) {
      if (oddValFlag) {
        oddValFlag = false;
      } else {
        return false;
      }
    }

  }

  return true;
};

module.exports = {
  palinPerm,
};
