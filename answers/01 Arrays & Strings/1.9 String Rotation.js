// String Rotation: Assume you have a method isSubstring which checks if
// one word is asubstring of another. Given two strings, 51 and 52, write code to
// check if 52 is a rotation of 51 using only one call to
// isSubstring (e.g.,"waterbottle"is a rotation of"erbottlewat").

const isSubstring = (s1, s2) => s1.split(s2).length > 1;

const strRotation = function (s1, s2) {
  if (s1.length !== s2.length || s1.length == 0) return false;

  return isSubstring(s1 + s1, s2);
};

module.exports = {
  strRotation,
};
