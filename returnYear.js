/*Given a year, return the century it is in. The first century spans from the year 1 up to and including the year 100, the second - from the year 101 up to and including the year 200, etc.

Example

For year = 1905, the output should be
solution(year) = 20;
For year = 1700, the output should be
solution(year) = 17. */

function solution(year) {
  var n;
  if (year <= 0) {
    return "0 and negative numbers are not allowed";
  } else if (year % 100 === 0) {
    n = year / 100;
    return n;
  } else {
    n = year / 100 + 1;
    return Math.trunc(n);
  }
}
console.log(solution(1905));
console.log(solution(3000));
console.log(solution(1050));
console.log(solution(1905));
console.log(solution(3000));
console.log(solution(1050));
