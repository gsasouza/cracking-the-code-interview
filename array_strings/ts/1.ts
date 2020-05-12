/*O(n)*/
const isUniqueWithHashTable = (word: string) => {
  const hashTable: Record<string, boolean> = {};
  for (const character of word) {
    if (hashTable[character.toLocaleLowerCase()]) return false;
    hashTable[character.toLocaleLowerCase()] = true;
  }
  return true;
};

console.log('aa (false): ', isUniqueWithHashTable('aa'));
console.log('aA (false): ', isUniqueWithHashTable('aA'));
console.log('ab (true): ', isUniqueWithHashTable('ab'));
console.log('aba (false): ', isUniqueWithHashTable('aba'));
