const stringCompression = (word: string) => {
  let lastCharacter = null;
  let count = 0;
  let compressedString = '';
  for (const character of word) {
    if (character === lastCharacter) count++;
    else {
      if (lastCharacter !== null) compressedString += `${lastCharacter}${count}`;
      count = 1;
      lastCharacter = character;
    }
  }
  compressedString += `${lastCharacter}${count}`;
  return compressedString.length < word.length ? compressedString : word;
}

console.log('aabcccccaaa (a2b1c5a3):', stringCompression('aabcccccaaa'));
console.log('abcde (abcde):', stringCompression('abcde'));