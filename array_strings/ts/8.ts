// O(n2)
const findZeros = (matrix: number[][]): Map<number, number> => {
  const hashTable = new Map<number, number>();
  for (let i = 0; i < matrix.length; i ++)  {
    for (let j = 0; j < matrix[i].length; j++) {
      if (!matrix[i][j]) hashTable.set(i, j);
    }
  }
  return hashTable
}

// O(n2)
const zeroMatrix = (matrix: number[][]) => {
  const hashTable = findZeros(matrix); // O(n2)
  for (const [key, value] of hashTable) { // O(m x n)
    for (let i = 0; i < matrix[key].length; i++) {  //set zeros on row
      matrix[key][i] = 0
    }
    for (let i = 0; i < matrix.length; i++) {
      matrix[i][value] = 0;
    }
  }
  return hashTable;
}

const matrix = [
  [1, 0, 3],
  [4, 5, 6],
  [7, 8, 9]
];

const input = [...matrix];

const expected = [
  [0, 0, 0],
  [2, 0, 8],
  [1, 0, 7]
];

console.log('input: ', input, 'expected: ', expected)
console.log('result: ', zeroMatrix(matrix))