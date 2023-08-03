/*f you are giving a number n you have to print the numbers till that number in ascending order, e.g
Input:
   n= 21;
Output:
1	
2	3	
4	5	6	
7	8	9	10	
11	12	13	14	15	
16	17	18	19	20	21
*/
function printCounting(num) {
  let rows = 0;
  let count = 1;
  //Count the number of rows till that number
  while (count <= num) {
    rows++;
    count += rows;
  }
  //add all the numbers in output string.
  let output = "";
  count = 1;
  for (let i = 1; i <= rows; i++) {
    for (let j = 1; j <= i; j++) {
      output += count + " ";
      count++;
      if (count > num) {
        break;
      }
    }
    output += "\n";
    if (count > num) {
      break;
    }
  }
  return output;
}
console.log("Here is output");
console.log(printCounting(21));
console.log("Here is output");
console.log(printCounting(15));
console.log("Here is output");
console.log(printCounting(64));
