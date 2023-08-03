/*Write a function that reverses characters in (possibly nested) parentheses in the input string.

Input strings will always be well-formed with matching ()s.

Example

For inputString = "(bar)", the output should be
solution(inputString) = "rab";
For inputString = "foo(bar)baz", the output should be
solution(inputString) = "foorabbaz";
*/
//):
function solution(inputString) {
  let stack = [];
  let outputString = "";

  for (let i = 0; i < inputString.length; i++) {
    if (inputString[i] === "(") {
      stack.push(outputString);
      outputString = "";
    } else if (inputString[i] === ")") {
      outputString = stack.pop() + outputString.split("").reverse().join("");
    } else {
      outputString += inputString[i];
    }
  }

  return outputString;
}

console.log(solution("foobar(rab)"));
console.log(solution("(rab)"));
console.log(solution("BABY"));
