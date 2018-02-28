// String Compression: Implement a method to perform basic string compression using
// the counts of repeated characters. For example, the string aabcccccaaa would
// become a2b1c5a3. If the "compressed" string would not become smaller than the
// original string, your method should return the original string. You can assume
// the string has only uppercase and lowercase letters (a - z).

const strComp = function (str) {
  if (str.length < 3) return str;
  let compStr = '';
  let currLetterCount = 1;
  let currLetter = str[0];

  for (let i = 1; i < str.length; i++) {

    if (str[i] === currLetter) {
      currLetterCount++;
    } else {
      compStr += currLetter + currLetterCount;
      currLetterCount = 1;
      currLetter = str[i];
    }

  }
  compStr += currLetter + currLetterCount;

  return compStr.length < str.length ? compStr : str;
};

module.exports = {
  strComp,
};
