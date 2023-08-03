function maskify(inputString) {
  //pass the string and return a string where all values are converted to # EXCEPT last 4 digits
  //check str length
  var len = inputString.length;
  strArray = Array.from(inputString);
  //if length is less than or equal 4 , return the string
  if (len <= 4) {
    return inputString;
    // else length is greater than 4, convert to # except last 4 digits
  } else {
    for (let i = 0; i < strArray.length - 4; i++) {
      strArray[i] = "#";
    }
    inputString = strArray.join("");
  }
  return inputString;
}
console.log(maskify("abcdjjsskks"));
console.log(maskify(""));
console.log(maskify("1234"));
console.log(maskify("123456789"));
