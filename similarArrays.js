/*Two arrays are called similar if one can be obtained from another by swapping at most one pair of elements in one of the arrays.

Given two arrays a and b, check whether they are similar.

Example

For a = [1, 2, 3] and b = [1, 2, 3], the output should be
solution(a, b) = true.

The arrays are equal, no need to swap any elements.

For a = [1, 2, 3] and b = [2, 1, 3], the output should be
solution(a, b) = true.
*/
function solution(a, b) {
  if (a.length !== b.length) {
    return false;
  }
  var count = 0; //to keeep the check of no of times the different item in both arrays appear
  for (var i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      count++;
    }
  }

  return count === 0 || count === 2;
}
console.log(solution([1, 2, 3], [2, 1, 3]));
console.log(solution([1, 2, 3], [1, 2, 3]));
console.log(solution([1, 2, 3], [2, 1, 3]));
console.log(solution([1, 2, 3], [1, 2, 4]));
console.log(solution([1, 2, 3], [1, 2, 3, 5]));
