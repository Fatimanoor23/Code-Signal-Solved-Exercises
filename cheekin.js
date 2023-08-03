function isLucky(ticketNumber) {
  // Convert the ticket number to a string
  const ticketStr = ticketNumber.toString();

  // Check if the number of digits is even
  if (ticketStr.length % 2 !== 0) {
    return false;
  }

  const halfLength = ticketStr.length / 2;
  let sumFirstHalf = 0;
  let sumSecondHalf = 0;

  // Calculate the sum of the first half and the second half of the ticket number
  for (let i = 0; i < ticketStr.length; i++) {
    const digit = parseInt(ticketStr[i]);

    if (i < halfLength) {
      sumFirstHalf += digit;
    } else {
      sumSecondHalf += digit;
    }
  }

  // Check if the sum of both halves
  return sumFirstHalf === sumSecondHalf;
}

console.log(isLucky(1230)); // Output: true
console.log(isLucky(1234)); // Output: false
