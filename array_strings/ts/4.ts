/* O(n) */
const palindromePermutation = (word: string) => {
  const hashTable = new Map(); // <character, character count>
  const hashTableCount = new Map(); // <character count, times that appears>
  let hasEven = false;

  for (const character of word)
    if (character !== ' ') hashTable.set(character.toLocaleLowerCase(), (hashTable.get(character.toLocaleLowerCase()) || 0) + 1);


  for (const [, value] of hashTable) hashTableCount.set(value, (hashTableCount.get(value) || 0) + 1);

  for (const [key, value] of hashTableCount) {
    if (key % 2 !== 0) { // check only even characters occurences
      if (key === 1 && value > 1)  return false; //one occurence should only appears once;
      if (value % 2 === 0 ) continue; // even characters occurences should only occurs 2n times;
      if (hasEven) return false; // even characters occurences that appears even times should only occurs once;
      hasEven = true;
    }
  }
  return true;
}

console.log('tact coa (true): ', palindromePermutation('tact coa'));
console.log('abc abc (true): ', palindromePermutation('abc abc'));
console.log('abc cba (true): ', palindromePermutation('abc cba'));
console.log('abcf dcba (false): ', palindromePermutation('abcf dcba'));
console.log('abcf fdcba (true): ', palindromePermutation('abcf fdcba'));
console.log('abcd efgh (false): ', palindromePermutation('abcd efgh'));