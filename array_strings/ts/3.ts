/* O(n) */
const URLify = (sentence: string) => {
  let hasSpaceBefore = false;
  let formattedWord = '';
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === ' ' && !hasSpaceBefore) hasSpaceBefore = true;
    if (sentence[i] !== ' ') {
      if (hasSpaceBefore) formattedWord += '%20';
      formattedWord += sentence[i];
      hasSpaceBefore = false;
    }
  }
  return formattedWord;
}

console.log('"abc   cde a" (abc%20cde%20a):', URLify('abc   cde a'));
console.log('"abc   cde a   " (abc%20cde%20a):', URLify('abc   cde a   '));