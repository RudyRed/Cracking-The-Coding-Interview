// One Away: There are three types of edits that can be performed on strings:
// insert a character, remove a character, or replace a character.
// Given two strings, write a function to check if they are one edit (or zero edits)
// away.
// EXAMPLE
// pale, pIe -> true
// pales. pale -> true
// pale. bale -> true
// pale. bake -> false

const oneAway = function (s1, s2) {
  let endpoint = Math.min(s1.length, s2.length)

  for (let i = 0; i < endpoint; i++) {

    if (s1[i] !== s2[i]) {
      endpoint = i;
      break;
    }

  }

  for (let i = 1; Math.max(s1.length, s2.length) - i > endpoint; i++) {
    if (s1[s1.length - i] !== s2[s2.length - i]) return false;
  } // above for loop only runs if the original four loop hit a break

  return true;
};

module.exports = {
  oneAway,
};
