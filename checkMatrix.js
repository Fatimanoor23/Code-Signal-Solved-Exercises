/*After becoming famous, the CodeBots decided to move into a new building together. Each of the rooms has a different cost, and some of them are free, but there's a rumour that all the free rooms are haunted! Since the CodeBots are quite superstitious, they refuse to stay in any of the free rooms, or any of the rooms below any of the free rooms.

Given matrix, a rectangular matrix of integers, where each value represents the cost of the room, your task is to return the total sum of all rooms that are suitable for the CodeBots (ie: add up all the values that don't appear below a 0).

Example
For
matrix = [[0, 1, 1, 2], 
          [0, 5, 0, 0], 
          [2, 0, 3, 3]]
the output should be
solution(matrix) = 9. */

function solution(matrix) {
  var sum = 0;
  var rows = matrix.length; //check rows in a matrix
  var cols = matrix[0].length; //check columns in a matrix

  for (var j = 0; j < cols; j++) {
    for (var i = 0; i < rows; i++) {
      if (matrix[i][j] === 0 || (i > 0 && matrix[i - 1][j] === 0)) {
        break; //condition to check unsuitable rooms , 1st to find the value is 0 or not and after || it will check the prev row's col value is 0 or not
      }
      sum += matrix[i][j];
    }
  }

  return sum;
}

var matrix = [
  [0, 1, 1, 2],
  [0, 5, 0, 0],
  [2, 0, 3, 3],
];
console.log(solution(matrix));
