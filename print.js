function printCounting(num) {
  let rows = 0;
  let count = 1;
  //Count the number of rows till that number
  while (count <= num) {
    rows++;
    count += rows;
  }

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

console.log(printCounting(21));
console.log(printCounting(15));
console.log(printCounting(64));
