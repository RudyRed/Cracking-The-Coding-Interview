// Is Unique: Implement an algorithm to determine if a string has all unique characters.
// What if you cannot use additional data structures?

// Is Unique: Implement an algorithm to determine if a string has all unique characters.
// What if you cannot use additional data structures?

const isUnique = function (str) {

  for (let i = 0; i < str.length; i++) {
    if (str.lastIndexOf(str[i]) !== i) return false;
  }
  
  return true;
};

console.log(isUnique('qwertyuiopsdfgh'));
console.log(isUnique('wqertyuimt'));
