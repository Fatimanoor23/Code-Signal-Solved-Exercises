/*
You are given an array of integers representing coordinates
 of obstacles situated on a straight line.Assume that you are 
 jumping 
 from the point with coordinate 0 to the right. 
 You are allowed only to make jumps of the same length 
 represented by some integer.
Find the minimal length of the jump enough to
 avoid all the obstacles.

*/
function solution(inputArray) {
  //input string of integers are given in any order, sort them out,
  //jumps should be of same length
  let maxCord = 0;
  //find max coordinate to jump across
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] > maxCord) {
      maxCord = inputArray[i];
    }
  }
  let jumpLength = 1;
  //jump length should not cross the maxCordinates
  while (jumpLength <= maxCord) {
    let isDivisible = false;
    //check if jump length is enough to cross all obstacles , if mod=0, then it is not enough and break, then we increment jump length by one
    for (let i = 0; i < inputArray.length; i++) {
      if (inputArray[i] % jumpLength === 0) {
        isDivisible = true;
        break;
      }
    }
    if (isDivisible) {
      jumpLength++;
    } else {
      break;
    }
  }

  return jumpLength;
}
console.log(solution([5, 3, 6, 9, 7]));
console.log(solution([1, 2, 3, 4, 5, 6]));
