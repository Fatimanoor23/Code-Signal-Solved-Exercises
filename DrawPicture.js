/*Given a rectangular matrix of characters, add a border of asterisks(*) to it.

Example

For

picture = ["abc",
           "ded"]
the output should be

solution(picture) = ["*****",
                     "*abc*",
                     "*ded*",
                     "*****"]
                     */
function solution(picture) {
  const rows = picture.length;
  const cols = picture[0].length;

  const borderedPicture = [];
  //drawing top border
  borderedPicture.push("*".repeat(cols + 2));
  // Add stars on both sides of each index item
  for (let i = 0; i < rows; i++) {
    const borderedRow = "*" + picture[i] + "*";
    borderedPicture.push(borderedRow);
  }
  // drawing bottom border
  borderedPicture.push("*".repeat(cols + 2));
  return borderedPicture;
}
const picture = ["abc", "ded"];
console.log(solution(picture));
