/*check Plindrom
For inputString = "aabaa", the output should be
solution(inputString) = true;
For inputString = "abac", the output should be
solution(inputString) = false;
For inputString = "a", the output should be
solution(inputString) = true.*/

function solution(inputString) {
  // Reverse the string, then join
  let reversedString = inputString.split("").reverse().join("");

  return inputString === reversedString;
}
console.log(solution("aabaa"));
console.log(solution("abac"));
console.log(solution("123"));
console.log(solution("abasdjd"));
console.log(solution("paap"));
