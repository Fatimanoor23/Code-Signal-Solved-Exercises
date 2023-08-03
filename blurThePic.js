/*
Last night you partied a little too hard. 
Now there's a black and white photo of you that's about to go viral! You can't let this ruin your reputation, so you want to apply the box blur algorithm to the photo to hide its content.

The pixels in the input image are represented as integers. The algorithm distorts
 the input image in the following way:
  Every pixel x in the output image has a value equal to the 
  average value of the pixel values from the 3 × 3 square that has its center
   at x, including x itself. All the pixels on the border of x are then removed.

Return the blurred image as an integer, with the fractions rounded down.
Example
For
image = [[1, 1, 1], 
         [1, 7, 1], 
         [1, 1, 1]]
the output should be solution(image) = [[1]].
To get the value of the middle pixel in the input 3 × 3 square: (1 + 1 + 1 + 1 + 7 + 1 + 1 + 1 + 1) = 15 / 9 = 1.66666 = 1. 
The border pixels are cropped from the final result.
*/

function solution(image) {
  let rows = image.length;
  let cols = image[0].length;
  let blurredImage = [];

  for (let i = 0; i < rows - 2; i++) {
    let row = [];

    for (let j = 0; j < cols - 2; j++) {
      let sum = 0;
      let count = 0;

      for (let k = i; k < i + 3; k++) {
        for (let l = j; l < j + 3; l++) {
          sum += image[k][l];
          count++;
        }
      }
      //Every pixel x in the output image has a value equal to the
      //average value of the pixel values from the 3 × 3 square that has its center
      //at x, including x itself
      let average = Math.floor(sum / count);
      row.push(average);
    }

    blurredImage.push(row);
  }

  return blurredImage;
}

let image = [
  [1, 1, 1],
  [1, 7, 1],
  [1, 1, 1],
];

console.log(solution(image));
