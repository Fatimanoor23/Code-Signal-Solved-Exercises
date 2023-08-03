/*Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

Example

For inputArray = [3, 6, -2, -5, 7, 3], the output should be
solution(inputArray) = 21.

7 and 3 produce the largest product.*/
function solution(inputArray) {
  var product;
  var max_product = inputArray[0] * inputArray[1];
  for (var i = 1; i < inputArray.length - 1; i++) {
    product = inputArray[i] * inputArray[i + 1];
    if (product > max_product) {
      max_product = product;
    }
  }
  return max_product;
}
console.log(solution[(1, 20, 3, 4, 6, 7, 8)]);
console.log(solution[(0, -1, -2, -3, 2, 4, 5, 10)]);
console.log(solution[(11.2, 3, 20, 27, 10.9, -1)]);
