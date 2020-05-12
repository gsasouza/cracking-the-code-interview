/*O(n)*/
const checkPermutationWithHashTable = (word: string, word2: string): boolean => {
  let hashTable = new Map<string, number>();
  for (const character of word) hashTable.set(character, (hashTable.get(character) || 0) + 1);
  for (const character of word2) hashTable.set(character, (hashTable.get(character) || 0) - 1);
  for (const [key, value] of hashTable) {
    if (value !== 0) return false;
  }
  return true;
};

console.log('word, drow (true): ', checkPermutationWithHashTable('word', 'drow'));
console.log('word, diff (false): ', checkPermutationWithHashTable('word', 'diff'));