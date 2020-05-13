
// O(n2)
const matrixRotate = (image: number[][]) => {
  const size = image.length;
  for (let i = 0; i < Math.floor(size/2); i++) { // O(n/2)
    for (let j = i; j < size - i - 1; j++) { // O(3n/2)
      const aux = image[i][j];
      image[i][j] = image[j][size - i - 1];
      image[j][size - i - 1] = image[size - i - 1][size - j - 1];
      image[size - i - 1][size - j - 1] = image[size - j - 1][i];
      image[size - j - 1][i] = aux;

    }
  }
  return image;
}

const image = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

const input = [...image];

const expected = [
  [3, 6, 9],
  [2, 5, 8],
  [1, 4, 7]
];

console.log('input: ', input, 'expected: ', expected)
console.log('result: ', matrixRotate(image))