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

// 8.1 Using hash table

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
const zeroMatrixWithHashTable = (matrix: number[][]) => {
  const hashTable = findZeros(matrix); // O(n2)
  for (const [key, value] of hashTable) { // O(m x n)
    for (let i = 0; i < matrix[key].length; i++) {  //set zeros on row
      matrix[key][i] = 0
    }
    for (let i = 0; i < matrix.length; i++) { //set zeros on columns
      matrix[i][value] = 0;
    }
  }
  return hashTable;
}
console.log('input: ', input, 'expected: ', expected)
console.log('result: ', zeroMatrixWithHashTable(matrix));


// 8.2 Using the matrix to store 0 data => space complexity O(1)

// O(n2)
const zeroMatrix = (matrix: Array<Array<number | Symbol>>) => {
  const flag = Symbol('hasZero');
  for (let i = 0; i < matrix.length; i++)  { // O(n2) - mark rows and columns
    for (let j = 0; j < matrix[i].length; j++) {
      if (!matrix[i][j]) {
        matrix[i][0] = flag;
        matrix[0][j] = flag;
      }
    }
  }
  for (let i = 0; i < matrix.length; i++) { //O(n2) set zeros on row
    if (matrix[i][0] === flag) {
      matrix[i][0] = 0;
      for (let j = 1; j < matrix[i].length; j++) {
        if (matrix[i][j] !== flag) matrix[i][j] = 0;
      }
    }
  }
  for (let i = 0; i < matrix.length; i++) { //O(n2) set zeros on columns
    if (matrix[0][i] === flag) {
      matrix[0][i] = 0;
      for (let j = 1; j < matrix[i].length; j++) {
        matrix[j][i] = 0;
      }
    }
  }
  return matrix;
}

console.log('input: ', input, 'expected: ', expected)
console.log('result: ', zeroMatrix(matrix));