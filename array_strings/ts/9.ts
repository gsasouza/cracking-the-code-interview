const isSubstring = (word: string, word2: string) => word.includes(word2); // O(n)

const stringRotation = (word: string, word2: string) => { // O(n)
  const doubledWord = word + word;
  return isSubstring(doubledWord, word2);
}

console.log('waterbottle, erbottlewat (true):', stringRotation('waterbottle', 'erbottlewat'));
console.log('waterbottle, erbottlewatf (false):', stringRotation('waterbottle', 'erbottlewatf'))