/*
Call two arms equally strong if 
the heaviest weights they each are able to lift are equal.

Call two people equally strong 
if their strongest arms are equally strong 
(the strongest arm can be both the right and the left), 
and so are their weakest arms.

Given your and your friend's arms' lifting capabilities find out if you two are equally strong.
*/

function solution(yourLeft, yourRight, friendsLeft, friendsRight) {
  const yourStrongest = Math.max(yourLeft, yourRight);
  const yourWeakest = Math.min(yourLeft, yourRight);
  const friendsStrongest = Math.max(friendsLeft, friendsRight);
  const friendsWeakest = Math.min(friendsLeft, friendsRight);

  return yourStrongest === friendsStrongest && yourWeakest === friendsWeakest;
}
console.log(solution(10, 5, 15, 9));
console.log(solution(10, 15, 10, 15));
console.log(solution(10, 5, 5, 10));
