function solution(sequence) {
  var arr = checkArray(sequence);
  if (arr > 1) {
    return false;
  } else {
    return true;
  }
}

function checkArray(sequence) {
  var count = 0;
  for (var i = 0; i < sequence.length - 1; i++) {
    if (sequence[i + 1] <= sequence[i]) {
      count += 1;
    }
  }
  return count;
}

console.log(solution([3, 2, 4, 7, 5]));
console.log(solution([3, 2, 4, 5, 6]));
console.log(solution([1, 2, 3, 4, 5, 3, 5, 6]));
console.log(solution([1, 2, 1, 2]));
console.log(solution([1, 2, 3, 4, 5, 3, 5, 6]));
