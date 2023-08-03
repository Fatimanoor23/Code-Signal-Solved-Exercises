function solution(inputArray) {
  var max = inputArray[0];
  var arr = [max];
  for (let i = 1; i < inputArray.length; i++) {
    if (inputArray[i].length > max.length) {
      max = inputArray[i];
      arr = [max];
    } else if (inputArray[i].length === max.length) {
      //check if string length is same for both then push into the array
      arr.push(inputArray[i]);
    }
  }
  return arr;
}

console.log(solution(["abc", "a", "b", "abcs"]));
console.log(solution(["Spring", "dogo", "pinku", "abcs"]));
