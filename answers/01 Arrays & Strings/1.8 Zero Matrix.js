// Zero Matrix: Write an algorithm such that if an element in an MxN matrix is
// 0, its entire row and column are set to O.


const zeroMatrix = function (matrix) {
  const changeValue = 'CHANGE THIS ONE'

  for (let r = 0; r < matrix.length; r++) {
    for (let c = 0; c < matrix[r].length; c++) {
      if (matrix[r][c]) continue;

      for (let row = r + 1; row < matrix.length; row++) {
        if (matrix[row][c] === 0) break;
        matrix[row][c] = changeValue;
      }

      for (let row = r - 1; row >= 0; row--) {
        if (matrix[row][c] === 0) break;
        matrix[row][c] = changeValue;
      }

      for (let col = c + 1; col < matrix[r].length; col++) {
        if (matrix[r][col] === 0) break;
        matrix[r][col] = changeValue;
      }

      for (let col = c - 1; col >= 0; col--) {
        if (matrix[r][col] === 0) break;
        matrix[r][col] = changeValue;
      }

    }
  }

  for (let r = 0; r < matrix.length; r++) {
    for (let c = 0; c < matrix[r].length; c++) {
      if (matrix[r][c] === changeValue) matrix[r][c] = 0;
    }
  }

  return matrix;
};

module.exports = {
  zeroMatrix,
};
