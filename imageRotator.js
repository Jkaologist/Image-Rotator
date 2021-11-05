/**
 * e.g.
 *
 * 1x1 [1] => [1]
 *
 * 2x2 [1, 2] => [3, 1]
 *     [3, 4] => [4, 2]
 *
 * 3x3 [1,2,3] => [7,4,1]
 *     [4,5,6] => [8,5,2]
 *     [7,8,9] => [9,6,3]
 *
 * matrixes look like [[1,2,3],[4,5,6],[7,8,9]]
 * outputs look like [[7,4,1],[8,5,2],[9,6,3]]
 *
 * another example input [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
 * and output [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]
 */
const rotate = (matrix) => {
  let dimensions = matrix.length;
  for (let i = 0; i < dimensions; i++) {
    for (let j = i; j < dimensions; j++) {
      [matrix[j][i], matrix[i][j]] = [matrix[i][j], matrix[j][i]];
    }
  }
  for (let i = 0; i < dimensions; i++) {
    for (let j = 0; j < dimensions / 2; j++) {
      [matrix[i][j], matrix[i][dimensions - j - 1]] = [
        matrix[i][dimensions - j - 1],
        matrix[i][j],
      ];
    }
  }
  //a matrix rotated 90 degrees clockwise in place
  return matrix;
};

console.log(
  rotate([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
