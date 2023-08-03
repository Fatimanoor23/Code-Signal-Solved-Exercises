/*Given an array of integers,
 find the maximal absolute difference between
  any two of its adjacent elements.

Example

For inputArray = [2, 4, 1, 0], the output should be
solution(inputArray) = 3.
*/
function solution(inputArray) {
  diffArr = [];
  for (var i = 0; i < inputArray.length - 1; i++) {
    diff = Math.abs(inputArray[i] - inputArray[i + 1]);
    diffArr.push(diff);
  }
  return Math.max(...diffArr);
}
console.log(solution([2, 4, 1, 0]));
console.log(solution([1, 1, 1, 0]));
console.log(solution([0, 0, 0, 0]));
console.log(solution([2, 4, 5, 100]));
