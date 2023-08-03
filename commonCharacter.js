/*Given two strings, find the number of common characters between them.

Example

For s1 = "aabcc" and s2 = "adcaa", the output should be
solution(s1, s2) = 3.

Strings have 3 common characters - 2 "a"s and 1 "c".*/

function solution(s1, s2) {
  var commonChar = "";
  var count;
  var a = s1.split("");
  var b = s2.split("");

  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
      if (a[i] == b[j]) {
        commonChar += a[i];
        b.splice(j, 1);
        count = commonChar.length;
        break;
      }
    }
  }

  if (commonChar.length === 0) {
    count = 0;
  }

  return count;
}

console.log(solution("aabcc", "adcaa"));
console.log(solution("Spring", "ring"));
console.log(solution("abc", "def"));
