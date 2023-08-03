/*Problem: Array Chunking
Write a function that takes an array and a chunk size as input 
and divides the array into multiple
 subarrays of the specified chunk size. 
 The last subarray may contain fewer elements if the total number of elements
  is not divisible by the chunk size.
Input: chunkArray([1, 2, 3, 4, 5], 2)
Output: [[1, 2], [3, 4], [5]]
Input: chunkArray([1, 2, 3, 4, 5, 6, 7, 8], 3)
Output: [[1, 2, 3], [4, 5, 6], [7, 8]]
*/
function solution(inputArray, chunkSize) {
  let subarray = [];
  //for every loop it increments according to chunksize
  for (let i = 0; i < inputArray.length; i += chunkSize) {
    //using slice method, starts from i  and ends on i+chunksize then push into subarrays
    const subArr = inputArray.slice(i, i + chunkSize);
    subarray.push(subArr);
  }
  return subarray;
}

console.log(solution([1, 2, 3, 4, 5, 6], 5));
console.log(solution([1, 2, 3, 4, 5, 6], 2));
console.log(solution([12, 34, 6, 6, 7, 6, 7, 8, 2], 3));
