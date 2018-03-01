// Rotate Matrix: Given an image represented by an NxN matrix, where each pixel
// in the image is 4 bytes, write a method to rotate the image by 90 degrees.
// Can you do this in place?


const rotateMatrix = function (matrix) {
  const n = matrix.length;

  for (let startingRow = 0; startingRow < Math.floor(n / 2); startingRow++) {
    for (let startingCol = startingRow; startingCol < n - startingRow - 1; startingCol++) {

      // replace right with top
      let pendingInsert = matrix[startingCol][n - startingRow - 1];
      matrix[startingCol][n - startingRow - 1] = matrix[startingRow][startingCol];

      // replace bottom with right
      let tempHold = matrix[n - startingRow - 1][n - startingCol - 1];
      matrix[n - startingRow - 1][n - startingCol - 1] = pendingInsert;
      pendingInsert = tempHold;

      // replace left with bottom
      tempHold = matrix[n - startingCol - 1][startingRow];
      matrix[n - startingCol - 1][startingRow] = pendingInsert;
      pendingInsert = tempHold;

      // replace top with left
      matrix[startingRow][startingCol] = tempHold;

    }
  }

  return matrix;
};


module.exports = {
  rotateMatrix,
};
