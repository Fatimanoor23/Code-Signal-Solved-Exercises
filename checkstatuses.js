/*Question: Ratiorg got statues of different sizes as a present from CodeMaster for his birthday, each statue having an non-negative integer size. Since he likes to make things perfect, he wants to arrange them from smallest to largest so that each statue will be bigger than the previous one exactly by 1. He may need some additional statues to be able to accomplish that. Help him figure out the minimum number of additional statues needed.

Example

For statues = [6, 2, 3, 8], the output should be
solution(status) = 3.

Ratiorg needs statues of sizes 4, 5 and 7.*/

function solution(status) {
  status.sort((a, b) => a - b); // Sort the array in ascending order by comparing the values of a  and b  and return the correct sorted numbers
  var add_status = 0;

  for (var i = 0; i < status.length - 1; i++) {
    var diff = status[i + 1] - status[i]; //difference tells the empty spaces between two numbers
    if (diff > 1) {
      add_status += diff - 1;
    }
  }

  return add_status;
}

console.log(solution([1, 2, 4, 2, 9, 5]));
console.log(solution([1, 2, 9, 4, 9, 5]));
console.log(solution([6, 2, 3, 8]));
console.log(solution([9, 10, 5, 3, 8]));
console.log(solution([9]));
console.log(solution([0, 3]));
console.log(solution([8, 1, 0, 4, 7]));
console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
