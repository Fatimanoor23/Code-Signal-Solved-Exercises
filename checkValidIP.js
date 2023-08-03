/*An IP address is a numerical label assigned to each device (e.g., computer, printer) participating in a computer network that uses the Internet Protocol for communication. There are two versions of the Internet protocol, and thus two versions of addresses. One of them is the IPv4 address.
Given a string, find out if it satisfies the IPv4 address
 naming rules.
Example
For inputString = "172.16.254.1", the output should be
solution(inputString) = true;
For inputString = "172.316.254.1", the output should be
solution(inputString) = false.
316 is not in range [0, 255].
For inputString = ".254.255.0", 
the output should be
solution(inputString) = false.
There is no first number.
*/
function solution(inputString) {
  //Input string is IP string
  //check if it confirms with the IP STRUCTURE using regular expression
  if (!/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/.test(inputString)) {
    return false;
  }
  //using split method and dot as a separator.
  let str = inputString.split(".");
  //return false if string length is not equal to 4
  if (str.length !== 4) {
    return false;
  }
  for (let i = 0; i < str.length; i++) {
    let num = parseInt(str[i]);
    //check if number is below 0 or above 255
    if (isNaN(num) || num < 0 || num > 255) {
      return false;
    }

    if (str[i].length > 1 && str[i][0] === "0") {
      return false;
    }
  }

  return true;
}

console.log(solution("19.23.90.172")); // true
console.log(solution("19.23.90.342")); // false
console.log(solution("255.255.255.255abcdekjhf")); //false
console.log(solution("255.255.255.255"));
console.log(solution("1.1.1.1a")); //false
