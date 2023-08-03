/*Given a string, find out if its characters can be rearranged to form a palindrome.

Example

For inputString = "aabb", the output should be
solution(inputString) = true.

We can rearrange "aabb" to make "abba", which is a palindrome.
*/
function solution(inputString) {
  // Count the frequency of each character
  const charCount = {};
  for (let i = 0; i < inputString.length; i++) {
    const char = inputString[i];
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Check if there is at most one character with an odd count
  let oddCount = 0;
  for (const count of Object.values(charCount)) {
    if (count % 2 !== 0) {
      oddCount++;
    }
    if (oddCount > 1) {
      return false;
    }
  }
  return true;
}
// Test case
const inputString = "aabb";
console.log(solution(inputString));
