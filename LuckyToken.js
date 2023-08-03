/*Ticket numbers usually consist of an even number of digits. A ticket number is considered lucky if the sum of the first half of the digits is equal to the sum of the second half.

Given a ticket number n, determine if it's lucky or not.

Example

For n = 1230, the output should be
solution(n) = true;
For n = 239017, the output should be
solution(n) = false. */
function solution(n) {
  const ticketStr = n.toString();

  // Check if the number of digits is even
  if (ticketStr.length % 2 !== 0) {
    return false;
  }

  const halfLength = ticketStr.length / 2;
  let sumFirstHalf = 0;
  let sumSecondHalf = 0;

  // Calculate the sum of the first half and the second half of the ticket number
  for (let i = 0; i < ticketStr.length; i++) {
    const num = parseInt(ticketStr[i]);

    if (i < halfLength) {
    } else {
      sumSecondHalf += num;
    }
  }

  // Check if the sum of both halves is equal or not
  return sumFirstHalf === sumSecondHalf;
}

console.log(solution(1230));
console.log(solution(1234));
