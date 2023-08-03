/*Some people are standing in a row in a park. 
There are trees between them which cannot be moved. 
Your task is to rearrange the people by their heights 
in a non-descending order without moving the trees.
 People can be very tall!
Example

For a = [-1, 150, 190, 170, -1, -1, 160, 180], the output should be
solution(a) = [-1, 150, 160, 170, -1, -1, 180, 190].

 */
function solution(a) {
  var height = [];
  //lets traverse through the array push them in another array
  for (var i = 0; i < a.length; i++) {
    if (a[i] !== -1) {
      height.push(a[i]);
    }
  }
  height.sort((a, b) => a - b);
  //arrange people
  var setIndex = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== -1) {
      a[i] = height[setIndex];
      setIndex++;
    }
  }
  return a;
}
console.log(solution([-1, 150, 190, 170, -1, -1, 160, 180]));
