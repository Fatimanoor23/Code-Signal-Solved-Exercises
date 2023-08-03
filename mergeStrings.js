/* you are given word1 and word2 and merge the strings by adding letters
 in an alternative order starting from word1.

return the merged string.
for example if word1="abc" and word2="pqr" then mergedString="apbqcr"
if any word  length is more than other one , then add extra letter of longer 
word at the end of merged string.
*/
function solution(word1, word2) {
  //convert into substring of array
  let s1 = word1.split("");
  let s2 = word2.split("");
  let arr = [];
  //find max length of strings
  let maxLength = Math.max(s1.length, s2.length);

  for (let i = 0; i < maxLength; i++) {
    //check if current index is within bounds of word1's length , if yes then push
    if (i < s1.length) {
      arr.push(s1[i]);
    }
    //check if current index is within bounds of word2's length , if yes then push
    if (i < s2.length) {
      arr.push(s2[i]);
    }
  }
  //arr is joined to return the array as a single string
  let merged = arr.join("");
  return merged;
}

console.log(solution("abc", "pqr"));
console.log(solution("apbr", "no"));
console.log(solution("cool", "cool"));
